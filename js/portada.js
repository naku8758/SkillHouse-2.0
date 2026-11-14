// js/portada.js
// La portada se arma con el catálogo real (js/catalogo.js). Las cifras, los
// nombres de las áreas y las descripciones salen de ahí; las mascotas y los
// iconos son la capa visual de esta landing. Si el colegio agrega un área o un
// tema, la portada sube sola.

import { plural } from "./plural.js";
import { MATERIAS, JUEGOS, totalTemas } from "./catalogo.js";
import { GRADOS } from "./malla.js";

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

/** Temas de un área: la suma de los ciclos publicados en cada eje. */
function temasDe(materia) {
  return materia.ejes.reduce((suma, eje) => suma + Object.keys(eje.ciclos).length, 0);
}

/* ------------------------------------------------------------------ */
/* Iconos de línea: un solo trazo, 24×24, para que las 14 áreas se     */
/* lean como un mismo sistema y no como catorce emojis distintos.      */
/* ------------------------------------------------------------------ */
const svg = (contenido) => `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${contenido}</svg>`;

const ICONOS = {
  matematicas: svg(`<path d="M3 20h18"/><path d="m7 20 5-13 5 13"/><path d="M9.4 14h5.2"/>`),
  espanol: svg(`<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"/>`),
  ingles: svg(`<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l2.5-3A8.5 8.5 0 1 1 21 11.5z"/><path d="m9 14 3-7 3 7"/><path d="M10.2 11.5h3.6"/>`),
  "ciencias-naturales": svg(`<path d="M9 3h6"/><path d="M10 3v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3"/><path d="M7.5 15h9"/>`),
  "ciencias-sociales": svg(`<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z"/>`),
  tecnologia: svg(`<path d="m8 8-4 4 4 4"/><path d="m16 8 4 4-4 4"/><path d="m13.5 5-3 14"/>`),
  "educacion-artistica": svg(`<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2 0-1.5 1-2 2.5-2H19a2 2 0 0 0 2-2 9 9 0 0 0-9-12z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="14" cy="7" r="1"/><circle cx="16.5" cy="10.5" r="1"/>`),
  "educacion-fisica": svg(`<circle cx="12" cy="12" r="9"/><path d="M12 3a6 6 0 0 0 0 18a6 6 0 0 0 0-18z"/><path d="M3 12h18"/>`),
  "etica-valores": svg(`<path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>`),
  religion: svg(`<path d="M4 21V10a8 8 0 0 1 16 0v11"/><path d="M8 21v-9a4 4 0 0 1 8 0v9"/>`),
  filosofia: svg(`<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V18h5v-2.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>`),
  economia: svg(`<path d="M4 20V4"/><path d="M4 20h16"/><path d="m7 15 4-4 3 3 5-6"/><path d="M16 8h3v3"/>`),
  "ciencias-politicas": svg(`<path d="M3 21h18"/><path d="M5 21V9h14v12"/><path d="M3 9h18"/><path d="M8 9V5h8v4"/><path d="M9 13h.01M15 13h.01M9 17h.01M15 17h.01"/>`),
  orientacion: svg(`<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>`)
};

/* Mascotas: las diez que ya viven en imag/. Se reutilizan con variantes
   distintas para que ninguna tarjeta se sienta repetida. */
const MASCOTAS = {
  matematicas: "zorro_2",
  espanol: "buho_2",
  ingles: "jirafa_1",
  "ciencias-naturales": "sapo_2",
  "ciencias-sociales": "elefante_1",
  tecnologia: "raton_2",
  "educacion-artistica": "ardilla_1",
  "educacion-fisica": "cocodrilo_2",
  "etica-valores": "osopanda_1",
  religion: "zorrillo_2",
  filosofia: "buho_1",
  economia: "ardilla_2",
  "ciencias-politicas": "elefante_2",
  orientacion: "zorro_1"
};

const ACENTOS = {
  matematicas: "#8B6BFF",
  espanol: "#5B2EFF",
  ingles: "#23AAED",
  "ciencias-naturales": "#3476D3",
  "ciencias-sociales": "#D04CF1",
  tecnologia: "#23AAED",
  "educacion-artistica": "#D04CF1",
  "educacion-fisica": "#5B2EFF",
  "etica-valores": "#3476D3",
  religion: "#8B6BFF",
  filosofia: "#D04CF1",
  economia: "#23AAED",
  "ciencias-politicas": "#5B2EFF",
  orientacion: "#3476D3"
};

