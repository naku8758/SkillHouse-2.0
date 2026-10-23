// interfaz-administrador/materias.js
// Muestra el catálogo real: las 14 áreas con sus ejes, los temas publicados por
// ciclo, y los profesores y clases que las usan.
//
// El contenido (preguntas y retos) no se descarga de una: cada materia tiene su
// banco en js/games/banco/ y solo se abre al pulsar "Ver contenido". Bajar los
// 14 bancos para pintar una tabla sería castigar al navegador y a la red del
// colegio, que es lo que este proyecto intenta evitar.

import { db } from "../js/firebase.js";
import { suscribirSesion } from "../js/sesion.js";
import { MATERIAS, temasDeMateria } from "../js/catalogo.js";
import { CICLOS } from "../js/malla.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const contenedor = document.getElementById("lista-materias-admin");

// Bancos ya abiertos, para no volver a bajarlos al pulsar dos veces.
const ESTADISTICAS = new Map();

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

function estadisticasDeTema(nodo) {
  if (!nodo) return null;
  const preguntas = nodo.preguntas || [];
  return {
    preguntas: preguntas.length,
    retos: (nodo.retos || []).length,
    porNivel: [1, 2, 3].map((n) => preguntas.filter((p) => p.dificultad === n).length)
  };
}

async function abrirBanco(materiaId) {
  if (ESTADISTICAS.has(materiaId)) return ESTADISTICAS.get(materiaId);
  const banco = await import(`../js/games/banco/${materiaId}.js`);
  const mapa = new Map();
  for (const [id, nodo] of Object.entries(banco.BANCO || {})) {
    const stats = estadisticasDeTema(nodo);
    if (stats) mapa.set(id, stats);
  }
  ESTADISTICAS.set(materiaId, mapa);
  return mapa;
}

function filaTema(tema, stats, usado) {
  const ciclo = CICLOS.find((c) => c.id === tema.cicloId);
  if (!stats) {
    return `<tr data-tema="${escapar(tema.id)}">
      <td>${escapar(tema.nombre)}</td>
      <td>${escapar(ciclo ? ciclo.nombre : "—")}</td>
      <td colspan="4"><span class="mensaje-error">Sin contenido todavía: el tema está en el catálogo pero su banco aún no tiene preguntas.</span></td>
    </tr>`;
  }
  return `<tr data-tema="${escapar(tema.id)}">
    <td>${escapar(tema.nombre)}</td>
    <td>${escapar(ciclo ? ciclo.nombre : "—")}</td>
    <td>${stats.preguntas}</td>
    <td>${stats.porNivel.join(" / ")}</td>
    <td>${stats.retos} · usado en ${usado}</td>
  </tr>`;
}

function sinStats(tema, usado) {
  return filaTema(tema, null, usado);
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
    contenedor.innerHTML = `<p class="estado-vacio">No se pudieron cargar los datos de la base: ${escapar(err.code || err.message || "motivo desconocido")}. Revisa el servidor local y recarga la página.</p>`;
    return;
  }

  contenedor.innerHTML = MATERIAS.map((materia) => {
    const temas = temasDeMateria(materia.id);
    const docentes = profesores.filter((p) => (p.materias || []).includes(materia.id));
    const clases = grupos.filter((g) => g.materia === materia.id);

    const filas = temas.map((tema) => sinStats(tema, clases.filter((g) => g.tema === tema.id).length)).join("");
    const ciclos = materia.ejes.reduce((suma, eje) => suma + Object.keys(eje.ciclos).length, 0);

    return `
      <div class="panel-box" style="margin-bottom:22px;">
        <h2>${escapar(materia.nombre)}</h2>
        <p class="panel-sub">
          ${materia.ejes.length} ejes · ${ciclos} temas publicados · ${clases.length} clase(s) creada(s)<br>
          Profesores que la dictan: ${docentes.length ? escapar(docentes.map((p) => p.username).join(", ")) : "ninguno todavía"}
        </p>
        <p><button type="button" class="btn-secundario" data-abrir="${escapar(materia.id)}">Ver contenido de cada tema</button></p>
        <table class="tabla-resultados" id="tabla-${escapar(materia.id)}" style="display:none;">
          <thead><tr><th>Tema</th><th>Grados</th><th>Preguntas</th><th>Niveles 1/2/3</th><th>Retos y uso</th></tr></thead>
          <tbody>${filas}</tbody>
        </table>
      </div>`;
  }).join("");

  contenedor.querySelectorAll("[data-abrir]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const materiaId = btn.dataset.abrir;
      const materia = MATERIAS.find((m) => m.id === materiaId);
      const tabla = document.getElementById(`tabla-${materiaId}`);
      btn.disabled = true;
      tabla.style.display = "table";
      btn.textContent = "Cargando preguntas...";
      try {
        const stats = await abrirBanco(materiaId);
        const usados = grupos.filter((g) => g.materia === materiaId);
        tabla.querySelector("tbody").innerHTML = temasDeMateria(materiaId)
          .map((tema) => filaTema(tema, stats.get(tema.id), usados.filter((g) => g.tema === tema.id).length))
          .join("");
        const total = [...stats.values()].reduce((suma, s) => suma + s.preguntas, 0);
        btn.textContent = `Contenido cargado: ${total} preguntas`;
      } catch (err) {
        console.error(err);
        btn.textContent = "No se pudo bajar el contenido de esta área";
        btn.disabled = false;
      }
    });
  });
}

suscribirSesion("administrador", (cuenta) => {
  if (!cuenta) return;
  cargar();
});
