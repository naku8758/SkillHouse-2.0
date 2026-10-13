// js/cursos.js
// Cursos del colegio (601, 602, …). El administrador los crea desde su
// panel; un curso puede tener un director de curso asignado.
//
// Estructura en Firestore:
//   cursos/{codigo}  -> { codigo, nombre, anio, directorUid, directorNombre,
//                         creadoEn }
//
// El ID del documento es el propio código, así que "601" no se puede
// duplicar y basta con leer el documento para saber quién lo dirige.

import { db } from "./firebase.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  where,
  writeBatch,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const PATRON_CODIGO = /^\d{3}$/;

function validarCodigoCurso(codigo) {
  if (!PATRON_CODIGO.test(codigo)) {
    return "El código debe ser de tres dígitos, por ejemplo 601.";
  }
  return "";
}

/** Todos los cursos, ordenados por código. */
export async function obtenerCursos() {
  const snap = await getDocs(collection(db, "cursos"));
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .sort((a, b) => String(a.codigo).localeCompare(String(b.codigo), "es", { numeric: true }));
}

export async function obtenerCurso(codigo) {
  if (!codigo) return null;
  const snap = await getDoc(doc(db, "cursos", codigo));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

/**
 * Crea un curso. Devuelve error si el código ya existe o no tiene la forma
 * de tres dígitos.
 */
export async function crearCurso({ codigo, nombre, anio }) {
  const limpio = String(codigo || "").trim();
  const errorCodigo = validarCodigoCurso(limpio);
  if (errorCodigo) throw new Error(errorCodigo);

  if (await obtenerCurso(limpio)) {
    throw new Error(`El curso ${limpio} ya existe.`);
  }

  const curso = {
    codigo: limpio,
    nombre: (nombre || "").trim() || `Grado ${limpio}`,
    anio: Number(anio) || new Date().getFullYear(),
    directorUid: "",
    directorNombre: "",
    creadoEn: serverTimestamp()
  };

  await setDoc(doc(db, "cursos", limpio), curso);
  return curso;
}

/**
 * Asigna (o quita, pasando uid vacío) el director de un curso.
 *
 * Escribe las dos caras de la relación en un solo lote:
 *   cursos/{codigo}.directorUid  -> lo consultan las reglas de Firestore
 *   profesores/{uid}.curso       -> lo consultan "Estudiantes" y el inicio
 *
 * Antes solo se movía la primera, así que cambiar un director dejaba al
 * saliente con su curso antiguo puesto: seguía viendo esa tarjeta y las
 * reglas le negaban la creación de clases. Si un escrito del lote falla,
 * Firestore rechaza el lote completo, así que nunca quedan mitades.
 */
export async function asignarDirector({ codigo, uid, nombre }) {
  const cursoActual = await obtenerCurso(codigo);
  const saliente = cursoActual?.directorUid || "";

  const lote = writeBatch(db);
  lote.update(doc(db, "cursos", codigo), {
    directorUid: uid || "",
    directorNombre: uid ? nombre || "" : ""
  });

  if (saliente && saliente !== uid) {
    lote.update(doc(db, "profesores", saliente), { curso: "" });
  }
  if (uid) {
    lote.update(doc(db, "profesores", uid), { curso: codigo });
  }

  await lote.commit();
}

/**
 * Borra un curso. Se niega si todavía tiene estudiantes o clases, para no
 * dejar cuentas colgadas de un curso que ya no existe.
 */
export async function eliminarCurso(codigo) {
  const [estudiantes, grupos] = await Promise.all([
    getDocs(query(collection(db, "estudiantes"), where("curso", "==", codigo))),
    getDocs(query(collection(db, "grupos"), where("curso", "==", codigo)))
  ]);

  if (!estudiantes.empty) {
    throw new Error(`No se puede borrar ${codigo}: todavía tiene ${estudiantes.size} estudiante(s).`);
  }
  if (!grupos.empty) {
    throw new Error(`No se puede borrar ${codigo}: todavía tiene ${grupos.size} clase(s).`);
  }

  await deleteDoc(doc(db, "cursos", codigo));
}

/**
 * Cursos en los que un profesor puede crear clases.
 *  - Director de curso: solo el suyo. Se aceptan las dos formas de saberlo —
 *    que el curso apunte al profesor (directorUid) o que la cuenta del profesor
 *    apunte al curso (datos.curso) — porque el administrador puede haber
 *    asignado solo una de las dos.
 *  - Profesor normal: cualquier curso existente.
 */
export async function cursosDelProfesor({ uid, esDirector, curso }) {
  const todos = await obtenerCursos();
  if (!esDirector) return todos;
  return todos.filter((c) => c.directorUid === uid || (!!curso && c.codigo === curso));
}
