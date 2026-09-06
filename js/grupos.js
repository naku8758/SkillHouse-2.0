// js/grupos.js
// Capa de datos para "grupos de juego": un profesor crea un grupo eligiendo
// un juego (quiz / puzzle), obtiene un código de 6 caracteres y lo comparte
// con sus estudiantes en clase. Los estudiantes se unen con ese código y
// juegan; los resultados quedan guardados para que el profesor los revise.
//
// Estructura en Firestore:
//   grupos/{grupoId}
//     { nombre, juego, profesorId, profesorNombre, codigo, activo,
//       miembrosUids: [uid, uid, ...], creadoEn }
//
//   grupos/{grupoId}/miembros/{uid}
//     { uid, username, unidoEn }              -> lista para el profesor
//
//   grupos/{grupoId}/resultados/{autoId}
//     { uid, username, juego, puntaje, total, porcentaje, fecha }

import { db } from "./firebase.js";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  setDoc,
  arrayUnion,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const JUEGOS_VALIDOS = ["quiz", "puzzle", "carrera"];
const CARACTERES_CODIGO = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // sin 0/O/1/I para evitar confusiones

function generarCodigo(longitud = 6) {
  let codigo = "";
  for (let i = 0; i < longitud; i++) {
    codigo += CARACTERES_CODIGO.charAt(
      Math.floor(Math.random() * CARACTERES_CODIGO.length)
    );
  }
  return codigo;
}

async function codigoEstaLibre(codigo) {
  const q = query(collection(db, "grupos"), where("codigo", "==", codigo));
  const snap = await getDocs(q);
  return snap.empty;
}

async function generarCodigoUnico() {
  // Intenta unas cuantas veces por si el código generado ya existe
  // (muy improbable con 6 caracteres, pero se valida igual).
  for (let intento = 0; intento < 8; intento++) {
    const candidato = generarCodigo();
    if (await codigoEstaLibre(candidato)) return candidato;
  }
  throw new Error("No se pudo generar un código único. Intenta de nuevo.");
}

/* ---------------------- PROFESOR ---------------------- */

/**
 * Crea un nuevo grupo de juego.
 * @param {{profesorId:string, profesorNombre:string, nombre:string, juego:string}} datos
 * @returns {Promise<{grupoId:string, codigo:string}>}
 */
export async function crearGrupo({ profesorId, profesorNombre, nombre, juego }) {
  if (!JUEGOS_VALIDOS.includes(juego)) {
    throw new Error("Selecciona un juego válido.");
  }
  const nombreLimpio = (nombre || "").trim();
  if (!nombreLimpio) {
    throw new Error("Ponle un nombre al grupo (ej. '6-A Matemáticas').");
  }

  const codigo = await generarCodigoUnico();

  const ref = await addDoc(collection(db, "grupos"), {
    nombre: nombreLimpio,
    juego,
    profesorId,
    profesorNombre: profesorNombre || "",
    codigo,
    activo: true,
    miembrosUids: [],
    creadoEn: serverTimestamp()
  });

  return { grupoId: ref.id, codigo };
}

/** Devuelve todos los grupos creados por un profesor, más recientes primero. */
export async function obtenerGruposDelProfesor(profesorId) {
  const q = query(
    collection(db, "grupos"),
    where("profesorId", "==", profesorId)
  );
  const snap = await getDocs(q);
  const grupos = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  grupos.sort((a, b) => (b.creadoEn?.seconds || 0) - (a.creadoEn?.seconds || 0));
  return grupos;
}

/** Activa o desactiva un grupo (un grupo inactivo no acepta nuevos ingresos). */
export async function alternarEstadoGrupo(grupoId, activo) {
  await updateDoc(doc(db, "grupos", grupoId), { activo: !!activo });
}

/** Elimina un grupo (no elimina subcolecciones; suficiente para este proyecto). */
export async function eliminarGrupo(grupoId) {
  await deleteDoc(doc(db, "grupos", grupoId));
}