const TINTES = {
  "#5B2EFF": "rgba(91,46,255,.11)",
  "#8B6BFF": "rgba(139,107,255,.16)",
  "#23AAED": "rgba(35,170,237,.13)",
  "#D04CF1": "rgba(208,76,241,.11)",
  "#3476D3": "rgba(52,118,211,.11)"
};

const FEATURES = new Set(["matematicas", "tecnologia"]);

/* ------------------------------------------------------------------ */
/* Tarjetas de área                                                    */
/* ------------------------------------------------------------------ */
const tarjetas = MATERIAS.map((materia, indice) => {
  const mascota = MASCOTAS[materia.id] || "buho_1";
  const acento = ACENTOS[materia.id] || "#5B2EFF";
  const tinte = TINTES[acento] || "rgba(91,46,255,.11)";
  const feature = FEATURES.has(materia.id) ? " tema-card--feature" : "";
  const numero = String(indice + 1).padStart(2, "0");

  return `
    <a class="tema-card tema-card--${materia.id}${feature} reveal"
       href="invitado.html?materia=${encodeURIComponent(materia.id)}#selector"
       data-materia="${escapar(materia.id)}"
       style="--accent:${acento}; --tint:${tinte}; --reveal-delay:${indice * 32}ms"
       aria-label="Jugar ${escapar(materia.nombre)} como invitado">
      <div class="tema-card__top">
        <span class="tema-card__icon">${ICONOS[materia.id] || ICONOS.espanol}</span>
        <span class="tema-card__tools">
          <span class="tema-card__num" aria-hidden="true">${numero}</span>
          <span class="tema-card__arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>
          </span>
        </span>
      </div>

      <h3>${escapar(materia.nombre)}</h3>
      <p>${escapar(materia.descripcion)}</p>

      <div class="tema-card__meta">
        <span>${plural(materia.ejes.length, "eje")}</span>
        <span>${plural(temasDe(materia), "tema")}</span>
      </div>

      <span class="tema-card__pet" aria-hidden="true">
        <img src="imag/${mascota}.png" alt="" width="220" height="200" loading="lazy" decoding="async">
      </span>
    </a>`;
}).join("");

document.getElementById("grid-temas").innerHTML = tarjetas;

/* ------------------------------------------------------------------ */
/* Marquee de áreas                                                    */
/* ------------------------------------------------------------------ */
const estrella = `
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="m12 2 2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6L12 2Z"/>
  </svg>`;

const itemsMarquee = MATERIAS.map((materia, indice) => `
  <li class="marquee__item">
    <span class="marquee__icon">${ICONOS[materia.id] || ICONOS.espanol}</span>
    <span>${escapar(materia.nombre)}</span>
  </li>
  ${indice < MATERIAS.length - 1 ? `<li class="marquee__star" aria-hidden="true">${estrella}</li>` : ""}
`).join("");

const marquee = document.getElementById("marquee-temas");
const marqueeClon = document.getElementById("marquee-temas-clon");
if (marquee) marquee.innerHTML = itemsMarquee;
if (marqueeClon) marqueeClon.innerHTML = itemsMarquee;

/* ------------------------------------------------------------------ */
/* Juegos: cada uno con una mini-escena propia                         */
/* ------------------------------------------------------------------ */
const ETIQUETAS = {
  quiz: "Razonamiento",
  puzzle: "Lógica",
  carrera: "Velocidad"
};

