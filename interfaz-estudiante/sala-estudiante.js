// interfaz-estudiante/sala-estudiante.js
// La pantalla que ve el niño mientras el profesor no ha iniciado: su código,
// quiénes de sus compañeros ya entraron y un botón que se enciende solo cuando
// el maestro abre la clase.
//
// Se entra desde la tarjeta de la clase en la página de la materia
// (sala.html?g=ID). El juego en sí sigue bloqueado del lado del servidor
// (js/grupos.js -> grupoJugable y guardarResultado), así que esta pantalla es
// comodidad, no la única defensa.

import { suscribirSesion } from "../js/sesion.js";
import { obtenerMateria, obtenerTema, obtenerJuego, rutaDeJuego } from "../js/catalogo.js";
import { grupoJugable, anotarParticipacion } from "../js/grupos.js";
import {
  SALA,
  NOMBRE_SALA,
  estadoDeSala,
  escucharSala,
  anotarAsistencia
} from "../js/sala.js";

const PARAMETROS = new URLSearchParams(window.location.search);
const GRUPO_ID = PARAMETROS.get("g");
const MATERIA_ID = PARAMETROS.get("m");

const nombreEl = document.getElementById("sala-nombre");
const datosEl = document.getElementById("sala-datos");
const codigoEl = document.getElementById("sala-codigo");
const estadoEl = document.getElementById("sala-estado");
const estadoTextoEl = document.getElementById("sala-estado-texto");
const asistentesEl = document.getElementById("sala-asistentes");
const conteoEl = document.getElementById("sala-conteo");
const accionEl = document.getElementById("sala-accion");
const avisoEl = document.getElementById("sala-aviso");
const volverEl = document.getElementById("btn-sala-volver");

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

function rutaMateria() {
  return `materia.html${MATERIA_ID ? `?m=${encodeURIComponent(MATERIA_ID)}` : ""}`;
}

function decir(texto) {
  avisoEl.textContent = texto;
  avisoEl.style.display = texto ? "block" : "none";
}

/** Mensaje de "no puedes estar aquí", con salida para no dejar al niño colgado. */
function mostrarBloqueo(titulo, texto) {
  document.querySelector(".sala-pantalla").hidden = true;
  document.getElementById("sala-titulo").textContent = titulo;
  document.getElementById("sala-subtitulo").textContent = texto;
  accionEl.innerHTML = `<a class="btn-accion" style="text-decoration:none;" href="${escapar(rutaMateria())}">Volver a la materia</a>`;
}

async function iniciar(cuenta) {
  volverEl.href = rutaMateria();

  if (!GRUPO_ID) {
    mostrarBloqueo("Falta la clase", "Entra a la sala desde la tarjeta de una de tus clases, en la página de la materia.");
    return;
  }

  // grupoJugable comprueba que la clase exista, esté activa y que el niño sea
  // del curso de la clase (o esté en la lista); devuelve el grupo marcado con
  // sinEmpezar cuando todavía está en espera, que es el caso normal aquí.
  const grupo = await grupoJugable(GRUPO_ID, cuenta.uid, null, cuenta.datos.curso || undefined);
  if (!grupo) {
    mostrarBloqueo(
      "No puedes entrar a esta sala",
      "La clase ya no existe, está inactiva o es de otro curso. Pide el código de tu curso."
    );
    return;
  }

  const juego = obtenerJuego(grupo.juego);
  const tema = obtenerTema(grupo.tema);
  nombreEl.textContent = grupo.nombre || "Clase";
  codigoEl.textContent = grupo.codigo || "—";
  datosEl.textContent = [
    obtenerMateria(grupo.materia)?.nombre || "",
    `Curso ${grupo.curso || "—"}`,
    tema?.nombre || "",
    `${juego?.icono || ""} ${juego?.nombre || ""}`.trim(),
    `Profesor(a): ${grupo.profesorNombre || "—"}`
  ].filter(Boolean).join(" · ");

  // Se anota la asistencia DESPUÉS de validar la pertenencia: las reglas de
  // Firestore solo dejan escribir en sala/ a quien es del curso, y así el que
  // no es ve el mensaje claro en vez de un error rojo en la pantalla.
  // anotarParticipacion lo deja a él en la lista de la clase, que es lo que el
  // profesor ve en "Estudiantes" cuando entró por su curso y no por el código.
  try {
    await anotarParticipacion({ grupoId: GRUPO_ID, uid: cuenta.uid, username: cuenta.username });
    await anotarAsistencia(GRUPO_ID, cuenta.uid, cuenta.username);
  } catch (err) {
    console.error("SkillHouse:", err);
    decir("No se pudo avisar que estás en la sala. Revisa tu conexión y vuelve a entrar desde la tarjeta de la clase.");
  }

  escucharSala(GRUPO_ID, ({ grupo: actual, asistentes }) => {
    if (!actual) {
      mostrarBloqueo("Esta clase ya no existe", "El profesor la eliminó. Pídele el código de la nueva.");
      return;
    }

    const estado = estadoDeSala(actual);
    estadoEl.className = `sala-estado sala-estado--${estado}`;
    estadoTextoEl.textContent = NOMBRE_SALA[estado];
    conteoEl.textContent = asistentes.length;

    asistentesEl.innerHTML = asistentes.length
      ? asistentes
          .map(
            (a) => `
            <div class="sala-asistente"${a.id === cuenta.uid ? ' style="outline:2px solid var(--sh-cyan);"' : ""}>
              <div class="sala-asistente-inicial">${escapar((a.nombre || "?").trim().charAt(0).toUpperCase())}</div>
              <p class="sala-asistente-nombre">${escapar(a.id === cuenta.uid ? `${a.nombre || "Tú"} (tú)` : a.nombre || "Estudiante")}</p>
            </div>`
          )
          .join("")
      : `<p class="sala-vacio">Todavía no llega nadie.</p>`;

    if (estado === SALA.ABIERTA) {
      accionEl.innerHTML = `
        <a class="btn-accion" style="text-decoration:none; font-size:1.15rem; padding:16px 34px;"
           href="${escapar(rutaDeJuego(actual.juego, "../"))}?grupo=${encodeURIComponent(GRUPO_ID)}&m=${encodeURIComponent(actual.materia || "")}">
          ▶ ¡Entrar al juego!
        </a>
        <p class="sala-meta" style="margin-top:10px;">Tu profesor(a) ya inició la clase. Entra y juega.</p>`;
      decir("");
    } else if (estado === SALA.CERRADA) {
      accionEl.innerHTML = `<p class="sala-meta">La clase quedó cerrada. Si quieres seguir practicando el tema, usa el modo práctica de la materia.</p>`;
    } else {
      accionEl.innerHTML = `<p class="sala-meta">Espera a que tu profesor(a) pulse <strong>Iniciar clase</strong> en el tablero. Esta pantalla se actualiza sola.</p>`;
    }
  });
}

suscribirSesion("estudiante", (cuenta) => {
  if (!cuenta) return; // guard.js redirige
  iniciar(cuenta);
});
