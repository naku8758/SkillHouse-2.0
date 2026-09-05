// interfaz estudiante/perfil-panel.js
// Muestra los datos básicos del estudiante, un resumen de su actividad
// (clases, partidas, promedio) y un vistazo rápido a sus clases.

import { auth, db } from "../js/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { obtenerGruposDelEstudiante, obtenerHistorialEstudiante } from "../js/grupos.js";

const JUEGOS = {
  quiz: { icono: "🎮", nombre: "Quiz de Lógica" },
  puzzle: { icono: "🧩", nombre: "Puzzle de Código" },
  carrera: { icono: "🚀", nombre: "Carrera Espacial" }
};

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

function iniciales(nombre) {
  const partes = (nombre || "").trim().split(/\s+/).filter(Boolean);
  if (!partes.length) return "?";
  const primera = partes[0][0] || "";
  const segunda = partes.length > 1 ? partes[1][0] : "";
  return (primera + segunda).toUpperCase();
}

function formatearFecha(timestamp) {
  if (!timestamp || !timestamp.seconds) return null;
  return new Date(timestamp.seconds * 1000).toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

onAuthStateChanged(auth, async (user) => {
  if (!user) return; // guard.js ya redirige si no hay sesión

  let datos = null;
  try {
    const snap = await getDoc(doc(db, "estudiantes", user.uid));
    datos = snap.exists() ? snap.data() : null;
  } catch (err) {
    datos = null;
  }

  const nombre = datos?.username || user.displayName || user.email;
  const correo = datos?.email || user.email;
  const fechaRegistro = formatearFecha(datos?.creadoEn);

  document.getElementById("perfil-avatar").textContent = iniciales(nombre);
  document.getElementById("perfil-nombre").textContent = nombre;
  document.getElementById("perfil-correo").textContent = correo;
  document.getElementById("perfil-desde").textContent = fechaRegistro
    ? `Miembro desde el ${fechaRegistro}`
    : "";

  const [grupos, historial] = await Promise.all([
    obtenerGruposDelEstudiante(user.uid).catch(() => []),
    obtenerHistorialEstudiante(user.uid).catch(() => [])
  ]);

  const promedio = historial.length
    ? Math.round(historial.reduce((s, r) => s + (r.porcentaje || 0), 0) / historial.length)
    : 0;

  document.getElementById("perfil-stats").innerHTML = `
    <div class="stat-card"><div class="stat-valor">${grupos.length}</div><div class="stat-label">Clases inscritas</div></div>
    <div class="stat-card"><div class="stat-valor">${historial.length}</div><div class="stat-label">Partidas jugadas</div></div>
    <div class="stat-card"><div class="stat-valor">${historial.length ? promedio + "%" : "—"}</div><div class="stat-label">Promedio general</div></div>
  `;

  const contenedorClases = document.getElementById("perfil-clases");
  if (!grupos.length) {
    contenedorClases.innerHTML = `<p class="estado-vacio">Todavía no estás en ninguna clase.</p>`;
    return;
  }
  contenedorClases.innerHTML = grupos
    .slice(0, 6)
    .map((g) => {
      const juego = JUEGOS[g.juego] || { icono: "🎲", nombre: g.juego };
      return `
      <div class="grupo-card grupo-card--${g.juego}">
        <div class="grupo-header">
          <h3>${escapeHtml(g.nombre)}</h3>
          <span class="grupo-estado ${g.activo ? "grupo-estado--activo" : "grupo-estado--inactivo"}"><span class="dot"></span>${g.activo ? "Activa" : "Inactiva"}</span>
        </div>
        <span class="grupo-juego-label"><span class="grupo-juego-icono">${juego.icono}</span>${juego.nombre}</span>
        <p class="grupo-meta">${escapeHtml(g.profesorNombre || "Sin nombre")}</p>
      </div>`;
    })
    .join("");
});
