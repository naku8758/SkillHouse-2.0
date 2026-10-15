// interfaz-administrador/usuarios-panel.js
// El padrón de la plataforma: cada cuenta, su rol, su curso, quién la creó y
// si está o no en condiciones de entrar.
//
// Por qué hace falta una pantalla aparte si ya existe "🔑 Claves": Claves lista
// el documento `usuarios/{uid}`, que es solo el índice de acceso (nombre, correo
// y PIN). El curso, la materia y el tipo de profesor viven en la colección del
// rol (`estudiantes`, `profesores`, `administradores`), así que para saber si
// una cuenta está completa hay que cruzar las dos. Aquí se cruzan.
//
// Cuesta 5 lecturas en total (una por colección) y ninguna por fila, así que
// tarda lo mismo con 20 que con 800 cuentas.

import { db } from "../js/firebase.js";
import { suscribirSesion } from "../js/sesion.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { listarCredenciales } from "../js/claves.js";
import { descargarTexto, copiarAlPortapapeles } from "../js/lista-credenciales.js";
import { obtenerMateria } from "../js/catalogo.js";
import { estadoDeSala, SALA } from "../js/sala.js";

const lista = document.getElementById("lista-usuarios");
const cajaCursos = document.getElementById("usuarios-cursos");
const stats = document.getElementById("usuarios-stats");
const errorEl = document.getElementById("usuarios-error");
const filtroRol = document.getElementById("filtro-rol");
const filtroCurso = document.getElementById("filtro-curso");
const filtroBuscar = document.getElementById("filtro-buscar");
const btnSoloFallas = document.getElementById("btn-solo-fallas");

let cuentas = [];
let grupos = [];
let soloFallas = false;

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

function mostrarError(texto) {
  errorEl.textContent = texto;
  errorEl.style.display = texto ? "block" : "none";
}

