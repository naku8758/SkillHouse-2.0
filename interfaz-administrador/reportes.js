// interfaz-administrador/reportes.js
// Agrega los resultados de todas las clases para dar un panorama de la
// plataforma. Se leen los subdocumentos "resultados" clase por clase porque
// Firestore no permite a un administrador consultar las subcolecciones de
// otros usuarios con una sola consulta de grupo de colecciones.

import { db } from "../js/firebase.js";
import { suscribirSesion } from "../js/sesion.js";
import { MATERIAS } from "../js/catalogo.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const MAXIMO_CLASES_CONCURRENTES = 250;

const errorEl = document.getElementById("reporte-error");

function mostrarError(texto) {
  errorEl.textContent = texto;
  errorEl.style.display = texto ? "block" : "none";
}

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

function promedio(valores) {
  if (!valores.length) return null;
  return Math.round(valores.reduce((a, b) => a + b, 0) / valores.length);
}

function tabla(contenedor, encabezados, filas, vacio) {
  const el = document.getElementById(contenedor);
  if (!filas.length) {
    el.innerHTML = `<p class="estado-vacio">${vacio}</p>`;
    return;
  }
  el.innerHTML = `
    <table class="tabla-resultados">
      <thead><tr>${encabezados.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
      <tbody>${filas.join("")}</tbody>
    </table>`;
}

async function cargar() {
  mostrarError("");

  let estudiantes = [];
  let profesores = [];
  let grupos = [];
  let resultados = [];

  try {
    [estudiantes, profesores, grupos] = await Promise.all([
      getDocs(collection(db, "estudiantes")).then((s) => s.docs.map((d) => d.data())),
      getDocs(collection(db, "profesores")).then((s) => s.docs.map((d) => d.data())),
      getDocs(collection(db, "grupos")).then((s) => s.docs.map((d) => ({ id: d.id, ...d.data() })))
    ]);

    // Se leen primero las clases más recientes: si hay más de 250, el recorte
    // tiene que ser de verdad "las más recientes" y no las primeras que
    // devuelve Firestore, que no llegan en ningún orden.
    const porFecha = [...grupos].sort(
      (a, b) => (b.creadoEn?.seconds || 0) - (a.creadoEn?.seconds || 0)
    );
    const leidas = porFecha.slice(0, MAXIMO_CLASES_CONCURRENTES);

    const porClase = await Promise.all(
      leidas.map((g) =>
        getDocs(collection(db, "grupos", g.id, "resultados"))
          .then((s) => s.docs.map((d) => ({ grupo: g, ...d.data() })))
          .catch(() => [])
      )
    );
    resultados = porClase.flat();

    if (grupos.length > leidas.length) {
      mostrarError(`Se leyeron las ${leidas.length} clases más recientes de ${grupos.length}; ${grupos.length - leidas.length} quedaron fuera del conteo de partidas.`);
    }
  } catch (err) {
    console.error(err);
    mostrarError("No se pudieron leer los datos. Revisa que firestore.rules esté publicado.");
    return;
  }

  const totalPartidas = resultados.length;
  const promedioGeneral = promedio(resultados.map((r) => r.porcentaje || 0));

  document.getElementById("reporte-stats").innerHTML = `
    <div class="stat-card"><div class="stat-valor">${estudiantes.length}</div><div class="stat-label">Estudiantes</div></div>
    <div class="stat-card"><div class="stat-valor">${profesores.length}</div><div class="stat-label">Profesores</div></div>
    <div class="stat-card"><div class="stat-valor">${grupos.length}</div><div class="stat-label">Clases creadas</div></div>
    <div class="stat-card"><div class="stat-valor">${totalPartidas}</div><div class="stat-label">Partidas jugadas</div></div>
    <div class="stat-card"><div class="stat-valor">${promedioGeneral == null ? "—" : promedioGeneral + "%"}</div><div class="stat-label">Promedio general</div></div>
  `;

  // --- Por materia ---
  tabla(
    "reporte-materias",
    ["Materia", "Clases", "Partidas", "Promedio"],
    MATERIAS.map((m) => {
      // Comparación estricta: con el "|| m.id" anterior una partida sin materia
      // se contaba en TODAS las filas y los promedios salían inflados.
      const delTema = resultados.filter((r) => (r.materia || r.grupo.materia) === m.id);
      const notas = delTema.map((r) => r.porcentaje || 0);
      const prom = promedio(notas);
      return `
        <tr>
          <td>${escapar(m.nombre)}</td>
          <td>${grupos.filter((g) => g.materia === m.id).length}</td>
          <td>${delTema.length}</td>
          <td>${prom == null ? "—" : prom + "%"}</td>
        </tr>`;
    }),
    "Todavía no hay partidas registradas."
  );

  // --- Por curso ---
  const cursos = [...new Set(grupos.map((g) => g.curso).filter(Boolean))].sort();
  tabla(
    "reporte-cursos",
    ["Curso", "Estudiantes matriculados", "Clases", "Partidas", "Promedio"],
    cursos.map((codigo) => {
      const delCurso = resultados.filter((r) => r.grupo.curso === codigo);
      const prom = promedio(delCurso.map((r) => r.porcentaje || 0));
      return `
        <tr>
          <td>${escapar(codigo)}</td>
          <td>${estudiantes.filter((e) => e.curso === codigo).length}</td>
          <td>${grupos.filter((g) => g.curso === codigo).length}</td>
          <td>${delCurso.length}</td>
          <td>${prom == null ? "—" : prom + "%"}</td>
        </tr>`;
    }),
    "Ningún curso tiene clases todavía."
  );

  // --- Estudiantes más activos ---
  const porEstudiante = new Map();
  resultados.forEach((r) => {
    if (!r.uid) return;
    const actual = porEstudiante.get(r.uid) || { nombre: r.username || "—", partidas: 0, suma: 0 };
    actual.partidas += 1;
    actual.suma += r.porcentaje || 0;
    actual.nombre = r.username || actual.nombre;
    porEstudiante.set(r.uid, actual);
  });

  const ranking = [...porEstudiante.entries()]
    .map(([uid, d]) => ({ uid, ...d, promedio: Math.round(d.suma / d.partidas) }))
    .sort((a, b) => b.partidas - a.partidas || b.promedio - a.promedio)
    .slice(0, 15);

  tabla(
    "reporte-estudiantes",
    ["#", "Estudiante", "Partidas", "Promedio"],
    ranking.map((e, i) => `
      <tr>
        <td>${i + 1}</td>
        <td>${escapar(e.nombre)}</td>
        <td>${e.partidas}</td>
        <td>${e.promedio}%</td>
      </tr>`),
    "Nadie ha jugado todavía."
  );
}

suscribirSesion("administrador", (cuenta) => {
  if (!cuenta) return;
  cargar();
});
