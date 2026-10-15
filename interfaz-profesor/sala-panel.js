// interfaz-profesor/sala-panel.js
// La pantalla que se proyecta en el tablero: código gigante, quiénes entraron
// y el marcador moviéndose. El control es un semáforo con tres estados
// (js/sala.js): en espera nadie puede jugar, abierta sí, cerrada termina la
// sesión sin borrar los resultados que ya se guardaron.
//
// Todo lo que se ve llega por onSnapshot, así que el profesor no tiene que
// recargar: cuando un niño entra a la sala o termina una partida, su tarjeta
// aparece sola.

import { db } from "../js/firebase.js";
import { suscribirSesion } from "../js/sesion.js";
import { obtenerMateria, obtenerTema, obtenerJuego } from "../js/catalogo.js";
import { obtenerGruposDelProfesor } from "../js/grupos.js";
import {
  SALA,
  NOMBRE_SALA,
  estadoDeSala,
  escucharSala,
  fijarEstadoSala,
  vaciarSala
} from "../js/sala.js";
import { notaDeResultado, formatearNota, desempenio } from "../js/nota.js";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const PARAMETROS = new URLSearchParams(window.location.search);
const GRUPO_ID = PARAMETROS.get("g");

const cajaEleccion = document.getElementById("caja-eleccion");
const listaClasesSala = document.getElementById("lista-clases-sala");
const pantalla = document.getElementById("sala-pantalla");
const aviso = document.getElementById("sala-aviso");

const botones = {
  espera: document.getElementById("btn-sala-espera"),
  iniciar: document.getElementById("btn-sala-iniciar"),
  cerrar: document.getElementById("btn-sala-cerrar"),
  vaciar: document.getElementById("btn-sala-vaciar"),
  copiar: document.getElementById("btn-sala-copiar")
};

let codigoActual = "";
function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

function decir(texto) {
  aviso.textContent = texto;
  aviso.style.display = texto ? "block" : "none";
}

/* ---------------------- Elección de clase ---------------------- */

async function pintarEleccion(uid) {
  let grupos;
  try {
    grupos = await obtenerGruposDelProfesor(uid);
  } catch (err) {
    console.error(err);
    listaClasesSala.innerHTML = `<p class="estado-vacio">No se pudieron cargar tus clases. <button type="button" class="btn-secundario" id="btn-reintentar-sala">Reintentar</button></p>`;
    document.getElementById("btn-reintentar-sala")
      ?.addEventListener("click", () => window.location.reload());
    return;
  }

  const activas = grupos.filter((g) => g.activo);
  if (!activas.length) {
    listaClasesSala.innerHTML = `<p class="estado-vacio">No tienes ninguna clase activa. Créala en <a href="materia.html">Mis clases</a>.</p>`;
    return;
  }

  listaClasesSala.innerHTML = `
    <div class="materias-grid">
      ${activas
        .map((g) => {
          const juego = obtenerJuego(g.juego);
          const tema = obtenerTema(g.materia, g.tema);
          return `
            <a href="sala.html?g=${encodeURIComponent(g.id)}" class="materia-card ${obtenerMateria(g.materia)?.color || "card1"}">
              <h3>${escapar(g.nombre)}</h3>
              <span class="materia-tag">${escapar((juego?.icono || "🎮") + " " + (juego?.nombre || g.juego))}</span>
              <p class="curso-datos">Curso ${escapar(g.curso || "—")} · ${escapar(tema?.nombre || "Sin tema")}</p>
              <span class="curso-cta">📺 Abrir sala · ${escapar(g.codigo)}</span>
            </a>`;
        })
        .join("")}
    </div>`;
}

/* ---------------------- Marcador en vivo ---------------------- */

function escucharMarcador(grupoId) {
  const caja = document.getElementById("sala-marcador");
  const cuerpo = document.getElementById("sala-marcador-cuerpo");

  try {
    return onSnapshot(
      query(
        collection(db, "grupos", grupoId, "resultados"),
        orderBy("fecha", "desc"),
        limit(200)
      ),
      (snap) => {
        const porEstudiante = new Map();
        snap.docs.forEach((d) => {
          const r = { id: d.id, ...d.data() };
          const clave = r.uid || r.username || "Sin nombre";
          const fila = porEstudiante.get(clave) || {
            nombre: r.username || "Estudiante",
            partidas: 0,
            mejor: 0,
            suma: 0
          };
          const nota = notaDeResultado(r);
          fila.partidas += 1;
          fila.suma += nota;
          fila.mejor = Math.max(fila.mejor, nota);
          porEstudiante.set(clave, fila);
        });

        const filas = [...porEstudiante.values()].sort(
          (a, b) => b.mejor - a.mejor || b.partidas - a.partidas
        );

        caja.hidden = !filas.length;
        cuerpo.innerHTML = filas
          .map(
            (f, i) => `
            <tr>
              <td>${i + 1}</td>
              <td>${escapar(f.nombre)}</td>
              <td>${f.partidas}</td>
              <td><span class="nota-celda">${formatearNota(f.mejor)}</span>
                  <span class="nota-nivel nota-nivel--${desempenio(f.mejor).clase}">${desempenio(f.mejor).nombre}</span></td>
              <td>${formatearNota(Math.round((f.suma / f.partidas) * 10) / 10)}</td>
            </tr>`
          )
          .join("");
      },
      (err) => {
        // Un marcador que no se pudo leer no debe romper la sala: el botón de
        // iniciar y la lista de asistentes son lo importante.
        console.error("SkillHouse (marcador):", err);
        caja.hidden = true;
      }
    );
  } catch (err) {
    console.error("SkillHouse (marcador):", err);
    caja.hidden = true;
    return () => {};
  }
}