const ESCENAS = {
  quiz: `
    <div class="scene scene--quiz" aria-hidden="true">
      <div class="quiz-window">
        <div class="quiz-window__bar"><span></span><span></span><span></span></div>
        <div class="quiz-window__body">
          <span class="quiz-window__tag">Pregunta 3 de 10</span>
          <div class="quiz-window__question">
            <span class="quiz-window__line"></span>
            <span class="quiz-window__line quiz-window__line--short"></span>
          </div>
          <div class="quiz-options">
            <div class="quiz-option"><span class="quiz-option__key">A</span><span class="quiz-option__text"></span></div>
            <div class="quiz-option is-correct">
              <span class="quiz-option__key">B</span>
              <span class="quiz-option__text"></span>
              <svg class="quiz-option__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4 10-10"/></svg>
            </div>
            <div class="quiz-option"><span class="quiz-option__key">C</span><span class="quiz-option__text"></span></div>
          </div>
          <div class="quiz-progress"><span></span></div>
        </div>
      </div>
      <div class="quiz-timer"><span>12</span></div>
      <div class="quiz-spark">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6L12 2Z"/></svg>
        +10
      </div>
    </div>`,

  puzzle: `
    <div class="scene scene--puzzle" aria-hidden="true">
      <div class="puzzle-board">
        <div class="puzzle-slot"><span></span></div>
        <div class="puzzle-row">
          <span class="puzzle-grip"></span>
          <span class="puzzle-bar puzzle-bar--violet puzzle-bar--w2"></span>
        </div>
        <div class="puzzle-row is-dragging">
          <span class="puzzle-grip"></span>
          <span class="puzzle-bar puzzle-bar--w1"></span>
        </div>
        <div class="puzzle-row">
          <span class="puzzle-grip"></span>
          <span class="puzzle-bar puzzle-bar--pink puzzle-bar--w3"></span>
        </div>
        <div class="puzzle-row">
          <span class="puzzle-grip"></span>
          <span class="puzzle-bar puzzle-bar--violet puzzle-bar--w4"></span>
        </div>
      </div>
      <span class="puzzle-chip">1 / 4</span>
      <svg class="puzzle-cursor" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5 3l14 7-6 2-2 6-6-15z"/>
      </svg>
    </div>`,

  carrera: `
    <div class="scene scene--carrera" aria-hidden="true">
      <div class="carrera-stars"></div>
      <div class="carrera-track"></div>
      <svg class="carrera-rocket" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path class="carrera-flame" d="M32 56c-4-5-6-9-6-13h12c0 4-2 8-6 13Z" fill="#FFD166"/>
        <path d="M32 4c8 7 12 16 12 27 0 5-1 9-3 13H23c-2-4-3-8-3-13C20 20 24 11 32 4Z" fill="currentColor"/>
        <circle cx="32" cy="23" r="5" fill="#0A0B24"/>
        <path d="M20 34 12 44l10-1M44 34l8 10-10-1" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
      </svg>
      <div class="carrera-chip"><span>3</span> · 2 · 1</div>
      <div class="carrera-speed"></div>
      <div class="carrera-planet"></div>
    </div>`
};

const juegos = JUEGOS.map((juego, indice) => `
  <a class="game-card game-card--${juego.id} reveal"
     href="invitado.html?juego=${encodeURIComponent(juego.id)}#selector"
     data-juego="${escapar(juego.id)}"
     style="--reveal-delay:${indice * 90}ms"
     aria-label="Jugar ${escapar(juego.nombre)} como invitado">
    <div class="game-card__visual">${ESCENAS[juego.id] || ESCENAS.quiz}</div>
    <div class="game-card__content">
      <span class="game-card__tag">${escapar(ETIQUETAS[juego.id] || "Juego")}</span>
      <h3>${escapar(juego.nombre)}</h3>
      <p>${escapar(juego.descripcion)}</p>
      <span class="game-card__cta">
        Jugar ahora
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
      </span>
    </div>
  </a>`).join("");

document.getElementById("grid-juegos").innerHTML = juegos;

/* ------------------------------------------------------------------ */
/* Cifras reales                                                       */
/* ------------------------------------------------------------------ */
const cifra = (valor, etiqueta) => `
  <div class="stat">
    <dt><span data-count="${valor}">${valor}</span></dt>
    <dd>${escapar(etiqueta)}</dd>
  </div>`;

document.getElementById("stats-portada").innerHTML = [
  cifra(MATERIAS.length, "Áreas con práctica"),
  cifra(totalTemas(), "Temas disponibles"),
  cifra(GRADOS.length, "Grados con contenido propio"),
  cifra(JUEGOS.length, "Modalidades de juego")
].join("");
