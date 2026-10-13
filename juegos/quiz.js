// juegos/quiz.js
// Juego "Quiz de Lógica". Puede jugarse en modo práctica (sin guardar
// resultado) o dentro de un grupo creado por un profesor (?grupo=ID), en
// cuyo caso el resultado final se guarda en Firestore.

import { auth, db } from "../js/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { guardarResultado, grupoJugable } from "../js/grupos.js";
import { obtenerPreguntasPorTema, nombreDelTema, temaAleatorio } from "../js/games/contenido-temas.js";

const contenedor = document.getElementById("juego-caja");
const params = new URLSearchParams(window.location.search);
const grupoId = params.get("grupo");
const esInvitado = params.get("invitado") === "1";

let usuarioActual = null;
let usuarioNombre = "";
let grupoActual = null;
let temaId = "";
let dificultad = 2;
let preguntasRonda = [];
let indiceActual = 0;
let puntaje = 0;
let respondida = false;
// Firebase re-emite onAuthStateChanged al refrescar el token, con el MISMO
// usuario. Sin este candado esa segunda emisión volvía a llamar prepararRonda()
// a mitad de una partida: se reiniciaban las preguntas y se perdía el puntaje.
let uidEnJuego = null;

function volverA(url) {
  window.location.href = url;
}

function rutaVolver() {
  if (esInvitado) return "../invitado.html";
  // Dentro de una clase se vuelve a la página de ESA materia; en práctica, a la
  // materia desde la que se entró (?m=) o al panel del estudiante si no se sabe.
  if (grupoId && grupoActual) return rutaMateria(grupoActual.materia);
  return rutaMateria(params.get("m"));
}

function rutaMateria(materiaId) {
  return materiaId
    ? `../interfaz-estudiante/materia.html?m=${encodeURIComponent(materiaId)}`
    : "../interfaz-estudiante/homepagea.html";
}

async function iniciar() {
  if (esInvitado) {
    // Modo invitado: sin sesión, sin grupo, nunca se guarda resultado.
    temaId = params.get("tema") || temaAleatorio();
    dificultad = Number(params.get("dificultad")) || 2;
    prepararRonda();
    renderPregunta();
    return;
  }

  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      volverA("../index.html");
      return;
    }
    if (user.uid === uidEnJuego) return;
    uidEnJuego = user.uid;
    usuarioActual = user;

    try {
      const snap = await getDoc(doc(db, "usuarios", user.uid));
      usuarioNombre = snap.exists() ? snap.data().username || user.email : user.email;
    } catch (err) {
      usuarioNombre = user.email;
    }

    if (grupoId) {
      grupoActual = await grupoJugable(grupoId, user.uid, "quiz");
      if (!grupoActual) {
        mostrarAviso(AVISO_ACCESO);
        return;
      }
      temaId = grupoActual.tema;
      dificultad = grupoActual.dificultad || 2;
    } else {
      // Modo práctica: si viene con ?tema= y ?dificultad= (desde el selector
      // de práctica libre), se usan esos; si no, se elige un tema al azar
      // en dificultad media.
      temaId = params.get("tema") || temaAleatorio();
      dificultad = Number(params.get("dificultad")) || 2;
    }

    prepararRonda();
    renderPregunta();
  });
}

function prepararRonda() {
  preguntasRonda = obtenerPreguntasPorTema(temaId, dificultad);
  indiceActual = 0;
  puntaje = 0;
}

const AVISO_ACCESO = {
  titulo: "No puedes jugar esta clase",
  texto: "La clase no existe, tu profesor aún no acepta tu solicitud o ya no está activa. Pide el código otra vez en la página de la materia."
};

const AVISO_CONTENIDO = {
  titulo: "Este tema no tiene preguntas en este nivel",
  texto: "Cambia de tema o de dificultad en la página de la materia y vuelve a intentarlo."
};

function mostrarAviso(aviso) {
  contenedor.innerHTML = `
    <div class="resultado-final">
      <div class="resultado-emoji">⚠️</div>
      <h2>${aviso.titulo}</h2>
      <p>${aviso.texto}</p>
      <div class="resultado-acciones">
        <button class="btn-accion" id="btn-volver">Volver</button>
      </div>
    </div>`;
  document.getElementById("btn-volver").addEventListener("click", () => volverA(rutaVolver()));
}

const NOMBRES_DIFICULTAD = { 1: "Fácil", 2: "Intermedio", 3: "Difícil" };

function renderPregunta() {
  respondida = false;
  const total = preguntasRonda.length;

  if (!total) {
    mostrarAviso(AVISO_CONTENIDO);
    return;
  }

  const p = preguntasRonda[indiceActual];
  const progreso = Math.round((indiceActual / total) * 100);

  contenedor.innerHTML = `
    <div class="juego-topbar">
      <div>
        <h1>🎮 Quiz de Lógica</h1>
        <p class="juego-grupo-nombre">${grupoActual ? "Grupo: " + escapeHtml(grupoActual.nombre) : esInvitado ? "Invitado (sin guardar)" : "Modo práctica"}</p>
      </div>
      <div class="juego-grupo-nombre">Pregunta ${indiceActual + 1} de ${total}</div>
    </div>
    <div class="juego-progreso"><div class="juego-progreso-relleno" style="width:${progreso}%"></div></div>

    <span class="pregunta-categoria">${escapeHtml(nombreDelTema(temaId))} · ${NOMBRES_DIFICULTAD[dificultad] || "Intermedio"}</span>
    <p class="pregunta-texto">${escapeHtml(p.enunciado)}</p>

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
        <button class="btn-accion" id="btn-jugar-de-nuevo">Jugar de nuevo</button>
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
