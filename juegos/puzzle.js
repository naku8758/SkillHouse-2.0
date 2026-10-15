// juegos/puzzle.js
// Juego "Puzzle de Código". El estudiante reordena pasos de un algoritmo
// arrastrándolos (o con las flechas ▲▼, para que funcione también en
// tablets/celulares). Puede jugarse en modo práctica o dentro de un grupo
// (?grupo=ID), en cuyo caso el resultado final se guarda en Firestore.

import { auth, db } from "../js/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { guardarResultado, grupoJugable } from "../js/grupos.js";
import { pantallaDeEspera, pantallaDeClaseCerrada } from "../js/espera.js";
import { notaDesdeFraccion, formatearNota, desempenio } from "../js/nota.js";
import { obtenerRetosPorTema, nombreDelTema, temaAleatorio } from "../js/games/contenido-temas.js";

const contenedor = document.getElementById("juego-caja");
const params = new URLSearchParams(window.location.search);
const grupoId = params.get("grupo");
const esInvitado = params.get("invitado") === "1";

let usuarioActual = null;
let usuarioNombre = "";
let grupoActual = null;
let temaId = "";
let dificultad = 2;
let retosRonda = [];
let indiceActual = 0;
let puntaje = 0;

let ordenActual = [];
let ordenCorrecto = [];
let indiceArrastrado = null;
let rondaResuelta = false;
// Firebase re-emite onAuthStateChanged al refrescar el token, con el MISMO
// usuario: sin este candado la segunda emisión reiniciaba el puzzle a mitad de
// la partida y se perdía el puntaje.
let uidEnJuego = null;

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
    prepararJuego();
    renderRonda();
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
      grupoActual = await grupoJugable(grupoId, user.uid, "puzzle");
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
      temaId = params.get("tema") || temaAleatorio();
      dificultad = Number(params.get("dificultad")) || 2;
    }

    prepararJuego();
    renderRonda();
  });
}

function prepararJuego() {
  retosRonda = obtenerRetosPorTema(temaId, dificultad);
  indiceActual = 0;
  puntaje = 0;
}

const AVISO_ACCESO = {
  titulo: "No puedes jugar esta clase",
  texto: "La clase no existe, tu profesor aún no acepta tu solicitud o ya no está activa. Pide el código otra vez en la página de la materia."
};

const AVISO_CONTENIDO = {
  titulo: "Este tema no tiene retos en este nivel",
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

function renderRonda() {
  rondaResuelta = false;
  const total = retosRonda.length;

  if (!total) {
    mostrarAviso(AVISO_CONTENIDO);
    return;
  }

  const reto = retosRonda[indiceActual];
  const progreso = Math.round((indiceActual / total) * 100);

  ordenCorrecto = [...reto.pasos];
  ordenActual = mezclarDistinto(reto.pasos);

  contenedor.innerHTML = `
    <div class="juego-topbar">
      <div>
        <h1>🧩 Puzzle de Código</h1>
        <p class="juego-grupo-nombre">${grupoActual ? "Grupo: " + escapeHtml(grupoActual.nombre) : esInvitado ? "Invitado (sin guardar)" : "Modo práctica"} · ${escapeHtml(nombreDelTema(temaId))} · ${NOMBRES_DIFICULTAD[dificultad] || "Intermedio"}</p>
      </div>
      <div class="juego-grupo-nombre">Reto ${indiceActual + 1} de ${total}</div>
    </div>
    <div class="juego-progreso"><div class="juego-progreso-relleno" style="width:${progreso}%"></div></div>

    <span class="pregunta-categoria">${escapeHtml(reto.titulo)}</span>
    <p class="puzzle-descripcion">${escapeHtml(reto.descripcion)}</p>

    <ul class="puzzle-lista" id="puzzle-lista"></ul>

    <div class="resultado-acciones" id="puzzle-acciones">
      <button class="btn-accion" id="btn-comprobar">Comprobar orden</button>
      <button class="btn-secundario" id="btn-rendirse">Mostrar solución</button>
    </div>
  `;

  renderLista();
  document.getElementById("btn-comprobar").addEventListener("click", comprobarOrden);
  document.getElementById("btn-rendirse").addEventListener("click", rendirse);
}

function mezclarDistinto(pasos) {
  // Evita que el orden mezclado quede accidentalmente igual al correcto.
  let intento = mezclar(pasos);
  let vueltas = 0;
  while (intento.join("|") === pasos.join("|") && vueltas < 5) {
    intento = mezclar(pasos);
    vueltas++;
  }
  return intento;
}

function renderLista() {
  const lista = document.getElementById("puzzle-lista");
  lista.innerHTML = ordenActual
    .map(
      (paso, i) => `
      <li class="puzzle-item" draggable="${!rondaResuelta}" data-indice="${i}">
        <span class="puzzle-num">${i + 1}</span>
        <span class="puzzle-texto">${escapeHtml(paso)}</span>
        <span class="puzzle-handle">
          <button type="button" class="btn-flecha" data-mover="arriba" data-indice="${i}" aria-label="Mover arriba">▲</button>
          <button type="button" class="btn-flecha" data-mover="abajo" data-indice="${i}" aria-label="Mover abajo">▼</button>
        </span>
      </li>`
    )
    .join("");

  if (rondaResuelta) return;

  lista.querySelectorAll(".puzzle-item").forEach((item) => {
    item.addEventListener("dragstart", (e) => {
      indiceArrastrado = Number(item.dataset.indice);
      item.classList.add("arrastrando");
      e.dataTransfer.effectAllowed = "move";
    });
    item.addEventListener("dragend", () => item.classList.remove("arrastrando"));
    item.addEventListener("dragover", (e) => {
      e.preventDefault();
      item.classList.add("zona-drop");
    });
    item.addEventListener("dragleave", () => item.classList.remove("zona-drop"));
    item.addEventListener("drop", (e) => {
      e.preventDefault();
      item.classList.remove("zona-drop");
      const destino = Number(item.dataset.indice);
      if (indiceArrastrado === null || indiceArrastrado === destino) return;
      moverElemento(indiceArrastrado, destino);
      indiceArrastrado = null;
      renderLista();
    });
  });

  lista.querySelectorAll(".btn-flecha").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.indice);
      const destino = btn.dataset.mover === "arriba" ? i - 1 : i + 1;
      if (destino < 0 || destino >= ordenActual.length) return;
      moverElemento(i, destino);
      renderLista();
    });
  });
}

