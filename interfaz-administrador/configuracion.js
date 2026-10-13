// interfaz-administrador/configuracion.js
// Datos de la propia cuenta y cambio de contraseña del administrador.

import { suscribirSesion } from "../js/sesion.js";
import { conectarCambioDeClave } from "../js/cambiar-clave.js";

conectarCambioDeClave();

suscribirSesion("administrador", (cuenta) => {
  if (!cuenta) return; // guard.js redirige
  document.getElementById("config-nombre").textContent = cuenta.username;
  document.getElementById("config-correo").textContent = cuenta.email;
});
