// interfaz-estudiante/panel-inicio.js
// Inicio del estudiante: las materias que existen en el catálogo, su curso
// real y su propio resumen de juego.

import { suscribirSesion } from "../js/sesion.js";
import { MATERIAS, MATERIAS_PROXIMAS } from "../js/catalogo.js";
import { obtenerGruposDelEstudiante, obtenerHistorialEstudiante } from "../js/grupos.js";
import { notaDeResultado, promedioDeNotas, formatearNota } from "../js/nota.js";

function tarjeta({ href, icono, titulo, etiqueta, color }) {
  return `
    <a href="${href}" class="materia-card ${color}">
      <h3>${icono} ${titulo}</h3>
      <span class="materia-tag">🎮 ${etiqueta}</span>
    </a>`;
}

function promedioDe(historial) {
  if (!historial.length) return null;
  const suma = historial.reduce((acc, r) => acc + (Number(r.porcentaje) || 0), 0);
  return Math.round(suma / historial.length);
}

suscribirSesion("estudiante", async (cuenta) => {
  if (!cuenta) return; // guard.js redirige

  document.getElementById("mis-materias").innerHTML = MATERIAS.map((materia) =>
    tarjeta({
      href: `materia.html?m=${encodeURIComponent(materia.id)}`,
      icono: materia.icono,
      titulo: materia.nombre,
      etiqueta: "Juegos disponibles",
      color: materia.color
    })
  ).join("");

  document.getElementById("materias-proximas").innerHTML = MATERIAS_PROXIMAS.map(
    (materia) => `
      <div class="materia-card ${materia.color} materia-card--proximamente">
        <h3>${materia.icono} ${materia.nombre}</h3>
        <span class="materia-tag">Próximamente</span>
      </div>`
  ).join("");

  // `creadoPorNombre` es quien creó la cuenta, que puede ser el director o el
  // administrador: llamarlo "director(a) de curso" le decía al estudiante que
  // su director era la persona equivocada cuando lo había matriculado el admin.
  const curso = cuenta.datos.curso;
  document.getElementById("curso-alumno").textContent = curso
    ? `Curso ${curso} · tu cuenta la creó ${cuenta.datos.creadoPorNombre || "el administrador"}`
    : "Pídele a tu director de curso o al administrador que te cree la cuenta: así quedas vinculado(a) a tu grado.";

  let grupos = [];
  let historial = [];
  try {
    [grupos, historial] = await Promise.all([
      obtenerGruposDelEstudiante(cuenta.uid),
      obtenerHistorialEstudiante(cuenta.uid)
    ]);
  } catch (err) {
    console.error("SkillHouse (resumen del estudiante):", err);
    return;
  }

  const promedio = promedioDe(historial);
  const materiasConClases = new Set(grupos.map((g) => g.materia)).size;
  const promedioTexto = promedio == null ? "—" : `${promedio}%`;
  const nota = promedioDeNotas(historial.map((r) => notaDeResultado(r)));

  document.getElementById("resumen-inicio").style.display = "block";
  document.getElementById("stats-inicio").innerHTML = `
    <div class="stat-card"><div class="stat-valor">${grupos.length}</div><div class="stat-label">Clases activas</div></div>
    <div class="stat-card"><div class="stat-valor">${materiasConClases}</div><div class="stat-label">Materias con clases</div></div>
    <div class="stat-card"><div class="stat-valor">${historial.length}</div><div class="stat-label">Partidas guardadas</div></div>
    <div class="stat-card"><div class="stat-valor">${nota == null ? "—" : formatearNota(nota)}</div><div class="stat-label">Nota definitiva (1 a 5)</div></div>
    <div class="stat-card"><div class="stat-valor">${promedioTexto}</div><div class="stat-label">Promedio general</div></div>`;
});
