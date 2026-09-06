// interfaz profesor/configuracion-panel.js
// Página mínima de configuración: muestra el correo de la cuenta, permite
// solicitar un correo para restablecer la contraseña y cerrar sesión.

import { auth } from "../js/firebase.js";
import {
  onAuthStateChanged,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

function mostrarMensaje(el, texto) {
  el.textContent = texto;
  el.style.display = texto ? "block" : "none";
}

onAuthStateChanged(auth, (user) => {
  if (!user) return; // guard.js ya redirige si no hay sesión
  document.getElementById("config-correo").textContent = user.email;
});

document.getElementById("btn-restablecer").addEventListener("click", async () => {
  const exitoEl = document.getElementById("restablecer-mensaje");
  const errorEl = document.getElementById("restablecer-error");
  mostrarMensaje(exitoEl, "");
  mostrarMensaje(errorEl, "");

  const user = auth.currentUser;
  if (!user || !user.email) {
    mostrarMensaje(errorEl, "No se encontró el correo de tu cuenta.");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, user.email);
    mostrarMensaje(exitoEl, `Te enviamos un enlace a ${user.email} para cambiar tu contraseña.`);
  } catch (err) {
    mostrarMensaje(errorEl, "No se pudo enviar el correo. Intenta de nuevo más tarde.");
  }
});
