// interfaz-profesor/notas-curso-panel.js
// El libro de notas de un curso: la tabla que el colegio pide al cierre del
// periodo. Cada fila es un estudiante matriculado en el curso y cada columna
// una clase mía en ese curso, con la nota definitiva al final.
//
// La lectura va por curso, no por estudiante: se leen el padrón, mis clases del
// curso y los resultados de cada clase, todo en paralelo. Por eso la materia es
// un filtro recomendado: en un grado con varias asignaturas propias, ver
// "todas" puede ser media centena de clases.

import { suscribirSesion } from "../js/sesion.js";
import { cursosDelProfesor } from "../js/cursos.js";
import { obtenerMateria, obtenerTema } from "../js/catalogo.js";
import { libroDelCurso, notaCelda } from "../js/libro-curso.js";
import { formatearNota } from "../js/nota.js";
import { descargarTexto } from "../js/lista-credenciales.js";

const PARAMETROS = new URLSearchParams(window.location.search);

const selectCurso = document.getElementById("select-curso-notas");
const selectMateria = document.getElementById("select-materia-notas");
const btnCargar = document.getElementById("btn-cargar-libro");
const btnDescargar = document.getElementById("btn-descargar-libro");
const avisoEl = document.getElementById("libro-aviso");
const errorEl = document.getElementById("libro-error");
const tituloEl = document.getElementById("libro-titulo");
const subEl = document.getElementById("libro-sub");
const resumenEl = document.getElementById("libro-resumen");
const contenidoEl = document.getElementById("libro-contenido");

let cuenta = null;
let cursos = [];
let ultimoLibro = null;

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

function decir(el, texto) {
  el.textContent = texto;
  el.style.display = texto ? "block" : "none";
}

function poblarCursos() {
  if (!cursos.length) {
    selectCurso.innerHTML = '<option value="">Sin cursos asignados</option>';
    selectCurso.disabled = true;
    return;
  }
  const elegido = PARAMETROS.get("c");
  selectCurso.innerHTML = cursos
    .map((c) => {
      const nombre = c.nombre && c.nombre !== `Grado ${c.codigo}`
        ? c.nombre
        : `Grado ${c.codigo}`;
      const sel = String(c.codigo) === String(elegido) ? " selected" : "";
      return `<option value="${escapar(c.codigo)}"${sel}>${escapar(c.codigo)} — ${escapar(nombre)}</option>`;
    })
    .join("");
  selectCurso.disabled = false;
}

function poblarMaterias() {
  const materias = (cuenta.datos.materias || [])
    .map((id) => obtenerMateria(id))
    .filter(Boolean);
  const elegida = PARAMETROS.get("m");
  selectMateria.innerHTML = `<option value="">Todas mis materias</option>` +
    materias
      .map((m) => `<option value="${escapar(m.id)}"${m.id === elegida ? " selected" : ""}>${escapar(m.icono)} ${escapar(m.nombre)}</option>`)
      .join("");
  if (!materias.length) {
    selectMateria.innerHTML = '<option value="">Sin materias asignadas</option>';
  }
}

/** Mis clases del curso, de la más vieja a la más nueva: así se lee un periodo. */
function clasesOrdenadas(libro) {
  return [...libro.clases].sort((a, b) => (a.creadoEn?.seconds || 0) - (b.creadoEn?.seconds || 0));
}

function encabezadoClase(grupo) {
  const tema = obtenerTema(grupo.tema);
  const titulo = `${grupo.nombre} · ${tema ? tema.nombre : "sin tema"}`;
  const nombre = String(grupo.nombre || "Clase");
  const corto = nombre.length > 16 ? `${nombre.slice(0, 15)}…` : nombre;
  return `<th title="${escapar(titulo)}">${escapar(corto)}</th>`;
}

function pintarResumen(libro) {
  const conJuego = libro.clases.filter((g) => (g.resumen?.partidas || 0) > 0).length;
  const tarjetas = [
    [libro.matriculados, "Matriculados en el curso"],
    [libro.clases.length, "Mis clases en el curso"],
    [conJuego, "Clases con partidas"],
    [libro.jugadas, "Estudiantes que han jugado"]
  ];
  resumenEl.innerHTML = tarjetas
    .map(([valor, etiqueta]) => `<div class="stat-card"><div class="stat-valor">${valor}</div><div class="stat-label">${escapar(etiqueta)}</div></div>`)
    .join("");
}

