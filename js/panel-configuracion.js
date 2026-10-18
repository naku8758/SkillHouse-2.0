// js/panel-configuracion.js
// Página de Configuración compartida por estudiante, profesor y administrador:
// muestra la cuenta, permite cambiar la contraseña con la actual y abrir un
// pedido de cambio cuando nadie la recuerda.
//
// Antes esta pantalla ofrecía "enviar un enlace de recuperación al correo".
// No funcionaba: los correos que genera la plataforma son internos
// (@skillhouse.edu.co, una casilla que no existe), así que el enlace nunca
// llegaba. Ahora el cambio se hace aquí, o lo hace el administrador desde su
// panel de Claves a partir del pedido que se abre abajo.

import { suscribirSesion } from "./sesion.js";
import { conectarCambioDeClave } from "./cambiar-clave.js";
import { solicitarCambioDeClave, obtenerMiSolicitudPendiente } from "./claves.js";

conectarCambioDeClave();

function mostrar(elemento, texto) {
  if (!elemento) return;
  elemento.textContent = texto;
  elemento.style.display = texto ? "" : "none";
}

/**
 * Formulario de "no recuerdo mi contraseña". El botón le dice al usuario si su
 * pedido ya está abierto, para que no cree solicitudes repetidas.
 */
function conectarSolicitud(cuenta) {
  const form = document.getElementById("form-solicitar-cambio");
  const boton = document.getElementById("btn-solicitar-cambio");
  const error = document.getElementById("solicitud-error");
  const exito = document.getElementById("solicitud-exito");
  if (!form || !boton) return;

  const marcarPendiente = () => {
    boton.disabled = true;
    document.getElementById("motivo-cambio")?.setAttribute("disabled", "");
    mostrar(exito, "Tu pedido está enviado. El administrador lo atiende desde su panel de Claves y te pasa el PIN nuevo.");
  };

  obtenerMiSolicitudPendiente(cuenta.uid).then((pendiente) => {
    if (pendiente) marcarPendiente();
  }).catch((err) => console.error("SkillHouse:", err));

  form.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    mostrar(error, "");
    mostrar(exito, "");

    const motivo = document.getElementById("motivo-cambio")?.value || "";
    boton.disabled = true;
    try {
      const resultado = await solicitarCambioDeClave({
        uid: cuenta.uid,
        nombre: cuenta.username,
        email: cuenta.email,
        rol: cuenta.rol,
        motivo
      });
      if (resultado.yaExista) mostrar(exito, "Ya tenías un pedido abierto, así que no se creó otro.");
      form.reset();
      // marcarPendiente() vuelve a bloquear el campo: quitarle el "disabled"
      // aquí era un paso que se deshacía solo dos líneas más abajo.
      marcarPendiente();
    } catch (err) {
      console.error("SkillHouse:", err);
      mostrar(error, "No se pudo enviar el pedido. Revisa tu conexión e inténtalo de nuevo.");
      boton.disabled = false;
    }
  });
}

/**
 * @param {string} rolEsperado
 * @param {(cuenta:Object) => void} [adicional]  para campos extra de un rol.
 */
export function iniciarConfiguracion(rolEsperado, adicional) {
  suscribirSesion(rolEsperado, (cuenta) => {
    if (!cuenta) return; // guard.js redirige

    const nombre = document.getElementById("config-nombre");
    const correo = document.getElementById("config-correo");
    const rol = document.getElementById("config-rol");

    if (nombre) nombre.textContent = cuenta.username;
    if (correo) correo.textContent = cuenta.email;
    if (rol) {
      rol.textContent =
        cuenta.rol === "profesor"
          ? cuenta.datos.tipoProfesor === "director"
            ? `Profesor · Director del curso ${cuenta.datos.curso || "—"}`
            : "Profesor"
          : cuenta.rol === "estudiante"
          ? `Estudiante · Curso ${cuenta.datos.curso || "sin asignar"}`
          : "Administrador";
    }

    // El administrador no pide cambios: los hace él desde claves.html.
    if (cuenta.rol !== "administrador") conectarSolicitud(cuenta);

    if (adicional) adicional(cuenta);
  });
}
