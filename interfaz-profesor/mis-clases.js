// interfaz-profesor/mis-clases.js
// Crear y gestionar las clases de un profesor.
//
// Tres reglas mandan aquí:
//  1. El profesor solo puede crear clases de las materias que tiene asignadas
//     (la lista de materias se lee de su documento, no del catálogo completo).
//  2. Cada clase pertenece a un curso, y el curso sale de los grados que el
//     administrador le asignó. El director además tiene siempre visible el curso
//     que dirige, aunque no lo haya marcado.
//  3. La pantalla puede abrirse ya filtrada por materia y curso
//     (materia.html?m=matematicas&c=601), que es como llega uno desde el
//     inicio: la materia y el curso quedan fijos y solo se elige el tema.
//
// Ya no hay solicitudes que aceptar: los niños del curso entran solos con el
// código, así que la lista de estudiantes es solo el registro de quién ha
// jugado, no un permiso.

import { plural } from "../js/plural.js";
import { obtenerMateria, obtenerTema, obtenerJuego, rutaDeJuego, temasDelGrado, temasDeMateria, JUEGOS } from "../js/catalogo.js";
import { gradoDeCurso, cicloPorId, NOMBRE_GRADO } from "../js/malla.js";
import { suscribirSesion } from "../js/sesion.js";
import { cursosDelProfesor } from "../js/cursos.js";
import { NOMBRE_SALA, estadoDeSala } from "../js/sala.js";
import { notaDeResultado, notaPromedio, promedioDeNotas, formatearNota } from "../js/nota.js";
import {
  crearGrupo,
  obtenerGruposDelProfesor,
  alternarEstadoGrupo,
  eliminarGrupo,
  obtenerResultadosDelGrupo,
  actualizarGrupo,
  obtenerMiembrosDelGrupo,
  quitarEstudianteDelGrupo
} from "../js/grupos.js";

const PARAMETROS = new URLSearchParams(window.location.search);
// ?m=matematicas abre la vista de una sola materia; sin parámetro se ven
// todas las del profesor y la materia se elige en el formulario.
const MATERIA_PARAMETRO = PARAMETROS.get("m");
// ?c=601 fija además el curso: la clase se crea directamente para ese curso.
const CURSO_PARAMETRO = PARAMETROS.get("c");

let cuenta = null;
let materiasPermitidas = [];
let cursosDisponibles = [];
// Diferencia "el administrador no ha creado cursos" de "se cayó la red":
// sin esta bandera un corte de conexión se reportaba como falta de cursos.
let falloAlCargarCursos = false;
let gruposCache = [];

const form = document.getElementById("form-crear-grupo");
const listaGrupos = document.getElementById("lista-grupos");
const errorEl = document.getElementById("crear-grupo-error");
const exitoEl = document.getElementById("crear-grupo-exito");

const selectMateria = document.getElementById("select-materia");
const selectCurso = document.getElementById("select-curso");
const selectTema = document.getElementById("select-tema");
const selectDificultad = document.getElementById("select-dificultad");
const selectJuego = document.getElementById("select-juego");
const botonCrear = document.getElementById("btn-crear-grupo");
selectJuego.innerHTML = JUEGOS
  .map((juego) => `<option value="${escapar(juego.id)}">${escapar(juego.icono)} ${escapar(juego.nombre)}</option>`)
  .join("");

// Estado inicial del formulario: los cursos y los temas se leen de Firestore,
// así que hasta que no llegan, el selector muestra "Cargando..." y el botón
// está apagado. Sin esto, el profe veía dos cajas vacías y "Crear clase" le
// respondía "Selecciona el curso" sin que nada explicara que aún estaba
// cargando — que es exactamente lo que parecía un botón roto.
const estadoForm = document.getElementById("estado-formulario");
selectCurso.innerHTML = `<option value="">Cargando cursos...</option>`;
selectTema.innerHTML = `<option value="">Cargando temas...</option>`;
selectCurso.disabled = true;
selectTema.disabled = true;
botonCrear.disabled = true;

function avisar(texto) {
  if (!estadoForm) return;
  estadoForm.textContent = texto;
  estadoForm.style.display = texto ? "block" : "none";
}

function etiquetaJuego(juegoId) {
  const juego = obtenerJuego(juegoId);
  return juego ? `${juego.icono} ${juego.nombre}` : juegoId || "—";
}

const panelResultados = document.getElementById("panel-resultados");
const resultadosTitulo = document.getElementById("resultados-titulo");
const resultadosSub = document.getElementById("resultados-sub");
const resultadosContenido = document.getElementById("resultados-contenido");

const panelEditar = document.getElementById("panel-editar");
const formEditarGrupo = document.getElementById("form-editar-grupo");
const editarCurso = document.getElementById("editar-curso");
const editarTema = document.getElementById("editar-tema");
const editarDificultad = document.getElementById("editar-dificultad");
const editarError = document.getElementById("editar-error");
const editarExito = document.getElementById("editar-exito");
let grupoEnEdicionId = null;

