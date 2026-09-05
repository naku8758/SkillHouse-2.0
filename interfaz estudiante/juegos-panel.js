// interfaz estudiante/juegos-panel.js
// Controla la página "Juegos" del estudiante: unirse a un grupo por código,
// ver los grupos a los que ya pertenece y entrar a jugar.

import { auth, db } from "../js/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { unirseAGrupo, obtenerGruposDelEstudiante } from "../js/grupos.js";

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

let usuarioActual = null;
let usuarioNombre = "";

const form = document.getElementById("form-unirse");
const listaGrupos = document.getElementById("lista-grupos");
const errorEl = document.getElementById("unirse-error");
const exitoEl = document.getElementById("unirse-exito");

function mostrarMensaje(el, texto) {
  el.textContent = texto;
  el.style.display = texto ? "block" : "none";
}

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

onAuthStateChanged(auth, async (user) => {
  if (!user) return; // guard.js ya redirige si no hay sesión
  usuarioActual = user;
  try {
    const snap = await getDoc(doc(db, "usuarios", user.uid));
    usuarioNombre = snap.exists() ? snap.data().username || user.email : user.email;
  } catch (err) {
    usuarioNombre = user.email;
  }
  await cargarGrupos();
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  mostrarMensaje(errorEl, "");
  mostrarMensaje(exitoEl, "");

  const codigo = document.getElementById("input-codigo").value;
  const btn = document.getElementById("btn-unirse");
  btn.disabled = true;

  try {
    const grupo = await unirseAGrupo({ codigo, uid: usuarioActual.uid, username: usuarioNombre });
    mostrarMensaje(exitoEl, `¡Te uniste a "${grupo.nombre}"!`);
    form.reset();
    await cargarGrupos();
  } catch (err) {
    mostrarMensaje(errorEl, err.message || "No se pudo unir al grupo.");
  } finally {
    btn.disabled = false;
  }
});

async function cargarGrupos() {
  listaGrupos.innerHTML = `<p class="estado-vacio">Cargando tus grupos...</p>`;
  let grupos = [];
  try {
    grupos = await obtenerGruposDelEstudiante(usuarioActual.uid);
  } catch (err) {
    listaGrupos.innerHTML = `<p class="estado-vacio">No se pudieron cargar tus grupos.</p>`;
    return;
  }

  if (!grupos.length) {
    listaGrupos.innerHTML = `<p class="estado-vacio">Todavía no te has unido a ningún grupo.</p>`;
    return;
  }

  listaGrupos.innerHTML = grupos
    .map((g) => {
      const ruta = RUTA_JUEGO[g.juego] || "#";
      const juego = JUEGOS[g.juego] || { icono: "🎲", nombre: g.juego };
      const puedeJugar = g.activo;
      return `
      <div class="grupo-card grupo-card--${g.juego}">
        <div class="grupo-header">
          <h3>${escapeHtml(g.nombre)}</h3>
          <span class="grupo-estado ${puedeJugar ? "grupo-estado--activo" : "grupo-estado--inactivo"}">
            <span class="dot"></span>${puedeJugar ? "Activa" : "Inactiva"}
          </span>
        </div>
        <span class="grupo-juego-label"><span class="grupo-juego-icono">${juego.icono}</span>${juego.nombre}</span>
        <p class="grupo-meta">Profesor(a): ${escapeHtml(g.profesorNombre || "—")}</p>
        <div class="grupo-acciones">
          ${
            puedeJugar
              ? `<a class="btn-accion" style="text-decoration:none;" href="${ruta}?grupo=${g.id}">Jugar</a>`
              : `<span class="grupo-meta">Esta clase ya no está activa.</span>`
          }
        </div>
      </div>`;
    })
    .join("");
}
