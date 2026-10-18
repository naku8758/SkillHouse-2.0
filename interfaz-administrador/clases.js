// interfaz-administrador/clases.js
// Inventario de todas las clases (grupos) de la plataforma, con filtros.

import { db } from "../js/firebase.js";
import { suscribirSesion } from "../js/sesion.js";
import { MATERIAS, obtenerMateria, obtenerTema, obtenerJuego } from "../js/catalogo.js";
import { obtenerCursos } from "../js/cursos.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";



const contenedor = document.getElementById("lista-clases-admin");
const filtroMateria = document.getElementById("filtro-materia");
const filtroCurso = document.getElementById("filtro-curso");
const filtroEstado = document.getElementById("filtro-estado");
const filtroBuscar = document.getElementById("filtro-buscar");

let clases = [];

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

function etiquetaJuego(juegoId) {
  const juego = obtenerJuego(juegoId);
  return juego ? `${juego.icono} ${juego.nombreCorto}` : juegoId || "—";
}

function formatearFecha(timestamp) {
  if (!timestamp || !timestamp.seconds) return "—";
  return new Date(timestamp.seconds * 1000).toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

function renderizar() {
  const materia = filtroMateria.value;
  const curso = filtroCurso.value;
  const estado = filtroEstado.value;
  const buscar = filtroBuscar.value.trim().toLowerCase();

  const visibles = clases.filter((g) => {
    if (materia && g.materia !== materia) return false;
    if (curso && g.curso !== curso) return false;
    if (estado === "activos" && !g.activo) return false;
    if (estado === "inactivos" && g.activo) return false;
    if (buscar) {
      const texto = `${g.nombre} ${g.codigo} ${g.profesorNombre}`.toLowerCase();
      if (!texto.includes(buscar)) return false;
    }
    return true;
  });

  document.getElementById("titulo-clases").textContent =
    `Clases (${visibles.length}${visibles.length !== clases.length ? ` de ${clases.length}` : ""})`;

  if (!visibles.length) {
    contenedor.innerHTML = `<p class="estado-vacio">${clases.length ? "Ninguna clase coincide con el filtro." : "Todavía no hay clases creadas."}</p>`;
    return;
  }

  contenedor.innerHTML = `
    <table class="tabla-resultados">
      <thead>
        <tr><th>Clase</th><th>Código</th><th>Materia</th><th>Curso</th><th>Tema</th><th>Juego</th><th>Profesor</th><th>Estudiantes</th><th>Estado</th><th>Creada</th></tr>
      </thead>
      <tbody>
        ${visibles
          .map((g) => {
            const tema = obtenerTema(g.tema);
            return `
            <tr>
              <td>${escapar(g.nombre)}</td>
              <td><code>${escapar(g.codigo)}</code></td>
              <td>${escapar(obtenerMateria(g.materia)?.nombre || g.materia || "—")}</td>
              <td>${escapar(g.curso || "—")}</td>
              <td>${escapar(tema?.nombre || "—")}</td>
              <td>${escapar(etiquetaJuego(g.juego))}</td>
              <td>${escapar(g.profesorNombre || "—")}</td>
              <td>${(g.miembrosUids || []).length}</td>
              <td>${g.activo ? "Activa" : "Inactiva"}</td>
              <td>${formatearFecha(g.creadoEn)}</td>
            </tr>`;
          })
          .join("")}
      </tbody>
    </table>`;
}

async function cargar() {
  contenedor.innerHTML = `<p class="estado-vacio">Cargando clases...</p>`;
  try {
    const [snap, cursos] = await Promise.all([
      getDocs(collection(db, "grupos")),
      obtenerCursos()
    ]);

    clases = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    clases.sort((a, b) => (b.creadoEn?.seconds || 0) - (a.creadoEn?.seconds || 0));

    filtroMateria.innerHTML =
      `<option value="">Todas</option>` +
      MATERIAS.map((m) => `<option value="${escapar(m.id)}">${escapar(m.nombre)}</option>`).join("");

    filtroCurso.innerHTML =
      `<option value="">Todos</option>` +
      cursos.map((c) => `<option value="${escapar(c.codigo)}">${escapar(c.codigo)}</option>`).join("");

    renderizar();
  } catch (err) {
    console.error(err);
    contenedor.innerHTML = `<p class="estado-vacio">No se pudieron cargar las clases.</p>`;
  }
}

[filtroMateria, filtroCurso, filtroEstado].forEach((el) => el.addEventListener("change", renderizar));
filtroBuscar.addEventListener("input", renderizar);

suscribirSesion("administrador", (cuenta) => {
  if (!cuenta) return;
  cargar();
});