const panelEstudiantes = document.getElementById("panel-estudiantes");
const estudiantesTitulo = document.getElementById("estudiantes-titulo");
const estudiantesSub = document.getElementById("estudiantes-sub");
const miembrosContenido = document.getElementById("miembros-contenido");
let grupoEstudiantesId = null;

const panelDuplicar = document.getElementById("panel-duplicar");
const duplicarTitulo = document.getElementById("duplicar-titulo");
const duplicarCursos = document.getElementById("duplicar-cursos");
const duplicarError = document.getElementById("duplicar-error");
const duplicarExito = document.getElementById("duplicar-exito");
let grupoDuplicado = null;

function mostrarMensaje(el, texto) {
  el.textContent = texto;
  el.style.display = texto ? "block" : "none";
}

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

// Con una sola materia el selector está oculto y puede llegar vacío: la materia
// real es la única asignada. Sin este fallback "Crear clase" se negaba en seco.
function materiaActiva() {
  return MATERIA_PARAMETRO || selectMateria.value || materiasPermitidas[0]?.id || "";
}

/**
 * Temas disponibles para una materia. Con curso elegido solo aparecen los del
 * ciclo de ese grado (un profe no puede seleccionar en 2° un tema de 11°, y
 * así el juego ya recibe las condiciones correctas); sin curso se muestran
 * todos, agrupados por banda de grados.
 */
function poblarTemas(select, materiaId, codigoCurso, { conVacio }) {
  const opcion = (tema) => `<option value="${escapar(tema.id)}">${escapar(tema.nombre)}</option>`;
  const grado = gradoDeCurso(codigoCurso);

  let html = "";
  if (grado) {
    html = temasDelGrado(grado, { materiaId }).map(opcion).join("");
  } else {
    const porCiclo = new Map();
    for (const tema of temasDeMateria(materiaId)) {
      if (!porCiclo.has(tema.cicloId)) porCiclo.set(tema.cicloId, []);
      porCiclo.get(tema.cicloId).push(tema);
    }
    html = [...porCiclo.entries()]
      .map(([cicloId, temas]) => {
        const ciclo = cicloPorId(cicloId);
        return `<optgroup label="Grados ${escapar(ciclo ? ciclo.nombre : cicloId)}">${temas.map(opcion).join("")}</optgroup>`;
      })
      .join("");
  }

  select.innerHTML = conVacio ? `<option value="">Selecciona un tema</option>${html}` : html;
  select.disabled = !html;
  if (grado && !html) {
    select.innerHTML = `<option value="">Sin temas para ${NOMBRE_GRADO[grado] || grado + "°"}</option>`;
  }
}

function poblarCursos(select, { incluirVacio }) {
  const opciones = cursosDisponibles.map(
    (c) => `<option value="${escapar(c.codigo)}">${escapar(c.codigo)} — ${escapar(c.nombre)}</option>`
  );
  select.innerHTML = incluirVacio
    ? `<option value="">Selecciona un curso</option>${opciones.join("")}`
    : opciones.join("");
}

/**
 * URL del juego de una clase en modo práctica: los mismos parámetros que usa
 * el estudiante, pero sin `grupo`, así que el profesor lo abre para ver el
 * ejercicio antes de mandarlo y la partida no se guarda en ninguna parte.
 */
function rutaPractica(grupo) {
  const url = new URL(rutaDeJuego(grupo.juego, "../"), window.location.href);
  url.searchParams.set("tema", grupo.tema || "");
  url.searchParams.set("dificultad", String(grupo.dificultad || 1));
  url.searchParams.set("m", grupo.materia || "");
  return url.toString();
}

/* ---------------------- Arranque ---------------------- */

/** Aviso de error con botón de reintento, para que un corte de red no se
 *  confunda con "el administrador no me dejó crear clases". */
function mostrarErrorDeRed(el, texto) {
  el.innerHTML = `${escapar(texto)}
    <button type="button" class="btn-secundario" style="margin-left:10px;">Reintentar</button>`;
  el.style.display = "block";
  el.querySelector("button").addEventListener("click", () => window.location.reload());
}

