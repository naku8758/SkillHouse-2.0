// interfaz-administrador/claves.js
// Pantalla de Contraseñas del administrador: los PINes de todas las cuentas y
// la bandeja de solicitudes de cambio.
//
// Es la única pantalla de la plataforma donde se ve una clave ajena, y eso es
// así por las reglas de Firestore: "usuarios" solo se puede LISTAR siendo
// administrador. Un profesor o un director que escriba este mismo código no
// obtiene nada.

import { suscribirSesion } from "../js/sesion.js";
import {
  listarCredenciales,
  restablecerClaveDe,
  obtenerSolicitudesPendientes,
  atenderSolicitudClave,
  descartarSolicitudClave
} from "../js/claves.js";
import { descargarTexto, copiarAlPortapapeles, nombreDeRol } from "../js/lista-credenciales.js";

const listaClaves = document.getElementById("lista-claves");
const listaSolicitudes = document.getElementById("lista-solicitudes");
const aviso = document.getElementById("claves-aviso");
const errorEl = document.getElementById("claves-error");
const filtroRol = document.getElementById("filtro-rol");
const filtroBuscar = document.getElementById("filtro-buscar");

let cuentas = [];
let solicitudes = [];

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

function mostrar(el, texto) {
  el.textContent = texto;
  el.style.display = texto ? "block" : "none";
}

function formatearFecha(timestamp) {
  if (!timestamp || !timestamp.seconds) return "hace un momento";
  return new Date(timestamp.seconds * 1000).toLocaleString("es-CO", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  });
}

/* ---------------------- Tabla de claves ---------------------- */

function visibles() {
  const rol = filtroRol.value;
  const texto = filtroBuscar.value.trim().toLowerCase();

  return cuentas.filter((c) => {
    if (rol && c.rol !== rol) return false;
    if (!texto) return true;
    return `${c.username} ${c.email}`.toLowerCase().includes(texto);
  });
}

function renderizarClaves() {
  const filas = visibles();

  // El título cuenta lo que se ve: con un filtro puesto ponía el total de la
  // plataforma junto a una tabla de tres filas.
  document.getElementById("titulo-credenciales").textContent =
    filas.length === cuentas.length
      ? `Claves de la plataforma (${cuentas.length})`
      : `Claves filtradas (${filas.length} de ${cuentas.length})`;

  if (!cuentas.length) {
    listaClaves.innerHTML = `<p class="estado-vacio">Todavía no hay ninguna cuenta creada.</p>`;
    return;
  }

  if (!filas.length) {
    listaClaves.innerHTML = `<p class="estado-vacio">Ninguna cuenta coincide con el filtro.</p>`;
    return;
  }

  listaClaves.innerHTML = `
    <table class="tabla-resultados">
      <thead>
        <tr><th>Nombre</th><th>Rol</th><th>Correo</th><th>PIN actual</th><th></th></tr>
      </thead>
      <tbody>
        ${filas
          .map(
            (c) => `
          <tr>
            <td>${escapar(c.username)}</td>
            <td>${escapar(nombreDeRol(c.rol))}</td>
            <td><code>${escapar(c.email)}</code></td>
            <td><code class="pin" style="font-size:1.05rem; letter-spacing:.12em;">${escapar(c.clave || "sin registro")}</code></td>
            <td style="white-space:nowrap;">
              <button class="btn-secundario" data-copiar="${escapar(c.uid)}">Copiar</button>
              <button class="btn-accion" data-nueva="${escapar(c.uid)}">Nueva clave</button>
            </td>
          </tr>`
          )
          .join("")}
      </tbody>
    </table>`;

  listaClaves.querySelectorAll("[data-copiar]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const c = cuentas.find((x) => x.uid === btn.dataset.copiar);
      if (c) copiarAlPortapapeles(`${c.username} — ${c.email} — ${c.clave}`, btn);
    });
  });

  listaClaves.querySelectorAll("[data-nueva]").forEach((btn) => {
    btn.addEventListener("click", () => generarNueva(btn.dataset.nueva, btn));
  });
}

async function generarNueva(uid, boton) {
  const cuenta = cuentas.find((c) => c.uid === uid);
  if (!cuenta) return;

  mostrar(errorEl, "");
  mostrar(aviso, "");
  boton.disabled = true;
  const original = boton.textContent;
  boton.textContent = "Cambiando...";

  try {
    const nueva = await restablecerClaveDe({ uid: cuenta.uid, email: cuenta.email });
    cuenta.clave = nueva;
    renderizarClaves();
    mostrar(aviso, `La nueva clave de ${cuenta.username} es ${nueva}. Ya puede entrar con ella.`);
  } catch (err) {
    console.error(err);
    mostrar(errorEl, err.message || "No se pudo cambiar la contraseña.");
    boton.disabled = false;
    boton.textContent = original;
  }
}

/* ---------------------- Solicitudes ---------------------- */

