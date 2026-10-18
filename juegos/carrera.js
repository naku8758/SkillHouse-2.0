// juegos/carrera.js
// Juego "Carrera Espacial". El estudiante resuelve problemas matemáticos
// contrarreloj: cada respuesta correcta hace avanzar el cohete por la
// pista; una respuesta incorrecta o el tiempo agotado no lo mueve. Puede
// jugarse en modo práctica o dentro de un grupo (?grupo=ID), en cuyo caso
// el resultado final se guarda en Firestore.
//
// El reloj no es fijo: lo manda el ciclo del tema (js/malla.js). En 1° y 2° no
// hay contrarreloj, porque un niño que todavía lee despacio no puede competir
// contra una barra que baja; en 10° y 11° la pista es de once segundos.

import { auth, db } from "../js/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { guardarResultado, grupoJugable } from "../js/grupos.js";
import { pantallaDeEspera, pantallaDeClaseCerrada } from "../js/espera.js";
import { notaDesdeFraccion, formatearNota, desempenio } from "../js/nota.js";
import { nombreDelTema, obtenerMateria } from "../js/catalogo.js";
import { gradoDeCurso } from "../js/malla.js";
import { obtenerPreguntasPorTema, resolverTemaAleatorio } from "../js/games/banco.js";
import { ajustesDe, aplicarCiclo, hablar, hayVoz, detenerVoz } from "../js/games/ajustes.js";

const contenedor = document.getElementById("juego-caja");
const params = new URLSearchParams(window.location.search);
const grupoId = params.get("grupo");
const esInvitado = params.get("invitado") === "1";

// La dificultad estira o encoge el tiempo del ciclo: fácil da aire, difícil lo
// aprieta, y el ciclo sigue mandando la base.
const FACTOR_DIFICULTAD = { 1: 1.25, 2: 1, 3: 0.8 };

let usuarioActual = null;
let usuarioNombre = "";
let cursoDelUsuario = "";
let grupoActual = null;
let temaId = "";
let dificultad = 2;
let ajustes = ajustesDe("");
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

function gradoEnJuego() {
  if (grupoActual?.curso) return gradoDeCurso(grupoActual.curso);
  const porParametro = Number(params.get("grado")) || gradoDeCurso(params.get("c"));
  if (porParametro) return porParametro;
  return gradoDeCurso(cursoDelUsuario);
}

async function elegirTema() {
  const explicito = params.get("tema");
  if (explicito) return explicito;
  return resolverTemaAleatorio({ materiaId: params.get("m") || "", grado: gradoEnJuego() });
}

async function iniciar() {
  if (esInvitado) {
    temaId = await elegirTema();
    dificultad = Number(params.get("dificultad")) || 2;
    await prepararRonda();
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
      cursoDelUsuario = snap.exists() ? snap.data().curso || "" : "";
    } catch (err) {
      usuarioNombre = user.email;
    }

    if (grupoId) {
      grupoActual = await grupoJugable(grupoId, user.uid, "carrera");
      if (!grupoActual) {
        mostrarAviso(AVISO_ACCESO);
        return;
      }
      // El estudiante sí es de esta clase: solo llegó antes de que el profe la
      // abriera. Decirle "no tienes acceso" sería mentira.
      if (grupoActual.sinEmpezar) {
        pantallaDeEspera(contenedor, grupoActual);
        return;
      }
      if (grupoActual.claseCerrada) {
        pantallaDeClaseCerrada(contenedor, grupoActual);
        return;
      }
      temaId = grupoActual.tema;
      dificultad = grupoActual.dificultad || 2;
    } else {
      temaId = await elegirTema();
      dificultad = Number(params.get("dificultad")) || 2;
    }

    await prepararRonda();
    renderPregunta();
  });
}

async function prepararRonda() {
  ajustes = ajustesDe(temaId);
  aplicarCiclo(contenedor, temaId);
  tiempoPorPreguntaMs = ajustes.tiempo
    ? Math.round(ajustes.tiempo * (FACTOR_DIFICULTAD[dificultad] || 1))
    : 0;
  problemasRonda = await obtenerPreguntasPorTema(temaId, dificultad);
  indiceActual = 0;
  puntaje = 0;
}