suscribirSesion("profesor", async (c) => {
  if (!c) return; // guard.js redirige
  cuenta = c;

  materiasPermitidas = (c.datos.materias || [])
    .map((id) => obtenerMateria(id))
    .filter(Boolean);

  if (!materiasPermitidas.length) {
    document.getElementById("caja-crear").style.display = "none";
    avisar("");
    listaGrupos.innerHTML = `<p class="estado-vacio">El administrador no te ha asignado ninguna materia todavía.</p>`;
    return;
  }

  // Las clases no dependen de la lista de cursos, así que las dos lecturas
  // arrancan a la vez: esperarlas de una en una duplicaba el tiempo de carga.
  const promesaGrupos = obtenerGruposDelProfesor(c.uid);
  // Hay caminos del arranque que salen antes de esperar esta lectura (materia
  // o curso inválidos). Se adjunta un catch vacío para que Firestore no deje
  // un "unhandled rejection" en la consola; el error se atiende igual cuando
  // se espera la promesa.
  promesaGrupos.catch(() => {});

  const tituloPagina = document.getElementById("titulo-pagina");
  const subtituloPagina = document.getElementById("subtitulo-pagina");
  const volver = document.getElementById("volver-inicio");

  // Cursos visibles: los grados que el administrador le asignó, y en el caso del
  // director siempre además el curso que dirige.
  avisar("Cargando tus cursos y temas...");
  try {
    cursosDisponibles = await cursosDelProfesor({
      uid: c.uid,
      esDirector: c.datos.tipoProfesor === "director",
      curso: c.datos.curso,
      grados: c.datos.grados
    });
  } catch (error) {
    console.error(error);
    falloAlCargarCursos = true;
    cursosDisponibles = [];
  }

  if (falloAlCargarCursos) {
    // Lo que falló fue la lista de cursos; las clases ya se están cargando por
    // su cuenta. Se avisa dentro del formulario, que es lo que no va a poder
    // usarse, y se ofrece recargar en vez de dejar la página a medias.
    selectCurso.innerHTML = `<option value="">Sin conexión</option>`;
    botonCrear.disabled = true;
    avisar("");
    mostrarErrorDeRed(
      errorEl,
      "No se pudieron cargar los cursos por un corte de conexión. Tus clases de abajo sí están cargadas."
    );
    await cargarGruposCon(promesaGrupos);
    return;
  }

  if (MATERIA_PARAMETRO && !materiasPermitidas.some((m) => m.id === MATERIA_PARAMETRO)) {
    tituloPagina.textContent = "Materia no asignada";
    avisar("");
    listaGrupos.innerHTML = `<p class="estado-vacio">Esa materia no está entre las que dictas.</p>`;
    document.getElementById("caja-crear").style.display = "none";
    return;
  }

  if (CURSO_PARAMETRO && !cursosDisponibles.some((curso) => curso.codigo === CURSO_PARAMETRO)) {
    tituloPagina.textContent = "Curso no disponible";
    avisar("");
    listaGrupos.innerHTML = `<p class="estado-vacio">
      El curso ${escapar(CURSO_PARAMETRO)} no está entre tus cursos.
      ${c.datos.tipoProfesor === "director"
        ? "Como director ves el curso que diriges más los grados que te asignó el administrador."
        : "Pídele al administrador que te asigne ese grado en Usuarios."}
    </p>`;
    document.getElementById("caja-crear").style.display = "none";
    return;
  }

  const materia = MATERIA_PARAMETRO ? obtenerMateria(MATERIA_PARAMETRO) : null;

  if (materia && CURSO_PARAMETRO) {
    tituloPagina.textContent = `${materia.nombre} · ${CURSO_PARAMETRO}`;
    subtituloPagina.textContent =
      "Clases de esta materia para este curso. Crea una y comparte el código con tus estudiantes.";
    document.title = `${materia.nombre} ${CURSO_PARAMETRO} · SkillHouse`;
    volver.innerHTML = `← Volver a ${escapar(materia.nombre)} (todos los cursos)`;
    volver.setAttribute("href", `materia.html?m=${encodeURIComponent(materia.id)}`);
  } else if (materia) {
    tituloPagina.textContent = materia.nombre;
    subtituloPagina.textContent =
      "Elige el curso al crear la clase; abajo solo se muestran las clases de esta materia.";
    document.title = `${materia.nombre} · SkillHouse`;
    volver.textContent = "← Volver al Inicio";
  } else if (materiasPermitidas.length === 1) {
    // Con una sola materia no hace falta el selector: ya está decidida.
    document.getElementById("campo-materia").style.display = "none";
    subtituloPagina.textContent =
      "Todas tus clases, sin filtrar por curso. Para trabajar curso por curso entra desde el Inicio.";
  } else {
    document.getElementById("campo-materia").style.display = "block";
    selectMateria.innerHTML = materiasPermitidas
      .map((m) => `<option value="${escapar(m.id)}">${escapar(m.icono)} ${escapar(m.nombre)}</option>`)
      .join("");
  }

  const esDirector = c.datos.tipoProfesor === "director";

  if (!cursosDisponibles.length) {
    const sinGrados = (c.datos.grados || []).length > 0;
    selectCurso.innerHTML = `<option value="">Sin cursos disponibles</option>`;
    selectCurso.disabled = true;
    botonCrear.disabled = true;
    mostrarMensaje(errorEl, esDirector
      ? "No tienes ningún curso visible. Como director te toca el curso que diriges; si no aparece, el administrador aún no lo ha creado."
      : sinGrados
        ? `El administrador te asignó ${escapar((c.datos.grados || []).map((g) => `${g}°`).join(", "))}, pero ninguno de esos grados tiene curso creado todavía.`
        : "El administrador todavía no ha creado cursos. Sin curso no se pueden crear clases.");
    avisar("");
  } else {
    // Con un solo curso se elige solo. Con varios y sin ?c= se exige la
    // elección explícita: auto-seleccionar el primero hacía que una clase
    // naciera para 601 cuando el profe quería crear la de 602.
    const hayQueElegir = !CURSO_PARAMETRO && cursosDisponibles.length > 1;
    poblarCursos(selectCurso, { incluirVacio: hayQueElegir });
    poblarCursos(editarCurso, { incluirVacio: false });
    selectCurso.disabled = false;

    if (CURSO_PARAMETRO) {
      // Se llegó desde la tarjeta de un curso: el curso ya está elegido, así que
      // el selector se guarda y la clase nace atada a ese curso.
      selectCurso.value = CURSO_PARAMETRO;
      selectCurso.disabled = true;
      document.getElementById("campo-curso").style.display = "none";
      const fija = document.getElementById("curso-fijo");
      fija.textContent = `Curso: ${CURSO_PARAMETRO}`;
      fija.style.display = "inline";
    }
  }

  const materiaInicial = MATERIA_PARAMETRO || materiasPermitidas[0].id;
  poblarTemas(selectTema, materiaInicial, selectCurso.value, { conVacio: true });
  selectTema.disabled = false;
  avisar("");

  // El botón solo se enciende cuando el formulario puede crear de verdad: sin
  // cursos cargados dejarlo activo produce el "Selecciona el curso" que parece
  // un botón roto.
  if (cursosDisponibles.length) botonCrear.disabled = false;

  selectMateria.addEventListener("change", () => {
    poblarTemas(selectTema, selectMateria.value, selectCurso.value, { conVacio: true });
    cargarGruposCon(promesaGrupos);
  });

  // Cambiar de curso cambia la banda de edad: los temas se vuelven a listar
  // para que nadie quede con un tema de otro grado seleccionado.
  selectCurso.addEventListener("change", () => {
    poblarTemas(selectTema, materiaActiva(), selectCurso.value, { conVacio: true });
  });

  await cargarGruposCon(promesaGrupos);
});

