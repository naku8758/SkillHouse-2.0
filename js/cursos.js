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

import { plural } from "./plural.js";
import { db } from "./firebase.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  query,
  where,
  updateDoc,
  writeBatch,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { gradoDeCurso } from "./malla.js";

const PATRON_CODIGO = /^\d{3,4}$/;

function validarCodigoCurso(codigo) {
  if (!PATRON_CODIGO.test(codigo)) {
    return "El código son tres o cuatro dígitos, por ejemplo 601 u 1103.";
  }
  return "";
}

/**
 * El código del curso se arma solo: grado + grupo en dos dígitos.
 *   6 + 1 -> "601"     6 + 11 -> "611"     11 + 3 -> "1103"
 *
 * Es la forma en que el colegio nombra sus cursos, así que el administrador no
 * tiene que traducir nada: escribe el grado y el grupo tal como los ve en el
 * listado. Los dos dígitos del grupo son los que permiten 601…611 (los grupos
 * A a K de sexto) sin que el código se vuelva ambiguo: los últimos dos dígitos
 * siempre son el grupo y lo que queda antes es el grado.
 *
 * La letra se sigue aceptando (A = 1, B = 2, …, K = 11) por costumbre y porque
 * los cursos creados antes con "6 + A" ya viven en Firestore con el código
 * "601": los dos caminos apuntan al mismo documento, así que no se duplica nada.
 */
export function codigoDeCurso(grado, grupo) {
  const n = Number(String(grado ?? "").trim());
  const g = String(grupo ?? "").trim().toUpperCase();
  if (!Number.isInteger(n) || n < 1 || n > 11) return "";
  let num = 0;
  if (/^\d{1,2}$/.test(g)) num = Number(g);
  else if (/^[A-Z]$/.test(g)) num = g.charCodeAt(0) - 64;
  if (num < 1 || num > 99) return "";
  return `${n}${String(num).padStart(2, "0")}`;
}

