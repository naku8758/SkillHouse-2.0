// interfaz estudiante/biblioteca-panel.js
// Muestra el historial completo de partidas jugadas por el estudiante
// (en todas sus clases) junto con un pequeño resumen de su progreso.

import { auth } from "../js/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { obtenerHistorialEstudiante } from "../js/grupos.js";

const NOMBRE_JUEGO = {
  quiz: "🎮 Quiz de Lógica",
  puzzle: "🧩 Puzzle de Código",
  carrera: "🚀 Carrera Espacial"
};

const statsResumen = document.getElementById("stats-resumen");
const tablaHistorial = document.getElementById("tabla-historial");

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

function formatearFecha(timestamp) {
  if (!timestamp || !timestamp.seconds) return "—";
  return new Date(timestamp.seconds * 1000).toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

onAuthStateChanged(auth, async (user) => {
  if (!user) return; // guard.js ya redirige si no hay sesión
  await cargarHistorial(user.uid);
});

async function cargarHistorial(uid) {
  tablaHistorial.innerHTML = `<p class="estado-vacio">Cargando tu historial...</p>`;
  let historial = [];
  try {
    historial = await obtenerHistorialEstudiante(uid);
  } catch (err) {
    tablaHistorial.innerHTML = `<p class="estado-vacio">No se pudo cargar tu historial.</p>`;
    return;
  }

  renderResumen(historial);

  if (!historial.length) {
    tablaHistorial.innerHTML = `<p class="estado-vacio">Todavía no has jugado ninguna partida dentro de una clase. ¡Únete a una clase y juega para ver tu progreso aquí!</p>`;
    return;
  }

  tablaHistorial.innerHTML = `
    <table class="tabla-resultados">
      <thead>
        <tr><th>Fecha</th><th>Clase</th><th>Juego</th><th>Puntaje</th><th>%</th></tr>
      </thead>
      <tbody>
        ${historial
          .map(
            (r) => `
            <tr>
              <td>${formatearFecha(r.fecha)}</td>
              <td>${escapeHtml(r.nombreGrupo || "—")}</td>
              <td>${NOMBRE_JUEGO[r.juego] || r.juego}</td>
              <td>${r.puntaje} / ${r.total}</td>
              <td>${r.porcentaje}%</td>
            </tr>`
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function renderResumen(historial) {
  const total = historial.length;
  const promedio = total
    ? Math.round(historial.reduce((suma, r) => suma + (r.porcentaje || 0), 0) / total)
    : 0;
  const mejor = total ? Math.max(...historial.map((r) => r.porcentaje || 0)) : 0;

  statsResumen.innerHTML = `
    <div class="stat-card"><div class="stat-valor">${total}</div><div class="stat-label">Partidas jugadas</div></div>
    <div class="stat-card"><div class="stat-valor">${total ? promedio + "%" : "—"}</div><div class="stat-label">Promedio general</div></div>
    <div class="stat-card"><div class="stat-valor">${total ? mejor + "%" : "—"}</div><div class="stat-label">Mejor puntaje</div></div>
  `;
}
