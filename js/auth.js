// js/auth.js
// Maneja el registro y el inicio de sesión contra Firebase, separando
// a los usuarios por rol (estudiante / profesor / administrador).
//
// Estructura en Firestore:
//  - "usuarios/{uid}"      -> índice liviano { rol, username, email }
//                             (permite saber el rol de alguien con 1 sola
//                              lectura al iniciar sesión)
//  - "estudiantes/{uid}"   -> datos del usuario cuando rol = "estudiante"
//  - "profesores/{uid}"    -> datos del usuario cuando rol = "profesor"
//  - "administradores/{uid}" -> datos del usuario cuando rol = "administrador"
//
// Cada rol se guarda en SU PROPIA colección (separados), y además queda
// indexado en "usuarios" para poder validar el rol rápidamente al hacer login.

import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// Rutas de cada panel según el rol, relativas a index.html (raíz del sitio)
const RUTAS_POR_ROL = {
  estudiante: "interfaz estudiante/homepagea.html",
  profesor: "interfaz profesor/homepageb.html",
  administrador: "interfaz administrador/homepagec.html"
};

// Nombre de la colección de Firestore donde se guardan los datos completos
// de cada rol
const COLECCION_POR_ROL = {
  estudiante: "estudiantes",
  profesor: "profesores",
  administrador: "administradores"
};

function traducirErrorFirebase(error) {
  const codigo = error && error.code ? error.code : "";
  const mensajes = {
    "auth/email-already-in-use": "Ese correo ya está registrado. Intenta iniciar sesión.",
    "auth/invalid-email": "El correo electrónico no es válido.",
    "auth/weak-password": "La contraseña debe tener al menos 6 caracteres.",
    "auth/missing-password": "Debes ingresar una contraseña.",
    "auth/user-not-found": "No existe una cuenta con ese correo.",
    "auth/wrong-password": "La contraseña es incorrecta.",
    "auth/invalid-credential": "Correo o contraseña incorrectos.",
    "auth/too-many-requests": "Demasiados intentos fallidos. Intenta más tarde."
  };
  return mensajes[codigo] || "Ocurrió un error. Intenta nuevamente.";
}

function mostrarError(elId, mensaje) {
  const el = document.getElementById(elId);
  if (el) {
    el.textContent = mensaje;
    el.style.display = mensaje ? "block" : "none";
  } else if (mensaje) {
    alert(mensaje);
  }
}

// Calcula la ruta correcta al panel según en qué carpeta estemos parados.
// Desde index.html (raíz) se usa tal cual; desde una subcarpeta no se usa
// esta función.
function irAPanel(rol) {
  window.location.href = RUTAS_POR_ROL[rol];
}

/* ---------------------- REGISTRO ---------------------- */
async function manejarRegistro(e) {
  e.preventDefault();
  mostrarError("registro-error", "");

  const form = e.target;
  const username = form.username.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const rol = form.rol.value; // "estudiante" o "profesor"

  if (!rol || !COLECCION_POR_ROL[rol]) {
    mostrarError("registro-error", "Selecciona un rol válido.");
    return;
  }

  const btn = form.querySelector("button[type=submit]");
  if (btn) btn.disabled = true;

  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const user = cred.user;

    await updateProfile(user, { displayName: username });

    const datosUsuario = {
      uid: user.uid,
      username,
      email,
      rol,
      creadoEn: serverTimestamp()
    };

    // Se guarda en la colección específica del rol (separación de usuarios)
    await setDoc(doc(db, COLECCION_POR_ROL[rol], user.uid), datosUsuario);

    // Índice liviano para poder validar el rol rápido en el login
    await setDoc(doc(db, "usuarios", user.uid), {
      username,
      email,
      rol
    });

    irAPanel(rol);
  } catch (error) {
    console.error(error);
    mostrarError("registro-error", traducirErrorFirebase(error));
  } finally {
    if (btn) btn.disabled = false;
  }
}

/* ---------------------- LOGIN ---------------------- */
async function manejarLogin(e) {
  e.preventDefault();
  mostrarError("login-error", "");

  const form = e.target;
  const email = form.email.value.trim();
  const password = form.password.value;
  const rolSeleccionado = form.rol.value;

  if (!rolSeleccionado) {
    mostrarError("login-error", "Selecciona el rol con el que quieres ingresar.");
    return;
  }

  const btn = form.querySelector("button[type=submit]");
  if (btn) btn.disabled = true;

  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const user = cred.user;

    const snap = await getDoc(doc(db, "usuarios", user.uid));

    if (!snap.exists()) {
      await signOut(auth);
      mostrarError("login-error", "No se encontró información de este usuario.");
      return;
    }

    const rolReal = snap.data().rol;

    if (rolReal !== rolSeleccionado) {
      // El usuario existe pero intentó entrar por el rol que no le corresponde
      await signOut(auth);
      mostrarError(
        "login-error",
        "Este usuario no tiene el rol seleccionado. Verifica e intenta de nuevo."
      );
      return;
    }

    irAPanel(rolReal);
  } catch (error) {
    console.error(error);
    mostrarError("login-error", traducirErrorFirebase(error));
  } finally {
    if (btn) btn.disabled = false;
  }
}

/* ---------------------- INIT (solo en index.html) ---------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const formRegistro = document.getElementById("form-registro");
  const formLogin = document.getElementById("form-login");

  if (formRegistro) formRegistro.addEventListener("submit", manejarRegistro);
  if (formLogin) formLogin.addEventListener("submit", manejarLogin);
});
