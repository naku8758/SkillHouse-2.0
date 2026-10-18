// interfaz-administrador/cursos.js
// Alta, listado y asignación de director de los cursos de la institución.

import { db } from "../js/firebase.js";
import { suscribirSesion } from "../js/sesion.js";
import { crearCurso, obtenerCursos, asignarDirector, eliminarCurso, codigoDeCurso } from "../js/cursos.js";
import { copiarAlPortapapeles } from "../js/lista-credenciales.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { gradoDeCurso } from "../js/malla.js";

const form = document.getElementById("form-crear-curso");
const lista = document.getElementById("lista-cursos");
const errorEl = document.getElementById("curso-error");
const exitoEl = document.getElementById("curso-exito");
const inputGrado = document.getElementById("input-grado");
const inputGrupo = document.getElementById("input-grupo");
const vistoCodigo = document.getElementById("texto-codigo-curso");

function mostrar(el, texto) {
  el.textContent = texto;
  el.style.display = texto ? "block" : "none";
}

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

document.getElementById("input-anio").value = new Date().getFullYear();

// Como se lee cada grado en el listado. El código (601) es lo que usa el
// sistema; el nombre es lo que el administrador tiene en la cabeza.
const ORDINALES = {
  1: "Primero", 2: "Segundo", 3: "Tercero", 4: "Cuarto", 5: "Quinto",
  6: "Sexto", 7: "Séptimo", 8: "Octavo", 9: "Noveno", 10: "Décimo", 11: "Undécimo"
};

function filaCurso(c, nEst, nClases, directores) {
  const opciones = [`<option value="">Sin director</option>`]
    .concat(
      directores.map((p) => {
        const id = p.uid || p.id;
        // Si ya dirige otro curso se avisa en el texto: al elegarlo, ese
        // otro curso queda sin director (lo hace asignarDirector en el
        // mismo lote), y eso no debe sorprender después.
        const otro = p.curso && p.curso !== c.codigo ? ` · dirige ${escapar(p.curso)}` : "";
        return `<option value="${escapar(id)}" ${c.directorUid === id ? "selected" : ""}>${escapar(p.username)}${otro}</option>`;
      })
    )
    .join("");

  return `
    <tr>
      <td><strong>${escapar(c.codigo)}</strong></td>
      <td>${escapar(c.nombre)}</td>
      <td>${escapar(c.anio || "")}</td>
      <td>${nEst}</td>
      <td>${nClases}</td>
      <td>
        <select data-director="${escapar(c.codigo)}" ${directores.length ? "" : "disabled"}>${opciones}</select>
      </td>
      <td>
        <button class="btn-secundario" data-copiar="${escapar(c.codigo)}" title="Copiar el código para pasarlo al director">Copiar código</button>
      </td>
      <td>
        <button class="btn-secundario" data-borrar="${escapar(c.codigo)}" ${nEst || nClases ? "disabled title='Tiene estudiantes o clases'" : ""}>Borrar</button>
      </td>
    </tr>`;
}

// El código se ve mientras se escribe para que el administrador sepa de antemano
// qué curso va a quedar creado (y cuál le va a decir al director).
function actualizarVistoCodigo() {
  vistoCodigo.textContent = codigoDeCurso(inputGrado.value, inputGrupo.value) || "—";
}
[inputGrado, inputGrupo].forEach((el) => el.addEventListener("input", actualizarVistoCodigo));
actualizarVistoCodigo();

form.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  mostrar(errorEl, "");
  mostrar(exitoEl, "");

  const grado = inputGrado.value.trim();
  const grupo = inputGrupo.value.trim().toUpperCase();
  const anio = Number(document.getElementById("input-anio").value);

  const btn = document.getElementById("btn-crear-curso");
  btn.disabled = true;
  try {
    const curso = await crearCurso({ grado, grupo, anio });
    mostrar(exitoEl, `Curso ${curso.codigo} creado — ${curso.nombre}, año ${curso.anio}.`);
    form.reset();
    document.getElementById("input-anio").value = new Date().getFullYear();
    actualizarVistoCodigo();
    await cargar();
  } catch (err) {
    console.error(err);
    mostrar(errorEl, err.message || "No se pudo crear el curso.");
  } finally {
    btn.disabled = false;
  }
});

