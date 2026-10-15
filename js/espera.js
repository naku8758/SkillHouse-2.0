// js/espera.js
// Pantallas que comparten los tres juegos cuando el estudiante llega a la
// clase antes de que el profesor la inicie, o después de cerrarla.
//
// Está separado de js/sala.js porque aquí solo se dibuja interfaz; la sala
// manda el estado.

import { escucharEstadoSala, estadoDeSala, SALA } from "./sala.js";

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

function rutaSala(grupoId, materiaId) {
  return `../interfaz-estudiante/sala.html?g=${encodeURIComponent(grupoId)}` +
    (materiaId ? `&m=${encodeURIComponent(materiaId)}` : "");
}

/**
 * "El profe aún no empieza". Se recarga la página en cuanto la sala pasa a
 * abierta: el estudiante no tiene que estar pulsando F5 y el juego vuelve a
 * validar solo, con la escucha de js/sala.js de por medio.
 */
export function pantallaDeEspera(contenedor, grupo) {
  const codigo = grupo.codigo || "";

  contenedor.innerHTML = `
    <div class="resultado-final">
      <div class="resultado-emoji">⏳</div>
      <h2>Tu profesor todavía no ha iniciado la clase</h2>
      <p>Ya estás dentro de <strong>${escapar(grupo.nombre)}</strong>${
        codigo ? ` (código <code>${escapar(codigo)}</code>)` : ""
      }. Esta pantalla se actualiza sola: en cuanto el maestro pulse
      <strong>Iniciar clase</strong>, podrás jugar.</p>
      <div class="resultado-acciones">
        <a class="btn-accion" style="text-decoration:none;" href="${escapar(rutaSala(grupo.id, grupo.materia))}">Ir a la sala de espera</a>
      </div>
    </div>`;

  return escucharEstadoSala(grupo.id, (actual) => {
    if (actual && estadoDeSala(actual) !== SALA.ESPERANDO) window.location.reload();
  });
}

/** La clase ya se cerró: se invita a volver a la sala, no a reintentar. */
export function pantallaDeClaseCerrada(contenedor, grupo) {
  contenedor.innerHTML = `
    <div class="resultado-final">
      <div class="resultado-emoji">🔒</div>
      <h2>Esta clase ya terminó</h2>
      <p>El profesor cerró <strong>${escapar(grupo.nombre)}</strong>. Si quieres
      seguir practicando el tema, usa el modo práctica de la materia.</p>
      <div class="resultado-acciones">
        <a class="btn-accion" style="text-decoration:none;" href="${escapar(rutaSala(grupo.id, grupo.materia))}">Volver a la sala</a>
        <a class="btn-secundario" style="text-decoration:none;" href="${escapar(`../interfaz-estudiante/materia.html?m=${encodeURIComponent(grupo.materia || "")}`)}">Modo práctica</a>
      </div>
    </div>`;
}
