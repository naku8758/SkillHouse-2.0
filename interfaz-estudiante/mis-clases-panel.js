// interfaz-estudiante/mis-clases-panel.js
// Todas las clases del estudiante, sin filtrar por materia, con el curso y el
// profesor que creó cada una. Sirve de índice cuando ya tiene clases de varias
// asignaturas.

import { suscribirSesion } from "../js/sesion.js";
import { obtenerMateria, obtenerTema, obtenerJuego, rutaDeJuego } from "../js/catalogo.js";
import { obtenerGruposDelEstudiante } from "../js/grupos.js";

const listaClases = document.getElementById("lista-clases");

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

function formatearFecha(timestamp) {
  if (!timestamp?.seconds) return "";
  return new Date(timestamp.seconds * 1000).toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

suscribirSesion("estudiante", (cuenta) => {
  if (!cuenta) return; // guard.js ya redirigió
  cargarClases(cuenta.uid);
});

async function cargarClases(uid) {
  listaClases.innerHTML = `<p class="estado-vacio">Cargando tus clases...</p>`;

  let grupos;
  try {
    grupos = await obtenerGruposDelEstudiante(uid);
  } catch (err) {
    listaClases.innerHTML = `<p class="estado-vacio">No se pudieron cargar tus clases.</p>`;
    return;
  }

  if (!grupos.length) {
    listaClases.innerHTML = `
      <p class="estado-vacio">
        Todavía no estás en ninguna clase. Entra a la materia correspondiente desde
        <a href="homepagea.html">Materias</a> e ingresa el código que te dio tu profesor.
      </p>`;
    return;
  }

  listaClases.innerHTML = grupos
    .map((g) => {
      const tema = obtenerTema(g.materia, g.tema);
      const materia = obtenerMateria(g.materia);
      const juego = obtenerJuego(g.juego);

      return `
      <div class="grupo-card grupo-card--${escapeHtml(g.juego)}">
        <div class="grupo-header">
          <h3>${escapeHtml(g.nombre)}</h3>
          <span class="grupo-estado ${g.activo ? "grupo-estado--activo" : "grupo-estado--inactivo"}">
            <span class="dot"></span>${g.activo ? "Activa" : "Inactiva"}
          </span>
        </div>
        <span class="grupo-juego-label"><span class="grupo-juego-icono">${juego?.icono || "🎲"}</span>${escapeHtml(juego?.nombre || g.juego || "Juego")}</span>
        <p class="grupo-meta">${escapeHtml(materia?.nombre || "Materia")} · Curso ${escapeHtml(g.curso || "—")} · Dificultad ${g.dificultad || "—"}</p>
        <p class="grupo-meta">Profesor(a): ${escapeHtml(g.profesorNombre || "Sin nombre")}</p>
        <p class="grupo-meta">Clase creada: ${formatearFecha(g.creadoEn) || "—"} · Tema: ${escapeHtml(tema?.nombre || "Sin tema")}</p>
        <div class="grupo-acciones">
          ${
            g.activo && juego
              ? `<a class="btn-accion" style="text-decoration:none;" href="${rutaDeJuego(g.juego, "../")}?grupo=${encodeURIComponent(g.id)}&m=${encodeURIComponent(g.materia || "")}">Jugar</a>`
              : `<span class="grupo-meta">Esta clase ya no está activa.</span>`
          }
        </div>
      </div>`;
    })
    .join("");
}
