// interfaz estudiante/mis-clases-panel.js
// Muestra las clases (grupos) a las que el estudiante pertenece, con el
// profesor que las creó y un acceso directo para jugar si siguen activas.

import { auth, db } from "../js/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { obtenerGruposDelEstudiante } from "../js/grupos.js";

const JUEGOS = {
  quiz: { icono: "🎮", nombre: "Quiz de Lógica" },
  puzzle: { icono: "🧩", nombre: "Puzzle de Código" },
  carrera: { icono: "🚀", nombre: "Carrera Espacial" }
};
const RUTA_JUEGO = {
  quiz: "../juegos/quiz.html",
  puzzle: "../juegos/puzzle.html",
  carrera: "../juegos/carrera.html"
};

const listaClases = document.getElementById("lista-clases");

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

function formatearFecha(timestamp) {
  if (!timestamp || !timestamp.seconds) return "";
  return new Date(timestamp.seconds * 1000).toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

onAuthStateChanged(auth, async (user) => {
  if (!user) return; // guard.js ya redirige si no hay sesión
  await cargarClases(user.uid);
});

async function cargarClases(uid) {
  listaClases.innerHTML = `<p class="estado-vacio">Cargando tus clases...</p>`;
  let grupos = [];
  try {
    grupos = await obtenerGruposDelEstudiante(uid);
  } catch (err) {
    listaClases.innerHTML = `<p class="estado-vacio">No se pudieron cargar tus clases.</p>`;
    return;
  }

  if (!grupos.length) {
    listaClases.innerHTML = `
      <p class="estado-vacio">
        Todavía no estás en ninguna clase. Pídele a tu profesor el código y únete desde
        <a href="juegos.html">Matemáticas → Juegos</a>.
      </p>`;
    return;
  }

  listaClases.innerHTML = grupos
    .map((g) => {
      const ruta = RUTA_JUEGO[g.juego] || "#";
      const juego = JUEGOS[g.juego] || { icono: "🎲", nombre: g.juego };
      return `
      <div class="grupo-card grupo-card--${g.juego}">
        <div class="grupo-header">
          <h3>${escapeHtml(g.nombre)}</h3>
          <span class="grupo-estado ${g.activo ? "grupo-estado--activo" : "grupo-estado--inactivo"}">
            <span class="dot"></span>${g.activo ? "Activa" : "Inactiva"}
          </span>
        </div>
        <span class="grupo-juego-label"><span class="grupo-juego-icono">${juego.icono}</span>${juego.nombre}</span>
        <p class="grupo-meta">Profesor(a): ${escapeHtml(g.profesorNombre || "Sin nombre")}</p>
        <p class="grupo-meta">Clase creada: ${formatearFecha(g.creadoEn) || "—"}</p>
        <div class="grupo-acciones">
          ${
            g.activo
              ? `<a class="btn-accion" style="text-decoration:none;" href="${ruta}?grupo=${g.id}">Jugar</a>`
              : ""
          }
        </div>
      </div>`;
    })
    .join("");
}
