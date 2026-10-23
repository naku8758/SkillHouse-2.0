// js/credenciales.js
// Todo lo relacionado con las cuentas de acceso: generar la clave, generar el
// correo a partir del nombre, crear la cuenta en Firebase Auth y borrarla, todo
// SIN cerrar la sesión de quien lo hace.
//
// El truco de la app secundaria: si se llamara a
// createUserWithEmailAndPassword() con la instancia normal de Auth, Firebase
// iniciaría sesión como el usuario NUEVO en este navegador y la sesión del
// administrador o del director se perdería. Lo mismo pasa al firmar como otro
// para cambiarle la clave o borrarlo. Por eso esas tres operaciones usan una
// app Firebase secundaria con persistencia "en memoria" que se borra al terminar.
// Los documentos de Firestore sí se escriben con la app principal, que es
// donde firestore.rules valida quién es.

import { db, auth, firebaseConfig } from "./firebase.js";
import { COLECCION_POR_ROL } from "./sesion.js";
import { initializeApp, deleteApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getAuth,
  setPersistence,
  inMemoryPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
  deleteUser
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import {
  doc,
  setDoc,
  updateDoc,
  getDocs,
  collection,
  query,
  where,
  arrayRemove,
  writeBatch,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

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
 * 6 dígitos cumple justo; es lo bastante corto para que un niño de
 * los primeros grados lo teclee sin errores.
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
 * "Andrés Felipe Perdomo Cangrejo" -> "andresfpc": primer nombre completo +
 * inicial del resto, sin tildes ni símbolos y todo en minúscula, que es como
 * Firebase Auth guarda y compara los correos.
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
  return `${primero}${resto.map((p) => p[0]).join("")}`.toLowerCase();
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

// Firestore admite 500 operaciones por lote; se deja margen.
const MAX_POR_LOTE = 400;

/**
 * Borra a alguien de Firebase Auth firmando con su propio PIN, en una app
 * secundaria para no tocar la sesión de quien usa el panel.
 */
async function borrarEnAuthSecundaria(email, clave) {
  const app = initializeApp(firebaseConfig, "eliminar-" + Date.now());
  const authSecundaria = getAuth(app);
  try {
    await setPersistence(authSecundaria, inMemoryPersistence);
    const cred = await signInWithEmailAndPassword(authSecundaria, email, clave);
    await deleteUser(cred.user);
  } finally {
    await deleteApp(app);
  }
}

/**
 * Borra una cuenta entera: su usuario de Firebase Auth y todo lo que dejó en
 * Firestore.
 *
 * Cómo se hace sin Admin SDK: este proyecto está en el plan gratuito de
 * Firebase (Spark), que no tiene Cloud Functions, y desde un navegador no se
 * puede borrar el usuario de otro. Pero el PIN que la plataforma guarda en
 * `usuarios/{uid}.clave` ES la contraseña real de Auth (`crearCuenta` la creó
 * con él), así que el administrador firma como el interesado en una app
 * secundaria y desde esa sesión `deleteUser()` sí procede. Es el mismo truco
 * que usa `cambiarClaveDeUsuario`.
 *
 * Si el PIN guardado ya no coincide —alguien cambió la clave a mano en Firebase
 * Console—, Auth rechaza la firma. Ahí se avisa y se sigue borrando lo de
 * Firestore, que es lo que ocupa el padrón; el correo queda tomado hasta que la
 * cuenta se borre también en Console. Los fallos de red u otros sí cortan: sin
 * saber si Auth quedó borrado, lo correcto es no dejar la cuenta a medias.
 *
 * @returns {Promise<{esPropia:boolean, avisos:string[]}>}
 */
export async function eliminarCuenta({ uid, email, rol, clave }) {
  // Se calcula antes de borrar: después de `deleteUser` la sesión propia puede
  // seguir apareciendo viva hasta que Firebase refresca el token.
  const esPropia = auth.currentUser?.uid === uid;

  if (rol === "administrador") {
    const admins = await getDocs(collection(db, "administradores"));
    if (admins.size < 2) {
      throw Object.assign(
        new Error("Es el único administrador. Si lo borras no queda nadie para entrar al panel; crea primero otro administrador."),
        { code: "skillhouse/ultimo-administrador" }
      );
    }
  }

  const avisos = [];
  const noCoincide = (codigo) =>
    ["auth/invalid-credential", "auth/wrong-password", "auth/user-not-found", "auth/invalid-login-credentials"].includes(codigo);

  if (!clave) {
    avisos.push(`Esta cuenta no tiene PIN guardado, así que no se pudo firmar para borrarla de Firebase Auth. Bórrala en Firebase Console > Authentication.`);
  } else {
    try {
      await borrarEnAuthSecundaria(email, clave);
    } catch (err) {
      if (!noCoincide(err?.code || "")) throw err;
      avisos.push(`El PIN guardado ya no es la clave de ${email}, así que su usuario de Firebase Auth no se borró. Hazlo en Firebase Console > Authentication; mientras exista, ese correo queda ocupado y no se puede reutilizar.`);
    }
  }

  const operaciones = [];
  const [gruposSnap, cursosDirigidos, pedidosClave] = await Promise.all([
    getDocs(collection(db, "grupos")),
    getDocs(query(collection(db, "cursos"), where("directorUid", "==", uid))),
    getDocs(query(collection(db, "solicitudes_clave"), where("uid", "==", uid)))
  ]);

  for (const snap of gruposSnap.docs) {
    const grupo = snap.data();
    const refGrupo = doc(db, "grupos", snap.id);

    if (rol === "profesor" && grupo.profesorId === uid) {
      // Sus clases se van con él. Dejarlas abiertas con un profesor que ya no
      // existe rompe la Sala de clase y las listas de asistencia.
      const subcolecciones = await Promise.all(
        ["miembros", "sala", "resultados"].map((c) =>
          getDocs(collection(db, "grupos", snap.id, c))
        )
      );
      subcolecciones.forEach((sub) => sub.docs.forEach((d) => operaciones.push({ ref: d.ref })));
      operaciones.push({ ref: refGrupo });
      continue;
    }

    // Fichas sueltas dentro de clases que son de otro profesor. Intentar borrar
    // un documento que no existe es un no-op en Firestore, así que se listan
    // las dos sin preguntar: sale más barato que leer una por una.
    ["miembros", "sala"].forEach((c) =>
      operaciones.push({ ref: doc(db, "grupos", snap.id, c, uid) })
    );

    if ((grupo.miembrosUids || []).includes(uid)) {
      operaciones.push({ ref: refGrupo, datos: { miembrosUids: arrayRemove(uid) } });
      const notas = await getDocs(
        query(collection(db, "grupos", snap.id, "resultados"), where("uid", "==", uid))
      );
      notas.docs.forEach((d) => operaciones.push({ ref: d.ref }));
    }
  }

  // Historial personal del estudiante (copia de sus partidas).
  if (rol === "estudiante") {
    const historial = await getDocs(collection(db, "estudiantes", uid, "resultados"));
    historial.docs.forEach((d) => operaciones.push({ ref: d.ref }));
  }

  // Que ningún curso quede apuntando a una cuenta que ya no está.
  cursosDirigidos.docs.forEach((d) =>
    operaciones.push({ ref: d.ref, datos: { directorUid: "", directorNombre: "" } })
  );

  // Pedidos de clave que quedaron sin dueño.
  pedidosClave.docs.forEach((d) => operaciones.push({ ref: d.ref }));

  // El índice va ANTES de la ficha del rol: si un administrador se borra a sí
  // mismo y primero quita su `administradores/{uid}`, `esAdmin()` pasa a ser
  // falso a mitad del lote y Firestore rechaza las escrituras que faltan.
  operaciones.push({ ref: doc(db, "usuarios", uid) });
  const coleccion = COLECCION_POR_ROL[rol];
  if (coleccion) operaciones.push({ ref: doc(db, coleccion, uid) });

  // Lotes de 400: Firestore admite 500 operaciones por lote y se deja margen
  // para las que se sumen cuando crezca la institución.
  for (let i = 0; i < operaciones.length; i += MAX_POR_LOTE) {
    const lote = writeBatch(db);
    operaciones.slice(i, i + MAX_POR_LOTE).forEach((op) => {
      if (op.datos) lote.update(op.ref, op.datos);
      else lote.delete(op.ref);
    });
    await lote.commit();
  }

  return { esPropia, avisos };
}
