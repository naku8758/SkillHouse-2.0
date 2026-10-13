// js/claves.js
// Todo lo que rodea a "el administrador manda sobre las contraseñas":
//  - ver el PIN de cualquier cuenta,
//  - fijar uno nuevo sin que nadie le dicte el anterior,
//  - y la bandeja de solicitudes de cambio que abren estudiante, profesor y
//    director desde su Configuración cuando no recuerdan la suya.
//
// Por qué el administrador puede y los demás no: las reglas de Firestore solo
// dejan LISTAR la colección "usuarios" al administrador, así que el listado con
// los PINes no lo puede obtener ningún otro rol aunque escriba código a mano.

import { db } from "./firebase.js";
import { generarClave, cambiarClaveDeUsuario, revelarClave } from "./credenciales.js";
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  query,
  where,
  updateDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const NOMBRE_ROL = {
  estudiante: "Estudiante",
  profesor: "Profesor",
  administrador: "Administrador"
};

/**
 * Todas las cuentas con su PIN al descubierto. Solo la hace funcionar un
 * administrador: el resto recibe "permission-denied" al listar.
 */
export async function listarCredenciales() {
  const snap = await getDocs(collection(db, "usuarios"));
  const cuentas = snap.docs.map((d) => {
    const datos = d.data();
    return {
      uid: d.id,
      username: datos.username || "—",
      email: datos.email || "—",
      rol: datos.rol || "",
      rolNombre: NOMBRE_ROL[datos.rol] || datos.rol || "—",
      clave: revelarClave(datos.clave)
    };
  });

  cuentas.sort((a, b) => a.rolNombre.localeCompare(b.rolNombre) || a.username.localeCompare(b.username));
  return cuentas;
}

/**
 * Fija un PIN nuevo para otra cuenta. Lee el PIN registrado en usuarios/{uid}
 * para poder firmar el cambio ante Firebase Auth; si ese documento no lo tiene
 * (una cuenta creada a mano en la consola, por ejemplo) avisa en vez de
 * intentar un cambio que Firebase rechazaría.
 */
export async function restablecerClaveDe({ uid, email }) {
  const snap = await getDoc(doc(db, "usuarios", uid));
  const actual = revelarClave(snap.exists() ? snap.data().clave : "");

  if (!actual) {
    throw Object.assign(
      new Error("Esta cuenta no tiene PIN registrado. Cámbialo desde Firebase Console > Authentication."),
      { code: "skillhouse/sin-clave-registrada" }
    );
  }

  const nueva = generarClave();
  await cambiarClaveDeUsuario({ uid, email, claveActual: actual, claveNueva: nueva });
  return nueva;
}

/* ---------------------- Solicitudes de cambio ---------------------- */

/**
 * La abre quien no recuerda su PIN. No contiene la contraseña: es un pedido
 * para que el administrador genere una nueva.
 */
export async function solicitarCambioDeClave({ uid, nombre, email, rol, motivo }) {
  const pendiente = await obtenerMiSolicitudPendiente(uid);
  if (pendiente) return { id: pendiente.id, yaExista: true };

  await addDoc(collection(db, "solicitudes_clave"), {
    uid,
    nombre: nombre || "",
    email: email || "",
    rol: rol || "",
    motivo: (motivo || "").trim().slice(0, 300),
    estado: "pendiente",
    creadoEn: serverTimestamp()
  });

  return { yaExista: false };
}

export async function obtenerMiSolicitudPendiente(uid) {
  // Un solo filtro, para no depender de ningún índice compuesto: el estado se
  // mira aquí. La consulta devuelve como mucho los pocos pedidos de esta
  // cuenta.
  const snap = await getDocs(query(
    collection(db, "solicitudes_clave"),
    where("uid", "==", uid)
  ));
  const pendiente = snap.docs.find((d) => d.data().estado === "pendiente");
  return pendiente ? { id: pendiente.id, ...pendiente.data() } : null;
}

/** Solicitudes pendientes para el panel del administrador. */
export async function obtenerSolicitudesPendientes() {
  const snap = await getDocs(query(
    collection(db, "solicitudes_clave"),
    where("estado", "==", "pendiente")
  ));
  const solicitudes = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  solicitudes.sort((a, b) => (b.creadoEn?.seconds || 0) - (a.creadoEn?.seconds || 0));
  return solicitudes;
}

/**
 * Atiende una solicitud: genera el PIN nuevo, lo aplica y cierra el pedido.
 * @returns {Promise<string>} el PIN nuevo
 */
export async function atenderSolicitudClave(solicitud) {
  const nueva = await restablecerClaveDe({ uid: solicitud.uid, email: solicitud.email });
  await updateDoc(doc(db, "solicitudes_clave", solicitud.id), {
    estado: "atendida",
    resueltaEn: serverTimestamp()
  });
  return nueva;
}

/** Descarta una solicitud sin cambiar nada (el estudiante ya la resolvió solo). */
export async function descartarSolicitudClave(solicitudId) {
  await updateDoc(doc(db, "solicitudes_clave", solicitudId), {
    estado: "descartada",
    resueltaEn: serverTimestamp()
  });
}