/** Lista de estudiantes que se han unido a un grupo. */
export async function obtenerMiembrosDelGrupo(grupoId) {
  const snap = await getDocs(collection(db, "grupos", grupoId, "miembros"));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

/** Resultados de partidas jugadas dentro de un grupo, más recientes primero. */
export async function obtenerResultadosDelGrupo(grupoId) {
  const ref = collection(db, "grupos", grupoId, "resultados");
  let snap;
  try {
    snap = await getDocs(query(ref, orderBy("fecha", "desc")));
  } catch (err) {
    // Si el índice de orderBy aún no existe, se recuperan sin ordenar
    // y se ordena en el cliente para no romper la vista.
    snap = await getDocs(ref);
  }
  const resultados = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  resultados.sort((a, b) => (b.fecha?.seconds || 0) - (a.fecha?.seconds || 0));
  return resultados;
}

/**
 * Estadísticas agregadas de todas las clases de un profesor: número de
 * clases, estudiantes únicos, partidas jugadas en total y el promedio
 * general de todas esas partidas. Útil para "Mi Perfil" y "Mi Biblioteca".
 */
export async function obtenerEstadisticasProfesor(profesorId) {
  const grupos = await obtenerGruposDelProfesor(profesorId);

  const estudiantesUnicos = new Set();
  grupos.forEach((g) => (g.miembrosUids || []).forEach((uid) => estudiantesUnicos.add(uid)));

  const resultadosPorGrupo = await Promise.all(
    grupos.map((g) => obtenerResultadosDelGrupo(g.id).catch(() => []))
  );

  let totalPartidas = 0;
  let sumaPorcentajes = 0;
  resultadosPorGrupo.forEach((resultados) => {
    totalPartidas += resultados.length;
    resultados.forEach((r) => (sumaPorcentajes += r.porcentaje || 0));
  });

  return {
    totalClases: grupos.length,
    totalEstudiantes: estudiantesUnicos.size,
    totalPartidas,
    promedioGeneral: totalPartidas ? Math.round(sumaPorcentajes / totalPartidas) : 0,
    grupos
  };
}

/* ---------------------- ESTUDIANTE ---------------------- */

/** Obtiene un grupo por su ID (para validar antes de jugar). */
export async function obtenerGrupo(grupoId) {
  const snap = await getDoc(doc(db, "grupos", grupoId));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

/**
 * Une a un estudiante a un grupo a partir de su código.
 * @returns {Promise<{id:string, ...}>} el grupo al que se unió
 */
export async function unirseAGrupo({ codigo, uid, username }) {
  const codigoLimpio = (codigo || "").trim().toUpperCase();
  if (!codigoLimpio) throw new Error("Ingresa el código que te dio tu profesor.");

  const q = query(collection(db, "grupos"), where("codigo", "==", codigoLimpio));
  const snap = await getDocs(q);
  if (snap.empty) throw new Error("No existe ningún grupo con ese código.");

  const grupoDoc = snap.docs[0];
  const grupo = { id: grupoDoc.id, ...grupoDoc.data() };

  if (!grupo.activo) {
    throw new Error("Este grupo ya no está activo. Pídele a tu profesor un código vigente.");
  }

  // Agrega el uid al arreglo del grupo (idempotente) y crea/actualiza su
  // ficha en la subcolección de miembros para que el profesor vea el nombre.
  await updateDoc(doc(db, "grupos", grupo.id), {
    miembrosUids: arrayUnion(uid)
  });
  await setDoc(doc(db, "grupos", grupo.id, "miembros", uid), {
    uid,
    username: username || "",
    unidoEn: serverTimestamp()
  });

  return grupo;
}

/** Grupos a los que un estudiante ya pertenece, más recientes primero. */
export async function obtenerGruposDelEstudiante(uid) {
  const q = query(
    collection(db, "grupos"),
    where("miembrosUids", "array-contains", uid)
  );
  const snap = await getDocs(q);
  const grupos = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  grupos.sort((a, b) => (b.creadoEn?.seconds || 0) - (a.creadoEn?.seconds || 0));
  return grupos;
}

/* ---------------------- RESULTADOS (ambos roles) ---------------------- */

/**
 * Guarda el resultado de una partida. Si grupoId es null/undefined, la
 * partida era "modo práctica" y no se guarda en Firestore (evita ruido de
 * datos de grupos que no existen).
 *
 * Además del resultado dentro del grupo, se guarda una copia en el
 * historial personal del estudiante (estudiantes/{uid}/resultados) para
 * que "Mi Biblioteca" pueda mostrar todo su progreso sin tener que leer
 * los resultados de cada grupo por separado.
 */
export async function guardarResultado({ grupoId, uid, username, juego, puntaje, total }) {
  if (!grupoId) return null;
  const porcentaje = total > 0 ? Math.round((puntaje / total) * 100) : 0;

  let nombreGrupo = "";
  try {
    const grupoSnap = await getDoc(doc(db, "grupos", grupoId));
    if (grupoSnap.exists()) nombreGrupo = grupoSnap.data().nombre || "";
  } catch (err) {
    nombreGrupo = "";
  }

  const datosResultado = {
    uid,
    username: username || "",
    juego,
    puntaje,
    total,
    porcentaje,
    fecha: serverTimestamp()
  };

  const ref = await addDoc(collection(db, "grupos", grupoId, "resultados"), datosResultado);

  try {
    await addDoc(collection(db, "estudiantes", uid, "resultados"), {
      ...datosResultado,
      grupoId,
      nombreGrupo
    });
  } catch (err) {
    console.error("No se pudo guardar el historial personal:", err);
  }

  return ref.id;
}

/** Historial completo de partidas jugadas por un estudiante, más recientes primero. */
export async function obtenerHistorialEstudiante(uid) {
  const ref = collection(db, "estudiantes", uid, "resultados");
  let snap;
  try {
    snap = await getDocs(query(ref, orderBy("fecha", "desc")));
  } catch (err) {
    snap = await getDocs(ref);
  }
  const historial = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  historial.sort((a, b) => (b.fecha?.seconds || 0) - (a.fecha?.seconds || 0));
  return historial;
}
