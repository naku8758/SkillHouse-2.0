// js/grupos.js
// Capa de datos de las "clases": un profesor crea una clase para un curso y
// una materia concretos, eligiendo tema, dificultad y juego; obtiene un
// código que siempre está activo y lo comparte. El código lo que hace es
// matricular: el estudiante queda en ese curso y desde ahí ve TODAS las clases
// activas de su curso y su materia, sin volver a escribir códigos. Los
// resultados quedan guardados para que el profesor los revise.
//
// Quién puede jugar una clase: el estudiante matriculado en el curso de la
// clase (o que ya entró con el código alguna vez). Antes había además una
// solicitud que el profesor tenía que aceptar; se quitó, porque en un salón de
// 30 niños el cuello de botella era esperar el visto bueno y el aula ya está
// acotada por el curso: el código de 601 no abre una clase de 602.
//
// Estructura en Firestore:
//   grupos/{grupoId}
//     { nombre, juego, materia, curso, tema, dificultad,
//       profesorId, profesorNombre, codigo, activo, sala, miembrosUids, creadoEn }
//
//   grupos/{grupoId}/miembros/{uid}     { uid, username, unidoEn }
//   grupos/{grupoId}/sala/{uid}         { uid, nombre, desde }   -> ver js/sala.js
//   grupos/{grupoId}/resultados/{autoId}{ uid, username, juego, puntaje,
//                                          total, porcentaje, nota, fecha }

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
  limit,
  setDoc,
  arrayUnion,
  arrayRemove,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { MATERIAS, existeTema, obtenerTema, nombreDelTema } from "./catalogo.js";
import { alinearTemaAlCurso, cicloDeCurso } from "./malla.js";
import { matricularEnCurso } from "./cursos.js";
import { SALA, salaBloqueaJuego, salaCerroClase } from "./sala.js";
import { notaDesdeFraccion, notaDeResultado } from "./nota.js";

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

/**
 * Tema que debe guardarse en la clase. El profesor puede elegir un tema de
 * otro grado o mover la clase de curso después de crearla: sin este control un
 * curso de 2° jugaría con preguntas de 11°. Se valida que el tema exista, que
 * sea de la materia de la clase y que pertenezca al ciclo del curso.
 */