async function cargar() {
  lista.innerHTML = `<p class="estado-vacio">Cargando cursos...</p>`;

  let cursos = [];
  let profesores = [];
  let estudiantes = [];
  let grupos = [];

  try {
    [cursos, profesores, estudiantes, grupos] = await Promise.all([
      obtenerCursos(),
      getDocs(collection(db, "profesores")).then((s) => s.docs.map((d) => ({ id: d.id, ...d.data() }))),
      getDocs(collection(db, "estudiantes")).then((s) => s.docs.map((d) => d.data())),
      getDocs(collection(db, "grupos")).then((s) => s.docs.map((d) => d.data()))
    ]);
  } catch (err) {
    console.error(err);
    lista.innerHTML = `<p class="estado-vacio">No se pudieron cargar los cursos.</p>`;
    return;
  }

  const directores = profesores.filter((p) => p.tipoProfesor === "director");

  document.getElementById("titulo-cursos").textContent = `Cursos (${cursos.length})`;

  if (!cursos.length) {
    lista.innerHTML = `<p class="estado-vacio">Todavía no hay cursos. Crea el primero arriba: sin cursos no se pueden dar de alta estudiantes.</p>`;
    return;
  }

  const conConteo = cursos.map((c) => ({
    c,
    nEst: estudiantes.filter((e) => e.curso === c.codigo).length,
    nClases: grupos.filter((g) => g.curso === c.codigo).length
  }));

  // Un bloque por grado, en el orden 1° a 11°, igual que en el padrón de
  // usuarios: quien entra aquí busca "los cursos de sexto", no la novena fila
  // de una tabla. Los códigos que no se dejan leer como grado (un curso
  // renombrado a mano en la consola) cierran el listado en vez de desaparecer.
  const porGrado = new Map();
  conConteo.forEach((x) => {
    const grado = gradoDeCurso(x.c.codigo) || "otros";
    if (!porGrado.has(grado)) porGrado.set(grado, []);
    porGrado.get(grado).push(x);
  });

  const bloques = [...Object.keys(ORDINALES).map(Number), "otros"].filter((g) => porGrado.has(g));

  lista.innerHTML = bloques
    .map((grado) => {
      const filas = porGrado.get(grado);
      const titulo =
        grado === "otros" ? "Otros códigos" : `Grado ${grado}° · ${ORDINALES[grado]}`;
      const totalEst = filas.reduce((n, x) => n + x.nEst, 0);
      const meta = `${filas.length} curso${filas.length === 1 ? "" : "s"} · ${totalEst} estudiante${
        totalEst === 1 ? "" : "s"
      }`;

      return `
      <div class="padron-bloque">
        <h3 class="padron-titulo">${escapar(titulo)}<span class="padron-conteo">${escapar(meta)}</span></h3>
        <div class="tabla-envoltura">
          <table class="tabla-resultados">
            <thead><tr><th>Código</th><th>Nombre</th><th>Año</th><th>Estudiantes</th><th>Clases</th><th>Director de curso</th><th></th><th></th></tr></thead>
            <tbody>${filas.map((x) => filaCurso(x.c, x.nEst, x.nClases, directores)).join("")}</tbody>
          </table>
        </div>
      </div>`;
    })
    .join("");

  lista.querySelectorAll("[data-director]").forEach((select) => {
    select.addEventListener("change", async () => {
      const codigo = select.dataset.director;
      const uid = select.value;
      const profesor = directores.find((p) => (p.uid || p.id) === uid);
      select.disabled = true;
      try {
        await asignarDirector({ codigo, uid, nombre: profesor?.username || "" });
        await cargar();
      } catch (err) {
        console.error(err);
        mostrar(errorEl, "No se pudo asignar el director.");
        select.disabled = false;
      }
    });
  });

  lista.querySelectorAll("[data-copiar]").forEach((btn) => {
    btn.addEventListener("click", () => {
      copiarAlPortapapeles(`Curso ${btn.dataset.copiar}`, btn);
    });
  });

  lista.querySelectorAll("[data-borrar]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const codigo = btn.dataset.borrar;
      if (!confirm(`¿Borrar el curso ${codigo}?`)) return;
      btn.disabled = true;
      try {
        await eliminarCurso(codigo);
        await cargar();
      } catch (err) {
        console.error(err);
        mostrar(errorEl, err.message || "No se pudo borrar el curso.");
        btn.disabled = false;
      }
    });
  });
}

suscribirSesion("administrador", (cuenta) => {
  if (!cuenta) return;
  cargar();
});
