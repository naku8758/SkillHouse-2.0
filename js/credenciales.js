// js/credenciales.js
// Todo lo relacionado con crear accesos: generar la clave, generar el correo
// a partir del nombre y crear la cuenta en Firebase Auth SIN cerrar la
// sesión de quien la crea.
//
// El truco de la app secundaria: si se llamara a
// createUserWithEmailAndPassword() con la instancia normal de Auth, Firebase
// iniciaría sesión como el usuario NUEVO en este navegador y la sesión del
// administrador o del director se perdería. Por eso la creación usa una app
// Firebase secundaria con persistencia "en memoria" que se borra al terminar.
// Los documentos de Firestore sí se escriben con la app principal, que es
// donde firestore.rules valida quién es.

import { db, firebaseConfig } from "./firebase.js";
import { COLECCION_POR_ROL } from "./sesion.js";
import { initializeApp, deleteApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getAuth,
  setPersistence,
  inMemoryPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, setDoc, updateDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

export const DOMINIO_CORREO = "@skillhouse.edu.co";

/**
 * El PIN se guarda en usuarios/{uid}.clave para que el administrador pueda
 * consultarlo y restablecer la cuenta sin preguntar la clave anterior.
 *
 * IMPORTANTE: esto es OFUSCACIÓN, no cifrado. Solo evita que alguien que abra
 * la consola de Firestore se encuentre una columna llamada "clave" con
 * numerales en claro. Cualquiera con permiso de lectura sobre usuarios/ (el
 * administrador) puede revertirla, y ese es justo el comportamiento que se
 * pidió. Firebase Auth sigue guardando la contraseña real cifrada; este campo
 * es una copia para la tarea del administrador.
 */
const SEMILLA_OFUSCACION = "skillhouse-2.0-clave-unica";

function mezclar(texto) {
  let salida = "";
  for (let i = 0; i < texto.length; i++) {
    salida += String.fromCharCode(texto.charCodeAt(i) ^ SEMILLA_OFUSCACION.charCodeAt(i % SEMILLA_OFUSCACION.length));
  }
  return salida;
}

export function ofuscarClave(clave) {
  return btoa(mezclar(String(clave)));
}

export function revelarClave(valorGuardada) {
  if (!valorGuardada) return "";
  try {
    return mezclar(atob(String(valorGuardada)));
  } catch (err) {
    // Una clave escrita a mano en la consola (sin ofuscar) se lee tal cual.
    return String(valorGuardada);
  }
}

/**
 * Clave de 6 dígitos generada con la entropía del navegador (no Math.random,
 * que es predecible). Firebase exige mínimo 6 caracteres, así que un PIN de
 * 6 dígitos cumple justo; es lo bastante corto para que un estudiante de
 * sexto grado lo teclee sin errores.
 */
export function generarClave() {
  const MAX = 4294967296; // 2^32
  const limite = MAX - (MAX % 10); // múltiplo de 10 más alto: evita sesgo
  let valor;
  do {
    valor = crypto.getRandomValues(new Uint32Array(1))[0];
  } while (valor >= limite);
  return String(valor % limite).padStart(6, "0");
}

/**
 * "Andrés Felipe Perdomo Cangrejo" -> "AndresFPC": primer nombre completo +
 * inicial del resto, sin tildes ni símbolos.
 */
export function baseDelCorreo(nombreCompleto) {
  const limpiar = (texto) =>
    texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z]/g, "");

  const partes = nombreCompleto.trim().split(/\s+/).map(limpiar).filter(Boolean);
  if (!partes.length) return "";

  const [primero, ...resto] = partes;
  return `${primero}${resto.map((p) => p[0]).join("")}`;
}

/**
 * Abre una app Firebase secundaria, crea el usuario y la devuelve cerrada.
 * Lanza el error tal cual para que quien llame pueda leer `error.code`.
 */
