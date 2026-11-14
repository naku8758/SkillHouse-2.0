// js/invitado.js
// Permite elegir grado, área, tema y dificultad, y lanzar cualquiera de los 3
// juegos SIN iniciar sesión. No importa nada de Firebase Auth a propósito:
// este flujo nunca necesita saber quién es el usuario.
//
// El grado es obligatorio en este modo porque es lo que en una clase real trae
// el curso: sin él no se sabría qué banda de contenido mostrar. Cada tema lleva
// su ciclo en el identificador, así que el juego recibe el tema y con eso ya
// sabe cuántas opciones, cuántas preguntas y si debe leer en voz alta.

import { obtenerMateria, materiasDelGrado, temasDelGrado, rutaDeJuego } from "./catalogo.js";
import { GRADOS, cicloDeGrado } from "./malla.js";

const GRADO_POR_DEFECTO = 6;
const PARAMS = new URLSearchParams(window.location.search);

const selectGrado = document.getElementById("select-grado-invitado");
const selectMateria = document.getElementById("select-materia-invitado");
const selectTema = document.getElementById("select-tema-invitado");
const selectDificultad = document.getElementById("select-dificultad-invitado");
const botonesJuego = Array.from(document.querySelectorAll("[data-juego-invitado]"));

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

function gradoElegido() {
  return Number(selectGrado.value) || GRADO_POR_DEFECTO;
}

function opcionesDe(select) {
  return Array.from(select.options).map((opcion) => opcion.value);
}

function poblarGrados() {
  selectGrado.innerHTML = GRADOS.map(
    (grado) => `<option value="${grado}"${grado === GRADO_POR_DEFECTO ? " selected" : ""}>${grado}°</option>`
  ).join("");
}

function poblarMaterias() {
  const grado = gradoElegido();
  const anterior = selectMateria.value;
  const areas = materiasDelGrado(grado);
  selectMateria.innerHTML = areas
    .map((materia) => `<option value="${escapeHtml(materia.id)}">${escapeHtml(materia.nombre)}</option>`)
    .join("");
  // Si el área elegida se dicta también en el nuevo grado, se conserva.
  if (areas.some((materia) => materia.id === anterior)) selectMateria.value = anterior;
}

function poblarTemas() {
  const grado = gradoElegido();
  const materia = obtenerMateria(selectMateria.value);
  const temas = materia ? temasDelGrado(grado, { materiaId: materia.id }) : [];
  selectTema.innerHTML = temas
    .map((tema) => `<option value="${escapeHtml(tema.id)}">${escapeHtml(tema.nombre)}</option>`)
    .join("");
  selectTema.disabled = temas.length === 0;
}

function hayTemaDisponible() {
  return !selectTema.disabled && selectTema.options.length > 0 && Boolean(selectTema.value);
}

function actualizarEstadoJuegos() {
  const disponible = hayTemaDisponible();
  botonesJuego.forEach((boton) => {
    boton.disabled = !disponible;
    if (disponible) {
      boton.removeAttribute("title");
    } else {
      boton.title = "Elige un tema para poder jugar";
    }
  });
}

function avisarCiclo() {
  const nota = document.getElementById("aviso-ciclo-invitado");
  if (!nota) return;

  if (!hayTemaDisponible()) {
    nota.textContent =
      "No hay temas disponibles para esta combinación. Prueba con otra materia o con otro grado.";
    return;
  }

  const ciclo = cicloDeGrado(gradoElegido());
  nota.textContent =
    ciclo === "c1"
      ? "En 1° y 2° el juego muestra 2 opciones, hasta 6 preguntas, sin reloj, y lee cada pregunta en voz alta."
      : ciclo === "c2"
      ? "En 3° a 5°: 3 opciones, hasta 8 preguntas, 24 segundos por pregunta y lectura en voz alta."
      : ciclo === "c3"
      ? "En 6° y 7°: 4 opciones, hasta 10 preguntas y 18 segundos por pregunta."
      : ciclo === "c4"
      ? "En 8° y 9°: 4 opciones, hasta 10 preguntas y 14 segundos por pregunta."
      : "En 10° y 11°: 4 opciones, hasta 12 preguntas y 11 segundos por pregunta.";
}

function marcarJuegoPreferido() {
  const juego = PARAMS.get("juego");
  if (!juego) return;
  const boton = botonesJuego.find((candidato) => candidato.dataset.juegoInvitado === juego);
  if (boton) boton.classList.add("is-preferred");
}