/* ---------------------- Crear ---------------------- */

form?.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  mostrarMensaje(errorEl, "");
  mostrarMensaje(exitoEl, "");

  const nombre = document.getElementById("input-nombre").value.trim();
  const materia = materiaActiva();
  const curso = selectCurso.value;
  const tema = selectTema.value;
  const dificultad = Number(selectDificultad.value);
  const juego = selectJuego.value;

  if (!nombre) return mostrarMensaje(errorEl, "Escribe un nombre para la clase.");
  if (!materia) return mostrarMensaje(errorEl, "Elige la materia de la clase.");
  if (!curso) return mostrarMensaje(errorEl, "Selecciona el curso de la clase.");
  if (!tema) return mostrarMensaje(errorEl, "Selecciona un tema.");
  if (![1, 2, 3].includes(dificultad)) return mostrarMensaje(errorEl, "Selecciona una dificultad válida.");

  const boton = document.getElementById("btn-crear-grupo");
  boton.disabled = true;

  try {
    const resultado = await crearGrupo({
      profesorId: cuenta.uid,
      profesorNombre: cuenta.username,
      nombre,
      juego,
      materia,
      curso,
      tema,
      dificultad
    });

    const materiaNombre = obtenerMateria(materia)?.nombre || "";
    mostrarMensaje(
      exitoEl,
      `Clase creada para ${curso} · ${materiaNombre}. Código para tus estudiantes: ${resultado.codigo}. ` +
      `Está en "En espera": ábrela desde 📺 Sala de clase cuando estés frente al curso.`
    );
    form.reset();
    if (CURSO_PARAMETRO) selectCurso.value = CURSO_PARAMETRO;
    if (materiasPermitidas.length > 1 && !MATERIA_PARAMETRO) {
      poblarTemas(selectTema, materiaActiva(), selectCurso.value, { conVacio: true });
    }
    await cargarGrupos();
  } catch (error) {
    console.error(error);
    mostrarMensaje(errorEl, traducirError(error));
  } finally {
    boton.disabled = false;
  }
});

function traducirError(error) {
  if (error?.code === "permission-denied") {
    return "Firestore rechazó la creación. Solo puedes crear clases de tus materias y de tus cursos.";
  }
  return error?.message || "No se pudo crear la clase.";
}

/* ---------------------- Listado ---------------------- */

/** Vuelve a leer las clases desde Firestore (tras crear, editar o eliminar). */
function cargarGrupos() {
  return cargarGruposCon(obtenerGruposDelProfesor(cuenta.uid));
}

