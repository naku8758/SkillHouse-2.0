// interfaz-estudiante/perfil-panel.js
// Muestra los datos básicos del estudiante, un resumen de su actividad
// (clases, partidas, promedio) y un vistazo rápido a sus clases.

import { db } from "../js/firebase.js";
import { suscribirSesion } from "../js/sesion.js";
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { obtenerMateria, obtenerJuego } from "../js/catalogo.js";
import { obtenerGruposDelEstudiante, obtenerHistorialEstudiante } from "../js/grupos.js";
import { matricularEnCurso } from "../js/cursos.js";
import { notaDeResultado, promedioDeNotas, formatearNota } from "../js/nota.js";
import { NOMBRE_SALA, estadoDeSala } from "../js/sala.js";

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

/* ---------------------- Plan b: volver al curso con el código ---------------------- */
//
// El estudiante nace matriculado (el director o el administrador lo crearon con
// su curso), pero si ese vínculo se pierde se queda fuera de todas las clases.
// Con el código de tres dígitos que le da su director se reengancha solo, desde
// aquí, sin esperar al administrador. js/cursos.js y firestore.rules no dejan
// usarlo para CAMBIARSE de curso: solo para rellenar un curso vacío.

const cajaReingreso = document.getElementById("caja-reingreso");
const inputCodigo = document.getElementById("input-codigo-curso");
const btnReingresar = document.getElementById("btn-reingresar");
const errorReingreso = document.getElementById("reingreso-error");
const exitoReingreso = document.getElementById("reingreso-exito");
const filaReingreso = cajaReingreso.querySelector(".form-fila");

let cuentaUid = null;

function mensajeReingreso(el, texto) {
  el.textContent = texto;
  el.style.display = texto ? "block" : "none";
}

btnReingresar.addEventListener("click", async () => {
  const codigo = (inputCodigo.value || "").trim();
  mensajeReingreso(errorReingreso, "");
  mensajeReingreso(exitoReingreso, "");
  if (!cuentaUid) return;

  if (!/^\d{3}$/.test(codigo)) {
    return mensajeReingreso(errorReingreso, "El código son tres dígitos, por ejemplo 601.");
  }

  btnReingresar.disabled = true;
  try {
    const curso = await matricularEnCurso({ uid: cuentaUid, codigo, porEstudiante: true });
    document.getElementById("perfil-curso").textContent =
      `Curso ${curso.codigo}${curso.nombre ? ` · ${curso.nombre}` : ""}`;
    filaReingreso.style.display = "none";
    mensajeReingreso(exitoReingreso, `Listo: ya estás en el curso ${curso.codigo}. Recarga la página (o sal y vuelve a entrar) para ver tus clases.`);
  } catch (err) {
    console.error(err);
    mensajeReingreso(errorReingreso, err.message || "No se pudo volver a vincular el curso.");
    btnReingresar.disabled = false;
  }
});

// sesion.js deduplica las emisiones: con onAuthStateChanged a pelo, cada
// refresco de token volvía a ejecutar este bloque y volvía a enganchar el
// botón "Guardar cambios", así que un click mandaba dos escrituras.
suscribirSesion("estudiante", async (cuenta) => {
  if (!cuenta) return; // guard.js ya redirige si no hay sesión

  const datos = cuenta.datos || {};
  const nombre = cuenta.username;
  const correo = cuenta.email;
  const fechaRegistro = formatearFecha(datos.creadoEn);

  cuentaUid = cuenta.uid;
  const cursoPropio = datos.curso || "";
  cajaReingreso.style.display = cursoPropio ? "none" : "block";
  filaReingreso.style.display = "flex";

  const circuloAvatar = document.getElementById("perfil-avatar");
  document.getElementById("perfil-nombre").textContent = nombre;
  document.getElementById("perfil-correo").textContent = correo;
  document.getElementById("perfil-desde").textContent = fechaRegistro
    ? `Miembro desde el ${fechaRegistro}`
    : "";
  document.getElementById("perfil-curso").textContent = cursoPropio
    ? `Curso ${cursoPropio}${datos.creadoPorNombre ? ` · director(a): ${datos.creadoPorNombre}` : ""}`
    : "Tu cuenta aún no está vinculada a un curso.";

  inicializarSelectorAvatar({
    circuloAvatar,
    docRef: doc(db, "estudiantes", cuenta.uid),
    avatarInicial: datos.avatar || "",
    colorInicial: datos.colorFondo || "",
    textoPorDefecto: iniciales(nombre)
  });

  const [grupos, historial] = await Promise.all([
    obtenerGruposDelEstudiante(cuenta.uid).catch(() => []),
    obtenerHistorialEstudiante(cuenta.uid).catch(() => [])
  ]);

  const promedio = historial.length
    ? Math.round(historial.reduce((s, r) => s + (r.porcentaje || 0), 0) / historial.length)
    : 0;
  const nota = promedioDeNotas(historial.map((r) => notaDeResultado(r)));

  document.getElementById("perfil-stats").innerHTML = `
    <div class="stat-card"><div class="stat-valor">${grupos.length}</div><div class="stat-label">Clases inscritas</div></div>
    <div class="stat-card"><div class="stat-valor">${historial.length}</div><div class="stat-label">Partidas jugadas</div></div>
    <div class="stat-card"><div class="stat-valor">${nota == null ? "—" : formatearNota(nota)}</div><div class="stat-label">Nota definitiva (1 a 5)</div></div>
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
      const juego = obtenerJuego(g.juego) || { icono: "🎲", nombre: g.juego };
      const materia = obtenerMateria(g.materia);
      const estado = estadoDeSala(g);
      return `
      <div class="grupo-card grupo-card--${escapeHtml(g.juego || "")}">
        <div class="grupo-header">
          <h3>${escapeHtml(g.nombre)}</h3>
          <span class="grupo-estado ${g.activo ? "grupo-estado--activo" : "grupo-estado--inactivo"}"><span class="dot"></span>${g.activo ? "Activa" : "Inactiva"}</span>
        </div>
        <span class="grupo-juego-label"><span class="grupo-juego-icono">${juego.icono}</span>${escapeHtml(juego.nombre)}</span>
        <p class="grupo-meta">${escapeHtml(materia?.nombre || "Materia")} · Curso ${escapeHtml(g.curso || "—")}</p>
        <p class="grupo-meta">${escapeHtml(g.profesorNombre || "Sin nombre")} · <span class="grupo-sala grupo-sala--${estado}">${escapeHtml(NOMBRE_SALA[estado])}</span></p>
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
