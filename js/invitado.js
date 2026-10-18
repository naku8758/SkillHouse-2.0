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

const GRADO_por_DEFECTO = 6;

const selectGrado = document.getElementById("select-grado-invitado");
const selectMateria = document.getElementById("select-materia-invitado");
const selectTema = document.getElementById("select-tema-invitado");
const selectDificultad = document.getElementById("select-dificultad-invitado");

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

function gradoElegido() {
  return Number(selectGrado.value) || GRADO_por_DEFECTO;
}

function poblarGrados() {
  selectGrado.innerHTML = GRADOS.map(
    (grado) => `<option value="${grado}"${grado === GRADO_por_DEFECTO ? " selected" : ""}>${grado}°</option>`
  ).join("");
}

function poblarMaterias() {
  const grado = gradoElegido();
  const anterior = selectMateria.value;
  const areas = materiasDelGrado(grado);
  selectMateria.innerHTML = areas.map(
    (materia) => `<option value="${escapeHtml(materia.id)}">${escapeHtml(materia.icono)} ${escapeHtml(materia.nombre)}</option>`
  ).join("");
  // Si el área elegida se dicta también en el nuevo grado, se conserva.
  if (areas.some((m) => m.id === anterior)) selectMateria.value = anterior;
}

function poblarTemas() {
  const grado = gradoElegido();
  const materia = obtenerMateria(selectMateria.value);
  const temas = materia ? temasDelGrado(grado, { materiaId: materia.id }) : [];
  selectTema.innerHTML = temas
    .map((tema) => `<option value="${escapeHtml(tema.id)}">${escapeHtml(tema.nombre)}</option>`)
    .join("");
  selectTema.disabled = !temas.length;
}

function avisarSinContenido() {
  const nota = document.getElementById("aviso-ciclo-invitado");
  if (!nota) return;
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

poblarGrados();
poblarMaterias();
poblarTemas();
avisarSinContenido();

selectGrado.addEventListener("change", () => {
  poblarMaterias();
  poblarTemas();
  avisarSinContenido();
});
selectMateria.addEventListener("change", poblarTemas);

document.querySelectorAll("[data-juego-invitado]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const juego = btn.dataset.juegoInvitado;
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
