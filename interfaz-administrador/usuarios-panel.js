// interfaz-administrador/usuarios-panel.js
// El padrón de la plataforma: cada cuenta, su rol, su PIN, su curso, quién la
// creó y si está o no en condiciones de entrar.
//
// Viene ordenado por bloques —estudiantes por curso, profesores por la materia
// que dictan— porque el administrador no piensa en "la lista de los 400
// usuarios", piensa en "los de 601" o "quién da Inglés".
//
// Por qué hace falta una pantalla aparte si ya existe "🔑 Claves": Claves lista
// el documento `usuarios/{uid}`, que es solo el índice de acceso (nombre, correo
// y PIN). El curso, la materia y el tipo de profesor viven en la colección del
// rol (`estudiantes`, `profesores`, `administradores`), así que para saber si
// una cuenta está completa hay que cruzar las dos. Aquí se cruzan.
//
// Cuesta 5 lecturas en total (una por colección) y ninguna por fila, así que
// tarda lo mismo con 20 que con 800 cuentas.
//
// Los PINes solo salen aquí porque esta página es de administrador: `listar`
// sobre la colección `usuarios` está restringido en firestore.rules, así que
// ningún otro rol obtiene esta lista aunque escriba el código a mano.

import { db } from "../js/firebase.js";
import { suscribirSesion } from "../js/sesion.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { listarCredenciales, restablecerClaveDe } from "../js/claves.js";
import { descargarTexto, copiarAlPortapapeles } from "../js/lista-credenciales.js";
import { MATERIAS, obtenerMateria } from "../js/catalogo.js";
import { estadoDeSala, SALA } from "../js/sala.js";

const SIN_DATO = { sin_curso: "Sin curso", sin_materia: "Sin materia asignada" };

const lista = document.getElementById("lista-usuarios");
const cajaCursos = document.getElementById("usuarios-cursos");
const stats = document.getElementById("usuarios-stats");
const errorEl = document.getElementById("usuarios-error");
const avisoEl = document.getElementById("usuarios-aviso");
const filtroRol = document.getElementById("filtro-rol");
const filtroCurso = document.getElementById("filtro-curso");
const filtroMateria = document.getElementById("filtro-materia");
const filtroBuscar = document.getElementById("filtro-buscar");
const btnSoloFallas = document.getElementById("btn-solo-fallas");
const btnVerPines = document.getElementById("btn-ver-pines");

let cuentas = [];
let grupos = [];
let soloFallas = false;
// Los PINes se muestran por defecto: el administrador entra aquí precisamente a
// verlos. El botón deja ocultarlos cuando comparte la pantalla con un profe.
let pinesVisibles = true;

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

function mostrarError(texto) {
  errorEl.textContent = texto;
  errorEl.style.display = texto ? "block" : "none";
}