function formatearFecha(timestamp) {
  if (!timestamp || !timestamp.seconds) return "—";
  return new Date(timestamp.seconds * 1000).toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

/** Rol visible: un profesor puede ser director, y eso cambia lo que puede hacer. */
function rolEtiqueta(cuenta) {
  if (cuenta.rol === "profesor") {
    return cuenta.tipoProfesor === "director" ? "Director de curso" : "Profesor";
  }
  return { estudiante: "Estudiante", administrador: "Administrador" }[cuenta.rol] || cuenta.rol || "—";
}

function rolFiltro(cuenta) {
  return cuenta.rol === "profesor" && cuenta.tipoProfesor === "director" ? "director" : cuenta.rol;
}

/** Une el índice `usuarios` con la ficha del rol. La ficha puede faltar. */
function construir(cuentasBase, perfilesBase) {
  return cuentasBase.map((c) => {
    const perfil = perfilesBase.get(c.uid) || {};
    return {
      ...c,
      tipoProfesor: perfil.tipoProfesor || "",
      curso: perfil.curso || "",
      materias: perfil.materias || [],
      creadoPorNombre: perfil.creadoPorNombre || "",
      creadoEn: perfil.creadoEn || null,
      // Una cuenta creada a mano en Firebase Console tiene correo en Auth pero
      // ninguna ficha aquí: no sabe ni su curso ni su materia.
      completa: Object.keys(perfil).length > 0
    };
  });
}

function visibles() {
  const rol = filtroRol.value;
  const curso = filtroCurso.value;
  const texto = filtroBuscar.value.trim().toLowerCase();

  return cuentas.filter((c) => {
    if (soloFallas && c.completa && c.clave) return false;
    if (rol && rolFiltro(c) !== rol) return false;
    if (curso && c.curso !== curso) return false;
    if (texto && !`${c.username} ${c.email}`.toLowerCase().includes(texto)) return false;
    return true;
  });
}

function pintarStats() {
  const total = cuentas.length;
  const estudiantes = cuentas.filter((c) => c.rol === "estudiante").length;
  const profesores = cuentas.filter((c) => c.rol === "profesor").length;
  const directores = cuentas.filter((c) => c.tipoProfesor === "director").length;
  const fallas = cuentas.filter((c) => !c.completa || !c.clave).length;

  stats.innerHTML = `
    <div class="stat-card"><div class="stat-valor">${total}</div><div class="stat-label">Cuentas</div></div>
    <div class="stat-card"><div class="stat-valor">${estudiantes}</div><div class="stat-label">Estudiantes</div></div>
    <div class="stat-card"><div class="stat-valor">${profesores}</div><div class="stat-label">Profesores</div></div>
    <div class="stat-card"><div class="stat-valor">${directores}</div><div class="stat-label">Directores de curso</div></div>
    <div class="stat-card"><div class="stat-valor">${fallas}</div><div class="stat-label">Con fallas que corregir</div></div>`;
}

function pintarTabla() {
  const filas = visibles();

  document.getElementById("titulo-lista").textContent =
    filas.length === cuentas.length
      ? `Todos los registros (${cuentas.length})`
      : `Registros filtrados (${filas.length} de ${cuentas.length})`;

  if (!cuentas.length) {
    lista.innerHTML = `<p class="estado-vacio">Todavía no hay cuentas. Crea la primera desde ➕ <a href="crear-cuenta.html">Crear usuario</a>.</p>`;
    return;
  }
  if (!filas.length) {
    lista.innerHTML = `<p class="estado-vacio">Ninguna cuenta coincide con el filtro.</p>`;
    return;
  }

  const clasesDe = (uid) => grupos.filter((g) => g.miembrosUids?.includes(uid)).length;

  lista.innerHTML = `
    <table class="tabla-resultados">
      <thead>
        <tr>
          <th>Nombre</th><th>Rol</th><th>Curso / materias</th><th>Correo</th>
          <th>Creado</th><th>Estado</th><th></th>
        </tr>
      </thead>
      <tbody>
        ${filas
          .map(
            (c) => {
              const estado = !c.completa
                ? '<span class="grupo-estado grupo-estado--inactivo"><span class="dot"></span>Registro incompleto</span>'
                : !c.clave
                ? '<span class="grupo-estado grupo-estado--inactivo"><span class="dot"></span>Sin PIN</span>'
                : '<span class="grupo-estado grupo-estado--activo"><span class="dot"></span>Listo para entrar</span>';

              const detalle =
                c.rol === "profesor"
                  ? c.materias.map((id) => escapar(obtenerMateria(id)?.nombre || id)).join(", ") || "Sin materia"
                  : c.curso
                  ? `Curso ${escapar(c.curso)}`
                  : "Sin curso";

              const clases = c.rol === "estudiante" ? clasesDe(c.uid) : null;

              return `
              <tr>
                <td>${escapar(c.username)}</td>
                <td>${escapar(rolEtiqueta(c))}</td>
                <td>${detalle}</td>
                <td><code>${escapar(c.email)}</code></td>
                <td>${escapar(c.creadoPorNombre || "—")}<span class="grupo-meta"> · ${formatearFecha(c.creadoEn)}</span></td>
                <td>${estado}${clases != null ? `<span class="grupo-meta"> ${clases} clase(s)</span>` : ""}</td>
                <td style="white-space:nowrap;">
                  <button class="btn-secundario" data-copiar="${escapar(c.uid)}">Copiar datos</button>
                  <a class="btn-accion" style="text-decoration:none;" href="claves.html">PIN</a>
                </td>
              </tr>`;
            }
          )
          .join("")}
      </tbody>
    </table>`;

  lista.querySelectorAll("[data-copiar]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const c = cuentas.find((x) => x.uid === btn.dataset.copiar);
      if (!c) return;
      copiarAlPortapapeles(
        `${rolEtiqueta(c)} — ${c.username} — ${c.email} — ${c.clave || "sin PIN"}`,
        btn
      );
    });
  });
}