function temaParaCurso(tema, curso, materia) {
  if (!tema) {
    throw new Error("Selecciona un tema.");
  }
  if (!existeTema(tema)) {
    throw new Error("El tema elegido ya no está en el catálogo.");
  }

  const info = obtenerTema(tema);
  if (materia && info.materiaId && info.materiaId !== materia) {
    throw new Error("El tema elegido no es de la materia de esta clase.");
  }

  const alineado = alinearTemaAlCurso(tema, curso, existeTema);
  const cicloCurso = cicloDeCurso(curso);
  if (alineado === tema && cicloCurso && info.cicloId && info.cicloId !== cicloCurso) {
    throw new Error(
      `"${nombreDelTema(tema)}" no tiene contenido para el curso ${curso}. Elige un tema de ese grado.`
    );
  }
  return alineado;
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

  if (![1, 2, 3].includes(Number(dificultad))) {
    throw new Error("Selecciona una dificultad válida.");
  }

  const temaFinal = temaParaCurso(tema, curso, materia);

  const codigo = await generarCodigoUnico();

  const ref = await addDoc(collection(db, "grupos"), {
    nombre: nombreLimpio,
    juego,
    materia,
    curso,
    tema: temaFinal,
    dificultad: Number(dificultad),
    profesorId,
    profesorNombre: profesorNombre || "",
    codigo,
    activo: true,
    // La clase nace en espera: el profesor la abre cuando está frente al
    // curso. Así nadie juega por adelantado ni desde la casa.
    sala: SALA.ESPERANDO,
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
    cambios.tema = tema;
  }

  if (dificultad !== undefined) {
    if (![1, 2, 3].includes(Number(dificultad))) {
      throw new Error("Selecciona una dificultad válida.");
    }
    cambios.dificultad = Number(dificultad);
  }

  if (tema !== undefined || curso !== undefined) {
    // La materia no se edita, así que se toma de la clase guardada para
    // comprobar que el tema nuevo siga siendo de esa materia.
    const actual = await getDoc(doc(db, "grupos", grupoId));
    if (!actual.exists()) throw new Error("La clase no existe o fue borrada.");
    const datos = actual.data();
    const cursoFinal = cambios.curso || datos.curso;
    const temaFinal = tema !== undefined ? tema : datos.tema;
    cambios.tema = temaParaCurso(temaFinal, cursoFinal, datos.materia);
    // Si el tema se movió de ciclo, el nivel elegido puede no tener preguntas.
    const dificultadFinal =
      cambios.dificultad !== undefined ? cambios.dificultad : Number(datos.dificultad) || 2;
    cambios.dificultad = dificultadFinal;
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

/**
 * Matricula al estudiante en el curso de la clase cuyo código escribió, si es
 * que todavía no tiene curso. Es el mismo `matricularEnCurso` de Mi Perfil, con
 * la condición de que solo rellena un curso vacío: así un niño de 602 no se
 * pasa a 601 sabiéndose un código, y el cambio de curso equivocado sigue
 * siendo trabajo del administrador, que ve el padrón completo.
 */
async function matricularPorCodigo(grupo, uid) {
  await matricularEnCurso({ uid, codigo: grupo.curso, porEstudiante: true });
}

/**
 * Agrega al estudiante a la lista de la clase y le escribe su ficha. Lo hace él
 * mismo (las reglas de Firestore le dejan agregarse solo a sí mismo y solo en
 * una clase de su curso), así que el profesor no tiene que aceptar nada: en un
 * salón de 30 niños esa espera era el cuello de botella del aula.
 */
async function agregarseALaClase(grupo, uid, username) {
  await updateDoc(doc(db, "grupos", grupo.id), {
    miembrosUids: arrayUnion(uid)
  });
  await setDoc(
    doc(db, "grupos", grupo.id, "miembros", uid),
    { uid, username: username || "", unidoEn: serverTimestamp() },
    { merge: true }
  );
}

/**
 * Entrada a una clase desde la lista del curso, sin código: si el niño no estaba
 * en la lista, se agrega. Devuelve false si la clase ya no existe.
 */
export async function anotarParticipacion({ grupoId, uid, username }) {
  const grupo = await obtenerGrupo(grupoId);
  if (!grupo) return false;
  if ((grupo.miembrosUids || []).includes(uid)) return true;
  await agregarseALaClase(grupo, uid, username);
  return true;
}

/**
 * Resultados de partidas jugadas dentro de una clase, más recientes primero.
 *
 * `limite` existe por escala: una clase de 30 estudiantes a 10 partidas por
 * niño llega rápido a miles de documentos, y leerlos todos en una sola
 * llamada es lo que hace que el panel del profesor tarde segundos en un
 * colegio con conectividad débil. Con 500 se ve el curso completo en la
 * pantalla y el historial largo queda en Firestore.
 */
export async function obtenerResultadosDelGrupo(grupoId, { limite = 500 } = {}) {
  const ref = collection(db, "grupos", grupoId, "resultados");
  let snap;
  try {
    snap = await getDocs(query(ref, orderBy("fecha", "desc"), limit(limite)));
  } catch (err) {
    // Si el índice de orderBy aún no existe, se recuperan sin ordenar
    // y se ordena en el cliente para no romper la vista.
    snap = await getDocs(query(ref, limit(limite)));
  }
  const resultados = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  resultados.sort((a, b) => (b.fecha?.seconds || 0) - (a.fecha?.seconds || 0));
  return resultados;
}

/**
 * Estadísticas agregadas de todas las clases de un profesor: número de
 * clases, estudiantes únicos, partidas jugadas en total, el promedio general
 * de porcentaje y la nota promedio en escala de 5.
 *
 * Cuesta una lectura por clase creada, así que es para la pantalla de
 * "Mi Biblioteca", que se entra a propósito. El Inicio del profesor ya no la
 * usa: allí los contadores salen de una sola lectura de `obtenerGruposDelProfesor`.
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
  let sumaNotas = 0;
  resultadosPorGrupo.forEach((resultados) => {
    totalPartidas += resultados.length;
    resultados.forEach((r) => {
      sumaPorcentajes += r.porcentaje || 0;
      sumaNotas += notaDeResultado(r);
    });
  });

  return {
    totalClases: grupos.length,
    totalEstudiantes: estudiantesUnicos.size,
    totalPartidas,
    promedioGeneral: totalPartidas ? Math.round(sumaPorcentajes / totalPartidas) : 0,
    notaPromedio: totalPartidas ? Math.round((sumaNotas / totalPartidas) * 10) / 10 : null,
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
 * Curso en el que está matriculado un estudiante. Se lee de su ficha; si no
 * tiene ficha o no tiene curso, devuelve cadena vacía.
 */
export async function cursoDelEstudiante(uid) {
  if (!uid) return "";
  try {
    const snap = await getDoc(doc(db, "estudiantes", uid));
    return snap.exists() ? snap.data().curso || "" : "";
  } catch (err) {
    console.error("SkillHouse:", err);
    return "";
  }
}

/**
 * Puede el estudiante estar en esta clase: ya está en su lista, o es del mismo
 * curso. Lo segundo es lo que hace que el niño no necesite ningún código para
 * jugar: la clase que el profesor abrió para 601 es la clase de 601.
 *
 * `curso` es opcional: si no viene, se lee la ficha del estudiante. Se deja
 * pasar porque las pantallas que ya conocen el curso (la de la materia, la
 * sala) no pagan una lectura extra por él.
 */
async function accesoAlGrupo(grupo, uid, curso) {
  if ((grupo.miembrosUids || []).includes(uid)) return true;
  if (!grupo.curso) return false;
  const cursoDelNino = curso !== undefined ? curso : await cursoDelEstudiante(uid);
  return !!cursoDelNino && cursoDelNino === grupo.curso;
}

/**
 * Valida antes de dejar jugar dentro de una clase: la clase existe, sigue
 * activa, corresponde al juego de esta pantalla y el estudiante es del curso de
 * la clase (o ya entró con el código). Devuelve null en cualquier otro caso.
 *
 * Sin esta comprobación bastaba con escribir en la barra de direcciones
 * juegos/quiz.html?grupo=ID de una clase ajena para jugarla (el resultado no
 * se guardaba, pero la partida sí se dejaba hacer).
 *
 * La sala añade un estado intermedio: si el profesor aún no inicia la clase,
 * se devuelve el grupo igual pero marcado con `sinEmpezar`, para que el juego
 * pueda decir "espera a tu profe" en vez del "no tienes acceso", que es falso
 * y confundía al niño. Cuando el profesor cierra la clase se marca
 * `claseCerrada`.
 */
export async function grupoJugable(grupoId, uid, juegoEsperado, curso) {
  if (!grupoId) return null;

  let grupo;
  try {
    grupo = await obtenerGrupo(grupoId);
  } catch (err) {
    return null;
  }

  if (!grupo || !grupo.activo) return null;
  if (juegoEsperado && grupo.juego !== juegoEsperado) return null;
  if (!(await accesoAlGrupo(grupo, uid, curso))) return null;

  if (salaBloqueaJuego(grupo)) return { ...grupo, sinEmpezar: true };
  if (salaCerroClase(grupo)) return { ...grupo, claseCerrada: true };

  // Un grupo antiguo, o una clase que el profesor movió de curso, puede traer
  // un tema de otro grado: se traduce al ciclo del curso antes de que el juego
  // baje las preguntas.
  return { ...grupo, tema: alinearTemaAlCurso(grupo.tema, grupo.curso, existeTema) };
}

/**
 * El código que reparte el profesor: con él el estudiante se matricula en el
 * curso de la clase (si no tenía curso) y entra a la lista de esa clase. No hay
 * aprobación pendiente: en cuanto el código es válido, ya está dentro.
 *
 * `materiaEsperada` y `cursoEsperado` son la clave del aislamiento por materia
 * y por curso: un código de Matemáticas deja de servir en la página de Inglés,
 * y un estudiante de 601 no puede colarse en una clase de 602.
 *
 * @returns {Promise<{grupo:Object, estado:"miembro", matriculado:boolean}>}
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

  if (!grupo.activo) {
    throw new Error("Esta clase ya no está activa. Pídele a tu profesor un código vigente.");
  }

  // Caso "mi cuenta no tiene curso": el código lo reengancha. matricularEnCurso
  // solo rellena un curso vacío y las reglas no dejan moverse entre dos cursos
  // que existan, así que un niño de 602 que se sepa un código de 601 no se cuela
  // en 601: se queda con su curso y la comparación de abajo lo frena.
  let curso = cursoEsperado;
  if (!curso) {
    if (!grupo.curso) {
      throw new Error("Esta clase no tiene curso asignado. Pídele a tu director de curso el código del tuyo.");
    }
    await matricularPorCodigo(grupo, uid);
    curso = grupo.curso;
  } else if (grupo.curso !== curso) {
    throw new Error(
      `Esa clase es del curso ${grupo.curso || "sin curso"} y tú estás en ${curso}. Solo puedes unirte a las clases de tu curso.`
    );
  }

  if ((grupo.miembrosUids || []).includes(uid)) {
    return { grupo, estado: "miembro", matriculado: false };
  }

  await agregarseALaClase(grupo, uid, username);
  return { grupo, estado: "miembro", matriculado: !cursoEsperado };
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

/**
 * Clases que un estudiante ve en su pantalla: las de su curso (que puede jugar
 * sin escribir ningún código) más las que ya lo tienen en su lista, por si
 * entró con un código o si su curso cambió después.
 *
 * Se unen las dos lecturas en lugar de bastaarse de una porque la lista del
 * curso es la que trae las clases nuevas del profe, y la pertenencia es la que
 * conserva las que él mismo abrió con código.
 */
export async function clasesDelEstudiante({ uid, curso }) {
  const [delCurso, mias] = await Promise.all([
    curso ? obtenerGruposDelCurso(curso) : Promise.resolve([]),
    obtenerGruposDelEstudiante(uid).catch(() => [])
  ]);

  const porId = new Map();
  [...delCurso, ...mias].forEach((g) => porId.set(g.id, g));

  const grupos = [...porId.values()];
  grupos.sort((a, b) => (b.creadoEn?.seconds || 0) - (a.creadoEn?.seconds || 0));
  return grupos;
}

/* ---------------------- RESULTADOS (ambos roles) ---------------------- */

/**
 * Guarda el resultado de una partida. Si grupoId es null/undefined, la
 * partida era "modo práctica" y no se guarda en Firestore (evita ruido de
 * datos de clases que no existen).
 *
 * Antes de guardar comprueba que el uid sea miembro de la clase o estudiante
 * del mismo curso, y de que la clase siga activa: las reglas de Firestore
 * permiten escribir un resultado a cualquier usuario autenticado (no pueden
 * conocerse de otra forma el ID del grupo y el del estudiante), así que este
 * filtro es lo que evita que alguien con la URL de una clase le meta
 * resultados falsos.
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
  if (!(await accesoAlGrupo(grupo, uid))) {
    throw new Error("Esta clase no es de tu curso. Pídele a tu profesor el código de tu curso.");
  }
  // El juego directo (el botón de la tarjeta) no pasa por la sala, así que la
  // lista de la clase se completa aquí: si juega y no estaba, se anota. Si la
  // escritura de la lista falla, la partida igual se guarda.
  if (!(grupo.miembrosUids || []).includes(uid)) {
    await agregarseALaClase(grupo, uid, username).catch(() => {});
  }
  if (!grupo.activo) throw new Error("Esta clase ya no está aceptando resultados.");
  // Segunda barrera, además del bloqueo en el juego: sin esto, escribir la URL
  // a mano permitiría jugar y guardar antes de que el profesor abra la clase.
  // Con la sala "cerrada" sí se guarda: al que lo agarró el cierre a mitad de
  // partida no se le borra el trabajo.
  if (salaBloqueaJuego(grupo)) {
    throw new Error("Tu profesor todavía no ha iniciado esta clase.");
  }

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
    // Se guarda la nota junto con el porcentaje para que el dato que ve el
    // profesor en Firestore sea el mismo que vio el estudiante en pantalla.
    nota: notaDesdeFraccion(puntaje, total),
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

/** Historial personal de un estudiante, más recientes primero (últimas 200). */
export async function obtenerHistorialEstudiante(uid, { limite = 200 } = {}) {
  const ref = collection(db, "estudiantes", uid, "resultados");
  let snap;
  try {
    snap = await getDocs(query(ref, orderBy("fecha", "desc"), limit(limite)));
  } catch (err) {
    snap = await getDocs(query(ref, limit(limite)));
  }
  const historial = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  historial.sort((a, b) => (b.fecha?.seconds || 0) - (a.fecha?.seconds || 0));
  return historial;
}
