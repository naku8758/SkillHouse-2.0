// js/grupos.js
// Capa de datos de las "clases": un profesor crea una clase para un curso y
// una materia concretos, eligiendo tema, dificultad y juego; obtiene un
// código de 6 caracteres y lo comparte. Los estudiantes se unen con ese
// código desde la página de ESA materia, y solo si el curso del grupo
// coincide con el suyo. Los resultados quedan guardados para que el profesor
// los revise.
//
// Estructura en Firestore:
//   grupos/{grupoId}
//     { nombre, juego, materia, curso, tema, dificultad,
//       profesorId, profesorNombre, codigo, activo, miembrosUids, creadoEn }
//
//   grupos/{grupoId}/miembros/{uid}     { uid, username, unidoEn }
//   grupos/{grupoId}/solicitudes/{uid}  { uid, username, estado, solicitadoEn }
//   grupos/{grupoId}/resultados/{autoId}{ uid, username, juego, puntaje,
//                                          total, porcentaje, fecha }

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
  arrayRemove,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { MATERIAS } from "./catalogo.js";

const JUEGOS_VALIDOS = ["quiz", "puzzle", "carrera"];
const MATERIAS_VALIDAS = MATERIAS.map((m) => m.id);
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
 * Crea una nueva clase.
 * @param {{profesorId:string, profesorNombre:string, nombre:string,
 *          juego:string, materia:string, curso:string, tema:string,
 *          dificultad:number}} datos
 * @returns {Promise<{grupoId:string, codigo:string}>}
 */
