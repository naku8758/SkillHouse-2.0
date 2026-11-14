// js/games/iconos.js
// Iconos SVG compartidos por los tres juegos. Se dibujan con trazo y
// currentColor para que hereden el color de cada contexto (cabecera, aviso,
// resultado) sin depender de emojis ni de imágenes externas.

function icono(contenido) {
  return `<svg class="icono-juego" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${contenido}</svg>`;
}

export const ICONOS = {
  quiz: icono(
    '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l2.5-3A8.5 8.5 0 1 1 21 11.5z"/><path d="M9.6 8.8a2.4 2.4 0 1 1 3.7 2c-.8.6-1.3 1.1-1.3 2.2"/><path d="M12 16h.01"/>'
  ),
  puzzle: icono(
    '<path d="M9 3h6v4a2 2 0 1 0 4 0h2v6h-4a2 2 0 1 0 0 4h4v4h-6v-2a2 2 0 1 0-4 0v2H3v-6h2a2 2 0 1 0 0-4H3V5h6z"/>'
  ),
  carrera: icono(
    '<path d="M12 3c3.5 3 5.5 7 5.5 11.5 0 2-.4 3.8-1.2 5.5H7.7a12.7 12.7 0 0 1-1.2-5.5C6.5 10 8.5 6 12 3z"/><circle cx="12" cy="10" r="2.2"/><path d="M7.7 15.5 4 20l4.5-.8"/><path d="m16.3 15.5 3.7 4.5-4.5-.8"/><path d="M10 22h4"/>'
  ),
  aviso: icono(
    '<path d="M10.3 3.9 1.9 18a2 2 0 0 0 1.7 3h16.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>'
  ),
  reloj: icono(
    '<path d="M6 3h12"/><path d="M6 21h12"/><path d="M8 3v4a4 4 0 0 0 8 0V3"/><path d="M8 21v-4a4 4 0 0 1 8 0v4"/>'
  ),
  candado: icono(
    '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path d="M12 15v2"/>'
  ),
  trofeo: icono(
    '<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4v2a3 3 0 0 0 3 3"/><path d="M17 6h3v2a3 3 0 0 1-3 3"/>'
  ),
  estrella: icono(
    '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z"/>'
  ),
  sonrisa: icono(
    '<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01"/><path d="M15 9.5h.01"/>'
  ),
  objetivo: icono(
    '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M2 12h2"/><path d="M20 12h2"/>'
  ),
  meta: icono('<path d="M5 21V4"/><path d="M5 4h12l-2.5 4L17 12H5"/>'),
  altavoz: icono(
    '<path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>'
  ),
  arriba: icono('<path d="m6 15 6-6 6 6"/>'),
  abajo: icono('<path d="m6 9 6 6 6-6"/>')
};

/** Icono de resultado según el desempeño institucional. */
export function iconoResultado(clase) {
  if (clase === "superior") return ICONOS.trofeo;
  if (clase === "alto") return ICONOS.estrella;
  if (clase === "basico") return ICONOS.sonrisa;
  return ICONOS.objetivo;
}