/**
 * Pinta el listado. Recibe la promesa ya lanzada para que el arranque pueda
 * solapar esta lectura con la de los cursos.
 */
async function cargarGruposCon(promesa) {
  listaGrupos.innerHTML = `<p class="estado-vacio">Cargando tus clases...</p>`;

  let grupos = [];
  try {
    grupos = await promesa;
  } catch (error) {
    listaGrupos.innerHTML = `<p class="estado-vacio">No se pudieron cargar tus clases.</p>`;
    return;
  }

  // El selector de materia filtra también el listado: sin esto, cambiar de
  // materia dejaba abajo las clases de las otras.
  const materiaFiltro = MATERIA_PARAMETRO ||
    (materiasPermitidas.length > 1 ? selectMateria.value : "");
  if (materiaFiltro) {
    grupos = grupos.filter((g) => g.materia === materiaFiltro);
  }
  if (CURSO_PARAMETRO) {
    grupos = grupos.filter((g) => g.curso === CURSO_PARAMETRO);
  }

  gruposCache = grupos;

  const nombreMateria = obtenerMateria(materiaFiltro)?.nombre;
  const alcance = [nombreMateria, CURSO_PARAMETRO ? `curso ${CURSO_PARAMETRO}` : ""]
    .filter(Boolean).join(" · ");
  document.getElementById("titulo-lista").textContent = alcance
    ? `Tus clases de ${alcance} (${grupos.length})`
    : `Tus clases (${grupos.length})`;

  if (!grupos.length) {
    listaGrupos.innerHTML = `<p class="estado-vacio">Aún no has creado ninguna clase${
      alcance ? ` de ${escapar(alcance)}` : ""
    }. Crea la primera arriba.</p>`;
    return;
  }

  listaGrupos.innerHTML = grupos
    .map((grupo) => {
      const juego = obtenerJuego(grupo.juego) || { icono: "🎲", nombre: grupo.juego || "Juego" };
      const tema = obtenerTema(grupo.tema);
      const materia = obtenerMateria(grupo.materia);
      const estado = estadoDeSala(grupo);
      // Duplicar solo sirve si hay otro curso donde copiar la clase.
      const puedeDuplicar = cursosDisponibles.length > 1;
      return `
      <div class="grupo-card grupo-card--${escapar(grupo.juego)}">
        <div class="grupo-header">
          <h3>${escapar(grupo.nombre)}</h3>
          <span class="grupo-estado ${grupo.activo ? "grupo-estado--activo" : "grupo-estado--inactivo"}">
            <span class="dot"></span>${grupo.activo ? "Activa" : "Inactiva"}
          </span>
        </div>
        <span class="grupo-juego-label"><span class="grupo-juego-icono">${juego.icono}</span>${escapar(juego.nombre)}</span>
        <p class="grupo-meta">${escapar(materia?.nombre || "Materia")} · Curso ${escapar(grupo.curso || "—")}</p>
        <p class="grupo-meta">Tema: ${escapar(tema?.nombre || "Sin tema")} · Dificultad ${escapar(String(grupo.dificultad || "—"))}</p>
        <div class="grupo-codigo">${escapar(grupo.codigo)}</div>
        <p><span class="grupo-sala grupo-sala--${estado}">Sala: ${escapar(NOMBRE_SALA[estado])}</span></p>
        <p class="grupo-meta">${plural((grupo.miembrosUids || []).length, "estudiante")} en la clase</p>
        <div class="grupo-acciones">
          <a class="btn-accion" style="text-decoration:none;" href="sala.html?g=${escapar(encodeURIComponent(grupo.id))}">📺 Abrir sala</a>
          <a class="btn-secundario" style="text-decoration:none;" href="${escapar(rutaPractica(grupo))}">Probar el juego</a>
          <button class="btn-secundario" data-accion="copiar" data-id="${escapar(grupo.id)}" data-codigo="${escapar(grupo.codigo || "")}">Copiar código</button>
          <button class="btn-secundario" data-accion="estudiantes" data-id="${escapar(grupo.id)}" data-nombre="${escapar(grupo.nombre)}">Estudiantes</button>
          <button class="btn-secundario" data-accion="resultados" data-id="${escapar(grupo.id)}" data-nombre="${escapar(grupo.nombre)}">Ver resultados</button>
          <button class="btn-secundario" data-accion="editar" data-id="${escapar(grupo.id)}">Editar</button>
          ${puedeDuplicar ? `<button class="btn-secundario" data-accion="duplicar" data-id="${escapar(grupo.id)}">Duplicar en...</button>` : ""}
          <button class="btn-secundario" data-accion="alternar" data-id="${escapar(grupo.id)}" data-activo="${grupo.activo}">${grupo.activo ? "Desactivar" : "Activar"}</button>
          <button class="btn-secundario" data-accion="eliminar" data-id="${escapar(grupo.id)}">Eliminar</button>
        </div>
      </div>`;
    })
    .join("");

  listaGrupos.querySelectorAll("[data-accion]").forEach((boton) => {
    boton.addEventListener("click", () => manejarAccion(boton));
  });
}