export async function crearGrupo({
  profesorId,
  profesorNombre,
  nombre,
  juego,
  materia,
  curso,
  tema,
  dificultad
}) {
  if (!JUEGOS_VALIDOS.includes(juego)) {
    throw new Error("Selecciona un juego válido.");
  }

  const nombreLimpio = (nombre || "").trim();

  if (!nombreLimpio) {
    throw new Error("Ponle un nombre a la clase.");
  }

  if (!MATERIAS_VALIDAS.includes(materia)) {
    throw new Error("Selecciona una materia válida.");
  }

  if (!curso) {
    throw new Error("Selecciona el curso al que pertenece esta clase.");
  }

  if (!tema) {
    throw new Error("Selecciona un tema.");
  }

  if (![1, 2, 3].includes(Number(dificultad))) {
    throw new Error("Selecciona una dificultad válida.");
  }

  const codigo = await generarCodigoUnico();

  const ref = await addDoc(collection(db, "grupos"), {
    nombre: nombreLimpio,
    juego,
    materia,
    curso,
    tema,
    dificultad: Number(dificultad),
    profesorId,
    profesorNombre: profesorNombre || "",
    codigo,
    activo: true,
    miembrosUids: [],
    creadoEn: serverTimestamp()
  });

  return {
    grupoId: ref.id,
    codigo
  };
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

/**
 * Edita los datos de una clase ya creada (nombre, curso, tema y dificultad).
 * El juego y la materia no se pueden cambiar: los resultados guardados hasta
 * ahora perderían su referencia.
 */
export async function actualizarGrupo({ grupoId, nombre, curso, tema, dificultad }) {
  const cambios = {};

  if (curso !== undefined) {
    if (!curso) throw new Error("Selecciona un curso.");
    cambios.curso = curso;
  }

  if (nombre !== undefined) {
    const nombreLimpio = (nombre || "").trim();
    if (!nombreLimpio) throw new Error("Ponle un nombre al grupo.");
    cambios.nombre = nombreLimpio;
  }

  if (tema !== undefined) {
    if (!tema) throw new Error("Selecciona un tema.");
    cambios.tema = tema;
  }

  if (dificultad !== undefined) {
    if (![1, 2, 3].includes(Number(dificultad))) {
      throw new Error("Selecciona una dificultad válida.");
    }
    cambios.dificultad = Number(dificultad);
  }

  if (Object.keys(cambios).length === 0) return;

  await updateDoc(doc(db, "grupos", grupoId), cambios);
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

/** Quita a un estudiante de la clase (deja de ser miembro y ya no puede jugar en ella). */
export async function quitarEstudianteDelGrupo({ grupoId, uid }) {
  await updateDoc(doc(db, "grupos", grupoId), {
    miembrosUids: arrayRemove(uid)
  });
  await deleteDoc(doc(db, "grupos", grupoId, "miembros", uid));
}

/** Solicitudes de ingreso pendientes de un grupo (estudiantes esperando aprobación). */
export async function obtenerSolicitudesDelGrupo(grupoId) {
  const snap = await getDocs(collection(db, "grupos", grupoId, "solicitudes"));
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .filter((s) => s.estado === "pendiente");
}

/**
 * El profesor acepta o rechaza la solicitud de ingreso de un estudiante.
 * Aceptar: lo agrega a miembrosUids, crea su ficha en /miembros y borra la
 * solicitud (ya quedó resuelta). Rechazar: solo borra la solicitud; el
 * estudiante puede volver a intentarlo más adelante si quiere.
 */
export async function responderSolicitud({ grupoId, uid, username, aceptar }) {
  if (aceptar) {
    await updateDoc(doc(db, "grupos", grupoId), {
      miembrosUids: arrayUnion(uid)
    });
    await setDoc(doc(db, "grupos", grupoId, "miembros", uid), {
      uid,
      username: username || "",
      unidoEn: serverTimestamp()
    });
  }
  await deleteDoc(doc(db, "grupos", grupoId, "solicitudes", uid));
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
async function obtenerGrupo(grupoId) {
  const snap = await getDoc(doc(db, "grupos", grupoId));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

/**
 * Valida antes de dejar jugar dentro de una clase: la clase existe, sigue
 * activa, corresponde al juego de esta pantalla y el estudiante está aceptado
 * como miembro. Devuelve null en cualquier otro caso.
 *
 * Sin esta comprobación bastaba con escribir en la barra de direcciones
 * juegos/quiz.html?grupo=ID de una clase ajena para jugarla (el resultado no
 * se guardaba, pero la partida sí se dejaba hacer).
 */
export async function grupoJugable(grupoId, uid, juegoEsperado) {
  if (!grupoId) return null;

  let grupo;
  try {
    grupo = await obtenerGrupo(grupoId);
  } catch (err) {
    return null;
  }

  if (!grupo || !grupo.activo) return null;
  if (juegoEsperado && grupo.juego !== juegoEsperado) return null;
  if (!(grupo.miembrosUids || []).includes(uid)) return null;

  return grupo;
}

/**
 * Envía una solicitud de ingreso a una clase a partir de su código. Ya NO
 * une directamente: el profesor debe aceptar la solicitud primero (ver
 * responderSolicitud). Si el estudiante ya es miembro, o ya tiene una
 * solicitud pendiente, se le informa en vez de duplicar la solicitud.
 *
 * `materiaEsperada` y `cursoEsperado` son la clave del aislamiento por
 * materia y por curso: un código de Matemáticas deja de servir en la página
 * de Inglés, y un estudiante de 601 no puede colarse en una clase de 602.
 *
 * @returns {Promise<{grupo:Object, estado:"miembro"|"pendiente"}>}
 */
export async function unirseAGrupo({ codigo, uid, username, materiaEsperada, cursoEsperado }) {
  const codigoLimpio = (codigo || "").trim().toUpperCase();
  if (!codigoLimpio) throw new Error("Ingresa el código que te dio tu profesor.");

  const q = query(collection(db, "grupos"), where("codigo", "==", codigoLimpio));
  const snap = await getDocs(q);
  if (snap.empty) throw new Error("No existe ninguna clase con ese código.");

  const grupoDoc = snap.docs[0];
  const grupo = { id: grupoDoc.id, ...grupoDoc.data() };

  if (materiaEsperada && grupo.materia !== materiaEsperada) {
    throw new Error(
      `Ese código es de otra materia, no de ${nombreDeMateria(materiaEsperada) || "esta"}. Pídele a tu profesor el código de esta asignatura.`
    );
  }

  // El curso ya no es opcional: firestore.rules exige que el curso del
  // estudiante coincida con el de la clase, así que una cuenta sin curso
  // recibiría un permission-denido incomprensible. Se avisa aquí, en español.
  if (!cursoEsperado) {
    throw new Error("Tu cuenta todavía no está vinculada a un curso. Pídele a tu director de curso que te matricule antes de unirte a una clase.");
  }

  if (grupo.curso !== cursoEsperado) {
    throw new Error(
      `Esa clase es del curso ${grupo.curso || "sin curso"} y tú estás en ${cursoEsperado}. Solo puedes unirte a las clases de tu curso.`
    );
  }

  if (!grupo.activo) {
    throw new Error("Esta clase ya no está activa. Pídele a tu profesor un código vigente.");
  }

  if ((grupo.miembrosUids || []).includes(uid)) {
    return { grupo, estado: "miembro" };
  }

  const solicitudRef = doc(db, "grupos", grupo.id, "solicitudes", uid);
  const solicitudExistente = await getDoc(solicitudRef);
  if (solicitudExistente.exists() && solicitudExistente.data().estado === "pendiente") {
    return { grupo, estado: "pendiente" };
  }

  await setDoc(solicitudRef, {
    uid,
    username: username || "",
    curso: grupo.curso || "",
    estado: "pendiente",
    solicitadoEn: serverTimestamp()
  });

  return { grupo, estado: "pendiente" };
}

function nombreDeMateria(id) {
  return MATERIAS.find((m) => m.id === id)?.nombre || "";
}

/** Clases de un curso concreto (las que ve el director de curso). */
export async function obtenerGruposDelCurso(curso) {
  if (!curso) return [];
  const snap = await getDocs(query(collection(db, "grupos"), where("curso", "==", curso)));
  const grupos = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  grupos.sort((a, b) => (b.creadoEn?.seconds || 0) - (a.creadoEn?.seconds || 0));
  return grupos;
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
 * datos de clases que no existen).
 *
 * Antes de guardar comprueba que el uid está en la lista de miembros y de
 * que la clase sigue activa: las reglas de Firestore permiten escribir un
 * resultado a cualquier usuario autenticado (no pueden conocerse de otra
 * forma el ID del grupo y el del estudiante), así que este filtro es lo que
 * evita que alguien con la URL de una clase le meta resultados falsos.
 *
 * Además del resultado dentro de la clase, se guarda una copia en el
 * historial personal del estudiante (estudiantes/{uid}/resultados) para que
 * "Mi Biblioteca" pueda mostrar todo su progreso sin tener que leer los
 * resultados de cada clase por separado.
 */
export async function guardarResultado({ grupoId, uid, username, juego, puntaje, total }) {
  if (!grupoId) return null;

  const grupoSnap = await getDoc(doc(db, "grupos", grupoId));
  if (!grupoSnap.exists()) throw new Error("La clase ya no existe.");

  const grupo = grupoSnap.data();
  if (!(grupo.miembrosUids || []).includes(uid)) {
    throw new Error("No estás registrado como estudiante de esta clase.");
  }
  if (!grupo.activo) throw new Error("Esta clase ya no está aceptando resultados.");

  const porcentaje = total > 0 ? Math.round((puntaje / total) * 100) : 0;

  const datosResultado = {
    uid,
    username: username || "",
    juego,
    materia: grupo.materia || "",
    curso: grupo.curso || "",
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
      nombreGrupo: grupo.nombre || ""
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
