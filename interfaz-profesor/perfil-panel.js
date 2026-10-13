// interfaz-profesor/perfil-panel.js
// Muestra los datos básicos del profesor y un resumen de la actividad en
// todas sus clases (estadísticas agregadas + vistazo rápido de clases).

import { db } from "../js/firebase.js";
import { suscribirSesion } from "../js/sesion.js";
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { obtenerJuego } from "../js/catalogo.js";
import { obtenerEstadisticasProfesor } from "../js/grupos.js";

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

// sesion.js deduplica las emisiones de sesión: con onAuthStateChanged a pelo,
// cada refresco de token re-enganchaba el botón "Guardar cambios" y un solo
// click mandaba dos escrituras del avatar.
suscribirSesion("profesor", async (cuenta) => {
  if (!cuenta) return; // guard.js ya redirige si no hay sesión

  const datos = cuenta.datos || {};
  const nombre = cuenta.username;
  const correo = cuenta.email;
  const fechaRegistro = formatearFecha(datos.creadoEn);

  const circuloAvatar = document.getElementById("perfil-avatar");
  document.getElementById("perfil-nombre").textContent = nombre;
  document.getElementById("perfil-correo").textContent = correo;
  document.getElementById("perfil-desde").textContent = fechaRegistro
    ? `Miembro desde el ${fechaRegistro}`
    : "";

  inicializarSelectorAvatar({
    circuloAvatar,
    docRef: doc(db, "profesores", cuenta.uid),
    avatarInicial: datos.avatar || "",
    colorInicial: datos.colorFondo || "",
    textoPorDefecto: iniciales(nombre)
  });

  const statsEl = document.getElementById("perfil-stats");
  const clasesEl = document.getElementById("perfil-clases");

  try {
    const stats = await obtenerEstadisticasProfesor(cuenta.uid);

    statsEl.innerHTML = `
      <div class="stat-card"><div class="stat-valor">${stats.totalClases}</div><div class="stat-label">Clases creadas</div></div>
      <div class="stat-card"><div class="stat-valor">${stats.totalEstudiantes}</div><div class="stat-label">Estudiantes únicos</div></div>
      <div class="stat-card"><div class="stat-valor">${stats.totalPartidas}</div><div class="stat-label">Partidas jugadas</div></div>
      <div class="stat-card"><div class="stat-valor">${stats.totalPartidas ? stats.promedioGeneral + "%" : "—"}</div><div class="stat-label">Promedio general</div></div>
    `;

    if (!stats.grupos.length) {
      clasesEl.innerHTML = `<p class="estado-vacio">Todavía no has creado ninguna clase.</p>`;
      return;
    }

    clasesEl.innerHTML = stats.grupos
      .slice(0, 6)
      .map((g) => {
        const juego = obtenerJuego(g.juego) || { icono: "🎲", nombre: g.juego };
        return `
        <div class="grupo-card grupo-card--${escapeHtml(g.juego || "")}">
          <div class="grupo-header">
            <h3>${escapeHtml(g.nombre)}</h3>
            <span class="grupo-estado ${g.activo ? "grupo-estado--activo" : "grupo-estado--inactivo"}"><span class="dot"></span>${g.activo ? "Activa" : "Inactiva"}</span>
          </div>
          <span class="grupo-juego-label"><span class="grupo-juego-icono">${juego.icono}</span>${escapeHtml(juego.nombre)}</span>
          <p class="grupo-meta">${(g.miembrosUids || []).length} estudiante(s)</p>
        </div>`;
      })
      .join("");
  } catch (err) {
    statsEl.innerHTML = `<p class="estado-vacio">No se pudieron cargar las estadísticas.</p>`;
    clasesEl.innerHTML = "";
  }
});

/**
 * Conecta el círculo de avatar con el modal de selección: al hacer clic se
 * abre el modal, al elegir una imagen/color se actualiza la vista previa, y
 * "Guardar cambios" persiste { avatar, colorFondo } en el documento del
 * usuario en Firestore (y solo se cierra/actualiza si el guardado tuvo éxito).
 */
function inicializarSelectorAvatar({ circuloAvatar, docRef, avatarInicial, colorInicial, textoPorDefecto }) {
  const modal = document.getElementById("modal-avatar");
  const btnCerrarX = document.getElementById("btn-cerrar-x");
  const opcionesAvatares = document.querySelectorAll(".opcion-avatar");
  const selectorColor = document.getElementById("selector-color");
  const btnGuardar = document.getElementById("btn-guardar");
  const previewGrande = document.getElementById("preview-avatar-grande");

  let avatarActual = avatarInicial;
  let colorFondoActual = colorInicial;
  let avatarTemporal = avatarInicial;
  let colorFondoTemporal = colorInicial;

  function pintar(elemento, avatarUrl, color) {
    if (!elemento) return;
    elemento.style.background = color || "";
    elemento.innerHTML = avatarUrl ? `<img src="${avatarUrl}" alt="Avatar">` : "";
    if (!avatarUrl) elemento.textContent = textoPorDefecto;
  }

  pintar(circuloAvatar, avatarActual, colorFondoActual);

  if (!circuloAvatar || !modal) return; // esta vista no tiene selector de avatar

  circuloAvatar.addEventListener("click", () => {
    avatarTemporal = avatarActual;
    colorFondoTemporal = colorFondoActual;
    if (selectorColor) selectorColor.value = colorFondoTemporal || "#ffffff";
    pintar(previewGrande, avatarTemporal, colorFondoTemporal);
    modal.style.display = "flex";
  });

  btnCerrarX?.addEventListener("click", () => (modal.style.display = "none"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  opcionesAvatares.forEach((img) => {
    img.addEventListener("click", () => {
      avatarTemporal = img.getAttribute("src");
      pintar(previewGrande, avatarTemporal, colorFondoTemporal);
    });
  });

  selectorColor?.addEventListener("input", (e) => {
    colorFondoTemporal = e.target.value;
    pintar(previewGrande, avatarTemporal, colorFondoTemporal);
  });

  btnGuardar?.addEventListener("click", async () => {
    btnGuardar.disabled = true;
    try {
      await updateDoc(docRef, {
        avatar: avatarTemporal,
        colorFondo: colorFondoTemporal
      });
      avatarActual = avatarTemporal;
      colorFondoActual = colorFondoTemporal;
      pintar(circuloAvatar, avatarActual, colorFondoActual);
      modal.style.display = "none";
    } catch (error) {
      console.error("No se pudo guardar el avatar:", error);
      alert("No se pudo guardar tu avatar. Intenta de nuevo.");
    } finally {
      btnGuardar.disabled = false;
    }
  });
}