async function manejarAccion(boton) {
  const accion = boton.dataset.accion;
  const grupoId = boton.dataset.id;

  if (accion === "resultados") return mostrarResultados(grupoId, boton.dataset.nombre);
  if (accion === "editar") return mostrarEditar(grupoId);
  if (accion === "estudiantes") return mostrarEstudiantes(grupoId, boton.dataset.nombre);
  if (accion === "duplicar") return mostrarDuplicar(grupoId);

  if (accion === "copiar") {
    const codigo = boton.dataset.codigo || "";
    navigator.clipboard?.writeText(codigo).then(
      () => {
        boton.textContent = "Copiado ✓";
        setTimeout(() => { boton.textContent = "Copiar código"; }, 1800);
      },
      () => alert(`Anota el código a mano: ${codigo}`)
    );
    return;
  }

  if (accion === "alternar") {
    const activoActual = boton.dataset.activo === "true";
    boton.disabled = true;
    try {
      await alternarEstadoGrupo(grupoId, !activoActual);
      await cargarGrupos();
    } catch (error) {
      alert("No se pudo actualizar la clase.");
      boton.disabled = false;
    }
    return;
  }

  if (accion === "eliminar") {
    if (!confirm("¿Eliminar esta clase? Se pierde su código y su lista de estudiantes. Esta acción no se puede deshacer.")) return;
    boton.disabled = true;
    try {
      await eliminarGrupo(grupoId);
      await cargarGrupos();
    } catch (error) {
      alert("No se pudo eliminar la clase.");
      boton.disabled = false;
    }
  }
}

/* ---------------------- Resultados ---------------------- */

async function mostrarResultados(grupoId, nombreGrupo) {
  const grupo = gruposCache.find((g) => g.id === grupoId) || {};
  resultadosTitulo.textContent = `Resultados — ${nombreGrupo}`;
  resultadosSub.textContent = `Curso ${grupo.curso || "—"} · ${obtenerMateria(grupo.materia)?.nombre || ""}`;
  resultadosContenido.innerHTML = `<p class="estado-vacio">Cargando resultados...</p>`;
  panelResultados.style.display = "block";
  panelResultados.scrollIntoView({ behavior: "smooth", block: "start" });

  try {
    const resultados = await obtenerResultadosDelGrupo(grupoId);
    const matriculados = (grupo.miembrosUids || []).length;

    if (!resultados.length) {
      resultadosContenido.innerHTML = `<p class="estado-vacio">
        Todavía nadie ha jugado en esta clase${matriculados ? ` (${plural(matriculados, "estudiante")} dentro)` : ""}.
      </p>`;
      return;
    }

    const mejor = Math.max(...resultados.map((r) => r.porcentaje || 0));
    const promedio = Math.round(resultados.reduce((s, r) => s + (r.porcentaje || 0), 0) / resultados.length);
    const notaGeneral = notaPromedio(resultados);

    // Nota del rector: lo que se corrige en clase no es la lista de partidas,
    // que con 30 niños es ilegible, sino cuánto lleva cada uno. Se agrupa por
    // estudiante y abajo queda el detalle por si hace falta revisar una jugada.
    const porEstudiante = new Map();
    resultados.forEach((r) => {
      const clave = r.uid || r.username || "Sin nombre";
      const fila = porEstudiante.get(clave) || {
        nombre: r.username || "Estudiante",
        partidas: 0,
        suma: 0,
        mejor: 0,
        notas: []
      };
      const nota = notaDeResultado(r);
      fila.partidas += 1;
      fila.suma += r.porcentaje || 0;
      fila.mejor = Math.max(fila.mejor, r.porcentaje || 0);
      fila.notas.push(nota);
      porEstudiante.set(clave, fila);
    });

    const filas = [...porEstudiante.values()].sort((a, b) => b.mejor - a.mejor);
    const hanJugado = porEstudiante.size;

    resultadosContenido.innerHTML = `
      <p class="panel-sub">${plural(resultados.length, "partida")} de ${plural(hanJugado, "estudiante")} ·
        promedio ${promedio}% · mejor ${mejor}% · nota promedio ${escapar(formatearNota(notaGeneral))} de 5,0${
          matriculados ? ` · ${hanJugado} de ${matriculados} matriculados han jugado` : ""}</p>

      <h3 style="margin:16px 0 8px;">Por estudiante</h3>
      <table class="tabla-resultados">
        <thead><tr><th>Estudiante</th><th>Partidas</th><th>Mejor %</th><th>Promedio %</th><th>Nota definitiva</th></tr></thead>
        <tbody>
          ${filas
            .map(
              (f) => `
              <tr>
                <td>${escapar(f.nombre)}</td>
                <td>${f.partidas}</td>
                <td>${f.mejor}%</td>
                <td>${Math.round(f.suma / f.partidas)}%</td>
                <td><span class="nota-celda">${escapar(formatearNota(promedioDeNotas(f.notas)))}</span> / 5,0</td>
              </tr>`
            )
            .join("")}
        </tbody>
      </table>

      <h3 style="margin:20px 0 8px;">Últimas partidas</h3>
      <table class="tabla-resultados">
        <thead><tr><th>Estudiante</th><th>Juego</th><th>Puntaje</th><th>Porcentaje</th><th>Nota</th></tr></thead>
        <tbody>
          ${resultados
            .slice(0, 20)
            .map(
              (r) => `
              <tr>
                <td>${escapar(r.username || "Estudiante")}</td>
                <td>${escapar(etiquetaJuego(r.juego))}</td>
                <td>${escapar(String(r.puntaje ?? "—"))} / ${escapar(String(r.total ?? "—"))}</td>
                <td>${escapar(String(r.porcentaje ?? "—"))}%</td>
                <td class="nota-celda">${escapar(formatearNota(notaDeResultado(r)))}</td>
              </tr>`
            )
            .join("")}
        </tbody>
      </table>
      ${resultados.length > 20
        ? `<p class="panel-sub" style="margin-top:8px;">Se muestran las 20 partidas más recientes de ${resultados.length}.</p>`
        : ""}
      ${resultados.length >= 500
        ? `<p class="panel-sub" style="margin-top:8px;">Esta clase tiene más de 500 partidas: se leen solo las 500 más recientes, por eso el promedio puede diferir del historial completo.</p>`
        : ""}`;
  } catch (error) {
    resultadosContenido.innerHTML = `<p class="estado-vacio">No se pudieron cargar los resultados.</p>`;
  }
}

