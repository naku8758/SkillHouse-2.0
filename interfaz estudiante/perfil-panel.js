// interfaz estudiante/perfil-panel.js
// Muestra los datos básicos del estudiante, un resumen de su actividad
// (clases, partidas, promedio) y un vistazo rápido a sus clases.

import { auth, db } from "../js/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
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

  const circuloAvatar = document.getElementById("perfil-avatar");
  document.getElementById("perfil-nombre").textContent = nombre;
  document.getElementById("perfil-correo").textContent = correo;
  document.getElementById("perfil-desde").textContent = fechaRegistro
    ? `Miembro desde el ${fechaRegistro}`
    : "";

  inicializarSelectorAvatar({
    circuloAvatar,
    docRef: doc(db, "estudiantes", user.uid),
    avatarInicial: datos?.avatar || "",
    colorInicial: datos?.colorFondo || "",
    textoPorDefecto: iniciales(nombre)
  });

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