function renderizarSolicitudes() {
  document.getElementById("titulo-solicitudes").textContent =
    solicitudes.length
      ? `Solicitudes de cambio (${solicitudes.length})`
      : "Solicitudes de cambio";

  if (!solicitudes.length) {
    listaSolicitudes.innerHTML = `<p class="estado-vacio">No hay pedidos pendientes. Cuando alguien no recuerde su PIN, lo verá aquí.</p>`;
    return;
  }

  listaSolicitudes.innerHTML = `
    <table class="tabla-resultados">
      <thead>
        <tr><th>Nombre</th><th>Rol</th><th>Correo</th><th>Motivo</th><th>Fecha</th><th></th></tr>
      </thead>
      <tbody>
        ${solicitudes
          .map(
            (s) => `
          <tr>
            <td>${escapar(s.nombre || "—")}</td>
            <td>${escapar(nombreDeRol(s.rol))}</td>
            <td><code>${escapar(s.email || "—")}</code></td>
            <td>${escapar(s.motivo || "No recuerda su clave")}</td>
            <td>${escapar(formatearFecha(s.creadoEn))}</td>
            <td style="white-space:nowrap;">
              <button class="btn-accion" data-atender="${escapar(s.id)}">Generar nueva</button>
              <button class="btn-secundario" data-descartar="${escapar(s.id)}">Descartar</button>
            </td>
          </tr>`
          )
          .join("")}
      </tbody>
    </table>`;

  listaSolicitudes.querySelectorAll("[data-atender]").forEach((btn) => {
    btn.addEventListener("click", () => atender(btn.dataset.atender, btn));
  });

  listaSolicitudes.querySelectorAll("[data-descartar]").forEach((btn) => {
    btn.addEventListener("click", () => descartar(btn.dataset.descartar, btn));
  });
}

async function atender(solicitudId, boton) {
  const solicitud = solicitudes.find((s) => s.id === solicitudId);
  if (!solicitud) return;

  mostrar(errorEl, "");
  mostrar(aviso, "");
  boton.disabled = true;

  try {
    const nueva = await atenderSolicitudClave(solicitud);
    const cuenta = cuentas.find((c) => c.uid === solicitud.uid);
    if (cuenta) cuenta.clave = nueva;

    solicitudes = solicitudes.filter((s) => s.id !== solicitudId);
    renderizarSolicitudes();
    renderizarClaves();
    mostrar(aviso, `Le generaste una clave nueva a ${solicitud.nombre || solicitud.email}: ${nueva}.`);
  } catch (err) {
    console.error(err);
    mostrar(errorEl, err.message || "No se pudo atender la solicitud.");
    boton.disabled = false;
  }
}

async function descartar(solicitudId, boton) {
  mostrar(errorEl, "");
  boton.disabled = true;

  try {
    await descartarSolicitudClave(solicitudId);
    solicitudes = solicitudes.filter((s) => s.id !== solicitudId);
    renderizarSolicitudes();
  } catch (err) {
    console.error(err);
    mostrar(errorEl, "No se pudo descartar la solicitud.");
    boton.disabled = false;
  }
}

/* ---------------------- CSV ---------------------- */

document.getElementById("btn-descargar-claves").addEventListener("click", () => {
  const filasVisibles = visibles();
  if (!filasVisibles.length) return;
  const escaparCelda = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
  const filas = [
    ["Rol", "Nombre", "Correo", "PIN"],
    // Se descarga lo que está en pantalla: si el admin filtró por rol o buscó
    // un apellido, el CSV con TODAS las cuentas no se corresponde con la tabla.
    ...filasVisibles.map((c) => [nombreDeRol(c.rol), c.username, c.email, c.clave])
  ];
  const csv = "\uFEFF" + filas.map((f) => f.map(escaparCelda).join(",")).join("\r\n");
  descargarTexto(`skillhouse-claves-${new Date().toISOString().slice(0, 10)}.csv`, csv);
});

/* ---------------------- Arranque ---------------------- */

async function cargarTodo() {
  listaClaves.innerHTML = `<p class="estado-vacio">Cargando cuentas...</p>`;

  try {
    [cuentas, solicitudes] = await Promise.all([listarCredenciales(), obtenerSolicitudesPendientes()]);
  } catch (err) {
    console.error(err);
    listaClaves.innerHTML = `<p class="estado-vacio">No se pudieron leer las cuentas.</p>`;
    // Antes se dejaba el hueco en blanco, y parecía que no había pedidos cuando
    // lo que había fallado era la lectura.
    listaSolicitudes.innerHTML = `<p class="estado-vacio">No se pudieron leer las solicitudes.</p>`;
    mostrar(errorEl, "Falló la lectura. Revisa la conexión y recarga la página.");
    return;
  }

  renderizarClaves();
  renderizarSolicitudes();
}

[filtroRol, filtroBuscar].forEach((el) => el.addEventListener("input", renderizarClaves));

suscribirSesion("administrador", (cuenta) => {
  if (!cuenta) return; // guard.js se ocupa
  cargarTodo();
});
