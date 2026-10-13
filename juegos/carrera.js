// juegos/carrera.js
// Juego "Carrera Espacial". El estudiante resuelve problemas matemáticos
// contrarreloj: cada respuesta correcta hace avanzar el cohete por la
// pista; una respuesta incorrecta o el tiempo agotado no lo mueve. Puede
// jugarse en modo práctica o dentro de un grupo (?grupo=ID), en cuyo caso
// el resultado final se guarda en Firestore.

import { auth, db } from "../js/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { guardarResultado, grupoJugable } from "../js/grupos.js";
import { obtenerPreguntasPorTema, nombreDelTema, temaAleatorio, tiempoPorPregunta } from "../js/games/contenido-temas.js";

const contenedor = document.getElementById("juego-caja");
const params = new URLSearchParams(window.location.search);
const grupoId = params.get("grupo");
const esInvitado = params.get("invitado") === "1";

let usuarioActual = null;
let usuarioNombre = "";
let grupoActual = null;
let temaId = "";
let dificultad = 2;
let tiempoPorPreguntaMs = 12000;
let problemasRonda = [];
let indiceActual = 0;
let puntaje = 0;
let respondida = false;
let intervaloTiempo = null;
let inicioPregunta = 0;
// Firebase re-emite onAuthStateChanged al refrescar el token, con el MISMO
// usuario: sin este candado la segunda emisión reiniciaba la carrera a mitad de
// la partida y se perdía el puntaje.
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

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

async function iniciar() {
  if (esInvitado) {
    temaId = params.get("tema") || temaAleatorio();
    dificultad = Number(params.get("dificultad")) || 2;
    tiempoPorPreguntaMs = tiempoPorPregunta(dificultad);
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
      grupoActual = await grupoJugable(grupoId, user.uid, "carrera");
      if (!grupoActual) {
        mostrarAviso(AVISO_ACCESO);
        return;
      }
      temaId = grupoActual.tema;
      dificultad = grupoActual.dificultad || 2;
    } else {
      temaId = params.get("tema") || temaAleatorio();
      dificultad = Number(params.get("dificultad")) || 2;
    }
    tiempoPorPreguntaMs = tiempoPorPregunta(dificultad);

    prepararRonda();
    renderPregunta();
  });
}

function prepararRonda() {
  problemasRonda = obtenerPreguntasPorTema(temaId, dificultad);
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
  const total = problemasRonda.length;

  if (!total) {
    mostrarAviso(AVISO_CONTENIDO);
    return;
  }

  const p = problemasRonda[indiceActual];
  const progresoPista = Math.round((puntaje / total) * 100);

  contenedor.innerHTML = `
    <div class="juego-topbar">
      <div>
        <h1>🚀 Carrera Espacial</h1>
        <p class="juego-grupo-nombre">${grupoActual ? "Grupo: " + escapeHtml(grupoActual.nombre) : esInvitado ? "Invitado (sin guardar)" : "Modo práctica"} · ${escapeHtml(nombreDelTema(temaId))} · ${NOMBRES_DIFICULTAD[dificultad] || "Intermedio"}</p>
      </div>
      <div class="juego-grupo-nombre">Problema ${indiceActual + 1} de ${total}</div>
    </div>

    <div class="carrera-pista">
      <div class="carrera-meta">🏁</div>
      <div class="carrera-rocket" id="carrera-rocket" style="left:${progresoPista}%">🚀</div>
    </div>

    <div class="juego-progreso">
      <div class="juego-progreso-relleno" id="barra-tiempo" style="width:100%"></div>
    </div>

    <span class="pregunta-categoria">Resuelve antes de que se acabe el tiempo</span>
    <p class="pregunta-texto carrera-enunciado">${escapeHtml(p.enunciado)}</p>

    <div class="opciones-lista opciones-grid" id="opciones-lista">
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

  iniciarTemporizador();
}

function iniciarTemporizador() {
  inicioPregunta = Date.now();
  const barra = document.getElementById("barra-tiempo");
  clearInterval(intervaloTiempo);
  intervaloTiempo = setInterval(() => {
    const transcurrido = Date.now() - inicioPregunta;
    const restante = Math.max(0, tiempoPorPreguntaMs - transcurrido);
    const pct = (restante / tiempoPorPreguntaMs) * 100;
    if (barra) barra.style.width = pct + "%";
    if (restante <= 0) {
      clearInterval(intervaloTiempo);
      seleccionarOpcion(-1); // tiempo agotado
    }
  }, 100);
}

function seleccionarOpcion(indiceElegido) {
  if (respondida) return;
  respondida = true;
  clearInterval(intervaloTiempo);

  const p = problemasRonda[indiceActual];
  const botones = document.querySelectorAll(".opcion-btn");
  botones.forEach((btn) => (btn.disabled = true));

  const esCorrecta = indiceElegido === p.correcta;
  if (esCorrecta) {
    puntaje++;
    botones[indiceElegido].classList.add("opcion-correcta");
    const rocket = document.getElementById("carrera-rocket");
    if (rocket) rocket.style.left = Math.round((puntaje / problemasRonda.length) * 100) + "%";
  } else {
    if (indiceElegido >= 0) botones[indiceElegido].classList.add("opcion-incorrecta");
    botones[p.correcta].classList.add("opcion-correcta");
  }

  setTimeout(() => {
    indiceActual++;
    if (indiceActual < problemasRonda.length) {
      renderPregunta();
    } else {
      terminarRonda();
    }
  }, 900);
}

async function terminarRonda() {
  const total = problemasRonda.length;
  const porcentaje = Math.round((puntaje / total) * 100);

  if (grupoId && grupoActual) {
    try {
      await guardarResultado({
        grupoId,
        uid: usuarioActual.uid,
        username: usuarioNombre,
        juego: "carrera",
        puntaje,
        total
      });
    } catch (err) {
      console.error("No se pudo guardar el resultado:", err);
    }
  }

  const llegoALaMeta = puntaje === total;
  const emoji = llegoALaMeta ? "🏆" : porcentaje >= 50 ? "🚀" : "💪";
  const mensaje = llegoALaMeta
    ? "¡Llegaste a la meta sin fallar ninguna!"
    : porcentaje >= 50
    ? "¡Buen despegue! Sigue practicando para llegar a la meta."
    : "La velocidad se gana con práctica, ¡vuelve a intentarlo!";

  contenedor.innerHTML = `
    <div class="resultado-final">
      <div class="resultado-emoji">${emoji}</div>
      <h2>Resolviste ${puntaje} de ${total} (${porcentaje}%)</h2>
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

iniciar();
