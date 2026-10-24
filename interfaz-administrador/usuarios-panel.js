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
// Cuesta 6 lecturas en total (una por colección) y ninguna por fila, así que
// tarda lo mismo con 20 que con 800 cuentas.
//
// Los PINes solo salen aquí porque esta página es de administrador: `listar`
// sobre la colección `usuarios` está restringido en firestore.rules, así que
// ningún otro rol obtiene esta lista aunque escriba el código a mano.

import { plural } from "../js/plural.js";
import { db } from "../js/firebase.js";
import { suscribirSesion, signOut, auth } from "../js/sesion.js";
import { collection, getDocs, query, where, doc, updateDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { listarCredenciales, restablecerClaveDe } from "../js/claves.js";
import { eliminarCuenta } from "../js/credenciales.js";
import { matricularEnCurso } from "../js/cursos.js";
import { descargarTexto, copiarAlPortapapeles } from "../js/lista-credenciales.js";
import { MATERIAS, obtenerMateria, obtenerJuego, obtenerTema } from "../js/catalogo.js";
import { GRADOS, NOMBRE_GRADO, gradoDeCurso } from "../js/malla.js";
import { estadoDeSala, SALA, NOMBRE_SALA } from "../js/sala.js";
import { obtenerHistorialEstudiante, obtenerResultadosDelGrupo } from "../js/grupos.js";
import { notaDeResultado, promedioDeNotas, formatearNota } from "../js/nota.js";

const SIN_DATO = { sin_curso: "Sin curso", sin_materia: "Sin materia asignada" };

const lista = document.getElementById("lista-usuarios");
const cajaCursos = document.getElementById("usuarios-cursos");
const stats = document.getElementById("usuarios-stats");
const errorEl = document.getElementById("usuarios-error");
const avisoEl = document.getElementById("usuarios-aviso");
const filtroRol = document.getElementById("filtro-rol");
const filtroAnio = document.getElementById("filtro-anio");
const filtroCurso = document.getElementById("filtro-curso");
const filtroMateria = document.getElementById("filtro-materia");
const filtroBuscar = document.getElementById("filtro-buscar");
const btnSoloFallas = document.getElementById("btn-solo-fallas");
const btnVerPines = document.getElementById("btn-ver-pines");

let cuentas = [];
let grupos = [];
let cursos = [];
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

/**
 * El año NO es un campo de la cuenta: vive en `cursos/{codigo}.anio`. Se saca
 * por el curso de cada ficha para que el filtro de año responda "muéstrame los
 * de 2027" sin haber duplicado el año en 400 documentos.
 */
function anioDeCurso(codigo) {
  if (!codigo) return "";
  const curso = cursos.find((c) => String(c.codigo) === String(codigo));
  return curso && curso.anio ? String(curso.anio) : "";
}

function datosDelCurso(codigo) {
  return cursos.find((c) => String(c.codigo) === String(codigo)) || null;
}

/** Une el índice `usuarios` con la ficha del rol. La ficha puede faltar. */
function construir(cuentasBase, perfilesBase) {
  return cuentasBase.map((c) => {
    const perfil = perfilesBase.get(c.uid) || {};
    const curso = perfil.curso || "";
    return {
      ...c,
      tipoProfesor: perfil.tipoProfesor || "",
      curso,
      // Un profesor estándar no tiene curso, así que tampoco año: el filtro por
      // año deja fuera a quien no pertenece a ningún grado.
      anio: anioDeCurso(curso),
      materias: perfil.materias || [],
      grados: (perfil.grados || []).map((g) => Number(g)).filter(Number.isInteger),
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
  const anio = filtroAnio.value;
  const curso = filtroCurso.value;
  const materia = filtroMateria.value;
  const texto = filtroBuscar.value.trim().toLowerCase();

  return cuentas.filter((c) => {
    if (soloFallas && c.completa && c.clave) return false;
    if (rol && rolFiltro(c) !== rol) return false;
    if (anio && c.anio !== anio) return false;
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

/**
 * Cambiar de curso sin borrar la cuenta. Es la otra mitad del "plan b": el
 * estudiante puede rellenar su curso vacío escribiendo el código (Mi Perfil),
 * pero si lo que está mal es el curso que ya tiene, solo el administrador lo
 * corrige —y aquí es donde lo ve.
 */
function selectorCurso(c) {
  if (c.rol !== "estudiante") return "";
  const opciones = (c.curso ? [] : [`<option value="" selected>— sin curso —</option>`]).concat(
    cursos.map(
      (x) =>
        `<option value="${escapar(x.codigo)}" ${String(c.curso) === String(x.codigo) ? "selected" : ""}>${escapar(x.codigo)}${x.nombre && x.nombre !== `Grado ${x.codigo}` ? ` · ${escapar(x.nombre)}` : ""}${x.anio ? ` (${escapar(x.anio)})` : ""}</option>`
    )
  );
  return `<select data-curso="${escapar(c.uid)}" title="Reasignar el curso de esta cuenta">${opciones.join("")}</select>`;
}

function accionesCelda(c) {
  return `<span class="grupo-acciones">
    <button class="btn-secundario" data-ficha="${escapar(c.uid)}">Ficha</button>
    ${c.rol === "profesor"
      ? `<button class="btn-secundario" data-ajuste="${escapar(c.uid)}">Materias y grados</button>`
      : ""}
    <button class="btn-secundario" data-copiar="${escapar(c.uid)}">Copiar</button>
    <button class="btn-accion" data-nueva="${escapar(c.uid)}">Nueva clave</button>
    <button class="btn-borrar" data-borrar="${escapar(c.uid)}"${c.rol === "administrador" ? " title='Borra también su documento de administrador'" : ""}>Borrar</button>
  </span>`;
}

const COLUMNAS = {
  estudiante: {
    // El bloque ya se titula con el curso, pero la última columna lleva el
    // selector: reasignar un curso desde la fila es más rápido que buscar al
    // niño en el curso viejo y en el nuevo.
    cabecera: ["Nombre", "Correo", "PIN", "Creada por", "Estado", "Curso", ""],
    celdas: (c, enClases) => [
      escapar(c.username),
      CORREO(c),
      PIN(c),
      CREADO(c),
      `${estadoCelda(c)}<span class="grupo-meta"> ${plural(enClases, "clase")}</span>`,
      selectorCurso(c),
      accionesCelda(c)
    ]
  },
  profesor: {
    cabecera: ["Nombre", "Rol", "Curso que dirige", "Grados asignados", "Correo", "PIN", "Creado", "Estado", ""],
    celdas: (c) => [
      escapar(c.username),
      escapar(rolEtiqueta(c)),
      `${c.curso ? `Curso ${escapar(c.curso)}${c.anio ? ` · ${c.anio}` : ""}` : "No dirige ninguno"}`,
      c.grados.length
        ? escapar(c.grados.map((g) => `${g}°`).join(", "))
        : '<span class="grupo-meta">Todos (sin marcar)</span>',
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
    const clave = c.curso ? String(c.curso) : "sin_curso";
    if (!porCurso.has(clave)) porCurso.set(clave, []);
    porCurso.get(clave).push(c);
  });

  // El orden lo manda la colección `cursos`, no las cuentas: así un curso recién
  // creado aparece aunque todavía no tenga nadie matriculado. Se añaden al final
  // los códigos que algún estudiante tenga escritos y que no correspondan a un
  // curso existente (un curso borrado a mano en la consola, por ejemplo), para
  // que esas cuentas no queden invisibles.
  const orden = cursos.map((c) => String(c.codigo));
  const sueltos = [...new Set(cuentas.map((c) => c.curso).filter(Boolean).map(String))]
    .filter((codigo) => !orden.includes(codigo));
  orden.push(...sueltos.sort((a, b) => a.localeCompare(b, "es", { numeric: true })));

  const cuerpo = ordenGrupos([...porCurso.entries()], orden, "sin_curso")
    .map(([codigo, listaCurso]) => {
      const curso = codigo === "sin_curso" ? null : datosDelCurso(codigo);
      const director = cuentas.find((c) => c.tipoProfesor === "director" && String(c.curso) === codigo);
      const nombreDirector = curso?.directorNombre || director?.username || "";
      const titulo = curso
        ? `Curso ${codigo} · ${curso.nombre || `Grado ${codigo}`}`
        : codigo === "sin_curso"
        ? SIN_DATO.sin_curso
        : `Curso ${codigo} (ya no existe)`;
      const meta = [
        `${plural(listaCurso.length, "cuenta")}`,
        curso?.anio ? `año ${curso.anio}` : "",
        nombreDirector ? `dirigido por ${nombreDirector}` : "sin director"
      ].filter(Boolean).join(" · ");
      return bloque(titulo, meta, tabla(ordenNombres(listaCurso), "estudiante"));
    })
    .join("");

  return `<section class="padron-seccion">
    <h2>🎓 Estudiantes por curso</h2>
    <p class="panel-sub">Aparecen agrupados por curso porque el curso es el dato que decide a qué clases puede entrar cada uno. Si un estudiante sale en "Sin curso", es que su ficha no tiene curso y la plataforma lo deja fuera de cualquier clase: puede volver a meterse él mismo escribiendo el código del curso en su perfil, y tú también puedes ponérselo desde el selector de su fila.</p>
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
      const meta = `${plural(listaMateria.length, "profesor")}${
        directores.length ? ` · ${plural(directores.length, "director")}` : ""
      }`;
      return bloque(titulo, meta, tabla(ordenNombres(listaMateria), "profesor"));
    })
    .join("");

  return `<section class="padron-seccion">
    <h2>🧑‍🏫 Profesores por materia</h2>
    <p class="panel-sub">Cada profesor aparece en la materia que dicta; si da dos, sale en las dos. "Materias y grados" abre el ajuste de la fila: los grados marcados son los únicos cursos donde puede crear clases, y sin marcar ninguno puede usar todos, como antes. El director de curso siempre tiene además el curso que dirige.</p>
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
  lista.querySelectorAll("[data-ajuste]").forEach((btn) => {
    btn.addEventListener("click", () => mostrarAjuste(btn.dataset.ajuste));
  });

  lista.querySelectorAll("[data-ficha]").forEach((btn) => {
    btn.addEventListener("click", () => mostrarFicha(btn.dataset.ficha));
  });

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

  lista.querySelectorAll("[data-borrar]").forEach((btn) => {
    btn.addEventListener("click", () => pedirBorrado(btn.dataset.borrar, btn));
  });

  lista.querySelectorAll("[data-curso]").forEach((select) => {
    select.addEventListener("change", () => reasignarCurso(select));
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
    mostrarAviso(`La nueva clave de ${c.username} es ${nueva}. Anótala: sale mientras exista el registro de esa cuenta, aquí y en Claves.`);
  } catch (err) {
    console.error(err);
    mostrarError(err.message || "No se pudo cambiar la contraseña.");
    boton.disabled = false;
    boton.textContent = original;
  }
}

/**
 * Cambiar el curso de un estudiante desde su fila. Es lo que hace falta cuando
 * el "plan b" del código no alcanza: el niño no quedó sin curso, quedó en el
 * curso equivocado, y moverse él mismo sería cambiarse de grado.
 */
async function reasignarCurso(select) {
  const uid = select.dataset.curso;
  const codigo = select.value;
  const c = cuentas.find((x) => x.uid === uid);
  if (!c || !codigo) return;

  mostrarError("");
  mostrarAviso("");
  select.disabled = true;
  try {
    await matricularEnCurso({ uid, codigo });
    c.curso = codigo;
    c.anio = anioDeCurso(codigo);
    pintarStats();
    pintarTabla();
    mostrarAviso(`${c.username} ahora es del curso ${codigo}.`);
  } catch (err) {
    console.error(err);
    mostrarError(err.message || "No se pudo cambiar el curso.");
    select.value = c.curso || "";
    select.disabled = false;
  }
}

/* ---------------------- Materias y grados de un profesor ---------------------- */

const panelAjuste = document.getElementById("panel-ajuste");
const cajaAjusteMaterias = document.getElementById("ajuste-materias");
const cajaAjusteGrados = document.getElementById("ajuste-grados");
const ajusteTitulo = document.getElementById("ajuste-titulo");
const ajusteSub = document.getElementById("ajuste-sub");
const ajusteError = document.getElementById("ajuste-error");
const ajusteExito = document.getElementById("ajuste-exito");
const btnAjusteGuardar = document.getElementById("btn-ajuste-guardar");
let ajusteUid = null;

cajaAjusteMaterias.innerHTML = MATERIAS.map(
  (m) => `<label class="marca-materia">
    <input type="checkbox" value="${escapar(m.id)}">
    <span>${escapar(m.icono)} ${escapar(m.nombre)}</span>
  </label>`
).join("");

cajaAjusteGrados.innerHTML = GRADOS.map(
  (g) => `<label class="marca-materia">
    <input type="checkbox" value="${g}">
    <span>${escapar(NOMBRE_GRADO[g] || `${g}°`)}</span>
  </label>`
).join("");

function decirEn(el, texto) {
  el.textContent = texto;
  el.style.display = texto ? "block" : "none";
}

function marcarCasillas(caja, valores) {
  const set = new Set(valores.map(String));
  caja.querySelectorAll("input").forEach((i) => {
    i.checked = set.has(i.value);
  });
}

const casillasElegidas = (caja) =>
  [...caja.querySelectorAll("input:checked")].map((i) => i.value);

function mostrarAjuste(uid) {
  const c = cuentas.find((x) => x.uid === uid);
  if (!c) return;

  ajusteUid = uid;
  decirEn(ajusteError, "");
  decirEn(ajusteExito, "");

  ajusteTitulo.textContent = `Ajustar a ${c.username}`;
  ajusteSub.textContent = `${rolEtiqueta(c)}${c.curso ? ` · dirige el curso ${c.curso}` : ""} · ${c.email}`;
  marcarCasillas(cajaAjusteMaterias, c.materias);
  marcarCasillas(cajaAjusteGrados, c.grados);

  panelAjuste.style.display = "block";
  panelAjuste.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Asignar materias y grados a un profesor que ya existe. Es la mitad que faltaba
 * del trabajo del administrador: en "➕ Crear usuario" se eligen al nacer la
 * cuenta, y aquí se corrigen cuando el colegio reparte las cargas del año.
 *
 * Los grados se guardan como números de 1 a 11 porque el código del curso también
 * lo es: 601 es el grado 6 y 1103 el grado 11. `gradoDelCurso()` en
 * firestore.rules saca el grado de esas cifras (las dos últimas son el grupo),
 * así que el filtro de aquí y las reglas coinciden sin campos extra. Sin grados
 * marcados el profesor conserva el comportamiento antiguo: puede crear clases en
 * cualquier curso.
 */
async function guardarAjuste() {
  if (!ajusteUid) return;
  const c = cuentas.find((x) => x.uid === ajusteUid);
  if (!c) return;

  const materias = casillasElegidas(cajaAjusteMaterias);
  const grados = casillasElegidas(cajaAjusteGrados).map(Number);

  decirEn(ajusteError, "");
  decirEn(ajusteExito, "");
  if (!materias.length) {
    return decirEn(ajusteError, "Marca al menos una materia: sin materia no puede crear ninguna clase.");
  }

  btnAjusteGuardar.disabled = true;
  const original = btnAjusteGuardar.textContent;
  btnAjusteGuardar.textContent = "Guardando...";

  try {
    await updateDoc(doc(db, "profesores", ajusteUid), { materias, grados });
    c.materias = materias;
    c.grados = grados;

    const habilitados = grados.length
      ? cursos.filter((x) => grados.includes(gradoDeCurso(x.codigo))).length
      : cursos.length;
    decirEn(
      ajusteExito,
      `${c.username} ahora dicta ${plural(materias.length, "materia")} y puede crear clases en ${plural(habilitados, "curso")}` +
        (grados.length ? ` de los grados ${grados.map((g) => `${g}°`).join(", ")}.` : " (no marcaste grados: cualquiera).")
    );
    pintarStats();
    pintarTabla();
  } catch (err) {
    console.error(err);
    decirEn(ajusteError, err?.code === "permission-denied"
      ? "Firestore rechazó el cambio. Revisa que firestore.rules esté publicado."
      : err.message || "No se pudo guardar el ajuste.");
  } finally {
    btnAjusteGuardar.disabled = false;
    btnAjusteGuardar.textContent = original;
  }
}

btnAjusteGuardar.addEventListener("click", guardarAjuste);
document.getElementById("btn-ajuste-cerrar").addEventListener("click", () => {
  panelAjuste.style.display = "none";
  ajusteUid = null;
});

/* ---------------------- Ficha completa de una persona ---------------------- */

const panelFicha = document.getElementById("panel-ficha");
const fichaTitulo = document.getElementById("ficha-titulo");
const fichaSub = document.getElementById("ficha-sub");
const fichaDatos = document.getElementById("ficha-datos");
const fichaContenido = document.getElementById("ficha-contenido");

function tarjetas(pares) {
  fichaDatos.innerHTML = pares
    .map(([valor, etiqueta]) => `<div class="stat-card"><div class="stat-valor">${escapar(valor)}</div><div class="stat-label">${escapar(etiqueta)}</div></div>`)
    .join("");
}

/** Encabezado común: lo personal y lo de la cuenta, que los tres roles tienen. */
function encabezadoFicha(c) {
  fichaTitulo.textContent = `${c.username} · ${rolEtiqueta(c)}`;
  const piezas = [
    c.email,
    c.curso ? `curso ${c.curso}${c.anio ? ` · año ${c.anio}` : ""}` : "sin curso",
    c.rol === "profesor" && c.grados.length ? `grados ${c.grados.map((g) => `${g}°`).join(", ")}` : "",
    c.rol === "profesor" ? `dicta ${plural(c.materias.length, "materia")}` : "",
    c.creadoPorNombre ? `creó la cuenta ${c.creadoPorNombre}` : "sin registro de quién la creó",
    `creada ${formatearFecha(c.creadoEn)}`
  ].filter(Boolean);
  fichaSub.textContent = piezas.join(" · ");
}

/**
 * Ficha de un estudiante: sus clases y sus notas. El administrador es el único
 * rol que puede ver el historial completo de un niño (firestore.rules deja
 * leer `estudiantes/{uid}/resultados` solo al dueño y al administrador), y esa
 * es justamente la pregunta que hace la rectoría: "¿cómo va este estudiante?".
 */
async function fichaEstudiante(c) {
  const historial = await obtenerHistorialEstudiante(c.uid, { limite: 200 }).catch(() => []);

  const notas = historial.map((r) => notaDeResultado(r));
  const promedioPct = historial.length
    ? Math.round(historial.reduce((s, r) => s + (r.porcentaje || 0), 0) / historial.length)
    : 0;
  const materiasJugadas = new Set(historial.map((r) => r.materia).filter(Boolean)).size;

  // Bajo el modelo actual el niño no necesita que el profe lo inscriba: ve las
  // clases activas de su curso. La lista de la clase se llena solo cuando juega,
  // así que las dos cifras se muestran separadas.
  const clasesDelNino = grupos
    .filter((g) => c.curso && String(g.curso) === String(c.curso))
    .sort((a, b) => (b.creadoEn?.seconds || 0) - (a.creadoEn?.seconds || 0));
  const clasesAnotadas = grupos.filter((g) => (g.miembrosUids || []).includes(c.uid));

  tarjetas([
    [historial.length, "Partidas guardadas"],
    [historial.length ? `${promedioPct}%` : "—", "Promedio de aciertos"],
    [notas.length ? formatearNota(promedioDeNotas(notas)) : "—", "Nota definitiva (1 a 5)"],
    [materiasJugadas, "Materias jugadas"],
    [clasesDelNino.length, "Clases de su curso"],
    [clasesAnotadas.length, "Se ha anotado a clases"]
  ]);

  const porClase = new Map();
  historial.forEach((r) => {
    if (!r.grupoId) return;
    const fila = porClase.get(r.grupoId) || { nombre: r.juego, notas: [], partidas: 0 };
    fila.notas.push(notaDeResultado(r));
    fila.partidas += 1;
    porClase.set(r.grupoId, fila);
  });

  // El promedio de la clase completa, para que la ficha no muestre solo al niño
  // sino cómo está parado frente a sus compañeros del curso.
  const paraNota = clasesDelNino.filter((g) => g.activo).slice(0, MAX_CLASES_FICHA);
  const listasClase = await Promise.all(
    paraNota.map((g) => obtenerResultadosDelGrupo(g.id, { limite: 200 }).catch(() => []))
  );
  const resumenClase = new Map();
  paraNota.forEach((g, i) => {
    const lista = listasClase[i];
    resumenClase.set(g.id, {
      partidas: lista.length,
      nota: lista.length ? promedioDeNotas(lista.map((r) => notaDeResultado(r))) : null
    });
  });

  fichaContenido.innerHTML = `
    <h3 style="margin:6px 0 8px;">Clases de su curso</h3>
    ${clasesDelNino.length ? `
      <table class="tabla-resultados">
        <thead><tr><th>Clase</th><th>Materia</th><th>Profesor</th><th>Código</th><th>Estado</th><th>Anotados</th><th>Partidas de la clase</th><th>Nota de la clase</th><th>Él jugó</th></tr></thead>
        <tbody>${clasesDelNino
          .map(
            (g) => {
              const r = resumenClase.get(g.id);
              const su = porClase.get(g.id);
              const estado = g.activo ? NOMBRE_SALA[estadoDeSala(g)] || "Activa" : "Inactiva";
              return `<tr>
                <td>${escapar(nombreCorto(g.nombre || "", 22))}</td>
                <td>${escapar(obtenerMateria(g.materia)?.nombre || "—")}</td>
                <td>${escapar(g.profesorNombre || "—")}</td>
                <td><code>${escapar(g.codigo || "—")}</code></td>
                <td>${escapar(estado)}</td>
                <td>${(g.miembrosUids || []).length}</td>
                <td>${r ? r.partidas : "—"}</td>
                <td class="nota-celda">${r && r.nota != null ? escapar(formatearNota(r.nota)) : "—"}</td>
                <td class="nota-celda">${su ? `${su.partidas} · ${escapar(formatearNota(promedioDeNotas(su.notas)))}` : "no"}</td>
              </tr>`;
            }
          )
          .join("")}</tbody>
      </table>
      ${clasesDelNino.length > paraNota.length
        ? `<p class="panel-sub" style="margin-top:8px;">Las clases inactivas o más antiguas que las ${paraNota.length} leídas salen con "—" en las columnas de rendimiento.</p>`
        : ""}` : `<p class="estado-vacio">Su curso no tiene clases todavía. Cuando el profesor cree una, entra directo con el código de la clase.</p>`}

    <h3 style="margin:18px 0 8px;">Sus notas clase por clase</h3>
    ${porClase.size ? `
      <table class="tabla-resultados">
        <thead><tr><th>Clase</th><th>Partidas</th><th>Su nota en esa clase</th></tr></thead>
        <tbody>${[...porClase.entries()]
          .map(([grupoId, fila]) => {
            const g = grupos.find((x) => x.id === grupoId);
            return `<tr>
              <td>${escapar(g?.nombre || "Clase ya borrada")}</td>
              <td>${fila.partidas}</td>
              <td><span class="nota-celda">${escapar(formatearNota(promedioDeNotas(fila.notas)))}</span></td>
            </tr>`;
          })
          .join("")}</tbody>
      </table>` : `<p class="estado-vacio">Sus partidas no traen clase: jugó en modo práctica, que no deja nota en ninguna clase.</p>`}

    ${historial.length ? `
      <h3 style="margin:18px 0 8px;">Últimas partidas</h3>
      <table class="tabla-resultados">
        <thead><tr><th>Fecha</th><th>Juego</th><th>Materia</th><th>Puntaje</th><th>Nota</th></tr></thead>
        <tbody>${historial
          .slice(0, 25)
          .map(
            (r) => `<tr>
              <td>${formatearFecha(r.fecha)}</td>
              <td>${escapar(obtenerJuego(r.juego)?.nombre || r.juego || "—")}</td>
              <td>${escapar(obtenerMateria(r.materia)?.nombre || "—")}</td>
              <td>${escapar(String(r.puntaje ?? "—"))} / ${escapar(String(r.total ?? "—"))}</td>
              <td class="nota-celda">${escapar(formatearNota(notaDeResultado(r)))}</td>
            </tr>`
          )
          .join("")}</tbody>
      </table>
      <p class="panel-sub" style="margin-top:8px;">Se leen las 200 partidas más recientes del historial personal; la nota definitiva sale de esas.</p>`
      : `<p class="estado-vacio" style="margin-top:18px;">Todavía no tiene partidas guardadas, así que no hay nota que calcular. En cuanto juegue una clase de su curso esta ficha se llena sola.</p>`}`;
}

/**
 * Códigos de curso donde el profesor puede crear clases: los grados que le
 * asignó el administrador, más el curso que dirige si es director. Sin grados
 * marcados son todos los cursos, que es como funcionaba antes.
 */
function codigosQueDicta(c) {
  const set = new Set(
    (c.grados.length
      ? cursos.filter((x) => c.grados.includes(gradoDeCurso(x.codigo)))
      : cursos
    ).map((x) => String(x.codigo))
  );
  if (c.curso) set.add(String(c.curso));
  return [...set];
}

// Una ficha de profesor cuesta una lectura por clase. Se leen solo las más
// recientes para que un profesor con 40 clases no congele el panel.
const MAX_CLASES_FICHA = 15;

/** Junta los datos de la ficha del profesor: sus clases y las partidas de ellas. */
async function datosFichaProfesor(c) {
  const suyas = grupos
    .filter((g) => g.profesorId === c.uid)
    .sort((a, b) => (b.creadoEn?.seconds || 0) - (a.creadoEn?.seconds || 0));
  const leidas = suyas.slice(0, MAX_CLASES_FICHA);
  const listas = await Promise.all(
    leidas.map((g) => obtenerResultadosDelGrupo(g.id, { limite: 200 }).catch(() => []))
  );

  const notas = [];
  const porClase = new Map();
  const porNino = new Map();
  let partidas = 0;

  listas.forEach((lista, i) => {
    const fila = { partidas: 0, sumaPct: 0, notas: [] };
    lista.forEach((r) => {
      const nota = notaDeResultado(r);
      fila.notas.push(nota);
      fila.sumaPct += Number(r.porcentaje) || 0;
      fila.partidas += 1;
      notas.push(nota);
      partidas += 1;
      if (!r.uid) return;
      const nino = porNino.get(r.uid) || { nombre: "", notas: [], partidas: 0, sumaPct: 0 };
      nino.nombre = nino.nombre || r.username || "";
      nino.notas.push(nota);
      nino.sumaPct += Number(r.porcentaje) || 0;
      nino.partidas += 1;
      porNino.set(r.uid, nino);
    });
    porClase.set(leidas[i].id, fila);
  });

  const codigos = codigosQueDicta(c);
  const matriculados = cuentas
    .filter((x) => x.rol === "estudiante" && codigos.includes(String(x.curso)))
    .sort((a, b) => String(a.username).localeCompare(String(b.username), "es"));

  return { suyas, leidas, notas, porClase, porNino, partidas, codigos, matriculados };
}

const nombreCorto = (texto, n) =>
  texto.length > n ? `${texto.slice(0, n - 1)}…` : texto;

/** Tabla de las clases del profesor, con el rendimiento de cada una. */
function tablaClasesFicha({ suyas, leidas, porClase }) {
  if (!suyas.length) {
    return `<h3 style="margin:6px 0 8px;">Sus clases</h3><p class="estado-vacio">Todavía no ha creado clases.</p>`;
  }
  const filas = suyas
    .map((g) => {
      const r = porClase.get(g.id);
      const estado = g.activo ? NOMBRE_SALA[estadoDeSala(g)] || "Activa" : "Inactiva";
      return `<tr>
        <td>${escapar(nombreCorto(g.nombre || "", 22))}</td>
        <td>${escapar(obtenerMateria(g.materia)?.nombre || "—")}</td>
        <td>${escapar(obtenerTema(g.tema)?.nombre || "sin tema")}</td>
        <td>${escapar(g.curso || "—")}</td>
        <td><code>${escapar(g.codigo || "—")}</code></td>
        <td>${escapar(estado)}</td>
        <td>${(g.miembrosUids || []).length}</td>
        <td>${r ? r.partidas : "—"}</td>
        <td class="nota-celda">${r && r.notas.length ? escapar(formatearNota(promedioDeNotas(r.notas))) : "—"}</td>
      </tr>`;
    })
    .join("");
  const aviso =
    suyas.length > leidas.length
      ? `<p class="panel-sub" style="margin-top:8px;">Las clases que salen con "—" son más antiguas que las ${leidas.length} leídas.</p>`
      : "";
  return `
    <h3 style="margin:6px 0 8px;">Sus clases</h3>
    <table class="tabla-resultados">
      <thead><tr><th>Clase</th><th>Materia</th><th>Tema</th><th>Curso</th><th>Código</th><th>Estado</th><th>Anotados</th><th>Partidas</th><th>Nota</th></tr></thead>
      <tbody>${filas}</tbody>
    </table>
    ${aviso}`;
}

/** Quiénes juegan en sus clases y cómo les va, del que más juega al que menos. */
function tablaRendimientoFicha(porNino) {
  const ninos = [...porNino.entries()]
    .map(([uid, x]) => ({ uid, ...x }))
    .sort((a, b) => b.partidas - a.partidas);
  if (!ninos.length) {
    return `<h3 style="margin:18px 0 8px;">Rendimiento de sus estudiantes</h3><p class="estado-vacio">Nadie ha jugado en sus clases todavía.</p>`;
  }
  const visibles = ninos.slice(0, 30);
  const filas = visibles
    .map((x) => {
      const cuenta = cuentas.find((y) => y.uid === x.uid);
      const pct = Math.round(x.sumaPct / x.partidas);
      return `<tr>
        <td>${escapar(cuenta?.username || x.nombre || "cuenta borrada")}</td>
        <td>${escapar(cuenta?.curso || "—")}</td>
        <td>${x.partidas}</td>
        <td>${pct}%</td>
        <td class="nota-celda">${escapar(formatearNota(promedioDeNotas(x.notas)))}</td>
      </tr>`;
    })
    .join("");
  const aviso =
    ninos.length > visibles.length
      ? `<p class="panel-sub" style="margin-top:8px;">Se listan los ${visibles.length} que más han jugado de ${ninos.length}.</p>`
      : "";
  return `
    <h3 style="margin:18px 0 8px;">Rendimiento de sus estudiantes</h3>
    <table class="tabla-resultados">
      <thead><tr><th>Estudiante</th><th>Curso</th><th>Partidas</th><th>Promedio de aciertos</th><th>Nota</th></tr></thead>
      <tbody>${filas}</tbody>
    </table>
    ${aviso}`;
}

/** El padrón del curso (director) o de los grados asignados (profesor normal). */
function tablaMatriculadosFicha(matriculados) {
  const titulo = `<h3 style="margin:18px 0 8px;">Estudiantes de sus cursos</h3>`;
  if (!matriculados.length) {
    return `${titulo}<p class="estado-vacio">Ningún estudiante está matriculado en los cursos donde dicta.</p>`;
  }
  const visibles = matriculados.slice(0, 40);
  const filas = visibles
    .map(
      (x) =>
        `<tr><td>${escapar(x.username)}</td><td>${escapar(x.curso)}</td><td>${estadoCelda(x)}</td></tr>`
    )
    .join("");
  const aviso =
    matriculados.length > visibles.length
      ? `<p class="panel-sub" style="margin-top:8px;">${matriculados.length - visibles.length} más quedan fuera de esta vista; están todos en el padrón filtrando por curso.</p>`
      : "";
  return `
    ${titulo}
    <table class="tabla-resultados">
      <thead><tr><th>Estudiante</th><th>Curso</th><th>Estado del registro</th></tr></thead>
      <tbody>${filas}</tbody>
    </table>
    ${aviso}`;
}

/**
 * Ficha de un profesor o director. Él no tiene notas, así que se le muestra lo
 * que sí produce: sus clases, quién está en ellas y cómo les fue jugando.
 */
async function fichaProfesor(c) {
  const datos = await datosFichaProfesor(c);

  tarjetas([
    [datos.suyas.length, "Clases creadas"],
    [datos.suyas.filter((g) => g.activo).length, "Clases activas"],
    [datos.codigos.length, "Cursos donde dicta"],
    [datos.matriculados.length, "Estudiantes en esos cursos"],
    [datos.partidas, `Partidas en sus ${plural(datos.leidas.length, "clase")}`],
    [datos.notas.length ? formatearNota(promedioDeNotas(datos.notas)) : "—", "Nota promedio"]
  ]);

  fichaContenido.innerHTML =
    tablaClasesFicha(datos) +
    tablaRendimientoFicha(datos.porNino) +
    tablaMatriculadosFicha(datos.matriculados);
}

/**
 * Ficha de otro administrador: sin notas propias y sin clases, así que lo que
 * interesa es el alcance de su cuenta, que es toda la plataforma.
 */
async function fichaAdministrador(c) {
  const activas = grupos.filter((g) => g.activo && estadoDeSala(g) === SALA.ABIERTA).length;
  tarjetas([
    [cuentas.length, "Cuentas que administra"],
    [cuentas.filter((x) => x.rol === "estudiante").length, "Estudiantes"],
    [cuentas.filter((x) => x.rol === "profesor").length, "Profesores"],
    [cursos.length, "Cursos creados"],
    [grupos.length, "Clases en total"],
    [activas, "Salas abiertas ahora"]
  ]);

  const dirige = cursos.filter((x) => x.directorUid === c.uid);
  fichaContenido.innerHTML = `
    <p class="panel-sub">Un administrador no tiene notas: su ficha no rinde, administra. Desde esta misma página ve el PIN, el curso y el historial completo de cualquier persona, y abajo la tabla de clases y partidas por curso.</p>
    ${dirige.length
      ? `<h3 style="margin:14px 0 8px;">Cursos donde aparece como director</h3><p class="panel-sub">${escapar(dirige.map((x) => String(x.codigo)).join(", "))}</p>`
      : ""}`;
}

/**
 * Abre la ficha de una persona. El administrador es el único rol con permiso en
 * firestore.rules para leer el historial de otro, así que aquí se puede ver
 * todo lo que esa cuenta tiene: lo personal, lo de la cuenta y lo académico.
 */
async function mostrarFicha(uid) {
  const c = cuentas.find((x) => x.uid === uid);
  if (!c) return;

  panelFicha.style.display = "block";
  fichaTitulo.textContent = `${c.username} · ${rolEtiqueta(c)}`;
  fichaSub.textContent = "Cargando su ficha...";
  fichaDatos.innerHTML = "";
  fichaContenido.innerHTML = `<p class="estado-vacio">Cargando...</p>`;
  panelFicha.scrollIntoView({ behavior: "smooth", block: "start" });

  try {
    encabezadoFicha(c);
    if (c.rol === "estudiante") await fichaEstudiante(c);
    else if (c.rol === "profesor") await fichaProfesor(c);
    else await fichaAdministrador(c);
  } catch (err) {
    console.error(err);
    const texto =
      err?.code === "permission-denied"
        ? "Firestore no deja leer estos datos. Publica firestore.rules tal como está en la carpeta."
        : err?.message || "No se pudo cargar la ficha. Revisa la conexión.";
    fichaContenido.innerHTML = `<p class="mensaje-error">${escapar(texto)}</p>`;
  }
}

document.getElementById("btn-ficha-cerrar").addEventListener("click", () => {
  panelFicha.style.display = "none";
  fichaDatos.innerHTML = "";
  fichaContenido.innerHTML = "";
});

/**
 * Borra una cuenta entera. El trabajo pesado está en js/credenciales.js: firmar
 * como el interesado con su PIN guardado para quitarlo de Firebase Auth y luego
 * borrar ficha, índice, clases e historial.
 *
 * La confirmación se hace EN LA PÁGINA, no con alert/confirm/prompt del
 * navegador. Un diálogo bloqueado (o una página abierta dentro de un iframe)
 * hace que el clic no muestre nada y el botón parezca roto; aquí el paso
 * siguiente siempre se ve. Y si Firestore o Auth rechazan algo, el mensaje
 * dice qué fue y qué hacer, en vez de un genérico "no se pudo".
 */
const panelBorrar = document.getElementById("panel-borrar");
const borrarTitulo = document.getElementById("borrar-titulo");
const borrarDetalle = document.getElementById("borrar-detalle");
const borrarCampo = document.getElementById("borrar-confirmar");
const borrarError = document.getElementById("borrar-error");
const btnBorrarIr = document.getElementById("btn-borrar-definitivo");
let borrarPendiente = null;

function explicarFallo(err) {
  const codigo = String((err && err.code) || "");
  const porCodigo = [
    ["skillhouse/ultimo-administrador", err && err.message],
    ["auth/requires-recent-login", "Firebase pide una sesión reciente para borrar accesos. Cierra sesión, vuelve a entrar como administrador e inténtalo de nuevo."],
    ["auth/too-many-requests", "Firebase bloqueó los intentos por tantos seguidos. Espera unos minutos, o entra a Consola > Authentication y desbloquea el correo."],
    ["auth/network-request-failed", "No hay conexión con Firebase. Revisa el internet e inténtalo otra vez."],
    ["unavailable", "Firestore no respondió (sin conexión o saturado). Nada se borró; inténtalo de nuevo."],
    ["permission-denied", "Firestore rechazó el borrado: las reglas publicadas en la consola son más antiguas que este botón. Pega el contenido de firestore.rules en Consola > Firestore Database > Reglas, pulsa Publicar y vuelve a intentar."]
  ].find(([c]) => codigo === c || codigo.endsWith(c));
  return porCodigo
    ? `${porCodigo[1]}  (código: ${codigo || "sin código"})`
    : `${(err && err.message) || "No se pudo borrar la cuenta."}  (código: ${codigo || "sin código"})`;
}

function pedirBorrado(uid, boton) {
  const c = cuentas.find((x) => x.uid === uid);
  if (!c) return;
  // El HTML y el JS se sirven como archivos sueltos: si el navegador tiene
  // guardada la página vieja, el recuadro no existe y el clic no daría señal.
  if (!panelBorrar || !borrarCampo || !btnBorrarIr) {
    mostrarError("La página de Usuarios está guardada vieja en el navegador. Recárgala con Ctrl + Shift + R y vuelve a intentar.");
    return;
  }
  borrarPendiente = { c, boton };
  borrarTitulo.textContent = `Borrar a ${c.username}`;
  borrarDetalle.textContent = c.rol === "administrador"
    ? `Es un administrador: se va su acceso de Firebase Auth, su ficha y su documento de índice. Esta plataforma no puede recuperarlo.`
    : `Se borra su acceso, su ficha y todo su historial de partidas. Correos: ${c.email || "sin correo"}. Es irreversible.`;
  borrarCampo.value = "";
  borrarError.style.display = "none";
  panelBorrar.style.display = "";
  panelBorrar.scrollIntoView({ behavior: "smooth", block: "center" });
  borrarCampo.focus();
}

function cerrarBorrado() {
  if (borrarPendiente && borrarPendiente.boton) {
    borrarPendiente.boton.disabled = false;
    borrarPendiente.boton.textContent = "Borrar";
  }
  borrarPendiente = null;
  panelBorrar.style.display = "none";
}

async function ejecutarBorrado() {
  if (!borrarPendiente) return;
  const { c, boton } = borrarPendiente;

  if (borrarCampo.value.trim().toUpperCase() !== "SI") {
    borrarError.textContent = "Escribe SI en el recuadro para confirmar. Sin eso no se borra nada.";
    borrarError.style.display = "";
    borrarCampo.focus();
    return;
  }

  mostrarError("");
  mostrarAviso("");
  borrarError.style.display = "none";
  boton.disabled = true;
  boton.textContent = "Borrando...";
  btnBorrarIr.disabled = true;
  btnBorrarIr.textContent = "Borrando...";

  try {
    const resultado = await eliminarCuenta({ uid: c.uid, email: c.email, rol: c.rol, clave: c.clave });

    if (resultado.esPropia) {
      window.alert("Borraste tu propia cuenta de administrador. La sesión se cierra ahora.");
      await signOut(auth);
      window.location.href = "../index.html";
      return;
    }

    borrarPendiente = null;
    panelBorrar.style.display = "none";
    boton.textContent = "Borrar";
    await cargar();
    const avisos = (resultado.avisos || []).join(" ");
    mostrarAviso(`${c.username} quedó borrado del padrón.${avisos ? ` Revisa esto: ${avisos}` : ""}`);
  } catch (err) {
    console.error(err);
    borrarError.textContent = explicarFallo(err);
    borrarError.style.display = "";
    boton.disabled = false;
    boton.textContent = "Borrar";
    mostrarError(explicarFallo(err));
  } finally {
    btnBorrarIr.disabled = false;
    btnBorrarIr.textContent = "Borrar definitivamente";
  }
}

if (panelBorrar && borrarCampo && btnBorrarIr) {
  btnBorrarIr.addEventListener("click", ejecutarBorrado);
  document.getElementById("btn-borrar-cancelar").addEventListener("click", cerrarBorrado);
  borrarCampo.addEventListener("keydown", (e) => {
    if (e.key === "Enter") ejecutarBorrado();
  });
}

function pintarCursos() {
  // Se recorren los CURSOS, no las clases: así un curso recién creado aparece en
  // la tabla con ceros, que es exactamente lo que el administrador quiere ver
  // cuando está matriculando. Los códigos sueltos (clases de un curso que ya no
  // existe) se listan al final para que no queden ocultos.
  const codigos = cursos.map((c) => String(c.codigo));
  const sueltos = [...new Set(grupos.map((g) => g.curso).filter(Boolean).map(String))]
    .filter((codigo) => !codigos.includes(codigo));
  codigos.push(...sueltos.sort((a, b) => a.localeCompare(b, "es", { numeric: true })));

  if (!codigos.length) {
    cajaCursos.innerHTML = `<p class="estado-vacio">No hay cursos creados. Crea el primero en 🎓 <a href="cursos.html">Cursos</a>.</p>`;
    return;
  }

  const filas = codigos.map((codigo) => {
    const curso = datosDelCurso(codigo);
    const delCurso = grupos.filter((g) => String(g.curso) === codigo);
    const activas = delCurso.filter((g) => g.activo).length;
    const abiertas = delCurso.filter((g) => g.activo && estadoDeSala(g) === SALA.ABIERTA).length;
    const miembros = new Set();
    delCurso.forEach((g) => (g.miembrosUids || []).forEach((uid) => miembros.add(uid)));
    const matriculados = cuentas.filter((c) => c.rol === "estudiante" && String(c.curso) === codigo).length;
    const nombreDirector = curso?.directorNombre ||
      cuentas.find((c) => c.tipoProfesor === "director" && String(c.curso) === codigo)?.username || "";

    return `
      <tr>
        <td>${escapar(codigo)}${curso && curso.nombre && curso.nombre !== `Grado ${codigo}` ? ` <span class="grupo-meta">${escapar(curso.nombre)}</span>` : ""}</td>
        <td>${escapar(curso?.anio || "—")}</td>
        <td>${escapar(nombreDirector || "Sin director")}</td>
        <td>${matriculados}</td>
        <td>${delCurso.length}</td>
        <td>${activas}</td>
        <td>${abiertas}</td>
        <td>${miembros.size}</td>
      </tr>`;
  });

  cajaCursos.innerHTML = `
    <table class="tabla-resultados">
      <thead><tr><th>Curso</th><th>Año</th><th>Director</th><th>Matriculados</th><th>Clases</th><th>Activas</th><th>Abiertas ahora</th><th>Estudiantes distintos</th></tr></thead>
      <tbody>${filas.join("")}</tbody>
    </table>`;
}

/** Años distintos entre los cursos, del más nuevo al más viejo. */
function llenarFiltroAnio() {
  const anios = [...new Set(cursos.map((c) => String(c.anio || "")).filter(Boolean))].sort((a, b) => b - a);
  filtroAnio.innerHTML =
    `<option value="">Todos</option>` +
    anios.map((a) => `<option value="${escapar(a)}">${escapar(a)}</option>`).join("") +
    // Los cursos sin año (escritos a mano en la consola, por ejemplo) quedan
    // accesibles: si no, su lista de estudiantes sería infiltrable.
    (anios.length ? "" : `<option value="" disabled>Sin años todavía</option>`);
}

function llenarFiltroCursos() {
  const anio = filtroAnio.value;
  // La lista sale de `cursos`, no de las cuentas: un curso recién creado ya se
  // puede elegir aunque todavía no tenga ni un matriculado.
  const disponibles = cursos.filter((c) => !anio || String(c.anio || "") === anio);
  const elegido = disponibles.some((c) => String(c.codigo) === filtroCurso.value) ? filtroCurso.value : "";

  filtroCurso.innerHTML =
    `<option value="">Todos</option>` +
    disponibles
      .map(
        (c) =>
          `<option value="${escapar(c.codigo)}"${String(c.codigo) === elegido ? " selected" : ""}>${escapar(c.codigo)}${c.nombre && c.nombre !== `Grado ${c.codigo}` ? ` · ${escapar(c.nombre)}` : ""}</option>`
      )
      .join("");
  filtroCurso.value = elegido;

  // Las materias del catálogo, no las que aparecen en las fichas: así el
  // administrador puede comprobar que ninguna materia se quedó sin profesor.
  filtroMateria.innerHTML =
    `<option value="">Todas</option>` +
    MATERIAS.map((m) => `<option value="${escapar(m.id)}">${escapar(m.icono)} ${escapar(m.nombre)}</option>`).join("");
}

/**
 * El curso y la materia son atributos que no todos los roles tienen: un
 * estudiante no dicta materia y un administrador no dirige curso. Dejar los dos
 * selectores activos con "Administradores" elegido hacía que filtrar por
 * cualquiera de los dos diera cero resultados, que parece un error de la
 * plataforma y no lo es. Se ocultan y se limpian juntos.
 */
function ajustarFiltrosAlRol() {
  const rol = filtroRol.value;
  // El curso solo sirve donde hay algo que filtrar: los estudiantes lo llevan
  // puesto, y de los profesores únicamente los directores tienen uno. Con
  // "Profesores" elegido la lista muestra profesores estándar, que nunca tienen
  // curso, así que el selector daría siempre cero resultados.
  const dejaCurso = rol === "" || rol === "estudiante" || rol === "director";
  const dejaMateria = rol === "" || rol === "profesor" || rol === "director";
  // El año se saca del curso de cada cuenta, así que se oculta en los mismos
  // casos que el curso: con "Administradores" no hay año que filtrar.
  const dejaAnio = dejaCurso;

  if (!dejaCurso) filtroCurso.value = "";
  if (!dejaAnio) filtroAnio.value = "";
  if (!dejaMateria) filtroMateria.value = "";
  filtroCurso.closest(".campo").style.display = dejaCurso ? "" : "none";
  filtroAnio.closest(".campo").style.display = dejaAnio ? "" : "none";
  filtroMateria.closest(".campo").style.display = dejaMateria ? "" : "none";
}

async function cargar() {
  mostrarError("");
  lista.innerHTML = `<p class="estado-vacio">Cargando cuentas...</p>`;
  cajaCursos.innerHTML = `<p class="estado-vacio">Cargando clases...</p>`;

  try {
    const [credenciales, snaps, gruposSnap, cursosSnap] = await Promise.all([
      listarCredenciales(),
      Promise.all([
        getDocs(collection(db, "estudiantes")),
        getDocs(collection(db, "profesores")),
        getDocs(collection(db, "administradores"))
      ]),
      getDocs(collection(db, "grupos")),
      getDocs(collection(db, "cursos"))
    ]);

    // `cursos` se resuelve primero: cada cuenta saca su año de ahí.
    cursos = cursosSnap.docs
      .map((d) => ({ id: d.id, ...d.data() }))
      .sort((a, b) => String(a.codigo).localeCompare(String(b.codigo), "es", { numeric: true }));

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
  llenarFiltroAnio();
  llenarFiltroCursos();
  ajustarFiltrosAlRol();
  pintarStats();
  pintarTabla();
  pintarCursos();
}

function alCambiarFiltro(origen) {
  const anioAntes = filtroAnio.value;
  ajustarFiltrosAlRol();
  // Los cursos disponibles dependen del año elegido (y al cambiar de rol el año
  // se limpia solo), así que ese selector se vuelve a armar en esos dos casos.
  if (origen === filtroAnio || origen === filtroRol || filtroAnio.value !== anioAntes) {
    llenarFiltroCursos();
  }
  pintarTabla();
}

[filtroRol, filtroAnio, filtroCurso, filtroMateria, filtroBuscar].forEach((el) =>
  el.addEventListener("input", () => alCambiarFiltro(el))
);

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
      ["Rol", "Nombre", "Correo", "Curso", "Año", "Materias", "Creado por", "PIN", "Estado"],
      ...filasVisibles.map((c) => [
        rolEtiqueta(c),
        c.username,
        c.email,
        c.curso || "",
        c.anio || "",
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
