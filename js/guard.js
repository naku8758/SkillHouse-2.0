// js/guard.js
// Protege las páginas de panel (estudiante / profesor / administrador) y
// deja lista la interfaz de una sola vez:
//  - Sin sesión, o con un rol que no corresponde a la página, redirige a
//    index.html (y cierra la sesión si estaba mal encaminado).
//  - Escribe el saludo en #bienvenida.
//  - Oculta los enlaces del menú marcados con data-solo="director" cuando
//    el profesor no es director de curso.
//  - Conecta "Cerrar Sesión".
//
// Uso en cada página:
//   <script type="module">
//     import { protegerPagina } from "../js/guard.js";
//     protegerPagina("profesor");
//   </script>

import { suscribirSesion, signOut, auth, MOTIVO } from "./sesion.js";

const SALUDOS = {
  estudiante: (nombre) => `Bienvenid@, ${nombre}`,
  profesor: (nombre) => `Bienvenid@, profe ${nombre}`,
  administrador: (nombre) => `Panel del administrador — ${nombre}`
};

/**
 * @param {string} rolEsperado
 * @param {(cuenta:Object) => void} [alListo]  se llama con la cuenta ya
 *        cargada, para que la página pinte sus datos sin repetir la lectura.
 */
export function protegerPagina(rolEsperado, alListo) {
  conectarCierreSesion();

  suscribirSesion(rolEsperado, (cuenta, motivo) => {
    if (cuenta) {
      mostrarPanel(cuenta, alListo);
      return;
    }

    // Falló la lectura, pero la sesión sigue ahí. Expulsar aquí es lo que
    // hacía que un click rápido entre dos opciones del menú sacara al usuario
    // al inicio y le dejara volver a entrar sin más.
    if (motivo === MOTIVO.SIN_DATOS) {
      mostrarAvisoDeRed();
      return;
    }

    window.location.href = "../index.html";
  });
}

function mostrarPanel(cuenta, alListo) {
  document.getElementById("aviso-red")?.remove();

  const bienvenida = document.getElementById("bienvenida");
  if (bienvenida) {
    const saludar = SALUDOS[cuenta.rol];
    bienvenida.textContent = saludar ? saludar(cuenta.username) : `Bienvenid@, ${cuenta.username}`;
  }

  // Un profesor estándar no ve "Estudiantes"; un director sí.
  document.querySelectorAll("[data-solo]").forEach((el) => {
    const requerido = el.dataset.solo;
    const esDirector = cuenta.rol === "profesor" && cuenta.datos.tipoProfesor === "director";
    el.style.display = requerido === "director" && !esDirector ? "none" : "";
  });

  if (alListo) alListo(cuenta);
}

function mostrarAvisoDeRed() {
  if (document.getElementById("aviso-red")) return;

  const aviso = document.createElement("div");
  aviso.id = "aviso-red";
  // Estilos propios: la página de inicio del administrador no carga
  // juegos.css, y este aviso tiene que verse bien en las tres carpetas.
  aviso.style.cssText =
    "margin:16px 0; padding:14px 16px; border-radius:12px; text-align:center;" +
    "background:#F5EEFB; color:#7C1DAB; border:1px solid #DCC7EE; font-size:.95rem;";
  aviso.innerHTML = `
    No se pudieron cargar tus datos por un corte momentáneo de conexión.
    Tu sesión sigue abierta.
    <button type="button" id="btn-reintentar" style="margin-left:12px; padding:7px 14px; border-radius:9px; border:1px solid #7C1DAB; background:#fff; color:#7C1DAB; font-weight:700; cursor:pointer;">Reintentar</button>`;

  const main = document.querySelector("main") || document.body;
  main.insertBefore(aviso, main.firstChild);
  aviso.querySelector("#btn-reintentar").addEventListener("click", () => window.location.reload());
}

function conectarCierreSesion() {
  const logoutLink = document.getElementById("logout-link");
  if (!logoutLink || logoutLink.dataset.conectado) return;
  logoutLink.dataset.conectado = "1";
  logoutLink.addEventListener("click", async (e) => {
    e.preventDefault();
    await signOut(auth);
    window.location.href = "../index.html";
  });
}