const AVISO_ACCESO = {
  titulo: "No puedes jugar esta clase",
  texto: "La clase no existe, ya no está activa o no es de tu curso. Pide el código otra vez en la página de la materia."
};

const AVISO_CONTENIDO = {
  titulo: "Este tema no tiene preguntas en este nivel",
  texto: "Cambia de tema o de dificultad en la página de la materia y vuelve a intentarlo."
};

function mostrarAviso(aviso) {
  detenerVoz();
  clearInterval(intervaloTiempo);
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
  const materia = obtenerMateria(params.get("m") || "");

  contenedor.innerHTML = `
    <div class="juego-topbar">
      <div>
        <h1>🚀 Carrera Espacial</h1>
        <p class="juego-grupo-nombre">${grupoActual ? "Grupo: " + escapeHtml(grupoActual.nombre) : esInvitado ? "Invitado (sin guardar)" : "Modo práctica"} · ${escapeHtml(nombreDelTema(temaId))} · ${NOMBRES_DIFICULTAD[dificultad] || "Intermedio"}${materia ? " · " + escapeHtml(materia.nombre) : ""}</p>
      </div>
      <div class="juego-grupo-nombre">Problema ${indiceActual + 1} de ${total}</div>
    </div>

    <div class="carrera-pista">
      <div class="carrera-meta">🏁</div>
      <div class="carrera-rocket" id="carrera-rocket" style="left:${progresoPista}%">🚀</div>
    </div>

    <div class="juego-progreso">${
      tiempoPorPreguntaMs
        ? `<div class="juego-progreso-relleno" id="barra-tiempo" style="width:100%"></div>`
        : `<div class="juego-progreso-relleno" style="width:100%"></div>`
    }</div>

    <span class="pregunta-categoria">${tiempoPorPreguntaMs ? "Resuelve antes de que se acabe el tiempo" : "Resuelve a tu ritmo, sin reloj"}</span>
    ${ajustes.voz ? `<button type="button" class="btn-voz" id="btn-escuchar">🔊 Escuchar el problema</button>` : ""}
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

  if (ajustes.voz && hayVoz()) {
    document.getElementById("btn-escuchar")?.addEventListener("click", () => hablar(p.enunciado));
    hablar(p.enunciado);
  }

  iniciarTemporizador();
}

function iniciarTemporizador() {
  inicioPregunta = Date.now();
  clearInterval(intervaloTiempo);
  if (!tiempoPorPreguntaMs) return; // 1° y 2°: sin contrarreloj
  const barra = document.getElementById("barra-tiempo");
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
  detenerVoz();

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

  const nota = notaDesdeFraccion(puntaje, total);
  const nivel = desempenio(nota);
  const llegoALaMeta = puntaje === total;
  const emoji = llegoALaMeta ? "🏆" : nota >= 4 ? "🎉" : nota >= 3 ? "🚀" : "💪";
  const mensaje = llegoALaMeta
    ? "¡Llegaste a la meta sin fallar ninguna!"
    : nota >= 3
    ? "¡Buen despegue! Sigue practicando para llegar a la meta."
    : "La velocidad se gana con práctica, ¡vuelve a intentarlo!";

  contenedor.innerHTML = `
    <div class="resultado-final">
      <div class="resultado-emoji">${emoji}</div>
      <h2>Resolviste ${puntaje} de ${total} (${porcentaje}%)</h2>
      <p class="resultado-nota">Nota: <strong>${formatearNota(nota)}</strong> / 5,0
        <span class="nota-nivel nota-nivel--${nivel.clase}">${nivel.nombre}</span></p>
      <p>${mensaje}</p>
      <div class="resultado-acciones">
        <button class="btn-accion" id="btn-jugar-de-nuevo">Jugar de nuevo</button>
        <button class="btn-secundario" id="btn-volver">Volver</button>
      </div>
    </div>`;

  document.getElementById("btn-jugar-de-nuevo").addEventListener("click", async () => {
    await prepararRonda();
    renderPregunta();
  });
  document.getElementById("btn-volver").addEventListener("click", () => volverA(rutaVolver()));
}

iniciar();
