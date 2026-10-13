// interfaz-profesor/panel-inicio.js
// Inicio del profesor. La plataforma ya sabe qué materia dictas (el
// administrador la eligió al crear tu cuenta), así que aquí no se te pregunta:
// se listan LOS CURSOS y dentro de cada curso se crean las clases.
//
// Se pinta en dos tiempos a propósito:
//  1. Los cursos cuestan una sola lectura, así que el profesor ve qué puede
//     crear casi al instante.
//  2. El resumen (clases, estudiantes, partidas y promedio) cuesta una lectura
//     por cada clase creada; eso llega después y nunca bloquea la página.

import { suscribirSesion } from "../js/sesion.js";
import { MATERIAS, obtenerMateria } from "../js/catalogo.js";
import { obtenerEstadisticasProfesor } from "../js/grupos.js";
import { cursosDelProfesor } from "../js/cursos.js";

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

  // Segundo tiempo: el resumen y los contadores por curso.
  try {
    const datos = await obtenerEstadisticasProfesor(cuenta.uid);
    pintarTarjetas(datos.grupos || []);
    stats.innerHTML = `
      <div class="stat-card"><div class="stat-valor">${datos.totalClases}</div><div class="stat-label">Clases creadas</div></div>
      <div class="stat-card"><div class="stat-valor">${datos.totalEstudiantes}</div><div class="stat-label">Estudiantes</div></div>
      <div class="stat-card"><div class="stat-valor">${datos.totalPartidas}</div><div class="stat-label">Partidas jugadas</div></div>
      <div class="stat-card"><div class="stat-valor">${datos.totalPartidas ? datos.promedioGeneral + "%" : "—"}</div><div class="stat-label">Promedio</div></div>`;
    cajaResumen.style.display = "block";
  } catch (err) {
    console.error(err);
    stats.innerHTML = `<p class="estado-vacio">No se pudo leer tu resumen. Los cursos de arriba siguen funcionando.</p>`;
    cajaResumen.style.display = "block";
  }
});