/** Como el usuario escribió el grupo, para los mensajes y el nombre. */
function grupoVisible(grupo) {
  return String(grupo ?? "").trim().toUpperCase();
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
 * Crea un curso a partir del grado y el número de grupo. El código nunca lo
 * teclea nadie: lo arma `codigoDeCurso`, y como además es el ID del documento,
 * un grado+grupo repetido choca contra el curso que ya existe y se rechaza.
 */
export async function crearCurso({ grado, grupo, anio, nombre }) {
  const limpio = codigoDeCurso(grado, grupo);
  if (!limpio) {
    throw new Error("Elige un grado del 1 al 11 y un grupo del 1 al 99.");
  }
  const g = grupoVisible(grupo);

  if (await obtenerCurso(limpio)) {
    throw new Error(`El curso ${limpio} —grado ${String(grado).trim()}, grupo ${g}— ya existe.`);
  }

  const curso = {
    codigo: limpio,
    nombre: (nombre || "").trim() || `Grado ${String(grado).trim()} - Grupo ${g}`,
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
 * Borra un curso.
 *
 * Con `cascade` en falso se niega si el curso todavía tiene estudiantes o
 * clases, que es el freno viejo: sirve para que nadie borre por descuido una
 * promoción matriculada. La pantalla de Cursos ya no lo usa —ahora confirma en
 * la propia página y borra en cascada—, pero la función lo mantiene por si
 * alguien la llama desde otro lado.
 *
 * Con `cascade: true` el curso se va junto con lo que contiene, y cada dato
 * recibe el trato que le corresponde:
 *   - las clases del curso se borran con sus fichas de miembro, la presencia de
 *     la sala y las notas;
 *   - los estudiantes NO se borran: siguen existiendo y quedan sin curso, el
 *     estado que la plataforma ya sabe manejar (el administrador les pone otro
 *     desde Usuarios, o ellos escriben el código nuevo en su Perfil);
 *   - quien lo dirigía vuelve a profesor estándar sin curso, para que no quede
 *     apuntando a un curso que ya no existe.
 * Borrar las cuentas de los niños en cascada sería lo más rápido y no se hace:
 * nadie pidió ese dato y se perdería el historial de un menor.
 */
export async function eliminarCurso(codigo, { cascade = false } = {}) {
  const limpio = String(codigo).trim();
  const [estudiantes, grupos, directores] = await Promise.all([
    getDocs(query(collection(db, "estudiantes"), where("curso", "==", limpio))),
    getDocs(query(collection(db, "grupos"), where("curso", "==", limpio))),
    getDocs(query(collection(db, "profesores"), where("curso", "==", limpio)))
  ]);

  if (!cascade && (!estudiantes.empty || !grupos.empty)) {
    throw new Error(
      `No se puede borrar ${limpio}: todavía tiene ${plural(estudiantes.size, "estudiante")} y ${plural(grupos.size, "clase")}.`
    );
  }

  // Firestore no borra subcolecciones en cascada, así que el contenido de cada
  // clase se lee antes de armar el lote.
  const contenido = await Promise.all(
    grupos.docs.flatMap((g) =>
      ["miembros", "sala", "resultados"].map((c) =>
        getDocs(collection(db, "grupos", g.id, c)).then((s) => s.docs.map((d) => d.ref))
      )
    )
  );

  const operaciones = [
    ...contenido.flat().map((ref) => ({ ref })),
    ...grupos.docs.map((g) => ({ ref: g.ref })),
    ...estudiantes.docs.map((d) => ({ ref: d.ref, datos: { curso: "" } })),
    ...directores.docs.map((d) => ({ ref: d.ref, datos: { curso: "", tipoProfesor: "estandar" } })),
    { ref: doc(db, "cursos", limpio) }
  ];

  // Lotes de 400: Firestore admite 500 operaciones por lote y se deja margen.
  for (let i = 0; i < operaciones.length; i += 400) {
    const lote = writeBatch(db);
    operaciones.slice(i, i + 400).forEach((op) => {
      if (op.datos) lote.update(op.ref, op.datos);
      else lote.delete(op.ref);
    });
    await lote.commit();
  }

  return { clases: grupos.size, estudiantes: estudiantes.size, directores: directores.size };
}

/**
 * Cursos en los que un profesor puede crear clases.
 *
 * El administrador le asigna GRADOS (profesores.grados, por ejemplo [6, 7] a
 * quien dicta sexto y séptimo). Con esa lista puesta, solo ve los cursos de
 * esos grados; sin ella —cuenta creada antes del cambio, o un profesor al que
 * todavía no le marcan grados— ve todos los cursos, que es como venía
 * funcionando.
 *
 * El director de curso no es un caso aparte: ve los grados que le asignaron y,
 * además y siempre, el curso que dirige, para que la dirección nunca lo deje
 * sin su propio curso aunque el administrador se olvide de marcarle ese grado.
 * La interfaz separa el curso dirigido ("Tu curso de dirección") de los demás
 * ("Otros cursos"), pero para crear clases los dos valen igual.
 */
export async function cursosDelProfesor({ uid, esDirector, curso, grados }) {
  const todos = await obtenerCursos();
  const mias = (grados || []).map((g) => Number(g)).filter(Number.isInteger);
  const visibles = mias.length
    ? todos.filter((c) => mias.includes(gradoDeCurso(c.codigo)))
    : todos;

  // El curso que dirige siempre entra, aunque el administrador no le haya marcado
  // ese grado: es el curso donde crea a sus estudiantes.
  const dirigido = (c) => c.directorUid === uid || (!!curso && c.codigo === curso);
  if (!esDirector) return visibles;
  if (visibles.some(dirigido)) return visibles;

  const suyo = todos.find(dirigido);
  return suyo ? [suyo, ...visibles] : visibles;
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
