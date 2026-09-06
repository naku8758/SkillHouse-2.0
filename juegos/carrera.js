// juegos/carrera.js
// Juego "Carrera Espacial". El estudiante resuelve problemas matemáticos
// contrarreloj: cada respuesta correcta hace avanzar el cohete por la
// pista; una respuesta incorrecta o el tiempo agotado no lo mueve. Puede
// jugarse en modo práctica o dentro de un grupo (?grupo=ID), en cuyo caso
// el resultado final se guarda en Firestore.

import { auth, db } from "../js/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { obtenerGrupo, guardarResultado } from "../js/grupos.js";
import { generarProblemas } from "../js/games/carrera-data.js";

const CANTIDAD_PREGUNTAS = 10;
const TIEMPO_POR_PREGUNTA_MS = 12000;

const contenedor = document.getElementById("juego-caja");
const params = new URLSearchParams(window.location.search);
const grupoId = params.get("grupo");

let usuarioActual = null;
let usuarioNombre = "";
let grupoActual = null;
let problemasRonda = [];
let indiceActual = 0;
let puntaje = 0;
let respondida = false;
let intervaloTiempo = null;
let inicioPregunta = 0;

function volverA(url) {
  window.location.href = url;
}

function rutaVolver() {
  return grupoId ? "../interfaz estudiante/juegos.html" : "../interfaz estudiante/homepagea.html";
}

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
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
      if (!grupoActual || grupoActual.juego !== "carrera") {
        mostrarErrorGrupo();
        return;
      }
    }

    prepararRonda();
    renderPregunta();
  });
}

function prepararRonda() {
  problemasRonda = generarProblemas(CANTIDAD_PREGUNTAS);
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
  const total = problemasRonda.length;
  const p = problemasRonda[indiceActual];
  const progresoPista = Math.round((puntaje / total) * 100);

  contenedor.innerHTML = `
    <div class="juego-topbar">
      <div>
        <h1>🚀 Carrera Espacial</h1>
        <p class="juego-grupo-nombre">${grupoActual ? "Grupo: " + escapeHtml(grupoActual.nombre) : "Modo práctica"}</p>
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
    const restante = Math.max(0, TIEMPO_POR_PREGUNTA_MS - transcurrido);
    const pct = (restante / TIEMPO_POR_PREGUNTA_MS) * 100;
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
