// interfaz-estudiante/materia-panel.js
// Página única de materia para el estudiante: materia.html?m=matematicas,
// espanol o ingles. Reemplaza las tres páginas duplicadas que existían antes.
//
// El parámetro ?m= no es decorativo: es lo que hace que un código de
// Matemáticas deje de servir en la página de Inglés, y que un estudiante de
// 601 no pueda entrar a una clase de 602.

import { suscribirSesion } from "../js/sesion.js";
import { obtenerMateria, obtenerTema, obtenerJuego, rutaDeJuego, temasDelGrado, temasDeMateria, JUEGOS } from "../js/catalogo.js";
import { gradoDeCurso, cicloPorId } from "../js/malla.js";
import { unirseAGrupo, clasesDelEstudiante } from "../js/grupos.js";
import { SALA, estadoDeSala } from "../js/sala.js";

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

  document.title = `${MATERIA.nombre} · SkillHouse`;
  document.getElementById("hero-icono").textContent = MATERIA.icono;
  document.getElementById("titulo-pagina").textContent = `Juegos de ${MATERIA.nombre}`;

  const curso = cuenta.datos.curso || "";
  const info = document.getElementById("info-curso");
  info.textContent = curso
    ? `Estás en el curso ${curso}. Solo te sirven los códigos de ${MATERIA.nombre} de ese curso; los de otras materias o cursos la plataforma los rechaza.`
    : `Solo te sirven los códigos de ${MATERIA.nombre}. Pídele el tuyo a tu director de curso si aún no tienes uno.`;

  // Practica libre: si el estudiante ya tiene curso, solo ve los temas de su
  // grado; si no tiene, ve todos agrupados por ciclo. Cada tema carga sus
  // propias condiciones (opciones, tiempo, voz) según el ciclo del que viene.
  const grado = gradoDeCurso(curso);
  const selectTema = document.getElementById("select-tema-practica");
  const opciones = (tema) => `<option value="${escapeHtml(tema.id)}">${escapeHtml(tema.nombre)}</option>`;

  if (grado) {
    selectTema.innerHTML = temasDelGrado(grado, { materiaId: MATERIA.id }).map(opciones).join("");
  } else {
    const porCiclo = new Map();
    for (const tema of temasDeMateria(MATERIA.id)) {
      if (!porCiclo.has(tema.cicloId)) porCiclo.set(tema.cicloId, []);
      porCiclo.get(tema.cicloId).push(tema);
    }
    selectTema.innerHTML = [...porCiclo.entries()]
      .map(([cicloId, temas]) => {
        const ciclo = cicloPorId(cicloId);
        return `<optgroup label="${escapeHtml(ciclo ? `Grados ${ciclo.nombre}` : cicloId)}">${temas.map(opciones).join("")}</optgroup>`;
      })
      .join("");
  }

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

      // El código ya no deja a nadie esperando: entra directo a la lista. Si
      // además lo matriculó en un curso que no tenía, el curso de la página pasa
      // a ser ese, y con él se vuelve a listar todo.
      mostrarMensaje(
        exitoEl,
        resultado.matriculado
          ? `Quedas en el curso ${resultado.grupo.curso} y dentro de "${resultado.grupo.nombre}". Tus clases de ${MATERIA.nombre} aparecen abajo.`
          : `Ya estás en "${resultado.grupo.nombre}". Entra a la sala desde su tarjeta y espera a que tu docente inicie la clase.`
      );

      form.reset();
      await cargarGrupos(cuenta.uid, resultado.grupo.curso || curso);
    } catch (err) {
      mostrarMensaje(errorEl, err.message || "No se pudo unir a la clase.");
    } finally {
      btn.disabled = false;
    }
  });

  cargarGrupos(cuenta.uid, curso);
}

async function cargarGrupos(uid, curso) {
  const lista = document.getElementById("lista-grupos");
  lista.innerHTML = `<p class="estado-vacio">Cargando tus clases...</p>`;

  let grupos = [];
  try {
    grupos = await clasesDelEstudiante({ uid, curso });
  } catch (err) {
    lista.innerHTML = `<p class="estado-vacio">No se pudieron cargar tus clases.</p>`;
    return;
  }

  grupos = grupos.filter((g) => g.materia === MATERIA.id);

  if (!grupos.length) {
    lista.innerHTML = `<p class="estado-vacio">${
      curso
        ? `Todavía no hay clases de ${escapeHtml(MATERIA.nombre)} para tu curso ${escapeHtml(curso)}. Cuando tu docente abra una, aparece aquí sola.`
        : `Todavía no tienes clases de ${escapeHtml(MATERIA.nombre)}. Escribe el código que te dio tu docente y quedas anotado.`
    }</p>`;
    return;
  }

  lista.innerHTML = grupos
    .map((g) => {
      const juego = obtenerJuego(g.juego);
      const tema = obtenerTema(g.tema);
      const estado = estadoDeSala(g);
      const sala = `sala.html?g=${encodeURIComponent(g.id)}&m=${encodeURIComponent(MATERIA.id)}`;

      // La sala manda si se puede jugar ya o si hay que esperar al profesor.
      // "Jugar" sigue existiendo en espera (el juego también avisa), pero el
      // botón principal pasa a ser la sala, que es donde el niño se queda.
      const etiquetaSala = {
        [SALA.ESPERANDO]: "⏳ En espera",
        [SALA.ABIERTA]: "🟢 ¡Ya puedes jugar!",
        [SALA.CERRADA]: "🔒 Clase cerrada"
      }[estado];

      return `
      <div class="grupo-card grupo-card--${escapeHtml(g.juego)}">
        <div class="grupo-header">
          <h3>${escapeHtml(g.nombre)}</h3>
          <span class="grupo-estado ${g.activo ? "grupo-estado--activo" : "grupo-estado--inactivo"}">
            <span class="dot"></span>${g.activo ? "Activa" : "Inactiva"}
          </span>
        </div>
        <span class="grupo-juego-label"><span class="grupo-juego-icono">${juego?.icono || "🎲"}</span>${escapeHtml(juego?.nombre || g.juego || "Juego")}</span>
        <p class="grupo-meta">Docente: ${escapeHtml(g.profesorNombre || "—")}</p>
        <p class="grupo-meta">Curso: ${escapeHtml(g.curso || "—")} · Tema: ${escapeHtml(tema?.nombre || "Sin tema")}</p>
        <p><span class="grupo-sala grupo-sala--${estado}">${etiquetaSala}</span></p>
        <div class="grupo-acciones">
          ${
            g.activo && juego
              ? `<a class="${estado === SALA.ABIERTA ? "btn-accion" : "btn-secundario"}" style="text-decoration:none;" href="${escapeHtml(sala)}">Entrar a la sala</a>
                 ${estado === SALA.ABIERTA
                   ? `<a class="btn-secundario" style="text-decoration:none;" href="${rutaDeJuego(g.juego, "../")}?grupo=${encodeURIComponent(g.id)}&m=${encodeURIComponent(MATERIA.id)}">Jugar directo</a>`
                   : ""}`
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