function pintarCursos() {
  const codigos = [...new Set(grupos.map((g) => g.curso).filter(Boolean))].sort();

  if (!codigos.length) {
    cajaCursos.innerHTML = `<p class="estado-vacio">Ningún curso tiene clases todavía.</p>`;
    return;
  }

  const filas = codigos.map((codigo) => {
    const delCurso = grupos.filter((g) => g.curso === codigo);
    const activas = delCurso.filter((g) => g.activo).length;
    const abiertas = delCurso.filter((g) => g.activo && estadoDeSala(g) === SALA.ABIERTA).length;
    const miembros = new Set();
    delCurso.forEach((g) => (g.miembrosUids || []).forEach((uid) => miembros.add(uid)));
    const director = cuentas.find((c) => c.tipoProfesor === "director" && c.curso === codigo);

    return `
      <tr>
        <td>${escapar(codigo)}</td>
        <td>${escapar(director?.username || "Sin director")}</td>
        <td>${delCurso.length}</td>
        <td>${activas}</td>
        <td>${abiertas}</td>
        <td>${miembros.size}</td>
      </tr>`;
  });

  cajaCursos.innerHTML = `
    <table class="tabla-resultados">
      <thead><tr><th>Curso</th><th>Director</th><th>Clases</th><th>Activas</th><th>Abiertas ahora</th><th>Estudiantes distintos</th></tr></thead>
      <tbody>${filas.join("")}</tbody>
    </table>`;
}

function llenarFiltroCursos() {
  const codigos = [
    ...new Set([...cuentas.map((c) => c.curso).filter(Boolean), ...grupos.map((g) => g.curso).filter(Boolean)])
  ].sort();
  filtroCurso.innerHTML =
    `<option value="">Todos</option>` +
    codigos.map((c) => `<option value="${escapar(c)}">Curso ${escapar(c)}</option>`).join("");
}

async function cargar() {
  mostrarError("");
  lista.innerHTML = `<p class="estado-vacio">Cargando cuentas...</p>`;
  cajaCursos.innerHTML = `<p class="estado-vacio">Cargando clases...</p>`;

  try {
    const [credenciales, snaps, gruposSnap] = await Promise.all([
      listarCredenciales(),
      Promise.all([
        getDocs(collection(db, "estudiantes")),
        getDocs(collection(db, "profesores")),
        getDocs(collection(db, "administradores"))
      ]),
      getDocs(collection(db, "grupos"))
    ]);

    const fichas = new Map();
    snaps.forEach((snap) =>
      snap.docs.forEach((d) => fichas.set(d.id, { uid: d.id, ...d.data() }))
    );

    cuentas = construir(credenciales, fichas);
    grupos = gruposSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch (err) {
    console.error(err);
    lista.innerHTML = `<p class="estado-vacio">No se pudieron leer las cuentas.</p>`;
    cajaCursos.innerHTML = "";
    mostrarError("Falló la lectura. Revisa la conexión y que firestore.rules esté publicado.");
    return;
  }

  stats.innerHTML = "";
  llenarFiltroCursos();
  pintarStats();
  pintarTabla();
  pintarCursos();
}

[filtroRol, filtroCurso, filtroBuscar].forEach((el) => el.addEventListener("input", pintarTabla));

btnSoloFallas.addEventListener("click", () => {
  soloFallas = !soloFallas;
  // `.is-active` solo existe para los enlaces del menú, así que el botón se
  // distingue cambiando de clase de botón.
  btnSoloFallas.className = soloFallas ? "btn-accion" : "btn-secundario";
  btnSoloFallas.textContent = soloFallas ? "Ver todo de nuevo" : "Solo con fallas";
  pintarTabla();
});

document.getElementById("btn-descargar-usuarios").addEventListener("click", () => {
  const filasVisibles = visibles();
  if (!filasVisibles.length) return;
  const escaparCelda = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
  const csv =
    "\uFEFF" +
    [
      ["Rol", "Nombre", "Correo", "Curso", "Materias", "Creado por", "PIN", "Estado"],
      ...filasVisibles.map((c) => [
        rolEtiqueta(c),
        c.username,
        c.email,
        c.curso || "",
        c.materias.map((id) => obtenerMateria(id)?.nombre || id).join(" / "),
        c.creadoPorNombre || "",
        c.clave || "",
        c.completa ? (c.clave ? "Listo" : "Sin PIN") : "Registro incompleto"
      ])
    ]
      .map((f) => f.map(escaparCelda).join(","))
      .join("\r\n");
  descargarTexto(`skillhouse-usuarios-${new Date().toISOString().slice(0, 10)}.csv`, csv);
});

suscribirSesion("administrador", (cuenta) => {
  if (!cuenta) return; // guard.js redirige
  cargar();
});