function aplicarParametrosIniciales() {
  poblarGrados();

  const gradoUrl = Number(PARAMS.get("grado"));
  if (GRADOS.includes(gradoUrl)) selectGrado.value = String(gradoUrl);

  poblarMaterias();
  const materiaUrl = PARAMS.get("materia");
  if (materiaUrl && opcionesDe(selectMateria).includes(materiaUrl)) {
    selectMateria.value = materiaUrl;
  }

  poblarTemas();
  const temaUrl = PARAMS.get("tema");
  if (temaUrl && opcionesDe(selectTema).includes(temaUrl)) {
    selectTema.value = temaUrl;
  }

  const dificultadUrl = Number(PARAMS.get("dificultad"));
  if ([1, 2, 3].includes(dificultadUrl)) {
    selectDificultad.value = String(dificultadUrl);
  }

  marcarJuegoPreferido();
  actualizarEstadoJuegos();
  avisarCiclo();
}

aplicarParametrosIniciales();

selectGrado.addEventListener("change", () => {
  poblarMaterias();
  poblarTemas();
  actualizarEstadoJuegos();
  avisarCiclo();
});

selectMateria.addEventListener("change", () => {
  poblarTemas();
  actualizarEstadoJuegos();
  avisarCiclo();
});

selectTema.addEventListener("change", actualizarEstadoJuegos);

botonesJuego.forEach((boton) => {
  boton.addEventListener("click", () => {
    if (boton.disabled) return;

    const juego = boton.dataset.juegoInvitado;
    const tema = selectTema.value;
    if (!juego || !tema) return;

    const url = new URL(rutaDeJuego(juego, ""), window.location.href);
    url.searchParams.set("invitado", "1");
    url.searchParams.set("tema", tema);
    url.searchParams.set("dificultad", selectDificultad.value);
    url.searchParams.set("m", selectMateria.value);
    url.searchParams.set("grado", String(gradoElegido()));
    window.location.href = url.toString();
  });
});

/* ---------------------- MODAL DE INGRESO ---------------------- */
// scripts.js expone abrirModal/cerrarModal para toda la app. Aquí se
// envuelven solo para el modal de login: foco atrapado, Escape, fondo
// clicable y aria-hidden sincronizado.
const modalLogin = document.getElementById("modal-login");
const SELECTOR_ENFOCABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
let ultimoFoco = null;

function abrirLogin() {
  if (!modalLogin) return;
  ultimoFoco = document.activeElement;
  modalLogin.style.display = "flex";
  modalLogin.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.addEventListener("keydown", manejarTecladoModal);

  window.requestAnimationFrame(() => {
    const primero = modalLogin.querySelector("#login-email") || modalLogin.querySelector(SELECTOR_ENFOCABLE);
    if (primero) primero.focus();
  });
}

function cerrarLogin() {
  if (!modalLogin) return;
  modalLogin.style.display = "none";
  modalLogin.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  document.removeEventListener("keydown", manejarTecladoModal);

  if (ultimoFoco && typeof ultimoFoco.focus === "function" && document.contains(ultimoFoco)) {
    ultimoFoco.focus();
  }
}

function manejarTecladoModal(evento) {
  if (evento.key === "Escape") {
    evento.preventDefault();
    cerrarLogin();
    return;
  }
  if (evento.key !== "Tab") return;

  const enfocables = Array.from(modalLogin.querySelectorAll(SELECTOR_ENFOCABLE)).filter(
    (elemento) => elemento.offsetParent !== null
  );
  if (enfocables.length === 0) return;

  const primero = enfocables[0];
  const ultimo = enfocables[enfocables.length - 1];

  if (evento.shiftKey && document.activeElement === primero) {
    evento.preventDefault();
    ultimo.focus();
  } else if (!evento.shiftKey && document.activeElement === ultimo) {
    evento.preventDefault();
    primero.focus();
  }
}

if (modalLogin) {
  window.abrirModal = function (id) {
    if (id === "modal-login") abrirLogin();
  };
  window.cerrarModal = function (id) {
    if (id === "modal-login") cerrarLogin();
  };

  modalLogin.addEventListener("click", (evento) => {
    if (evento.target === modalLogin) cerrarLogin();
  });
}

/* ---------------------- DETALLES DE LA PÁGINA ---------------------- */
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());
