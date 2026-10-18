// js/libro-curso.js
// El "curso como base de datos": una sola lectura por curso devuelve el padrón
// de estudiantes y, al lado de cada uno, la nota que sacó en cada clase del
// profesor. Es lo que el colegio pregunta al cierre del periodo: "¿cómo van los
// de 601 en tu materia?".
//
// Por qué se arma aquí y no en Firestore: no hay Cloud Functions (plan Spark),
// así que la agregación tiene que hacerla el cliente. Para que no se dispare,
// cada clase lee un máximo de resultados y se leen de una sola vez en paralelo.

import { db } from "./firebase.js";
import { collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { obtenerGruposDelCurso, obtenerResultadosDelGrupo } from "./grupos.js";
import { notaDeResultado, promedioDeNotas, formatearNota } from "./nota.js";

/**
 * Estudiantes matriculados en un curso. La regla de Firestore deja listar a un
 * profesor solo cuando el grado del curso está entre los que le asignaron, así
 * que esta lectura ya viene acotada por el servidor.
 */
export async function obtenerEstudiantesDelCurso(codigo) {
  if (!codigo) return [];
  const snap = await getDocs(query(collection(db, "estudiantes"), where("curso", "==", codigo)));
  const estudiantes = snap.docs.map((d) => ({
    uid: d.id,
    username: d.data().username || "Estudiante",
    curso: d.data().curso || codigo,
    creadoPorNombre: d.data().creadoPorNombre || ""
  }));
  estudiantes.sort((a, b) =>
    String(a.username).localeCompare(String(b.username), "es", { numeric: true })
  );
  return estudiantes;
}

/**
 * Libro de notas de un curso para un profesor.
 *
 * `materiaId` es opcional: sin materia se leen todas sus clases del curso, que
 * en un grado con varias asignaturas puede ser mucha lectura, así que el panel
 * recomienda filtrar por materia cuando la tabla crece.
 *
 * Devuelve:
 *   clases     las clases del profesor en el curso, con su promedio
 *   filas      una por estudiante: celdas por clase, partidas, mejor % y nota
 *   jugadas    cuántos estudiantes tienen al menos una partida
 */
export async function libroDelCurso({ codigo, profesorId, materiaId = "", limitePorClase = 300 }) {
  const todas = await obtenerGruposDelCurso(codigo);
  const clases = todas.filter(
    (g) => (!profesorId || g.profesorId === profesorId) && (!materiaId || g.materia === materiaId)
  );

  // Los nombres salen del padrón del curso; el resultado guarda el que tenía el
  // niño cuando jugó, que puede estar viejo, así que manda el padrón.
  const estudiantes = await obtenerEstudiantesDelCurso(codigo).catch(() => []);
  const nombrePor = new Map(estudiantes.map((e) => [e.uid, e.username]));

  const resultadosPorClase = await Promise.all(
    clases.map((g) =>
      obtenerResultadosDelGrupo(g.id, { limite: limitePorClase }).catch(() => [])
    )
  );

  const filas = new Map();
  const filaDe = (uid) => {
    if (!filas.has(uid)) {
      filas.set(uid, {
        uid,
        nombre: nombrePor.get(uid) || "Estudiante",
        partidas: 0,
        sumaPct: 0,
        mejorPct: 0,
        notas: [],
        celdas: new Map()
      });
    }
    const f = filas.get(uid);
    if (f.nombre === "Estudiante" && nombrePor.has(uid)) f.nombre = nombrePor.get(uid);
    return f;
  };

  clases.forEach((grupo, i) => {
    const acumulado = { clases: 0, partidas: 0, sumaPct: 0, mejorPct: 0 };
    resultadosPorClase[i].forEach((r) => {
      const uid = r.uid || `sin-uid:${r.username || "?"}`;
      const nota = notaDeResultado(r);
      const pct = r.porcentaje || 0;

      const f = filaDe(uid);
      const celda = f.celdas.get(grupo.id) || { notas: [], partidas: 0, mejor: 0 };
      celda.notas.push(nota);
      celda.partidas += 1;
      celda.mejor = Math.max(celda.mejor, pct);
      f.celdas.set(grupo.id, celda);

      f.partidas += 1;
      f.sumaPct += pct;
      f.mejorPct = Math.max(f.mejorPct, pct);
      f.notas.push(nota);

      acumulado.partidas += 1;
      acumulado.sumaPct += pct;
      acumulado.mejorPct = Math.max(acumulado.mejorPct, pct);
    });

    if (acumulado.partidas) {
      acumulado.clases = 1;
      grupo.resumen = {
        partidas: acumulado.partidas,
        promedio: Math.round(acumulado.sumaPct / acumulado.partidas),
        mejor: acumulado.mejorPct
      };
    } else {
      grupo.resumen = { partidas: 0, promedio: 0, mejor: 0 };
    }
  });

  // Los del curso que aún no juegan salen con la fila vacía: para el profesor es
  // la fila que falta, no un hueco invisible en la tabla.
  estudiantes.forEach((e) => filaDe(e.uid));

  const listafilas = [...filas.values()].sort((a, b) =>
    String(a.nombre).localeCompare(String(b.nombre), "es", { numeric: true })
  );
  listafilas.forEach((f) => {
    f.promedioPct = f.partidas ? Math.round(f.sumaPct / f.partidas) : 0;
    f.nota = promedioDeNotas(f.notas);
  });

  return {
    clases,
    filas: listafilas,
    jugadas: listafilas.filter((f) => f.partidas > 0).length,
    matriculados: estudiantes.length
  };
}

/** Nota de una celda (estudiante × clase), ya formateada para la tabla. */
export function notaCelda(celda) {
  if (!celda || !celda.notas.length) return "—";
  return formatearNota(promedioDeNotas(celda.notas));
}