document.getElementById("btn-cerrar-resultados")?.addEventListener("click", () => {
  panelResultados.style.display = "none";
});

/* ---------------------- Editar ---------------------- */

function mostrarEditar(grupoId) {
  const grupo = gruposCache.find((g) => g.id === grupoId);
  if (!grupo) return;

  grupoEnEdicionId = grupoId;
  mostrarMensaje(editarError, "");
  mostrarMensaje(editarExito, "");

  poblarTemas(editarTema, grupo.materia, grupo.curso, { conVacio: false });
  poblarCursos(editarCurso, { incluirVacio: false });

  document.getElementById("editar-nombre").value = grupo.nombre || "";
  editarTema.value = grupo.tema || "";
  editarDificultad.value = String(grupo.dificultad || 2);
  if ([...editarCurso.options].some((o) => o.value === grupo.curso)) editarCurso.value = grupo.curso;

  panelEditar.style.display = "block";
  panelEditar.scrollIntoView({ behavior: "smooth", block: "start" });
}

formEditarGrupo?.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  if (!grupoEnEdicionId) return;

  mostrarMensaje(editarError, "");
  mostrarMensaje(editarExito, "");

  const boton = formEditarGrupo.querySelector('button[type="submit"]');
  boton.disabled = true;

  try {
    await actualizarGrupo({
      grupoId: grupoEnEdicionId,
      nombre: document.getElementById("editar-nombre").value.trim(),
      curso: editarCurso.value,
      tema: editarTema.value,
      dificultad: Number(editarDificultad.value)
    });
    mostrarMensaje(editarExito, "Cambios guardados.");
    await cargarGrupos();
  } catch (error) {
    mostrarMensaje(editarError, traducirError(error));
  } finally {
    boton.disabled = false;
  }
});

document.getElementById("btn-cerrar-editar")?.addEventListener("click", () => {
  panelEditar.style.display = "none";
  grupoEnEdicionId = null;
});

/* ---------------------- Duplicar en otros cursos ---------------------- */

