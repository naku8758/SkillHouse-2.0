// js/portada.js
// Los números de la portada salen del catálogo real (js/catalogo.js), no de
// cifras inventadas. Antes decía "20+ maestros / 150+ estudiantes": además de
// falso, la página pública no puede leer Firestore, porque las reglas piden
// sesión para cualquier colección. Así que la portada presume lo que sí se
// puede comprobar: las materias, los temas y los juegos que existen hoy.
//
// Se cargó solo catalogo.js (4 KB) y no el banco de preguntas (190 KB): la
// portada no necesita las preguntas para contar los temas.

import { MATERIAS, MATERIAS_PROXIMAS, JUEGOS } from "./catalogo.js";

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

const totalTemas = MATERIAS.reduce((suma, materia) => suma + materia.temas.length, 0);

document.getElementById("grid-temas").innerHTML = MATERIAS.map(
  (materia) => `
    <div class="nivel-card">
      <div class="nivel-icono">${escapar(materia.icono)}</div>
      <h3>${escapar(materia.nombre)}</h3>
      <p>${escapar(materia.descripcion)}</p>
      <div class="nivel-estrellas">${materia.temas.length} temas · 3 niveles</div>
    </div>`
).join("");

document.getElementById("grid-juegos").innerHTML = JUEGOS.map(
  (juego) => `
    <div class="juego-card">
      <div class="juego-icono">${escapar(juego.icono)}</div>
      <h3>${escapar(juego.nombre)}</h3>
      <p>${escapar(juego.descripcion)}</p>
    </div>`
).join("");

document.getElementById("stats-portada").innerHTML = `
  <div>
    <h3><span data-count="${MATERIAS.length}">0</span></h3>
    <p>Materias con juegos</p>
  </div>
  <div>
    <h3><span data-count="${totalTemas}">0</span></h3>
    <p>Temas para practicar</p>
  </div>
  <div>
    <h3><span data-count="${JUEGOS.length}">0</span></h3>
    <p>Formas de jugar</p>
  </div>
  <div>
    <h3><span data-count="${MATERIAS_PROXIMAS.length}">0</span></h3>
    <p>Materias por llegar</p>
  </div>`;
