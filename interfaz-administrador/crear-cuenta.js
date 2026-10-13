// interfaz-administrador/crear-cuenta.js
// El administrador escribe nombre y rol; el correo y la contraseña salen
// solos. Un director de curso queda atado a un curso, y los estudiantes se
// crean indicando a qué curso pertenecen.

import { db } from "../js/firebase.js";
import { suscribirSesion } from "../js/sesion.js";
import { MATERIAS } from "../js/catalogo.js";
import { crearCuenta, generarClave, baseDelCorreo, DOMINIO_CORREO } from "../js/credenciales.js";
import { obtenerCursos } from "../js/cursos.js";
import {
  crearRegistroCredenciales,
  renderizarCredenciales,
  descargarTexto,
  copiarAlPortapapeles
} from "../js/lista-credenciales.js";
import {
  collection,
  doc,
  getDocs,
  updateDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const NOMBRE_MATERIA = Object.fromEntries(MATERIAS.map((m) => [m.id, m.nombre]));

const form = document.getElementById("form-crear-cuenta");
const inputUsername = document.getElementById("input-username");
const inputEmail = document.getElementById("input-email");
const inputRol = document.getElementById("input-rol");
const inputPassword = document.getElementById("input-password");
const filaProfesor = document.getElementById("fila-profesor");
const selectMateria = document.getElementById("select-materia");
const campoCursoDirigido = document.getElementById("campo-curso-dirigido");
const selectCursoDirigido = document.getElementById("select-curso-dirigido");
const campoCursoEstudiante = document.getElementById("campo-curso-estudiante");
const selectCursoEstudiante = document.getElementById("select-curso-estudiante");
const errorEl = document.getElementById("crear-cuenta-error");
const exitoEl = document.getElementById("crear-cuenta-exito");
const listaCuentas = document.getElementById("lista-cuentas-creadas");

const credenciales = crearRegistroCredenciales();
let cursos = [];
let sesion = null;

function mostrarMensaje(el, texto) {
  el.textContent = texto;
  el.style.display = texto ? "block" : "none";
}

function traducirErrorFirebase(error) {
  const codigo = error && error.code ? error.code : "";
  const mensajes = {
    "auth/email-already-in-use": "No quedó ningún correo libre para ese nombre. Añádele una inicial o un apellido distinto.",
    "auth/invalid-email": "El correo generado no es válido.",
    "auth/weak-password": "La contraseña generada es demasiado corta.",
    "auth/operation-not-allowed": "El método de correo/contraseña está desactivado en la consola de Firebase.",
    "permission-denied": "Las reglas de Firestore rechazaron la escritura. Revisa que firestore.rules esté publicado."
  };
  return mensajes[codigo] || error?.message || "No se pudo crear la cuenta. Intenta de nuevo.";
}

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

function formatearFecha(timestamp) {
  if (!timestamp || !timestamp.seconds) return "—";
  return new Date(timestamp.seconds * 1000).toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

/* ---------------------- Selects ---------------------- */

selectMateria.innerHTML =
  `<option value="">Selecciona una materia</option>` +
  MATERIAS.map((m) => `<option value="${escapar(m.id)}">${escapar(m.nombre)}</option>`).join("");

function poblarCursos(select, { incluirVacio }) {
  const opciones = cursos.map((c) => `<option value="${escapar(c.codigo)}">${escapar(c.codigo)} — ${escapar(c.nombre)}</option>`);
  select.innerHTML = incluirVacio
    ? `<option value="">Selecciona un curso</option>${opciones.join("")}`
    : opciones.join("");
}

async function cargarCursos() {
  try {
    cursos = await obtenerCursos();
  } catch (err) {
    console.error(err);
    cursos = [];
  }

  if (!cursos.length) {
    const aviso = `<option value="">Primero crea un curso en “Cursos”</option>`;
    selectCursoDirigido.innerHTML = aviso;
    selectCursoEstudiante.innerHTML = aviso;
    return;
  }

  poblarCursos(selectCursoDirigido, { incluirVacio: true });
  poblarCursos(selectCursoEstudiante, { incluirVacio: true });
}

/* ---------------------- Campos según el rol ---------------------- */

function actualizarCampos() {
  const rol = inputRol.value;
  const esDocente = rol === "profesor" || rol === "director";

  filaProfesor.style.display = esDocente ? "flex" : "none";
  campoCursoDirigido.style.display = rol === "director" ? "block" : "none";
  campoCursoEstudiante.style.display = rol === "estudiante" ? "block" : "none";

  if (!esDocente) selectMateria.value = "";
  if (rol !== "director") selectCursoDirigido.value = "";
  if (rol !== "estudiante") selectCursoEstudiante.value = "";
}

inputRol.addEventListener("change", actualizarCampos);

/* ---------------------- Correo y contraseña automáticos ---------------------- */

function actualizarCorreoPreview() {
  const base = baseDelCorreo(inputUsername.value);
  if (!base) {
    inputEmail.value = "";
    inputEmail.placeholder = "Escribe primero el nombre completo";
    return;
  }
  inputEmail.value = `${base}${DOMINIO_CORREO}`;
  inputEmail.placeholder = "";
}

function nuevaClave() {
  inputPassword.value = generarClave();
}

inputUsername.addEventListener("input", actualizarCorreoPreview);
document.getElementById("btn-regenerar-clave").addEventListener("click", nuevaClave);
nuevaClave();

/* ---------------------- Crear ---------------------- */

form.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  mostrarMensaje(errorEl, "");
  mostrarMensaje(exitoEl, "");

  const username = inputUsername.value.trim();
  const rolElegido = inputRol.value;

  if (!username) return mostrarMensaje(errorEl, "Escribe el nombre completo.");
  if (!rolElegido) return mostrarMensaje(errorEl, "Selecciona un rol válido.");

  const esDirector = rolElegido === "director";
  const rol = esDirector ? "profesor" : rolElegido;
  const clave = inputPassword.value || generarClave();

  let perfil;
  let detalle;

  if (rol === "estudiante") {
    const curso = selectCursoEstudiante.value;
    if (!curso) return mostrarMensaje(errorEl, "Elige el curso del estudiante.");
    perfil = { curso, creadoPorUid: sesion.uid, creadoPorNombre: sesion.username };
    detalle = `Curso ${curso}`;
  } else if (rol === "profesor") {
    const materia = selectMateria.value;
    if (!materia) return mostrarMensaje(errorEl, "Elige la materia que dicta este profesor.");

    if (esDirector) {
      const curso = selectCursoDirigido.value;
      if (!curso) return mostrarMensaje(errorEl, "Elige el curso que va a dirigir.");
      if (cursos.find((c) => c.codigo === curso && c.directorUid)) {
        return mostrarMensaje(errorEl, `El curso ${curso} ya tiene un director asignado.`);
      }
      perfil = { tipoProfesor: "director", materias: [materia], curso };
      detalle = `Director del ${curso} · ${NOMBRE_MATERIA[materia]}`;
    } else {
      perfil = { tipoProfesor: "estandar", materias: [materia] };
      detalle = NOMBRE_MATERIA[materia];
    }
  } else {
    perfil = {};
    detalle = "—";
  }

  const btn = document.getElementById("btn-crear-cuenta");
  btn.disabled = true;

  try {
    const cuenta = await crearCuenta({ username, rol, clave, perfil });

    // Un director de curso queda registrado también en su curso, para que el
    // profesor pueda crear clases de ese curso sin buscar su documento.
    if (esDirector) {
      await updateDoc(doc(db, "cursos", perfil.curso), {
        directorUid: cuenta.uid,
        directorNombre: username
      });
    }

    mostrarMensaje(
      exitoEl,
      `${username} ya puede entrar con ${cuenta.email} y la contraseña ${cuenta.clave}. Guárdala: no se vuelve a mostrar.`
    );

    credenciales.agregar({
      rol: esDirector ? "director" : rol,
      nombre: username,
      email: cuenta.email,
      clave: cuenta.clave,
      detalle
    });
    renderizarCredenciales(listaCuentas, credenciales.todos());

    form.reset();
    actualizarCorreoPreview();
    nuevaClave();
    actualizarCampos();
    await Promise.all([cargarListasUsuarios(), cargarCursos()]);
  } catch (error) {
    console.error(error);
    mostrarMensaje(errorEl, traducirErrorFirebase(error));
  } finally {
    btn.disabled = false;
  }
});