async function crearEnAuthSecundaria(email, password) {
  const app = initializeApp(firebaseConfig, "credenciales-" + Date.now());
  const authSecundaria = getAuth(app);
  try {
    await setPersistence(authSecundaria, inMemoryPersistence);
    const credencial = await createUserWithEmailAndPassword(authSecundaria, email, password);
    return credencial.user.uid;
  } finally {
    await deleteApp(app);
  }
}

/**
 * Crea la cuenta: correo derivado del nombre (con sufijo numérico si ese
 * correo ya estaba en uso) y clave de 6 dígitos autogenerada.
 *
 * El correo se prueba creándolo de verdad, en lugar de consultar primero la
 * colección "usuarios": así un director de curso no necesita permiso de
 * lectura sobre los correos de toda la plataforma.
 *
 * @param {string} [clave]  Clave a usar. Si no se pasa, se genera una.
 * @returns {Promise<{uid:string, email:string, clave:string}>}
 */
export async function crearCuenta({ username, rol, perfil = {}, clave } = {}) {
  const base = baseDelCorreo(username);
  if (!base) {
    throw Object.assign(new Error("El nombre no permite generar un correo. Escribe nombre y apellido."), { code: "skillhouse/nombre-invalido" });
  }

  const claveFinal = clave || generarClave();
  const intentos = [`${base}${DOMINIO_CORREO}`, ...Array.from({ length: 30 }, (_, i) => `${base}${i + 1}${DOMINIO_CORREO}`)];

  let uid = null;
  let email = null;

  for (const candidato of intentos) {
    try {
      uid = await crearEnAuthSecundaria(candidato, claveFinal);
      email = candidato;
      break;
    } catch (error) {
      if (error && error.code === "auth/email-already-in-use") continue;
      throw error;
    }
  }

  if (!uid) {
    throw Object.assign(new Error(`Ya existen demasiadas cuentas con ese nombre (${base}).`), { code: "skillhouse/correo-agotado" });
  }

  const coleccion = COLECCION_POR_ROL[rol];
  if (!coleccion) {
    throw Object.assign(new Error(`Rol desconocido: ${rol}`), { code: "skillhouse/rol-invalido" });
  }

  const documento = {
    uid,
    username,
    email,
    rol,
    creadoEn: serverTimestamp(),
    ...perfil
  };

  // Escrituras con la app principal: aquí request.auth.uid es el de quien
  // crea la cuenta, y firestore.rules comprueba que puede hacerlo.
  await setDoc(doc(db, coleccion, uid), documento);
  await setDoc(doc(db, "usuarios", uid), {
    username,
    email,
    rol,
    clave: ofuscarClave(claveFinal)
  });

  return { uid, email, clave: claveFinal };
}

/**
 * Cambia la clave de OTRA cuenta y deja la nueva anotada en usuarios/{uid},
 * que es lo que permite al administrador restablecer sin que nadie le dicte
 * la anterior.
 *
 * El paso intermedio de firmar con la clave actual no es un capricho de
 * interfaz: desde un cliente web no se puede sobrescribir la contraseña de un
 * usuario ajeno sin el Admin SDK, y este proyecto es 100% estático. Como la
 * plataforma guarda el PIN de cada cuenta, el administrador lo lee y firma con
 * él; el paso existe pero ya no se le pide a nadie.
 *
 * Se firma en una app secundaria para no expulsar de su sesión a quien usa el
 * panel.
 *
 * @param {{uid:string, email:string, claveActual:string, claveNueva:string}} p
 */
export async function cambiarClaveDeUsuario({ uid, email, claveActual, claveNueva }) {
  const app = initializeApp(firebaseConfig, "cambiar-clave-" + Date.now());
  const authSecundaria = getAuth(app);
  try {
    await setPersistence(authSecundaria, inMemoryPersistence);
    const cred = await signInWithEmailAndPassword(authSecundaria, email, claveActual);
    await updatePassword(cred.user, claveNueva);
  } finally {
    await deleteApp(app);
  }

  await updateDoc(doc(db, "usuarios", uid), { clave: ofuscarClave(claveNueva) });
}
