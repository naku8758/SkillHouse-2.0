// juegos/quiz.js
// Juego "Quiz de Lógica". Puede jugarse en modo práctica (sin guardar
// resultado) o dentro de un grupo creado por un profesor (?grupo=ID), en
// cuyo caso el resultado final se guarda en Firestore.

import { auth, db } from "../js/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { obtenerGrupo, guardarResultado } from "../js/grupos.js";
import { PREGUNTAS } from "../js/games/quiz-data.js";

const CANTIDAD_PREGUNTAS = 8;

const contenedor = document.getElementById("juego-caja");
const params = new URLSearchParams(window.location.search);
const grupoId = params.get("grupo");

let usuarioActual = null;
let usuarioNombre = "";
let grupoActual = null;
let preguntasRonda = [];
let indiceActual = 0;
let puntaje = 0;
let respondida = false;

function mezclar(arreglo) {
  const copia = [...arreglo];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function volverA(url) {
  window.location.href = url;
}

function rutaVolver() {
  // Si venimos desde un grupo, lo natural es volver a la lista de grupos
  // del estudiante; si no, al panel de estudiante.
  return grupoId ? "../interfaz estudiante/juegos.html" : "../interfaz estudiante/homepagea.html";
}

async function iniciar() {
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      volverA("../index.html");
      return;
    }
    usuarioActual = user;

    try {
      const snap = await getDoc(doc(db, "usuarios", user.uid));
      usuarioNombre = snap.exists() ? snap.data().username || user.email : user.email;
    } catch (err) {
      usuarioNombre = user.email;
    }

    if (grupoId) {
      try {
        grupoActual = await obtenerGrupo(grupoId);
      } catch (err) {
        grupoActual = null;
      }
      if (!grupoActual || grupoActual.juego !== "quiz") {
        mostrarErrorGrupo();
        return;
      }
    }

    prepararRonda();
    renderPregunta();
  });
}

function prepararRonda() {
  const cantidad = Math.min(CANTIDAD_PREGUNTAS, PREGUNTAS.length);
  preguntasRonda = mezclar(PREGUNTAS).slice(0, cantidad);
  indiceActual = 0;
  puntaje = 0;
}

function mostrarErrorGrupo() {
  contenedor.innerHTML = `
    <div class="resultado-final">
      <div class="resultado-emoji">⚠️</div>
      <h2>No se pudo cargar este grupo</h2>
      <p>El grupo no existe, ya no está activo o no corresponde a este juego.</p>
      <div class="resultado-acciones">
        <button class="btn-accion" id="btn-volver">Volver</button>
      </div>
    </div>`;
  document.getElementById("btn-volver").addEventListener("click", () => volverA(rutaVolver()));
}

function renderPregunta() {
  respondida = false;
  const total = preguntasRonda.length;
  const p = preguntasRonda[indiceActual];
  const progreso = Math.round((indiceActual / total) * 100);

  contenedor.innerHTML = `
    <div class="juego-topbar">
      <div>
        <h1>🎮 Quiz de Lógica</h1>
        <p class="juego-grupo-nombre">${grupoActual ? "Grupo: " + escapeHtml(grupoActual.nombre) : "Modo práctica"}</p>
      </div>
      <div class="juego-grupo-nombre">Pregunta ${indiceActual + 1} de ${total}</div>
    </div>
    <div class="juego-progreso"><div class="juego-progreso-relleno" style="width:${progreso}%"></div></div>

    <span class="pregunta-categoria">${escapeHtml(p.categoria)}</span>
    <p class="pregunta-texto">${escapeHtml(p.pregunta)}</p>

    <div class="opciones-lista" id="opciones-lista">
      ${p.opciones
        .map(
          (op, i) =>
            `<button class="opcion-btn" data-indice="${i}" type="button">${escapeHtml(op)}</button>`
        )
        .join("")}
    </div>
  `;

  document.querySelectorAll(".opcion-btn").forEach((btn) => {
    btn.addEventListener("click", () => seleccionarOpcion(Number(btn.dataset.indice)));
  });
}

function seleccionarOpcion(indiceElegido) {
  if (respondida) return;
  respondida = true;

  const p = preguntasRonda[indiceActual];
  const botones = document.querySelectorAll(".opcion-btn");
  botones.forEach((btn) => (btn.disabled = true));

  if (indiceElegido === p.correcta) {
    puntaje++;
    botones[indiceElegido].classList.add("opcion-correcta");
  } else {
    botones[indiceElegido].classList.add("opcion-incorrecta");
    botones[p.correcta].classList.add("opcion-correcta");
  }

  setTimeout(() => {
    indiceActual++;
    if (indiceActual < preguntasRonda.length) {
      renderPregunta();
    } else {
      terminarRonda();
    }
  }, 900);
}

async function terminarRonda() {
  const total = preguntasRonda.length;
  const porcentaje = Math.round((puntaje / total) * 100);

  if (grupoId && grupoActual) {
    try {
      await guardarResultado({
        grupoId,
        uid: usuarioActual.uid,
        username: usuarioNombre,
        juego: "quiz",
        puntaje,
        total
      });
    } catch (err) {
      console.error("No se pudo guardar el resultado:", err);
    }
  }

  const emoji = porcentaje >= 80 ? "🏆" : porcentaje >= 50 ? "🙂" : "💪";
  const mensaje =
    porcentaje >= 80
      ? "¡Excelente trabajo!"
      : porcentaje >= 50
      ? "¡Buen intento, sigue practicando!"
      : "No te preocupes, la práctica hace al maestro.";

  contenedor.innerHTML = `
    <div class="resultado-final">
      <div class="resultado-emoji">${emoji}</div>
      <h2>Obtuviste ${puntaje} de ${total} (${porcentaje}%)</h2>
      <p>${mensaje}</p>
      <div class="resultado-acciones">
        <button class="btn-accion" id="btn-jugar-de-nuevo">🔁 Jugar de nuevo</button>
        <button class="btn-secundario" id="btn-volver">Volver</button>
      </div>
    </div>`;

  document.getElementById("btn-jugar-de-nuevo").addEventListener("click", () => {
    prepararRonda();
    renderPregunta();
  });
  document.getElementById("btn-volver").addEventListener("click", () => volverA(rutaVolver()));
}

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

iniciar();