/* ---------------------- Credenciales: copiar y descargar ---------------------- */

document.getElementById("btn-descargar-credenciales").addEventListener("click", () => {
  if (!credenciales.todos().length) return;
  const fecha = new Date().toISOString().slice(0, 10);
  descargarTexto(`skillhouse-credenciales-${fecha}.csv`, credenciales.comoCsv());
});

document.getElementById("btn-copiar-credenciales").addEventListener("click", (e) => {
  copiarAlPortapapeles(credenciales.comoTexto(), e.currentTarget);
});

/* ---------------------- Listas ---------------------- */

async function obtenerTodos(coleccion) {
  const snap = await getDocs(collection(db, coleccion));
  const datos = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  datos.sort((a, b) => (b.creadoEn?.seconds || 0) - (a.creadoEn?.seconds || 0));
  return datos;
}

function tabla(contenedor, filas, encabezados) {
  if (!filas.length) {
    contenedor.innerHTML = `<p class="estado-vacio">Todavía no hay cuentas creadas.</p>`;
    return;
  }
  contenedor.innerHTML = `
    <table class="tabla-resultados">
      <thead><tr>${encabezados.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
      <tbody>${filas.join("")}</tbody>
    </table>`;
}

async function cargarListasUsuarios() {
  const contE = document.getElementById("lista-estudiantes");
  const contP = document.getElementById("lista-profesores");

  try {
    const [estudiantes, profesores] = await Promise.all([
      obtenerTodos("estudiantes"),
      obtenerTodos("profesores")
    ]);

    document.getElementById("stats-usuarios").innerHTML = `
      <div class="stat-card"><div class="stat-valor">${estudiantes.length}</div><div class="stat-label">Estudiantes</div></div>
      <div class="stat-card"><div class="stat-valor">${profesores.length}</div><div class="stat-label">Profesores</div></div>`;
    document.getElementById("titulo-estudiantes").textContent = `Estudiantes (${estudiantes.length})`;
    document.getElementById("titulo-profesores").textContent = `Profesores y directores (${profesores.length})`;

    tabla(
      contE,
      estudiantes.map((u) => `
        <tr>
          <td>${escapar(u.username || "—")}</td>
          <td><code>${escapar(u.email || "—")}</code></td>
          <td>${escapar(u.curso || "sin curso")}</td>
          <td>${escapar(u.creadoPorNombre || "Administrador")}</td>
          <td>${formatearFecha(u.creadoEn)}</td>
        </tr>`),
      ["Nombre", "Correo", "Curso", "Creado por", "Creado"]
    );

    tabla(
      contP,
      profesores.map((u) => `
        <tr>
          <td>${escapar(u.username || "—")}</td>
          <td><code>${escapar(u.email || "—")}</code></td>
          <td>${u.tipoProfesor === "director" ? "Director de curso" : "Estándar"}</td>
          <td>${escapar((u.materias || []).map((id) => NOMBRE_MATERIA[id] || id).join(", ") || "—")}</td>
          <td>${escapar(u.curso || "—")}</td>
          <td>${formatearFecha(u.creadoEn)}</td>
        </tr>`),
      ["Nombre", "Correo", "Tipo", "Materias", "Curso a cargo", "Creado"]
    );
  } catch (err) {
    console.error(err);
    contE.innerHTML = `<p class="estado-vacio">No se pudieron cargar los estudiantes.</p>`;
    contP.innerHTML = `<p class="estado-vacio">No se pudieron cargar los profesores.</p>`;
  }
}

suscribirSesion("administrador", async (cuenta) => {
  if (!cuenta) return; // guard.js redirige
  sesion = cuenta;
  await Promise.all([cargarCursos(), cargarListasUsuarios()]);
});
