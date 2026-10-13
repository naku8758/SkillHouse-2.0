// js/auth.js
// Maneja el inicio de sesión contra Firebase. El registro público ya no
// existe: las cuentas de estudiante y profesor las crea el administrador
// desde su panel (interfaz-administrador/crear-cuenta.js), y quien no
// tiene cuenta puede jugar como invitado (invitado.html) sin iniciar sesión.
//
// Estructura en Firestore:
//  - "usuarios/{uid}"      -> índice liviano { rol, username, email }
//                             (permite saber el rol de alguien con 1 sola
//                              lectura al iniciar sesión)
//  - "estudiantes/{uid}"   -> datos del usuario cuando rol = "estudiante"
//  - "profesores/{uid}"    -> datos del usuario cuando rol = "profesor"
//  - "administradores/{uid}" -> datos del usuario cuando rol = "administrador"

import { auth, db } from "./firebase.js";
import { RUTAS_POR_ROL } from "./sesion.js";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

function traducirErrorFirebase(error) {
  const codigo = error && error.code ? error.code : "";
  const mensajes = {
    "auth/user-not-found": "No existe una cuenta con ese correo.",
    "auth/wrong-password": "La contraseña es incorrecta.",
    "auth/invalid-credential": "Correo o contraseña incorrectos.",
    "auth/invalid-email": "El correo electrónico no es válido.",
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

/* ---------------------- LOGIN ---------------------- */
async function manejarLogin(e) {
  e.preventDefault();
  mostrarError("login-error", "");

  const form = e.target;
  const email = form.email.value.trim();
  const password = form.password.value;

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
    if (!RUTAS_POR_ROL[rolReal]) {
      await signOut(auth);
      mostrarError("login-error", "Esta cuenta tiene un rol que la plataforma no reconoce. Habla con el administrador.");
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
  const formLogin = document.getElementById("form-login");
  if (formLogin) formLogin.addEventListener("submit", manejarLogin);
  conectarBotonIngreso();
});

/**
 * Si el navegador todavía tiene una sesión abierta, el botón "Ingreso" de la
 * portada pasa a ser "Ir a mi panel". Sin esto, un usuario conectado volvía
 * al inicio, le daba a "Ingreso" y Firebase le respondía
 * "auth/invalid-credential" o lo dejaba en un formulario que no necesita.
 */
function conectarBotonIngreso() {
  const boton = document.querySelector("nav .btn-login");
  if (!boton) return;

  onAuthStateChanged(auth, async (user) => {
    if (!user) return;
    try {
      const snap = await getDoc(doc(db, "usuarios", user.uid));
      const ruta = RUTAS_POR_ROL[snap.exists() ? snap.data().rol : null];
      if (!ruta) return;
      boton.textContent = "Ir a mi panel";
      boton.href = ruta;
      boton.removeAttribute("onclick");
    } catch (err) {
      // Sin lectura de Firestore se queda el botón normal de ingreso.
    }
  });
}