function mostrarAviso(texto) {
  avisoEl.textContent = texto;
  avisoEl.style.display = texto ? "block" : "none";
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
  const materia = filtroMateria.value;
  const texto = filtroBuscar.value.trim().toLowerCase();

  return cuentas.filter((c) => {
    if (soloFallas && c.completa && c.clave) return false;
    if (rol && rolFiltro(c) !== rol) return false;
    if (curso && c.curso !== curso) return false;
    // El filtro de materia solo concierne a los profesores: un estudiante no
    // tiene materia propia, entra a las clases que ya filtran por curso.
    if (materia && !(c.rol === "profesor" && c.materias.includes(materia))) return false;
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

  const rol = filtroRol.value;
  const bloques = [];

  if (!rol || rol === "estudiante") bloques.push(bloqueEstudiantes(filas));
  if (!rol || rol === "profesor" || rol === "director") bloques.push(bloqueProfesores(filas));
  if (!rol || rol === "administrador") bloques.push(bloqueAdministradores(filas));

  lista.innerHTML = bloques.filter(Boolean).join("") ||
    `<p class="estado-vacio">Ninguna cuenta coincide con el filtro.</p>`;

  conectarBotones();
}

/* ---------------------- Bloques agrupados ---------------------- */

const PIN = (c) =>
  `<code class="pin pin-celda">${escapar(pinesVisibles ? c.clave || "sin registro" : "••••••")}</code>`;

const CORREO = (c) => `<code>${escapar(c.email)}</code>`;

const CREADO = (c) =>
  `${escapar(c.creadoPorNombre || "—")}<span class="grupo-meta"> · ${formatearFecha(c.creadoEn)}</span>`;

function estadoCelda(c) {
  if (!c.completa) {
    return '<span class="grupo-estado grupo-estado--inactivo"><span class="dot"></span>Registro incompleto</span>';
  }
  if (!c.clave) {
    return '<span class="grupo-estado grupo-estado--inactivo"><span class="dot"></span>Sin PIN</span>';
  }
  return '<span class="grupo-estado grupo-estado--activo"><span class="dot"></span>Listo para entrar</span>';
}

function accionesCelda(c) {
  return `<span class="grupo-acciones">
    <button class="btn-secundario" data-copiar="${escapar(c.uid)}">Copiar</button>
    <button class="btn-accion" data-nueva="${escapar(c.uid)}">Nueva clave</button>
  </span>`;
}

const COLUMNAS = {
  estudiante: {
    // El curso no se repite en una columna: ya es el título del bloque.
    cabecera: ["Nombre", "Correo", "PIN", "Creada por", "Estado", ""],
    celdas: (c, enClases) => [
      escapar(c.username),
      CORREO(c),
      PIN(c),
      CREADO(c),
      `${estadoCelda(c)}<span class="grupo-meta"> ${enClases} clase(s)</span>`,
      accionesCelda(c)
    ]
  },
  profesor: {
    cabecera: ["Nombre", "Rol", "Curso que dirige", "Correo", "PIN", "Creado", "Estado", ""],
    celdas: (c) => [
      escapar(c.username),
      escapar(rolEtiqueta(c)),
      c.curso ? `Curso ${escapar(c.curso)}` : "No dirige ninguno",
      CORREO(c),
      PIN(c),
      CREADO(c),
      estadoCelda(c),
      accionesCelda(c)
    ]
  },
  administrador: {
    cabecera: ["Nombre", "Correo", "PIN", "Estado", ""],
    celdas: (c) => [escapar(c.username), CORREO(c), PIN(c), estadoCelda(c), accionesCelda(c)]
  }
};

function tabla(cuentasDelGrupo, variante) {
  const { cabecera, celdas } = COLUMNAS[variante];
  // Contar en cuántas clases está cada uno solo hace falta en la tabla de
  // estudiantes; recorrer `grupos` por cada profesor sería trabajo de más.
  const clasesDe = (uid) =>
    variante === "estudiante" ? grupos.filter((g) => g.miembrosUids?.includes(uid)).length : 0;

  return `
    <div class="tabla-envoltura">
      <table class="tabla-resultados">
        <thead><tr>${cabecera.map((t) => `<th>${t}</th>`).join("")}</tr></thead>
        <tbody>
          ${cuentasDelGrupo
            .map((c) => `<tr>${celdas(c, clasesDe(c.uid)).map((td) => `<td>${td}</td>`).join("")}</tr>`)
            .join("")}
        </tbody>
      </table>
    </div>`;
}

/**
 * Un grupo del padrón: su título, cuántas cuentas tiene y la tabla. El subtítulo
 * sirve para lo que el administrador busca cuando agrupa ("quién dirige 601").
 */
function bloque(titulo, meta, contenido) {
  return `
    <div class="padron-bloque">
      <h3 class="padron-titulo">${escapar(titulo)}<span class="padron-conteo">${escapar(meta)}</span></h3>
      ${contenido}
    </div>`;
}

/** Coloca los grupos conocidos en orden y empuja los huecos ("sin dato") al final. */
function ordenGrupos(pares, ordenConocido, claveSinDato) {
  pares.sort(([a], [b]) => {
    if (a === claveSinDato) return 1;
    if (b === claveSinDato) return -1;
    const ia = ordenConocido.indexOf(a);
    const ib = ordenConocido.indexOf(b);
    if (ia !== -1 || ib !== -1) return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
    return String(a).localeCompare(String(b), "es", { numeric: true });
  });
  return pares;
}

function bloqueEstudiantes(filas) {
  const delRol = filas.filter((c) => c.rol === "estudiante");
  if (!delRol.length) return "";

  const porCurso = new Map();
  delRol.forEach((c) => {
    const clave = c.curso || "sin_curso";
    if (!porCurso.has(clave)) porCurso.set(clave, []);
    porCurso.get(clave).push(c);
  });

  const codigos = [...cuentas.map((c) => c.curso).filter(Boolean), ...grupos.map((g) => g.curso).filter(Boolean)];
  const orden = [...new Set(codigos)].sort((a, b) => String(a).localeCompare(String(b), "es", { numeric: true }));

  const cuerpo = ordenGrupos([...porCurso.entries()], orden, "sin_curso")
    .map(([codigo, listaCurso]) => {
      const director = cuentas.find((c) => c.tipoProfesor === "director" && c.curso === codigo);
      const titulo = codigo === "sin_curso" ? SIN_DATO.sin_curso : `Curso ${codigo}`;
      const meta = `${listaCurso.length} cuenta(s)${director ? ` · director(a): ${director.username}` : ""}`;
      return bloque(titulo, meta, tabla(ordenNombres(listaCurso), "estudiante"));
    })
    .join("");

  return `<section class="padron-seccion">
    <h2>🎓 Estudiantes por curso</h2>
    <p class="panel-sub">Aparecen agrupados por curso porque el curso es el dato que decide a qué clases puede entrar cada uno. Si un estudiante sale en "Sin curso", es que su ficha no tiene curso y la plataforma lo deja fuera de cualquier clase.</p>
    ${cuerpo}
  </section>`;
}

function bloqueProfesores(filas) {
  const delRol = filas.filter((c) => c.rol === "profesor");
  if (!delRol.length) return "";

  // Un profesor que dicta dos materias sale en las dos: el padrón responde a
  // "quién da Inglés", y esa pregunta no se contesta bien con un grupo por
  // combinación de materias.
  const porMateria = new Map();
  delRol.forEach((c) => {
    const ids = c.materias.length ? c.materias : ["sin_materia"];
    ids.forEach((id) => {
      if (!porMateria.has(id)) porMateria.set(id, []);
      porMateria.get(id).push(c);
    });
  });

  const cuerpo = ordenGrupos([...porMateria.entries()], MATERIAS.map((m) => m.id), "sin_materia")
    .map(([id, listaMateria]) => {
      const materia = obtenerMateria(id);
      const titulo = materia ? `${materia.icono} ${materia.nombre}` : SIN_DATO.sin_materia;
      const directores = listaMateria.filter((c) => c.tipoProfesor === "director");
      const meta = `${listaMateria.length} profesor(es)${
        directores.length ? ` · ${directores.length} director(es)` : ""
      }`;
      return bloque(titulo, meta, tabla(ordenNombres(listaMateria), "profesor"));
    })
    .join("");

  return `<section class="padron-seccion">
    <h2>🧑‍🏫 Profesores por materia</h2>
    <p class="panel-sub">Cada profesor aparece en la materia que dicta; si da dos, sale en las dos. Un profesor estándar crea clases de cualquier curso en esas materias, y el director de curso solo del suyo, que es el que figura en su columna.</p>
    ${cuerpo}
  </section>`;
}

function bloqueAdministradores(filas) {
  const delRol = filas.filter((c) => c.rol === "administrador");
  if (!delRol.length) return "";

  return `<section class="padron-seccion">
    <h2>🛡️ Administradores</h2>
    <p class="panel-sub">Quien entra aquí puede crear cuentas y ver el PIN de todas. Conviene que sean los menos.</p>
    ${tabla(ordenNombres(delRol), "administrador")}
  </section>`;
}

function ordenNombres(listaCuentas) {
  return [...listaCuentas].sort((a, b) => a.username.localeCompare(b.username, "es", { numeric: true }));
}

function conectarBotones() {
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

  lista.querySelectorAll("[data-nueva]").forEach((btn) => {
    btn.addEventListener("click", () => generarNueva(btn.dataset.nueva, btn));
  });
}

/**
 * PIN nuevo sin salir del padrón. Es el mismo restablecerClaveDe que usa
 * "🔑 Claves"; estar aquí evita tener que buscar de nuevo la cuenta en otra
 * tabla cuando lo que el administrador está viendo es justamente esa ficha.
 */
async function generarNueva(uid, boton) {
  const c = cuentas.find((x) => x.uid === uid);
  if (!c) return;

  if (!window.confirm(`¿Generar un PIN nuevo para ${c.username}?\n\nEl actual deja de servir en el mismo momento.`)) {
    return;
  }

  mostrarError("");
  mostrarAviso("");
  boton.disabled = true;
  const original = boton.textContent;
  boton.textContent = "Cambiando...";

  try {
    const nueva = await restablecerClaveDe({ uid: c.uid, email: c.email });
    c.clave = nueva;
    pintarStats();
    pintarTabla();
    mostrarAviso(`La nueva clave de ${c.username} es ${nueva}. Anótala: solo se muestra en esta pantalla.`);
  } catch (err) {
    console.error(err);
    mostrarError(err.message || "No se pudo cambiar la contraseña.");
    boton.disabled = false;
    boton.textContent = original;
  }
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

  // Las materias del catálogo, no las que aparecen en las fichas: así el
  // administrador puede comprobar que ninguna materia se quedó sin profesor.
  filtroMateria.innerHTML =
    `<option value="">Todas</option>` +
    MATERIAS.map((m) => `<option value="${escapar(m.id)}">${escapar(m.icono)} ${escapar(m.nombre)}</option>`).join("");
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

[filtroRol, filtroCurso, filtroMateria, filtroBuscar].forEach((el) => el.addEventListener("input", pintarTabla));

btnSoloFallas.addEventListener("click", () => {
  soloFallas = !soloFallas;
  // `.is-active` solo existe para los enlaces del menú, así que el botón se
  // distingue cambiando de clase de botón.
  btnSoloFallas.className = soloFallas ? "btn-accion" : "btn-secundario";
  btnSoloFallas.textContent = soloFallas ? "Ver todo de nuevo" : "Solo con fallas";
  pintarTabla();
});

btnVerPines.addEventListener("click", () => {
  pinesVisibles = !pinesVisibles;
  btnVerPines.textContent = pinesVisibles ? "Ocultar PINes" : "Mostrar PINes";
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
