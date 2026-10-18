// js/portada.js
// Las cifras de la portada salen del catálogo real (js/catalogo.js), no de
// números inventados. La página pública tampoco puede leer Firestore: las
// reglas piden sesión para cualquier colección. Lo que se muestra es lo que sí
// se puede comprobar, y si el colegio agrega un tema la portada sube sola.
//
// Se carga solo catalogo.js y malla.js, no los bancos de preguntas: para contar
// los temas no hacen falta las preguntas.

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

document.getElementById("grid-temas").innerHTML = MATERIAS.map(
  (materia) => `
    <div class="nivel-card">
      <div class="nivel-icono">${escapar(materia.icono)}</div>
      <h3>${escapar(materia.nombre)}</h3>
      <p>${escapar(materia.descripcion)}</p>
      <div class="nivel-meta">${temasDe(materia)} temas · ${materia.ejes.length} ejes · 3 niveles</div>
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

const cifra = (valor, etiqueta) => `
  <div>
    <dt><span data-count="${valor}">0</span></dt>
    <dd>${escapar(etiqueta)}</dd>
  </div>`;

document.getElementById("stats-portada").innerHTML = [
  cifra(MATERIAS.length, "Áreas con práctica"),
  cifra(totalTemas(), "Temas disponibles"),
  cifra(GRADOS.length, "Grados con contenido propio"),
  cifra(JUEGOS.length, "Modalidades de juego")
].join("");