function mostrarDuplicar(grupoId) {
  const grupo = gruposCache.find((g) => g.id === grupoId);
  if (!grupo) return;

  grupoDuplicado = grupo;
  mostrarMensaje(duplicarError, "");
  mostrarMensaje(duplicarExito, "");
  duplicarTitulo.textContent = `Duplicar "${grupo.nombre}"`;

  const otros = cursosDisponibles.filter((c) => c.codigo !== grupo.curso);
  if (!otros.length) {
    duplicarCursos.innerHTML = `<p class="estado-vacio">
      No tienes más cursos donde copiar esta clase. El administrador te asigna otros grados desde Cursos.</p>`;
    document.getElementById("btn-duplicar-ok").disabled = true;
  } else {
    document.getElementById("btn-duplicar-ok").disabled = false;
    duplicarCursos.innerHTML = otros
      .map(
        (c) => `
        <label class="curso-check">
          <input type="checkbox" value="${escapar(c.codigo)}">
          <span>${escapar(c.codigo)} — ${escapar(c.nombre || `Grado ${c.codigo}`)}</span>
        </label>`
      )
      .join("");
  }

  panelDuplicar.style.display = "block";
  panelDuplicar.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.getElementById("btn-duplicar-ok")?.addEventListener("click", async () => {
  if (!grupoDuplicado) return;

  const cursosElegidos = [...duplicarCursos.querySelectorAll("input:checked")].map((i) => i.value);
  if (!cursosElegidos.length) {
    return mostrarMensaje(duplicarError, "Marca al menos un curso donde quieras la copia.");
  }

  mostrarMensaje(duplicarError, "");
  mostrarMensaje(duplicarExito, "");

  const boton = document.getElementById("btn-duplicar-ok");
  const original = boton.textContent;
  boton.disabled = true;

  const creadas = [];
  try {
    // De una en una: cada copia necesita su propia comprobación de que el
    // código de 6 letras no esté tomado, y así un fallo a mitad no deja el
    // resto de cursos a medias sin decir cuáles sí se crearon.
    for (const [i, curso] of cursosElegidos.entries()) {
      boton.textContent = `Creando ${i + 1} de ${cursosElegidos.length}...`;
      const { codigo } = await crearGrupo({
        profesorId: cuenta.uid,
        profesorNombre: cuenta.username,
        nombre: grupoDuplicado.nombre,
        juego: grupoDuplicado.juego,
        materia: grupoDuplicado.materia,
        curso,
        tema: grupoDuplicado.tema,
        dificultad: grupoDuplicado.dificultad
      });
      creadas.push(`${curso}: ${codigo}`);
    }
    mostrarMensaje(
      duplicarExito,
      `Copias creadas: ${creadas.length}. Códigos — ${creadas.join(" · ")}`
    );
    await cargarGrupos();
  } catch (error) {
    console.error(error);
    mostrarMensaje(
      duplicarError,
      `${traducirError(error)}${creadas.length ? ` Ya se crearon: ${creadas.join(" · ")}.` : ""}`
    );
    if (creadas.length) await cargarGrupos();
  } finally {
    boton.disabled = false;
    boton.textContent = original;
  }
});

document.getElementById("btn-cerrar-duplicar")?.addEventListener("click", () => {
  panelDuplicar.style.display = "none";
  grupoDuplicado = null;
});

/* ---------------------- Estudiantes ---------------------- */

async function mostrarEstudiantes(grupoId, nombreGrupo) {
  const grupo = gruposCache.find((g) => g.id === grupoId) || {};
  grupoEstudiantesId = grupoId;
  estudiantesTitulo.textContent = `Estudiantes — ${nombreGrupo}`;
  if (estudiantesSub) {
    estudiantesSub.textContent =
      `Curso ${grupo.curso || "—"}. Los estudiantes de este curso entran con el código de la clase; ` +
      `aquí solo ves quiénes ya se anotaron.`;
  }
  miembrosContenido.innerHTML = `<p class="estado-vacio">Cargando...</p>`;
  panelEstudiantes.style.display = "block";
  panelEstudiantes.scrollIntoView({ behavior: "smooth", block: "start" });
  await recargarEstudiantes();
}

async function recargarEstudiantes() {
  if (!grupoEstudiantesId) return;
  const grupoId = grupoEstudiantesId;

  try {
    const miembros = await obtenerMiembrosDelGrupo(grupoId);

    miembrosContenido.innerHTML = !miembros.length
      ? `<p class="estado-vacio">
          Todavía nadie se ha anotado en esta clase. Pasa el código y entrarán solos;
          no necesitas aprobar a nadie.
        </p>`
      : miembros
          .map(
            (m) => `
            <div class="grupo-card" style="margin-bottom:10px;">
              <div class="grupo-header"><h3>${escapar(m.username || "Estudiante")}</h3></div>
              <div class="grupo-acciones">
                <button class="btn-secundario" data-miembro-accion="quitar" data-uid="${escapar(m.uid)}">Quitar de la lista</button>
              </div>
            </div>`
          )
          .join("");

    miembrosContenido.querySelectorAll("[data-miembro-accion]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        if (!confirm("¿Quitar a este estudiante de la lista? Sigue siendo de tu curso y podrá volver a entrar con el código.")) return;
        btn.disabled = true;
        try {
          await quitarEstudianteDelGrupo({ grupoId, uid: btn.dataset.uid });
          await recargarEstudiantes();
          await cargarGrupos();
        } catch (error) {
          alert("No se pudo quitar al estudiante.");
          btn.disabled = false;
        }
      });
    });
  } catch (error) {
    miembrosContenido.innerHTML = `<p class="estado-vacio">No se pudieron cargar los estudiantes.</p>`;
  }
}

document.getElementById("btn-cerrar-estudiantes")?.addEventListener("click", () => {
  panelEstudiantes.style.display = "none";
  grupoEstudiantesId = null;
});
