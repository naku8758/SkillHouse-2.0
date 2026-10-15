// interfaz-estudiante/biblioteca-panel.js
// Muestra el historial completo de partidas jugadas por el estudiante
// (en todas sus clases) junto con un pequeño resumen de su progreso.

import { suscribirSesion } from "../js/sesion.js";
import { obtenerHistorialEstudiante } from "../js/grupos.js";
import { obtenerMateria, obtenerJuego } from "../js/catalogo.js";
import { notaDeResultado, promedioDeNotas, formatearNota } from "../js/nota.js";

const statsResumen = document.getElementById("stats-resumen");
const tablaHistorial = document.getElementById("tabla-historial");

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

// Si la clase se creó con un juego que ya no existe en el catálogo, se
// muestra su id en vez de un nombre equivocado.
function etiquetaJuego(juegoId) {
  const juego = obtenerJuego(juegoId);
  return juego ? `${juego.icono} ${juego.nombre}` : juegoId || "—";
}

function formatearFecha(timestamp) {
  if (!timestamp || !timestamp.seconds) return "—";
  return new Date(timestamp.seconds * 1000).toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

suscribirSesion("estudiante", (cuenta) => {
  if (!cuenta) return; // guard.js ya redirige si no hay sesión
  cargarHistorial(cuenta.uid);
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
        <tr><th>Fecha</th><th>Clase</th><th>Materia</th><th>Juego</th><th>Puntaje</th><th>%</th><th>Nota</th></tr>
      </thead>
      <tbody>
        ${historial
          .map(
            (r) => `
            <tr>
              <td>${formatearFecha(r.fecha)}</td>
              <td>${escapeHtml(r.nombreGrupo || "—")}</td>
              <td>${escapeHtml(obtenerMateria(r.materia)?.nombre || "—")}${r.curso ? ` · ${escapeHtml(r.curso)}` : ""}</td>
              <td>${escapeHtml(etiquetaJuego(r.juego))}</td>
              <td>${escapeHtml(r.puntaje ?? "—")} / ${escapeHtml(r.total ?? "—")}</td>
              <td>${escapeHtml(r.porcentaje ?? "—")}%</td>
              <td class="nota-celda">${formatearNota(notaDeResultado(r))}</td>
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
  // La nota definitiva es el promedio de las notas de cada partida, no el
  // promedio de porcentajes convertido después: así coincide con lo que ve el
  // profesor en "Mis clases".
  const nota = promedioDeNotas(historial.map((r) => notaDeResultado(r)));

  statsResumen.innerHTML = `
    <div class="stat-card"><div class="stat-valor">${total}</div><div class="stat-label">Partidas jugadas</div></div>
    <div class="stat-card"><div class="stat-valor">${nota == null ? "—" : formatearNota(nota)}</div><div class="stat-label">Nota definitiva (1 a 5)</div></div>
    <div class="stat-card"><div class="stat-valor">${total ? promedio + "%" : "—"}</div><div class="stat-label">Promedio general</div></div>
    <div class="stat-card"><div class="stat-valor">${total ? mejor + "%" : "—"}</div><div class="stat-label">Mejor puntaje</div></div>
  `;
}
