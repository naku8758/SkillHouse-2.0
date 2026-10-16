// js/cursos.js
// Cursos (601, 602, …). El administrador los crea desde su
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
  updateDoc,
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

/**
 * El código del curso se arma solo: grado + letra de grupo.
 *   6 + A -> "601"     6 + B -> "602"     6 + G -> "607"
 *
 * Es la convención de la plataforma (601 a 607 son los grupos A a G del
 * mismo grado), así que el código generado coincide con los cursos que ya existen y
 * con los que el administrador pueda haber escrito a mano. Por eso el grado va
 * limitado a un dígito: con "10" o "11" el código dejaría de medir tres dígitos
 * y rompería la forma en que `estudiantes.curso` y `grupos.curso` lo referencian.
 */
export function codigoDeCurso(grado, grupo) {
  const n = Number(String(grado ?? "").trim());
  const letra = String(grupo ?? "").trim().toUpperCase();
  if (!Number.isInteger(n) || n < 1 || n > 9) return "";
  if (!/^[A-Z]$/.test(letra)) return "";
  return `${n}${String(letra.charCodeAt(0) - 64).padStart(2, "0")}`;
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
 * Crea un curso a partir del grado y la letra de grupo. El código nunca lo
 * teclea nadie: lo arma `codigoDeCurso`, y como además es el ID del documento,
 * un grado+grupo repetido choca contra el curso que ya existe y se rechaza.
 */
export async function crearCurso({ grado, grupo, anio, nombre }) {
  const limpio = codigoDeCurso(grado, grupo);
  if (!limpio) {
    throw new Error("Elige un grado del 1 al 9 y una letra de grupo (A, B, C…).");
  }

  if (await obtenerCurso(limpio)) {
    throw new Error(`El curso ${limpio} —grado ${grado}${String(grupo).toUpperCase()}— ya existe.`);
  }

  const curso = {
    codigo: limpio,
    nombre: (nombre || "").trim() || `Grado ${String(grado).trim()}${String(grupo).toUpperCase()}`,
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
 *
 * El saliente vuelve a "estandar" en el mismo movimiento: si no, `guard.js`
 * le seguiría mostrando el menú de Estudiantes aunque ya no dirija nada.
 */
export async function asignarDirector({ codigo, uid, nombre }) {
  const [cursoActual, dondeYaDirige] = await Promise.all([
    obtenerCurso(codigo),
    uid
      ? getDocs(query(collection(db, "cursos"), where("directorUid", "==", uid)))
      : Promise.resolve(null)
  ]);
  const saliente = cursoActual?.directorUid || "";

  const lote = writeBatch(db);
  lote.update(doc(db, "cursos", codigo), {
    directorUid: uid || "",
    directorNombre: uid ? nombre || "" : ""
  });

  if (saliente && saliente !== uid) {
    lote.update(doc(db, "profesores", saliente), { curso: "", tipoProfesor: "estandar" });
  }

  // Nadie dirige dos cursos a la vez: si el que llega ya dirigía otro, ese
  // otro queda sin director en el mismo lote en vez de quedarse apuntando a
  // una persona que ya no lo está.
  dondeYaDirige?.docs.forEach((d) => {
    if (d.id !== codigo) lote.update(d.ref, { directorUid: "", directorNombre: "" });
  });

  if (uid) {
    lote.update(doc(db, "profesores", uid), { curso: codigo, tipoProfesor: "director" });
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

/**
 * Matricula (o re-matricula) a un estudiante en un curso escribiendo su código.
 *
 * Es el "plan b" de la plataforma: al crear la cuenta el estudiante ya sale con
 * su curso puesto, pero si ese vínculo se pierde —una ficha mal editada, un
 * curso que se borró y se volvió a crear, una cuenta que alguien tocó en
 * Firebase Console— el niño queda fuera de todas las clases. Con el código que
 * le da su director puede volver a meterse él mismo desde Mi Perfil, sin depender
 * de que el administrador lo encuentre.
 *
 * `porEstudiante` es la parte que cuida la seguridad. Cuando llama el propio
 * alumno solo se acepta si su curso está vacío: si pudiera moverse entre dos
 * cursos que sí existen, bastaría con que se pasara el código de 602 para
 * entrar a las clases de otro grado. Cambiar de curso equivocado es trabajo del
 * administrador, que ve el padrón completo. Las reglas de Firestore repiten esa
 * condición en el servidor, así que escribir esto a mano en la consola tampoco
 * lo permite.
 */
export async function matricularEnCurso({ uid, codigo, porEstudiante = false }) {
  const limpio = String(codigo || "").trim();
  const errorCodigo = validarCodigoCurso(limpio);
  if (errorCodigo) throw new Error(errorCodigo);

  const curso = await obtenerCurso(limpio);
  if (!curso) throw new Error(`No existe ningún curso ${limpio}. Revisa el código con tu director.`);

  const ficha = await getDoc(doc(db, "estudiantes", uid));
  if (!ficha.exists()) {
    throw new Error("Esta cuenta no tiene ficha de estudiante, así que no se puede matricular. Hay que crearla de nuevo.");
  }

  const actual = ficha.data().curso || "";
  if (porEstudiante && actual) {
    throw new Error(`Tu cuenta ya está en el curso ${actual}. Si es el curso equivocado, lo corrige el administrador.`);
  }

  await updateDoc(doc(db, "estudiantes", uid), { curso: limpio });
  return curso;
}
