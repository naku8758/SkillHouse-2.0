// interfaz-estudiante/panel-inicio.js
// Inicio del estudiante: las materias que existen en el catálogo, su curso
// real y su propio resumen de juego.

import { suscribirSesion } from "../js/sesion.js";
import { MATERIAS, materiasDelGrado, temasDelGrado } from "../js/catalogo.js";
import { gradoDeCurso } from "../js/malla.js";
import { clasesDelEstudiante, obtenerHistorialEstudiante } from "../js/grupos.js";
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

  // El estudiante ve las áreas que sí se dictan en su grado. Sin curso
  // asignado todavía (cuenta suelta) se muestran todas, para que la página
  // no quede en blanco y él entienda que falta el vinculo.
  const grado = gradoDeCurso(cuenta.datos.curso);
  const areas = grado ? materiasDelGrado(grado) : MATERIAS;

  document.getElementById("mis-materias").innerHTML = areas.map((materia) => {
    const temas = grado ? temasDelGrado(grado, { materiaId: materia.id }).length : 0;
    return tarjeta({
      href: `materia.html?m=${encodeURIComponent(materia.id)}`,
      icono: materia.icono,
      titulo: materia.nombre,
      etiqueta: grado ? `${temas} temas para ${grado}°` : "Juegos disponibles",
      color: materia.color
    });
  }).join("");

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
      clasesDelEstudiante({ uid: cuenta.uid, curso }),
      obtenerHistorialEstudiante(cuenta.uid)
    ]);
  } catch (err) {
    console.error("SkillHouse:", err);
    return;
  }

  const promedio = promedioDe(historial);
  const materiasConClases = new Set(grupos.map((g) => g.materia)).size;
  const promedioTexto = promedio == null ? "—" : `${promedio}%`;
  const nota = promedioDeNotas(historial.map((r) => notaDeResultado(r)));

  document.getElementById("resumen-inicio").style.display = "block";
  document.getElementById("stats-inicio").innerHTML = `
    <div class="stat-card"><div class="stat-valor">${grupos.length}</div><div class="stat-label">Clases de tu curso</div></div>
    <div class="stat-card"><div class="stat-valor">${materiasConClases}</div><div class="stat-label">Materias con clases</div></div>
    <div class="stat-card"><div class="stat-valor">${historial.length}</div><div class="stat-label">Partidas guardadas</div></div>
    <div class="stat-card"><div class="stat-valor">${nota == null ? "—" : formatearNota(nota)}</div><div class="stat-label">Nota definitiva (1 a 5)</div></div>
    <div class="stat-card"><div class="stat-valor">${promedioTexto}</div><div class="stat-label">Promedio general</div></div>`;
});