function moverElemento(desde, hasta) {
  const [elemento] = ordenActual.splice(desde, 1);
  ordenActual.splice(hasta, 0, elemento);
}

function comprobarOrden() {
  const esCorrecto = ordenActual.every((paso, i) => paso === ordenCorrecto[i]);
  const items = document.querySelectorAll(".puzzle-item");

  items.forEach((item, i) => {
    item.classList.remove("correcto", "incorrecto");
    item.classList.add(ordenActual[i] === ordenCorrecto[i] ? "correcto" : "incorrecto");
  });

  if (esCorrecto) {
    puntaje++;
    rondaResuelta = true;
    document.getElementById("puzzle-acciones").innerHTML = `
      <button class="btn-accion" id="btn-siguiente">Siguiente</button>
    `;
    document.getElementById("btn-siguiente").addEventListener("click", avanzar);
    document.querySelectorAll(".puzzle-item").forEach((item) => (item.draggable = false));
  }
}

function rendirse() {
  ordenActual = [...ordenCorrecto];
  rondaResuelta = true;
  renderLista();
  document.querySelectorAll(".puzzle-item").forEach((item) => item.classList.add("correcto"));
  document.getElementById("puzzle-acciones").innerHTML = `
    <button class="btn-accion" id="btn-siguiente">Siguiente</button>
  `;
  document.getElementById("btn-siguiente").addEventListener("click", avanzar);
}

function avanzar() {
  indiceActual++;
  if (indiceActual < retosRonda.length) {
    renderRonda();
  } else {
    terminarJuego();
  }
}

async function terminarJuego() {
  const total = retosRonda.length;
  const porcentaje = Math.round((puntaje / total) * 100);

  if (grupoId && grupoActual) {
    try {
      await guardarResultado({
        grupoId,
        uid: usuarioActual.uid,
        username: usuarioNombre,
        juego: "puzzle",
        puntaje,
        total
      });
    } catch (err) {
      console.error("No se pudo guardar el resultado:", err);
    }
  }

  const nota = notaDesdeFraccion(puntaje, total);
  const nivel = desempenio(nota);
  const emoji = nota >= 4.5 ? "🏆" : nota >= 4 ? "🎉" : nota >= 3 ? "🙂" : "💪";
  const mensaje =
    nota >= 4
      ? "¡Piensas como toda una programadora/programador!"
      : nota >= 3
      ? "¡Buen trabajo ordenando los pasos!"
      : "Sigue practicando el orden lógico de los pasos.";

  contenedor.innerHTML = `
    <div class="resultado-final">
      <div class="resultado-emoji">${emoji}</div>
      <h2>Resolviste ${puntaje} de ${total} retos (${porcentaje}%)</h2>
      <p class="resultado-nota">Nota: <strong>${formatearNota(nota)}</strong> / 5,0
        <span class="nota-nivel nota-nivel--${nivel.clase}">${nivel.nombre}</span></p>
      <p>${mensaje}</p>
      <div class="resultado-acciones">
        <button class="btn-accion" id="btn-jugar-de-nuevo">Jugar de nuevo</button>
        <button class="btn-secundario" id="btn-volver">Volver</button>
      </div>
    </div>`;

  document.getElementById("btn-jugar-de-nuevo").addEventListener("click", () => {
    prepararJuego();
    renderRonda();
  });
  document.getElementById("btn-volver").addEventListener("click", () => volverA(rutaVolver()));
}

iniciar();
