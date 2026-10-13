// js/invitado.js
// Permite elegir materia, tema y dificultad, y lanzar cualquiera de los 3
// juegos SIN iniciar sesión. No importa nada de Firebase Auth a propósito:
// este flujo nunca necesita saber quién es el usuario.

import { MATERIAS, obtenerMateria } from "./catalogo.js";

const RUTA_JUEGO = {
  quiz: "juegos/quiz.html",
  puzzle: "juegos/puzzle.html",
  carrera: "juegos/carrera.html"
};

const selectMateria = document.getElementById("select-materia-invitado");
const selectTema = document.getElementById("select-tema-invitado");
const selectDificultad = document.getElementById("select-dificultad-invitado");

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

function poblarMaterias() {
  selectMateria.innerHTML = MATERIAS.map(
    (materia) => `<option value="${escapeHtml(materia.id)}">${escapeHtml(materia.nombre)}</option>`
  ).join("");
}

function poblarTemas() {
  const materia = obtenerMateria(selectMateria.value);
  selectTema.innerHTML = (materia?.temas || [])
    .map((tema) => `<option value="${escapeHtml(tema.id)}">${escapeHtml(tema.nombre)}</option>`)
    .join("");
}

poblarMaterias();
poblarTemas();
selectMateria.addEventListener("change", poblarTemas);

document.querySelectorAll("[data-juego-invitado]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const juego = btn.dataset.juegoInvitado;
    const tema = selectTema.value;
    const dificultad = selectDificultad.value;
    const ruta = RUTA_JUEGO[juego];
    if (!ruta) return;
    window.location.href = `${ruta}?invitado=1&tema=${encodeURIComponent(tema)}&dificultad=${encodeURIComponent(dificultad)}`;
  });
});
