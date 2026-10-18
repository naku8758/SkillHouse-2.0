// js/sala.js
// La "sala" es el semáforo de una clase, al estilo de Kahoot o de Teams:
// el profesor crea la clase, los estudiantes entran con el código y se quedan
// en una pantalla de espera viendo quién llegó. Nadie puede jugar hasta que el
// profesor pulsa "Iniciar clase".
//
// Estructura en Firestore (todo colgado del grupo, así un curso no toca la
// sala de otro):
//   grupos/{id}.sala            "esperando" | "abierta" | "cerrada"
//   grupos/{id}/sala/{uid}      { uid, nombre, desde }
//
// Por qué una subcolección y no un arreglo en el documento del grupo: si los
// 30 estudiantes escribieran su presencia en `grupos/{id}`, las 30 escrituras
// pelearían por el mismo documento (Firestore aguanta ~1 escritura por segundo
// por documento y las últimas se perderían). Con un documento por estudiante
// cada niño escribe el suyo y no hay contención.
//
// Los grupos creados antes de este módulo no traen el campo `sala`. Se tratan
// como "abierta": una clase que ya estaba en marcha no se bloquea sola por
// haber actualizado el código.

import { db } from "./firebase.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

export const SALA = {
  ESPERANDO: "esperando",
  ABIERTA: "abierta",
  CERRADA: "cerrada"
};

export const NOMBRE_SALA = {
  [SALA.ESPERANDO]: "En espera",
  [SALA.ABIERTA]: "En curso",
  [SALA.CERRADA]: "Cerrada"
};

/** Estado efectivo de la sala de un grupo ya leído. */
export function estadoDeSala(grupo) {
  if (!grupo) return SALA.ABIERTA;
  if (grupo.sala === SALA.ESPERANDO) return SALA.ESPERANDO;
  if (grupo.sala === SALA.CERRADA) return SALA.CERRADA;
  return SALA.ABIERTA;
}

/**
 * true solo cuando el profesor todavía no ha iniciado. Es la única condición
 * que bloquea el juego; "cerrada" se maneja aparte porque equivale a clase
 * terminada y merece su propio mensaje.
 */
export function salaBloqueaJuego(grupo) {
  return estadoDeSala(grupo) === SALA.ESPERANDO;
}

export function salaCerroClase(grupo) {
  return estadoDeSala(grupo) === SALA.CERRADA;
}

/**
 * El profesor mueve el semáforo. Solo su documento lo permite: las reglas de
 * Firestore restringen `update` de grupos al dueño.
 */
export async function fijarEstadoSala(grupoId, estado) {
  if (!Object.values(SALA).includes(estado)) {
    throw new Error("Estado de sala desconocido.");
  }
  await updateDoc(doc(db, "grupos", grupoId), {
    sala: estado,
    salaCambiadaEn: serverTimestamp()
  });
}

/**
 * El estudiante avisa que ya está en la pantalla de espera. Se llama al entrar
 * a la sala, no al unirse a la clase: un niño que se unió ayer y hoy no está
 * en el aula no debería aparecer en la lista.
 */
export async function anotarAsistencia(grupoId, uid, nombre) {
  await setDoc(
    doc(db, "grupos", grupoId, "sala", uid),
    { uid, nombre: nombre || "", desde: serverTimestamp() },
    { merge: true }
  );
}

/** Lista puntual de asistentes (para pantallas que no necesitan vivo). */
export async function obtenerAsistentes(grupoId) {
  const snap = await getDocs(collection(db, "grupos", grupoId, "sala"));
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .sort((a, b) => (a.nombre || "").localeCompare(b.nombre || "", "es"));
}

/**
 * El profesor vacía la sala entre sesión y sesión. No borra a los estudiantes
 * de la clase: solo la lista de "quién está sentado hoy frente a la pantalla".
 */
export async function vaciarSala(grupoId) {
  const snap = await getDocs(collection(db, "grupos", grupoId, "sala"));
  await Promise.all(snap.docs.map((d) => deleteDoc(d.ref)));
}

/**
 * Escucha en vivo el estado del grupo y su lista de asistentes.
 *
 * Se usa onSnapshot en lugar de setInterval: con un temporizador cada pantalla
 * vuelve a leer el documento entero cada pocos segundos, y en el plan gratuito
 * de Firestore eso es lo que agota las lecturas. Con el listener, la primera
 * entrega cuesta una lectura por documento y los cambios siguientes solo
 * reenvían lo que cambió.
 *
 * @param {string} grupoId
 * @param {(datos:{grupo:Object|null, asistentes:Object[]}) => void} alCambiar
 * @returns {() => void} función para dejar de escuchar
 */
export function escucharSala(grupoId, alCambiar) {
  let grupo = null;
  let asistentes = [];

  function emitir() {
    alCambiar({ grupo, asistentes });
  }

  const cancelaGrupo = onSnapshot(
    doc(db, "grupos", grupoId),
    (snap) => {
      grupo = snap.exists() ? { id: snap.id, ...snap.data() } : null;
      emitir();
    },
    (error) => {
      console.error("SkillHouse:", error);
      emitir();
    }
  );

  const cancelaAsistentes = onSnapshot(
    collection(db, "grupos", grupoId, "sala"),
    (snap) => {
      asistentes = snap.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .sort((a, b) => (a.nombre || "").localeCompare(b.nombre || "", "es"));
      emitir();
    },
    (error) => {
      console.error("SkillHouse:", error);
      emitir();
    }
  );

  return () => {
    cancelaGrupo();
    cancelaAsistentes();
  };
}

/**
 * Escucha solo el estado del grupo, para la pantalla del estudiante: le basta
 * con saber si el profesor ya abrió la clase.
 */
export function escucharEstadoSala(grupoId, alCambiar) {
  return onSnapshot(
    doc(db, "grupos", grupoId),
    (snap) => alCambiar(snap.exists() ? { id: snap.id, ...snap.data() } : null),
    (error) => {
      console.error("SkillHouse:", error);
      alCambiar(null);
    }
  );
}

/** Lee una vez el grupo, para las páginas que no van a quedarse escuchando. */
export async function leerGrupo(grupoId) {
  const snap = await getDoc(doc(db, "grupos", grupoId));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}
