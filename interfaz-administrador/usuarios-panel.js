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

import { db } from "../js/firebase.js";
import { suscribirSesion, signOut, auth } from "../js/sesion.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { listarCredenciales, restablecerClaveDe } from "../js/claves.js";
import { eliminarCuenta } from "../js/credenciales.js";
import { matricularEnCurso } from "../js/cursos.js";
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
      // año deliberately deja fuera a quien no pertenece a ningún grado.
      anio: anioDeCurso(curso),
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
  const esAdmin = c.rol === "administrador";
  const confirmacion = esAdmin
    ? `¿Borrar a ${c.username}?\n\nSe borra su acceso completo: Firebase Auth, su ficha de administrador y su documento de índice. Esta plataforma no puede recuperarlo.`
    : `¿Borrar la cuenta de ${c.username} (${c.email})?\n\nSe borra su acceso, sus datos y su historial de partidas. Es irreversible.`;
  return `<span class="grupo-acciones">
    <button class="btn-secundario" data-copiar="${escapar(c.uid)}">Copiar</button>
    <button class="btn-accion" data-nueva="${escapar(c.uid)}">Nueva clave</button>
    <button class="btn-borrar" data-borrar="${escapar(c.uid)}" data-confirma="${escapar(confirmacion)}" ${esAdmin ? "title='Borra también su documento de administrador'" : ""}>Borrar</button>
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
      `${estadoCelda(c)}<span class="grupo-meta"> ${enClases} clase(s)</span>`,
      selectorCurso(c),
      accionesCelda(c)
    ]
  },
  profesor: {
    cabecera: ["Nombre", "Rol", "Curso que dirige", "Correo", "PIN", "Creado", "Estado", ""],
    celdas: (c) => [
      escapar(c.username),
      escapar(rolEtiqueta(c)),
      `${c.curso ? `Curso ${escapar(c.curso)}${c.anio ? ` · ${c.anio}` : ""}` : "No dirige ninguno"}`,
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
        `${listaCurso.length} cuenta(s)`,
        curso?.anio ? `año ${curso.anio}` : "",
        nombreDirector ? `director(a): ${nombreDirector}` : "sin director"
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

  lista.querySelectorAll("[data-borrar]").forEach((btn) => {
    btn.addEventListener("click", () => borrarCuenta(btn.dataset.borrar, btn));
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
    mostrarAviso(`La nueva clave de ${c.username} es ${nueva}. Anótala: solo se muestra en esta pantalla.`);
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

/**
 * Borra una cuenta entera. El trabajo pesado está en js/credenciales.js: firmar
 * como el interesado con su PIN guardado para quitarlo de Firebase Auth y luego
 * borrar ficha, índice, clases e historial.
 *
 * Aquí solo se confirma, se muestra el resultado y se recarga el padrón. Si el
 * administrador se borra a sí mismo (posible solo si hay otro administrador), la
 * página se cierra sola: su sesión ya no existe.
 */
async function borrarCuenta(uid, boton) {
  const c = cuentas.find((x) => x.uid === uid);
  if (!c) return;

  const texto = boton.dataset.confirma || `¿Borrar la cuenta de ${c.username}?`;
  if (!window.confirm(texto)) return;
  const respuesta = window.prompt("Último aviso: es irreversible. Escribe SI para borrar.");
  if (!respuesta || respuesta.trim().toUpperCase() !== "SI") return;

  mostrarError("");
  mostrarAviso("");
  boton.disabled = true;
  const original = boton.textContent;
  boton.textContent = "Borrando...";

  try {
    const resultado = await eliminarCuenta({ uid: c.uid, email: c.email, rol: c.rol, clave: c.clave });

    if (resultado.esPropia) {
      window.alert("Borraste tu propia cuenta de administrador. La sesión se cierra ahora.");
      await signOut(auth);
      window.location.href = "../index.html";
      return;
    }

    await cargar();
    const avisos = (resultado.avisos || []).join(" ");
    mostrarAviso(`${c.username} quedó borrado del padrón.${avisos ? ` Revisa esto: ${avisos}` : ""}`);
  } catch (err) {
    console.error(err);
    mostrarError(err.message || "No se pudo borrar la cuenta.");
    boton.disabled = false;
    boton.textContent = original;
  }
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
