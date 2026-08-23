// interfaz profesor/grupos-panel.js
// Controla la página "Mis Grupos": creación de grupos, listado, activar/
// desactivar, eliminar y ver resultados de cada grupo.

import { auth, db } from "../js/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import {
  crearGrupo,
  obtenerGruposDelProfesor,
  alternarEstadoGrupo,
  eliminarGrupo,
  obtenerResultadosDelGrupo
} from "../js/grupos.js";

const NOMBRE_JUEGO = {
  quiz: "🎮 Quiz de Lógica",
  puzzle: "🧩 Puzzle de Código"
};

let usuarioActual = null;
let usuarioNombre = "";

const form = document.getElementById("form-crear-grupo");
const listaGrupos = document.getElementById("lista-grupos");
const errorEl = document.getElementById("crear-grupo-error");
const exitoEl = document.getElementById("crear-grupo-exito");

const panelResultados = document.getElementById("panel-resultados");
const resultadosTitulo = document.getElementById("resultados-titulo");
const resultadosSub = document.getElementById("resultados-sub");
const resultadosContenido = document.getElementById("resultados-contenido");

function mostrarMensaje(el, texto) {
  el.textContent = texto;
  el.style.display = texto ? "block" : "none";
}

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

onAuthStateChanged(auth, async (user) => {
  if (!user) return; // guard.js ya redirige si no hay sesión
  usuarioActual = user;
  try {
    const snap = await getDoc(doc(db, "usuarios", user.uid));
    usuarioNombre = snap.exists() ? snap.data().username || user.email : user.email;
  } catch (err) {
    usuarioNombre = user.email;
  }
  await cargarGrupos();
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  mostrarMensaje(errorEl, "");
  mostrarMensaje(exitoEl, "");

  const nombre = document.getElementById("input-nombre").value;
  const juego = document.getElementById("select-juego").value;
  const btn = document.getElementById("btn-crear-grupo");
  btn.disabled = true;

  try {
    const { codigo } = await crearGrupo({
      profesorId: usuarioActual.uid,
      profesorNombre: usuarioNombre,
      nombre,
      juego
    });
    mostrarMensaje(exitoEl, `¡Grupo creado! Código para tus estudiantes: ${codigo}`);
    form.reset();
    await cargarGrupos();
  } catch (err) {
    mostrarMensaje(errorEl, err.message || "No se pudo crear el grupo.");
  } finally {
    btn.disabled = false;
  }
});

async function cargarGrupos() {
  listaGrupos.innerHTML = `<p class="estado-vacio">Cargando tus grupos...</p>`;
  let grupos = [];
  try {
    grupos = await obtenerGruposDelProfesor(usuarioActual.uid);
  } catch (err) {
    listaGrupos.innerHTML = `<p class="estado-vacio">No se pudieron cargar tus grupos.</p>`;
    return;
  }

  if (!grupos.length) {
    listaGrupos.innerHTML = `<p class="estado-vacio">Aún no has creado ningún grupo. Crea el primero arriba 👆</p>`;
    return;
  }

  listaGrupos.innerHTML = grupos
    .map(
      (g) => `
      <div class="grupo-card">
        <div class="grupo-header">
          <h3>${escapeHtml(g.nombre)}</h3>
          <span class="badge-juego ${g.activo ? "" : "badge-inactivo"}">
            ${g.activo ? "Activo" : "Inactivo"}
          </span>
        </div>
        <span class="badge-juego">${NOMBRE_JUEGO[g.juego] || g.juego}</span>
        <div class="grupo-codigo">${escapeHtml(g.codigo)}</div>
        <p class="grupo-meta">👥 ${(g.miembrosUids || []).length} estudiante(s) unido(s)</p>
        <div class="grupo-acciones">
          <button class="btn-secundario" data-accion="resultados" data-id="${g.id}" data-nombre="${escapeHtml(g.nombre)}">📊 Resultados</button>
          <button class="btn-secundario" data-accion="alternar" data-id="${g.id}" data-activo="${g.activo}">${g.activo ? "⏸️ Desactivar" : "▶️ Activar"}</button>
          <button class="btn-secundario" data-accion="eliminar" data-id="${g.id}">🗑️ Eliminar</button>
        </div>
      </div>`
    )
    .join("");

  listaGrupos.querySelectorAll("[data-accion]").forEach((btn) => {
    btn.addEventListener("click", () => manejarAccion(btn));
  });
}

async function manejarAccion(btn) {
  const accion = btn.dataset.accion;
  const grupoId = btn.dataset.id;

  if (accion === "resultados") {
    await mostrarResultados(grupoId, btn.dataset.nombre);
  } else if (accion === "alternar") {
    const activoActual = btn.dataset.activo === "true";
    btn.disabled = true;
    try {
      await alternarEstadoGrupo(grupoId, !activoActual);
      await cargarGrupos();
    } catch (err) {
      alert("No se pudo actualizar el grupo.");
      btn.disabled = false;
    }
  } else if (accion === "eliminar") {
    if (!confirm("¿Eliminar este grupo? Esta acción no se puede deshacer.")) return;
    btn.disabled = true;
    try {
      await eliminarGrupo(grupoId);
      await cargarGrupos();
    } catch (err) {
      alert("No se pudo eliminar el grupo.");
      btn.disabled = false;
    }
  }
}

async function mostrarResultados(grupoId, nombreGrupo) {
  resultadosTitulo.textContent = `Resultados — ${nombreGrupo}`;
  resultadosSub.textContent = "";
  resultadosContenido.innerHTML = `<p class="estado-vacio">Cargando resultados...</p>`;
  panelResultados.style.display = "block";
  panelResultados.scrollIntoView({ behavior: "smooth", block: "start" });

  try {
    const resultados = await obtenerResultadosDelGrupo(grupoId);
    if (!resultados.length) {
      resultadosContenido.innerHTML = `<p class="estado-vacio">Todavía nadie ha jugado en este grupo.</p>`;
      return;
    }
    resultadosContenido.innerHTML = `
      <table class="tabla-resultados">
        <thead>
          <tr><th>Estudiante</th><th>Puntaje</th><th>Porcentaje</th></tr>
        </thead>
        <tbody>
          ${resultados
            .map(
              (r) => `
              <tr>
                <td>${escapeHtml(r.username || "Estudiante")}</td>
                <td>${r.puntaje} / ${r.total}</td>
                <td>${r.porcentaje}%</td>
              </tr>`
            )
            .join("")}
        </tbody>
      </table>
    `;
  } catch (err) {
    resultadosContenido.innerHTML = `<p class="estado-vacio">No se pudieron cargar los resultados.</p>`;
  }
}

document.getElementById("btn-cerrar-resultados").addEventListener("click", () => {
  panelResultados.style.display = "none";
});
