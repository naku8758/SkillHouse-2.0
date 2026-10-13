// js/sesion.js
// Fuente única de "quién está conectado". Las demás páginas ya no leen
// usuarios/{uid} por su cuenta: piden la sesión aquí, que trae el índice
// (usuarios/{uid}) y el documento completo del rol (estudiantes/,
// profesores/ o administradores/) en una sola llamada.

import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

export const COLECCION_POR_ROL = {
  estudiante: "estudiantes",
  profesor: "profesores",
  administrador: "administradores"
};

// Rutas de cada panel, relativas a la raíz del sitio (index.html).
export const RUTAS_POR_ROL = {
  estudiante: "interfaz-estudiante/homepagea.html",
  profesor: "interfaz-profesor/homepageb.html",
  administrador: "interfaz-administrador/homepagec.html"
};

export { auth, signOut };

/**
 * Lee una vez el documento de perfil del rol actual. Se usa cuando la página
 * no conocía el rol de antemano y hubo que leer primero el índice.
 */
async function recargarPerfil(uid, rol) {
  const coleccion = COLECCION_POR_ROL[rol];
  if (!coleccion) return {};
  const snap = await getDoc(doc(db, coleccion, uid));
  return snap.exists() ? snap.data() : {};
}

/**
 * Motivos por los que una página se queda sin cuenta. `guard.js` solo
 * expulsa al usuario en los dos primeros; "sin datos" es un problema de red
 * pasajero y se ofrece reintentar en vez de cerrar la sesión.
 */
export const MOTIVO = {
  SIN_SESION: "sin-sesion",
  ROL_INCORRECTO: "rol-incorrecto",
  SIN_DATOS: "sin-datos"
};

const ESPERA_REINTENTO = [500, 1200];

function esFalloDeRed(err) {
  // "unavailable" es la desconexión momentánea típica al navegar rápido de
  // una página a otra; permission-denied u otros no se arreglan reintentando.
  const codigo = err && err.code ? String(err.code) : "";
  return codigo === "unavailable" || /network|offline|stream/i.test(`${codigo} ${err?.message || ""}`);
}

async function conReintentos(lectura) {
  for (let intento = 0; ; intento++) {
    try {
      return await lectura();
    } catch (err) {
      if (intento >= ESPERA_REINTENTO.length || !esFalloDeRed(err)) throw err;
      await new Promise((resolver) => setTimeout(resolver, ESPERA_REINTENTO[intento]));
    }
  }
}

/**
 * Lee índice + perfil de la cuenta. Devuelve la cuenta, o null con el motivo.
 */
async function leerCuenta(user, rolEsperado) {
  const coleccion = rolEsperado ? COLECCION_POR_ROL[rolEsperado] : null;

  // Si la página ya sabe qué rol espera, las dos lecturas salen en paralelo:
  // la mitad de espera y menos papeletas de que se cruce con otro click.
  const [indiceSnap, perfilSnap] = coleccion
    ? await Promise.all([
        getDoc(doc(db, "usuarios", user.uid)),
        getDoc(doc(db, coleccion, user.uid))
      ])
    : [await getDoc(doc(db, "usuarios", user.uid)), null];

  if (!indiceSnap.exists()) return { cuenta: null, motivo: MOTIVO.SIN_SESION };

  const rol = indiceSnap.data().rol;
  const coleccionReal = COLECCION_POR_ROL[rol];
  if (!coleccionReal || (rolEsperado && rol !== rolEsperado)) {
    return { cuenta: null, motivo: MOTIVO.ROL_INCORRECTO };
  }

  const perfil = perfilSnap
    ? (perfilSnap.exists() ? perfilSnap.data() : {})
    : await recargarPerfil(user.uid, rol);

  return {
    cuenta: {
      user,
      uid: user.uid,
      rol,
      username: indiceSnap.data().username || user.email,
      email: indiceSnap.data().email || user.email,
      datos: perfil
    },
    motivo: null
  };
}

/**
 * Ejecuta `callback(cuenta, motivo)` en cuanto se conoce la sesión. `cuenta`
 * es null cuando no hay usuario, cuando su documento índice no existe, cuando
 * el rol no es el que espera la página, o cuando Firestore no respondió.
 *
 * @param {string|null} rolEsperado  null = acepta cualquier rol válido
 */
export function suscribirSesion(rolEsperado, callback) {
  // onAuthStateChanged vuelve a emitir cuando Firebase refresca el token de
  // ID, con el MISMO usuario. Las páginas enganchan botones dentro de este
  // callback, así que una segunda emisión duplicaría cada evento (un click
  // enviaría dos veces el formulario). Se ignora cualquier emisión que no
  // cambie de usuario.
  let ultimoUid;

  onAuthStateChanged(auth, async (user) => {
    const uid = user ? user.uid : null;
    if (uid === ultimoUid) return;
    ultimoUid = uid;

    if (!user) {
      callback(null, MOTIVO.SIN_SESION);
      return;
    }

    try {
      const resultado = await conReintentos(() => leerCuenta(user, rolEsperado));
      callback(resultado.cuenta, resultado.motivo);
    } catch (err) {
      console.error("SkillHouse (sesión):", err);
      // La sesión sigue viva: no es un problema de permisos sino de red, y
      // mandarlo al login por eso es el bug de "me saca al pulsar rápido".
      callback(null, MOTIVO.SIN_DATOS);
    }
  });
}
