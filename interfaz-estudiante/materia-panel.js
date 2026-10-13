// interfaz-estudiante/materia-panel.js
// Página única de materia para el estudiante: materia.html?m=matematicas,
// espanol o ingles. Reemplaza las tres páginas duplicadas que existían antes.
//
// El parámetro ?m= no es decorativo: es lo que hace que un código de
// Matemáticas deje de servir en la página de Inglés, y que un estudiante de
// 601 no pueda entrar a una clase de 602.

import { suscribirSesion } from "../js/sesion.js";
import { obtenerMateria, obtenerTema, obtenerJuego, rutaDeJuego, JUEGOS } from "../js/catalogo.js";
import { unirseAGrupo, obtenerGruposDelEstudiante } from "../js/grupos.js";

const MATERIA = obtenerMateria(new URLSearchParams(window.location.search).get("m"));

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

let iniciada = false;

function iniciarPagina(cuenta) {
  // onAuthStateChanged puede volver a emitir (por ejemplo al refrescar el
  // token); sin este control el formulario quedaría con el evento duplicado.
  if (iniciada) return;
  iniciada = true;

  document.title = `${MATERIA.nombre} | SkillHouse`;
  document.getElementById("hero-icono").textContent = MATERIA.icono;
  document.getElementById("titulo-pagina").textContent = `Juegos de ${MATERIA.nombre}`;

  const curso = cuenta.datos.curso || "";
  const info = document.getElementById("info-curso");
  info.textContent = curso
    ? `Estás en el curso ${curso}. Solo te sirven los códigos de ${MATERIA.nombre} de ese curso; los de otras materias o cursos la plataforma los rechaza.`
    : `Solo te sirven los códigos de ${MATERIA.nombre}. Pídele el tuyo a tu director de curso si aún no tienes uno.`;

  const selectTema = document.getElementById("select-tema-practica");
  selectTema.innerHTML = MATERIA.temas
    .map((tema) => `<option value="${escapeHtml(tema.id)}">${escapeHtml(tema.nombre)}</option>`)
    .join("");

  document.getElementById("botones-practica").innerHTML = JUEGOS.map(
    (juego) => `<button type="button" class="btn-accion" data-juego-practica="${escapeHtml(juego.id)}">${escapeHtml(juego.icono)} ${escapeHtml(juego.nombre)}</button>`
  ).join("");

  document.querySelectorAll("[data-juego-practica]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const url = new URL(rutaDeJuego(btn.dataset.juegoPractica, "../"), window.location.href);
      url.searchParams.set("tema", selectTema.value);
      url.searchParams.set("dificultad", document.getElementById("select-dificultad-practica").value);
      url.searchParams.set("m", MATERIA.id);
      window.location.href = url;
    });
  });

  const form = document.getElementById("form-unirse");
  const errorEl = document.getElementById("unirse-error");
  const exitoEl = document.getElementById("unirse-exito");

  const mostrarMensaje = (el, texto) => {
    el.textContent = texto;
    el.style.display = texto ? "block" : "none";
  };

  form.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    mostrarMensaje(errorEl, "");
    mostrarMensaje(exitoEl, "");

    const btn = document.getElementById("btn-unirse");
    btn.disabled = true;

    try {
      const resultado = await unirseAGrupo({
        codigo: document.getElementById("input-codigo").value,
        uid: cuenta.uid,
        username: cuenta.username,
        materiaEsperada: MATERIA.id,
        cursoEsperado: curso
      });

      if (resultado.estado === "miembro") {
        mostrarMensaje(exitoEl, `Ya estabas en "${resultado.grupo.nombre}". ¡A jugar!`);
      } else {
        mostrarMensaje(
          exitoEl,
          `Solicitud enviada a "${resultado.grupo.nombre}". Espera a que tu profesor(a) te acepte para poder jugar.`
        );
      }

      form.reset();
      await cargarGrupos(cuenta.uid);
    } catch (err) {
      mostrarMensaje(errorEl, err.message || "No se pudo unir a la clase.");
    } finally {
      btn.disabled = false;
    }
  });

  cargarGrupos(cuenta.uid);
}

async function cargarGrupos(uid) {
  const lista = document.getElementById("lista-grupos");
  lista.innerHTML = `<p class="estado-vacio">Cargando tus clases...</p>`;

  let grupos;
  try {
    grupos = await obtenerGruposDelEstudiante(uid);
  } catch (err) {
    lista.innerHTML = `<p class="estado-vacio">No se pudieron cargar tus clases.</p>`;
    return;
  }

  grupos = grupos.filter((g) => g.materia === MATERIA.id);

  if (!grupos.length) {
    lista.innerHTML = `<p class="estado-vacio">Todavía no te has unido a ninguna clase de ${escapeHtml(MATERIA.nombre)}.</p>`;
    return;
  }

  lista.innerHTML = grupos
    .map((g) => {
      const juego = obtenerJuego(g.juego);
      const tema = obtenerTema(g.materia, g.tema);

      return `
      <div class="grupo-card grupo-card--${escapeHtml(g.juego)}">
        <div class="grupo-header">
          <h3>${escapeHtml(g.nombre)}</h3>
          <span class="grupo-estado ${g.activo ? "grupo-estado--activo" : "grupo-estado--inactivo"}">
            <span class="dot"></span>${g.activo ? "Activa" : "Inactiva"}
          </span>
        </div>
        <span class="grupo-juego-label"><span class="grupo-juego-icono">${juego?.icono || "🎲"}</span>${escapeHtml(juego?.nombre || g.juego || "Juego")}</span>
        <p class="grupo-meta">Profesor(a): ${escapeHtml(g.profesorNombre || "—")}</p>
        <p class="grupo-meta">Curso: ${escapeHtml(g.curso || "—")} · Tema: ${escapeHtml(tema?.nombre || "Sin tema")}</p>
        <div class="grupo-acciones">
          ${
            g.activo && juego
              ? `<a class="btn-accion" style="text-decoration:none;" href="${rutaDeJuego(g.juego, "../")}?grupo=${encodeURIComponent(g.id)}&m=${encodeURIComponent(MATERIA.id)}">Jugar</a>`
              : `<span class="grupo-meta">Esta clase ya no está activa.</span>`
          }
        </div>
      </div>`;
    })
    .join("");
}

if (!MATERIA) {
  window.location.replace("homepagea.html");
} else {
  suscribirSesion("estudiante", (cuenta) => {
    if (!cuenta) return; // guard.js ya redirigió
    iniciarPagina(cuenta);
  });
}
