// interfaz-administrador/cursos.js
// Alta, listado y asignación de director de los cursos de la institución.

import { db } from "../js/firebase.js";
import { suscribirSesion } from "../js/sesion.js";
import { crearCurso, obtenerCursos, asignarDirector, eliminarCurso } from "../js/cursos.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const form = document.getElementById("form-crear-curso");
const lista = document.getElementById("lista-cursos");
const errorEl = document.getElementById("curso-error");
const exitoEl = document.getElementById("curso-exito");

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

form.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  mostrar(errorEl, "");
  mostrar(exitoEl, "");

  const codigo = document.getElementById("input-codigo").value.trim();
  const nombre = document.getElementById("input-nombre-curso").value.trim();
  const anio = Number(document.getElementById("input-anio").value);

  const btn = document.getElementById("btn-crear-curso");
  btn.disabled = true;
  try {
    const curso = await crearCurso({ codigo, nombre, anio });
    mostrar(exitoEl, `Curso ${curso.codigo} creado.`);
    form.reset();
    document.getElementById("input-anio").value = new Date().getFullYear();
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

  const filas = cursos
    .map((c) => {
      const nEst = estudiantes.filter((e) => e.curso === c.codigo).length;
      const nClases = grupos.filter((g) => g.curso === c.codigo).length;
      const opciones = [`<option value="">Sin director</option>`]
        .concat(
          directores.map(
            (p) => `<option value="${escapar(p.uid || p.id)}" ${c.directorUid === (p.uid || p.id) ? "selected" : ""}>${escapar(p.username)}</option>`
          )
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
          <button class="btn-secundario" data-borrar="${escapar(c.codigo)}" ${nEst || nClases ? "disabled title='Tiene estudiantes o clases'" : ""}>Borrar</button>
        </td>
      </tr>`;
    })
    .join("");

  lista.innerHTML = `
    <table class="tabla-resultados">
      <thead><tr><th>Código</th><th>Nombre</th><th>Año</th><th>Estudiantes</th><th>Clases</th><th>Director de curso</th><th></th></tr></thead>
      <tbody>${filas}</tbody>
    </table>`;

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
