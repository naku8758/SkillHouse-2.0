// js/games/ajustes.js
// Lo que cambia en la pantalla según el ciclo del tema que se está jugando.
//
// El banco (js/games/banco.js) ya recorta la cantidad de opciones y el tamaño
// de la ronda. Aquí va la parte que se ve y se oye: letra más grande en los
// grados pequeños, sin reloj en 1° y 2°, y la pregunta leída en voz alta para
// quien todavía no lee fluido. Un tema lleva su ciclo en el identificador
// (...--c3), así que con el tema ya bastan estas tres funciones: no hace falta
// que el juego sepa el curso del niño.

import { cicloDelTema } from "../catalogo.js";
import { ajustesDeCiclo } from "../malla.js";

export function cicloDe(temaId) {
  return cicloDelTema(temaId) || "c3";
}

export function ajustesDe(temaId) {
  return ajustesDeCiclo(cicloDe(temaId));
}

/** La clase de css/juegos.css que agranda la letra del ciclo correspondiente. */
export function aplicarCiclo(contenedor, temaId) {
  contenedor.classList.remove("ciclo-c1", "ciclo-c2", "ciclo-c3", "ciclo-c4", "ciclo-c5");
  contenedor.classList.add(cicloDe(temaId));
}

export function hayVoz() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function detenerVoz() {
  if (hayVoz()) window.speechSynthesis.cancel();
}

/**
 * Lee un texto en español. Con voz configurada devuelve true para que el juego
 * muestre el botón de repetir; si el navegador no tiene voces latinas (o no
 * tiene síntesis) el botón simplemente no aparece.
 */
export function hablar(texto) {
  if (!hayVoz() || !texto) return false;
  const sintesis = window.speechSynthesis;
  sintesis.cancel();
  const voz = new SpeechSynthesisUtterance(String(texto));
  voz.lang = "es-CO";
  voz.rate = 0.85;
  voz.pitch = 1;
  const disponible = sintesis.getVoices().find((v) => /^es/i.test(v.lang));
  if (disponible) voz.voice = disponible;
  sintesis.speak(voz);
  return true;
}

/** Botón para volver a escuchar la pregunta. */
export function botonVoz(texto) {
  if (!hayVoz()) return "";
  return `<button type="button" class="btn-voz" id="btn-escuchar" aria-label="Escuchar la pregunta">🔊 Escuchar</button>`;
}

/** Conecta el botón de voz con el texto actual de la pregunta. */
export function conectarVoz(texto) {
  const boton = document.getElementById("btn-escuchar");
  if (!boton) return;
  boton.addEventListener("click", () => hablar(texto));
}