/* ---------------------- Pintado de la sala ---------------------- */

function pintar({ grupo, asistentes }) {
  if (!grupo) {
    pantalla.hidden = false;
    document.getElementById("sala-nombre").textContent = "Esta clase ya no existe";
    document.getElementById("sala-datos").textContent =
      "Puede que el profesor la eliminara. Vuelve a Mis clases y elige otra.";
    Object.values(botones).forEach((b) => (b.disabled = true));
    return;
  }

  const estado = estadoDeSala(grupo);
  codigoActual = grupo.codigo || "";
  pantalla.hidden = false;

  const juego = obtenerJuego(grupo.juego);
  const tema = obtenerTema(grupo.materia, grupo.tema);

  document.getElementById("sala-nombre").textContent = grupo.nombre || "Clase sin nombre";
  document.getElementById("sala-datos").textContent = [
    obtenerMateria(grupo.materia)?.nombre || "Materia",
    `Curso ${grupo.curso || "—"}`,
    tema?.nombre || "Sin tema",
    `${juego?.icono || ""} ${juego?.nombre || grupo.juego || ""}`.trim(),
    `Profesor(a): ${grupo.profesorNombre || "—"}`
  ].filter(Boolean).join(" · ");

  document.getElementById("sala-codigo").textContent = grupo.codigo || "—";

  const estadoEl = document.getElementById("sala-estado");
  estadoEl.className = `sala-estado sala-estado--${estado}`;
  document.getElementById("sala-estado-texto").textContent =
    `${NOMBRE_SALA[estado]} · ${asistentes.length} en la sala`;
  document.getElementById("sala-conteo").textContent = asistentes.length;

  const contenedor = document.getElementById("sala-asistentes");
  contenedor.innerHTML = asistentes.length
    ? asistentes
        .map(
          (a) => `
          <div class="sala-asistente">
            <div class="sala-asistente-inicial">${escapar((a.nombre || "?").trim().charAt(0).toUpperCase())}</div>
            <p class="sala-asistente-nombre">${escapar(a.nombre || "Estudiante")}</p>
          </div>`
        )
        .join("")
    : `<p class="sala-vacio">Nadie ha entrado todavía. Pasa el código y espera.</p>`;

  botones.espera.disabled = estado === SALA.ESPERANDO;
  botones.iniciar.disabled = estado === SALA.ABIERTA || !grupo.activo;
  botones.cerrar.disabled = estado === SALA.CERRADA;
  botones.copiar.disabled = !grupo.codigo;
}

async function mover(estado, boton) {
  decir("");
  const textos = {
    [SALA.ESPERANDO]: "Puesta en espera. Los estudiantes no pueden empezar.",
    [SALA.ABIERTA]: "¡Clase iniciada! Ya pueden jugar.",
    [SALA.CERRADA]: "Clase cerrada. Nadie puede seguir jugando."
  };

  if (estado === SALA.CERRADA && !confirm("¿Cerrar la clase? Los estudiantes no podrán seguir jugando, pero los resultados que ya tengan quedan guardados.")) {
    return;
  }

  const original = boton.textContent;
  boton.disabled = true;
  try {
    await fijarEstadoSala(GRUPO_ID, estado);
    decir(textos[estado] || "Listo.");
    // No se pinta aquí: el onSnapshot de js/sala.js trae el cambio y pinta
    // solo, así que la pantalla nunca muestra algo distinto a lo que hay en
    // la base de datos.
  } catch (err) {
    console.error(err);
    decir(
      err?.code === "permission-denied"
        ? "Firestore no dejó cambiar la sala. Publica de nuevo firestore.rules."
        : "No se pudo cambiar el estado de la clase. Revisa la conexión."
    );
    boton.disabled = false;
  } finally {
    boton.textContent = original;
  }
}

/* ---------------------- Arranque ---------------------- */

suscribirSesion("profesor", async (cuenta) => {
  if (!cuenta) return; // guard.js redirige

  if (!GRUPO_ID) {
    await pintarEleccion(cuenta.uid);
    return;
  }

  cajaEleccion.style.display = "none";
  document.getElementById("sala-nombre").textContent = "Cargando la clase...";

  botones.espera.addEventListener("click", () => mover(SALA.ESPERANDO, botones.espera));
  botones.iniciar.addEventListener("click", () => mover(SALA.ABIERTA, botones.iniciar));
  botones.cerrar.addEventListener("click", () => mover(SALA.CERRADA, botones.cerrar));

  botones.copiar.addEventListener("click", () => {
    navigator.clipboard?.writeText(codigoActual).then(
      () => decir(`Código ${codigoActual} copiado.`),
      () => decir(`Anota el código a mano: ${codigoActual}`)
    );
  });

  botones.vaciar.addEventListener("click", async () => {
    if (!confirm("¿Vaciar la lista de asistentes? Sirve entre una sesión y otra: no quita a nadie de la clase, solo limpia quiénes están hoy en la sala.")) return;
    botones.vaciar.disabled = true;
    try {
      await vaciarSala(GRUPO_ID);
      decir("Sala vacía.");
    } catch (err) {
      console.error(err);
      decir("No se pudo vaciar la sala.");
    } finally {
      botones.vaciar.disabled = false;
    }
  });

  escucharSala(GRUPO_ID, pintar);
  escucharMarcador(GRUPO_ID);
});
