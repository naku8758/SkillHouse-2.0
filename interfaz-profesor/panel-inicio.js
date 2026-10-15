// interfaz-profesor/panel-inicio.js
// Inicio del profesor. La plataforma ya sabe qué materia dictas (el
// administrador la eligió al crear tu cuenta), así que aquí no se te pregunta:
// se listan LOS CURSOS y dentro de cada curso se crean las clases.
//
// Se pinta en dos tiempos a propósito:
//  1. Los cursos cuestan una sola lectura, así que el profesor ve qué puede
//     crear casi al instante.
//  2. El conteo de clases y estudiantes por curso llega con una segunda
//     lectura (también una sola). El resumen con partidas y promedio ya NO se
//     calcula aquí: costaba una lectura por cada clase creada, y con un
//     profesor de varios cursos eso eran decenas de lecturas en cada carga de
//     portada. Ese resumen vive en "Mi Biblioteca", que se entra a propósito.

import { suscribirSesion } from "../js/sesion.js";
import { MATERIAS, obtenerMateria } from "../js/catalogo.js";
import { obtenerGruposDelProfesor } from "../js/grupos.js";
import { cursosDelProfesor } from "../js/cursos.js";
import { SALA, estadoDeSala } from "../js/sala.js";

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

/** Enlace a la vista de una materia filtrada por curso. */
function rutaClases(materiaId, codigoCurso) {
  return `materia.html?m=${encodeURIComponent(materiaId)}&c=${encodeURIComponent(codigoCurso)}`;
}

function tarjetaCurso(curso, conteo, esDirigido) {
  const etiqueta = esDirigido ? "👥 Director de curso" : "🎓 Estudiantes del curso";
  const datos = conteo
    ? `${conteo.clases} clase(s) · ${conteo.estudiantes} estudiante(s)`
    : "Contando tus clases...";

  return `
    <a href="${escapar(rutaClases(curso._materia, curso.codigo))}" class="materia-card ${curso._color}">
      <h3>🎓 ${escapar(curso.codigo)}</h3>
      <span class="materia-tag">${escapar(etiqueta)}</span>
      <p class="curso-datos">${escapar(curso.nombre || `Grado ${curso.codigo}`)} · ${escapar(datos)}</p>
      <span class="curso-cta">＋ Crear clase</span>
    </a>`;
}

suscribirSesion("profesor", async (cuenta) => {
  if (!cuenta) return; // guard.js redirige

  const contenedor = document.getElementById("bloques-materias");
  const nota = document.getElementById("materia-asignada");
  const cajaResumen = document.getElementById("resumen-inicio");
  const stats = document.getElementById("stats-inicio");

  // materias es un arreglo de ids; se ignoran los que ya no estén en el
  // catálogo (por si alguna materia se quitó después de crear la cuenta).
  const mias = (cuenta.datos.materias || [])
    .map((id) => obtenerMateria(id))
    .filter(Boolean);

  const nombres = mias.map((m) => `${m.icono} ${m.nombre}`).join(" · ");
  if (nota) {
    nota.textContent = mias.length
      ? `Dictas ${nombres} · ${mias.length} de ${MATERIAS.length} materias de la plataforma.`
      : "El administrador todavía no te ha asignado ninguna materia.";
  }

  if (!mias.length) {
    contenedor.innerHTML = `
      <p class="estado-vacio">
        El administrador todavía no te ha asignado ninguna materia. Pídele que actualice tu cuenta;
        sin materia asignada no puedes crear clases.
      </p>`;
    return;
  }

  contenedor.innerHTML = `<p class="estado-vacio">Cargando tus cursos...</p>`;

  const esDirector = cuenta.datos.tipoProfesor === "director";

  let cursos = [];
  try {
    cursos = await cursosDelProfesor({
      uid: cuenta.uid,
      esDirector,
      curso: cuenta.datos.curso
    });
  } catch (err) {
    console.error(err);
    contenedor.innerHTML = `
      <p class="estado-vacio">
        No se pudieron cargar tus cursos por un corte de conexión.
        <button type="button" class="btn-secundario" id="btn-reintentar-cursos" style="margin-left:10px;">Reintentar</button>
      </p>`;
    document.getElementById("btn-reintentar-cursos")
      .addEventListener("click", () => window.location.reload());
    return;
  }

  if (!cursos.length) {
    contenedor.innerHTML = `
      <p class="estado-vacio">
        ${esDirector
          ? "No tienes ningún curso a cargo. Pídele al administrador que te asigne uno en Cursos."
          : "El administrador todavía no ha creado cursos. Sin curso no se pueden crear clases."}
      </p>`;
    return;
  }

  /** Pinta las tarjetas. Con `grupos` null se pintan sin contadores. */
  function pintarTarjetas(grupos) {
    function conteoDe(materiaId, codigo) {
      const delCurso = grupos.filter((g) => g.curso === codigo && g.materia === materiaId);
      const estudiantes = new Set();
      delCurso.forEach((g) => (g.miembrosUids || []).forEach((uid) => estudiantes.add(uid)));
      return { clases: delCurso.length, estudiantes: estudiantes.size };
    }

    contenedor.innerHTML = mias
      .map((materia) => {
        const tarjetas = cursos
          .map((curso) =>
            tarjetaCurso(
              { ...curso, _materia: materia.id, _color: materia.color || "card1" },
              grupos ? conteoDe(materia.id, curso.codigo) : null,
              curso.directorUid === cuenta.uid || curso.codigo === cuenta.datos.curso
            )
          )
          .join("");

        return `
          <section class="panel-box" style="margin-bottom:22px;">
            <h2>${escapar(materia.icono)} ${escapar(materia.nombre)}</h2>
            <p class="panel-sub">Entra al curso para crear su clase; abajo verás las que ya existan.</p>
            <div class="materias-grid">${tarjetas}</div>
            ${esDirector
              ? `<p class="panel-sub" style="margin-top:14px;">
                   <a href="curso.html">👥 Estudiantes y claves del curso ${escapar(cuenta.datos.curso || cursos[0].codigo)} →</a>
                 </p>`
              : ""}
          </section>`;
      })
      .join("");
  }

  // Primer tiempo: los cursos ya están visibles y se puede crear.
  pintarTarjetas(null);

  // Segundo tiempo: los contadores por curso y el resumen rápido.
  try {
    const grupos = await obtenerGruposDelProfesor(cuenta.uid);
    pintarTarjetas(grupos);

    const estudiantes = new Set();
    grupos.forEach((g) => (g.miembrosUids || []).forEach((uid) => estudiantes.add(uid)));
    const abiertas = grupos.filter((g) => g.activo && estadoDeSala(g) === SALA.ABIERTA).length;

    stats.innerHTML = `
      <div class="stat-card"><div class="stat-valor">${grupos.length}</div><div class="stat-label">Clases creadas</div></div>
      <div class="stat-card"><div class="stat-valor">${estudiantes.size}</div><div class="stat-label">Estudiantes</div></div>
      <div class="stat-card"><div class="stat-valor">${abiertas}</div><div class="stat-label">Clases abiertas ahora</div></div>
      <div class="stat-card"><div class="stat-valor" style="font-size:1rem;"><a href="biblioteca.html">Partidas y promedios →</a></div><div class="stat-label">Mi Biblioteca</div></div>`;
    cajaResumen.style.display = "block";
  } catch (err) {
    console.error(err);
    stats.innerHTML = `<p class="estado-vacio">No se pudo leer tu resumen. Los cursos de arriba siguen funcionando.</p>`;
    cajaResumen.style.display = "block";
  }
});
