// interfaz-administrador/materias.js
// Muestra el catálogo real: cada materia del archivo catalogo.js con sus
// temas, las preguntas que hay detrás, y los profesores y clases que la usan.

import { db } from "../js/firebase.js";
import { suscribirSesion } from "../js/sesion.js";
import { MATERIAS } from "../js/catalogo.js";
import { CONTENIDO_TEMAS } from "../js/games/contenido-temas.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const contenedor = document.getElementById("lista-materias-admin");

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

function estadisticasDeTema(temaId) {
  const tema = CONTENIDO_TEMAS[temaId];
  if (!tema) return null;
  return {
    preguntas: tema.preguntas.length,
    retos: (tema.retos || []).length,
    porNivel: [1, 2, 3].map(
      (n) => tema.preguntas.filter((p) => p.dificultad === n).length
    )
  };
}

async function cargar() {
  contenedor.innerHTML = `<p class="estado-vacio">Cargando catálogo...</p>`;

  let profesores = [];
  let grupos = [];
  try {
    [profesores, grupos] = await Promise.all([
      getDocs(collection(db, "profesores")).then((s) => s.docs.map((d) => ({ id: d.id, ...d.data() }))),
      getDocs(collection(db, "grupos")).then((s) => s.docs.map((d) => d.data()))
    ]);
  } catch (err) {
    console.error(err);
    contenedor.innerHTML = `<p class="estado-vacio">No se pudieron cargar los datos de la base.</p>`;
    return;
  }

  contenedor.innerHTML = MATERIAS.map((materia) => {
    const docentes = profesores.filter((p) => (p.materias || []).includes(materia.id));
    const clases = grupos.filter((g) => g.materia === materia.id);

    const temas = materia.temas
      .map((tema) => {
        const stats = estadisticasDeTema(tema.id);
        const usado = clases.filter((g) => g.tema === tema.id).length;
        if (!stats) {
          return `<tr><td>${escapar(tema.nombre)}</td><td colspan="4"><span class="mensaje-error">Sin contenido: este tema aparece en el catálogo pero no tiene preguntas.</span></td></tr>`;
        }
        return `
          <tr>
            <td>${escapar(tema.nombre)}</td>
            <td>${stats.preguntas}</td>
            <td>${stats.porNivel.join(" / ")}</td>
            <td>${stats.retos}</td>
            <td>${usado}</td>
          </tr>`;
      })
      .join("");

    const totalPreguntas = materia.temas.reduce((suma, t) => suma + (estadisticasDeTema(t.id)?.preguntas || 0), 0);

    return `
      <div class="panel-box" style="margin-bottom:22px;">
        <h2>${escapar(materia.nombre)}</h2>
        <p class="panel-sub">
          ${materia.temas.length} temas · ${totalPreguntas} preguntas · ${clases.length} clase(s) creada(s)<br>
          Profesores que la dictan: ${docentes.length ? escapar(docentes.map((p) => p.username).join(", ")) : "ninguno todavía"}
        </p>
        <table class="tabla-resultados">
          <thead><tr><th>Tema</th><th>Preguntas</th><th>Niveles 1/2/3</th><th>Retos</th><th>Clases que lo usan</th></tr></thead>
          <tbody>${temas}</tbody>
        </table>
      </div>`;
  }).join("");
}

suscribirSesion("administrador", (cuenta) => {
  if (!cuenta) return;
  cargar();
});
