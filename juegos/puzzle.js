// juegos/puzzle.js
// Juego "Puzzle de Código". El estudiante reordena pasos de un algoritmo
// arrastrándolos (o con las flechas ▲▼, para que funcione también en
// tablets/celulares). Puede jugarse en modo práctica o dentro de un grupo
// (?grupo=ID), en cuyo caso el resultado final se guarda en Firestore.

import { auth, db } from "../js/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { obtenerGrupo, guardarResultado } from "../js/grupos.js";
import { RETOS } from "../js/games/puzzle-data.js";

const CANTIDAD_RONDAS = 5;

const contenedor = document.getElementById("juego-caja");
const params = new URLSearchParams(window.location.search);
const grupoId = params.get("grupo");

let usuarioActual = null;
let usuarioNombre = "";
let grupoActual = null;
let retosRonda = [];
let indiceActual = 0;
let puntaje = 0;

let ordenActual = [];
let ordenCorrecto = [];
let indiceArrastrado = null;
let rondaResuelta = false;

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
      if (!grupoActual || grupoActual.juego !== "puzzle") {
        mostrarErrorGrupo();
        return;
      }
    }

    prepararJuego();
    renderRonda();
  });
}

function prepararJuego() {
  const cantidad = Math.min(CANTIDAD_RONDAS, RETOS.length);
  retosRonda = mezclar(RETOS).slice(0, cantidad);
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

function renderRonda() {
  rondaResuelta = false;
  const total = retosRonda.length;
  const reto = retosRonda[indiceActual];
  const progreso = Math.round((indiceActual / total) * 100);

  ordenCorrecto = [...reto.pasos];
  ordenActual = mezclarDistinto(reto.pasos);

  contenedor.innerHTML = `
    <div class="juego-topbar">
      <div>
        <h1>🧩 Puzzle de Código</h1>
        <p class="juego-grupo-nombre">${grupoActual ? "Grupo: " + escapeHtml(grupoActual.nombre) : "Modo práctica"}</p>
      </div>
      <div class="juego-grupo-nombre">Reto ${indiceActual + 1} de ${total}</div>
    </div>
    <div class="juego-progreso"><div class="juego-progreso-relleno" style="width:${progreso}%"></div></div>

    <span class="pregunta-categoria">${escapeHtml(reto.titulo)}</span>
    <p class="puzzle-descripcion">${escapeHtml(reto.descripcion)}</p>

    <ul class="puzzle-lista" id="puzzle-lista"></ul>

    <div class="resultado-acciones" id="puzzle-acciones">
      <button class="btn-accion" id="btn-comprobar">✅ Comprobar orden</button>
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
      <button class="btn-accion" id="btn-siguiente">Siguiente →</button>
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
    <button class="btn-accion" id="btn-siguiente">Siguiente →</button>
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

  const emoji = porcentaje >= 80 ? "🏆" : porcentaje >= 50 ? "🙂" : "💪";
  const mensaje =
    porcentaje >= 80
      ? "¡Piensas como toda una programadora/programador!"
      : porcentaje >= 50
      ? "¡Buen trabajo ordenando los pasos!"
      : "Sigue practicando el orden lógico de los pasos.";

  contenedor.innerHTML = `
    <div class="resultado-final">
      <div class="resultado-emoji">${emoji}</div>
      <h2>Resolviste ${puntaje} de ${total} retos (${porcentaje}%)</h2>
      <p>${mensaje}</p>
      <div class="resultado-acciones">
        <button class="btn-accion" id="btn-jugar-de-nuevo">🔁 Jugar de nuevo</button>
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
