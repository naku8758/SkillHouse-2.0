// js/lista-credenciales.js
// Tabla de credenciales generadas en la sesión actual + exportarlas.
// Lo usan el administrador y los directores de curso, que son las dos
// pantallas que crean cuentas.
//
// Solo viven en memoria: al recargar la página desaparecen, porque en
// Firestore no se guarda ninguna contraseña.

export function crearRegistroCredenciales() {
  const cuentas = [];

  function agregar(cuenta) {
    cuentas.unshift(cuenta);
  }

  function todos() {
    return cuentas.slice();
  }

  function comoTexto() {
    return cuentas
      .map((c) => `${c.rol}\t${c.nombre}\t${c.email}\t${c.clave}${c.detalle ? "\t" + c.detalle : ""}`)
      .join("\n");
  }

  function comoCsv() {
    const escapar = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
    const filas = [
      ["Rol", "Nombre", "Correo", "Contraseña", "Detalle"],
      ...cuentas.map((c) => [c.rol, c.nombre, c.email, c.clave, c.detalle || ""])
    ];
    // El BOM hace que Excel abra el CSV con las tildes bien.
    return "\uFEFF" + filas.map((f) => f.map(escapar).join(",")).join("\r\n");
  }

  return { agregar, todos, comoTexto, comoCsv };
}

const NOMBRE_ROL = {
  estudiante: "Estudiante",
  profesor: "Profesor",
  director: "Director de curso",
  administrador: "Administrador"
};

export function nombreDeRol(rol) {
  return NOMBRE_ROL[rol] || rol;
}

/** Pinta la tabla dentro de `contenedor`. Muestra el aviso de sesión si está vacía. */
export function renderizarCredenciales(contenedor, cuentas) {
  if (!cuentas.length) {
    contenedor.innerHTML = `<p class="estado-vacio">Aún no has creado ninguna cuenta en esta sesión.</p>`;
    return;
  }

  const filas = cuentas
    .map(
      (c) => `
      <tr>
        <td>${escapar(c.nombre)}</td>
        <td>${escapar(nombreDeRol(c.rol))}</td>
        <td>${escapar(c.detalle || "—")}</td>
        <td><code>${escapar(c.email)}</code></td>
        <td><code style="font-size:1.05rem; letter-spacing:.12em;">${escapar(c.clave)}</code></td>
      </tr>`
    )
    .join("");

  contenedor.innerHTML = `
    <table class="tabla-resultados">
      <thead><tr><th>Nombre</th><th>Rol</th><th>Detalle</th><th>Correo</th><th>Contraseña</th></tr></thead>
      <tbody>${filas}</tbody>
    </table>`;
}

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

/** Descarga un archivo de texto. Se usa para el CSV de credenciales. */
export function descargarTexto(nombre, contenido, tipo = "text/csv;charset=utf-8") {
  const blob = new Blob([contenido], { type: tipo });
  const url = URL.createObjectURL(blob);
  const enlace = document.createElement("a");
  enlace.href = url;
  enlace.download = nombre;
  document.body.appendChild(enlace);
  enlace.click();
  enlace.remove();
  URL.revokeObjectURL(url);
}

/** Copia texto al portapapeles, con un aviso breve en el propio botón. */
export async function copiarAlPortapapeles(texto, boton) {
  const original = boton ? boton.textContent : "";
  try {
    await navigator.clipboard.writeText(texto);
    if (boton) {
      boton.textContent = "✓ Copiado";
      setTimeout(() => (boton.textContent = original), 1800);
    }
    return true;
  } catch (err) {
    if (boton) {
      boton.textContent = "No se pudo copiar";
      setTimeout(() => (boton.textContent = original), 1800);
    }
    return false;
  }
}
