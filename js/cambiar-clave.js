// js/cambiar-clave.js
// Formulario de "cambiar mi contraseña" que comparten las tres pantallas de
// Configuración (estudiante, profesor y administrador).
//
// Pide la contraseña actual porque Firebase no deja escribir la clave de un
// usuario sin verificar antes su identidad; así el cambio tampoco es
// posible si alguien deja una sesión abierta en un computador del colegio.

import { auth, db } from "./firebase.js";
import { ofuscarClave } from "./credenciales.js";
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { EmailAuthProvider, updatePassword } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

function mensaje(el, texto) {
  if (!el) return;
  el.textContent = texto;
  el.style.display = texto ? "block" : "none";
}

/**
 * Conecta un formulario con estos IDs (los que faltan se ignoran):
 * form-cambiar-clave, clave-actual, clave-nueva, clave-repetir,
 * clave-error, clave-exito.
 */
export function conectarCambioDeClave() {
  const form = document.getElementById("form-cambiar-clave");
  if (!form) return;

  form.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const errorEl = document.getElementById("clave-error");
    const exitoEl = document.getElementById("clave-exito");
    mensaje(errorEl, "");
    mensaje(exitoEl, "");

    const actual = document.getElementById("clave-actual").value;
    const nueva = document.getElementById("clave-nueva").value;
    const repetir = document.getElementById("clave-repetir").value;

    const usuario = auth.currentUser;
    if (!usuario || !usuario.email) {
      return mensaje(errorEl, "No se encontró el correo de esta cuenta.");
    }
    if (nueva.length < 6) {
      return mensaje(errorEl, "La contraseña nueva debe tener al menos 6 caracteres.");
    }
    if (nueva !== repetir) {
      return mensaje(errorEl, "La contraseña nueva no coincide en las dos casillas.");
    }
    if (nueva === actual) {
      return mensaje(errorEl, "La contraseña nueva debe ser distinta a la actual.");
    }

    const boton = form.querySelector('button[type="submit"]');
    if (boton) boton.disabled = true;

    try {
      await usuario.reauthenticateWithCredential(
        EmailAuthProvider.credential(usuario.email, actual)
      );
      await updatePassword(usuario, nueva);

      // Se anota el PIN nuevo en usuarios/{uid}. Si no se hiciera, el
      // administrador se quedaría con una copia vieja y su siguiente
      // restablecimiento fallaría al firmar con ella.
      try {
        await updateDoc(doc(db, "usuarios", usuario.uid), { clave: ofuscarClave(nueva) });
      } catch (err) {
        console.error("La clave cambió, pero no se pudo actualizar el registro:", err);
      }

      mensaje(exitoEl, "Contraseña actualizada. Ya puedes iniciar sesión con la nueva.");
      form.reset();
    } catch (err) {
      console.error(err);
      mensaje(
        errorEl,
        err?.code === "auth/invalid-credential" || err?.code === "auth/wrong-password"
          ? "La contraseña actual no es correcta."
          : err?.code === "auth/too-many-requests"
          ? "Demasiados intentos. Espera unos minutos e inténtalo otra vez."
          : "No se pudo cambiar la contraseña. Intenta de nuevo."
      );
    } finally {
      if (boton) boton.disabled = false;
    }
  });
}