function pintarLibro(libro, codigo) {
  ultimoLibro = { libro, codigo };
  tituloEl.textContent = `Curso ${codigo}`;
  const materiaId = selectMateria.value;
  const nombreMateria = materiaId ? obtenerMateria(materiaId)?.nombre || materiaId : "";
  subEl.textContent = materiaId
    ? `${nombreMateria} · ${libro.clases.length} clase(s) tuya(s) en el curso`
    : `Todas tus materias en el curso · ${libro.clases.length} clase(s)`;

  pintarResumen(libro);

  if (!libro.clases.length) {
    const alcance = materiaId ? nombreMateria : "ninguna materia";
    contenidoEl.innerHTML = `<p class="estado-vacio">Todavía no has creado clases de ${escapar(alcance)} para el curso ${escapar(codigo)}. Créalas en Mis clases y vuelve aquí.</p>`;
    btnDescargar.disabled = true;
    return;
  }

  if (!libro.jugadas) {
    contenidoEl.innerHTML = `<p class="estado-vacio">Tienes ${libro.clases.length} clase(s) en este curso, pero nadie ha jugado todavía. En cuanto un estudiante juegue, su nota aparece aquí.</p>`;
    btnDescargar.disabled = true;
    return;
  }

  const clases = clasesOrdenadas(libro);
  const cuerpo = libro.filas.map((f) => {
    const jugo = f.partidas > 0;
    const nombre = escapar(f.nombre) + (jugo ? "" : ' <span class="grupo-meta">sin partidas</span>');
    const celdas = clases.map((g) => escapar(notaCelda(f.celdas.get(g.id))));
    const final = [
      nombre,
      ...celdas,
      String(f.partidas),
      jugo ? `${f.mejorPct}%` : "—",
      jugo ? `${f.promedioPct}%` : "—",
      `<span class="nota-celda">${escapar(jugo ? formatearNota(f.nota) : "—")}</span>`
    ];
    return `<tr>${final.map((td) => `<td>${td}</td>`).join("")}</tr>`;
  });

  contenidoEl.innerHTML = `
    <div class="tabla-envoltura">
      <table class="tabla-resultados">
        <thead>
          <tr>
            <th>Estudiante</th>
            ${clases.map(encabezadoClase).join("")}
            <th>Partidas</th>
            <th>Mejor %</th>
            <th>Promedio %</th>
            <th>Nota definitiva</th>
          </tr>
        </thead>
        <tbody>${cuerpo.join("")}</tbody>
      </table>
    </div>
    <p class="panel-sub" style="margin-top:10px;">Cada celda es el promedio de las partidas de ese estudiante en esa clase. Se leen hasta 300 partidas por clase, así que en una clase con muchísimas partidas la celda sale del más reciente.</p>`;

  if (clases.length > 8) {
    decir(avisoEl, `Estás viendo ${clases.length} clases del curso. Filtra por materia para que la tabla se lea mejor y cargue más rápido.`);
  } else {
    decir(avisoEl, "");
  }

  btnDescargar.disabled = false;
}

async function cargar() {
  const codigo = selectCurso.value;
  if (!codigo) {
    contenidoEl.innerHTML = '<p class="estado-vacio">Elige un curso para ver su libro de notas.</p>';
    resumenEl.innerHTML = "";
    btnDescargar.disabled = true;
    return;
  }

  decir(errorEl, "");
  decir(avisoEl, "");
  contenidoEl.innerHTML = `<p class="estado-vacio">Cargando el curso ${escapar(codigo)}...</p>`;
  btnCargar.disabled = true;

  try {
    const libro = await libroDelCurso({
      codigo,
      profesorId: cuenta.uid,
      materiaId: selectMateria.value
    });
    pintarLibro(libro, codigo);
  } catch (err) {
    console.error(err);
    contenidoEl.innerHTML = "";
    resumenEl.innerHTML = "";
    btnDescargar.disabled = true;
    decir(
      errorEl,
      err?.code === "permission-denied"
        ? "Firestore no dejó leer el curso. Solo puedes ver los grados que te asignó el administrador, y hace falta publicar firestore.rules."
        : err.message || "No se pudo cargar el libro de notas."
    );
  } finally {
    btnCargar.disabled = false;
  }
}

btnDescargar.addEventListener("click", () => {
  if (!ultimoLibro) return;
  const clases = clasesOrdenadas(ultimoLibro.libro);
  const entreComillas = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
  const cabecera = ["Estudiante", ...clases.map((g) => g.nombre), "Partidas", "Mejor %", "Promedio %", "Nota definitiva"];
  const filas = ultimoLibro.libro.filas.map((f) => [
    f.nombre,
    ...clases.map((g) => notaCelda(f.celdas.get(g.id))),
    f.partidas,
    f.partidas ? `${f.mejorPct}%` : "",
    f.partidas ? `${f.promedioPct}%` : "",
    f.partidas ? formatearNota(f.nota) : ""
  ]);
  const csv = [cabecera, ...filas].map((fila) => fila.map(entreComillas).join(",")).join("\r\n");

  const materia = selectMateria.value;
  const fecha = new Date().toISOString().slice(0, 10);
  const sufijo = materia ? `-${materia}` : "";
  descargarTexto(`skillhouse-notas-${selectCurso.value}${sufijo}-${fecha}.csv`, "" + csv);
});

selectCurso.addEventListener("change", cargar);
selectMateria.addEventListener("change", cargar);
btnCargar.addEventListener("click", cargar);

suscribirSesion("profesor", async (c) => {
  if (!c) return; // guard.js redirige
  cuenta = c;

  try {
    cursos = await cursosDelProfesor({
      uid: c.uid,
      esDirector: c.datos.tipoProfesor === "director",
      curso: c.datos.curso,
      grados: c.datos.grados
    });
  } catch (err) {
    console.error(err);
    cursos = [];
    decir(errorEl, "No se pudieron cargar tus cursos. Revisa la conexión y que firestore.rules esté publicado.");
  }

  poblarCursos();
  poblarMaterias();

  if (cursos.length) {
    cargar();
  } else {
    contenidoEl.innerHTML = '<p class="estado-vacio">El administrador todavía no te ha asignado grados con curso creado. Sin curso no hay libro de notas.</p>';
  }
});
