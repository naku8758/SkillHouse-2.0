// interfaz-profesor/panel-curso.js
// "Estudiantes de mi curso": el director de curso crea y administra a sus estudiantes.
//
// Es la parte del modelo estilo Teams que faltaba: el administrador crea al
// director y le asigna un grado, y a partir de ahí el director es quien
// matricula a los estudiantes de ESE grado. Cada estudiante nace con el curso
// ya puesto, y ese curso es el que después se valida al unirse a una clase.

import { plural } from "../js/plural.js";
import { db } from "../js/firebase.js";
import { suscribirSesion } from "../js/sesion.js";
import { crearCuenta, generarClave, baseDelCorreo, DOMINIO_CORREO } from "../js/credenciales.js";
import { obtenerCurso } from "../js/cursos.js";
import { obtenerGruposDelCurso } from "../js/grupos.js";
import { obtenerMateria } from "../js/catalogo.js";
import {
  crearRegistroCredenciales,
  renderizarCredenciales,
  descargarTexto,
  copiarAlPortapapeles
} from "../js/lista-credenciales.js";
import { collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const inputNombre = document.getElementById("input-nombre-estudiante");
const inputEmail = document.getElementById("input-email-estudiante");
const inputClave = document.getElementById("input-clave-estudiante");
const errorEl = document.getElementById("alta-error");
const exitoEl = document.getElementById("alta-exito");
const listaEstudiantes = document.getElementById("lista-estudiantes");
const listaClases = document.getElementById("lista-clases-curso");
const cajaCredenciales = document.getElementById("lista-credenciales");

const credenciales = crearRegistroCredenciales();
let cuenta = null;
let curso = null;

function mostrar(el, texto) {
  el.textContent = texto;
  el.style.display = texto ? "block" : "none";
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

function traducirError(error) {
  const codigo = error?.code || "";
  const mensajes = {
    "auth/email-already-in-use": "No quedó ningún correo libre para ese nombre. Añádele un segundo apellido o una inicial.",
    "auth/operation-not-allowed": "El método de correo/contraseña está desactivado en la consola de Firebase.",
    "permission-denied": "Firestore rechazó la escritura. Solo un director de curso puede crear estudiantes desde aquí."
  };
  return mensajes[codigo] || error?.message || "No se pudo crear la cuenta. Intenta de nuevo.";
}

/* ---------------------- Alta de estudiante ---------------------- */

inputNombre.addEventListener("input", () => {
  const base = baseDelCorreo(inputNombre.value);
  if (!base) {
    inputEmail.value = "";
    inputEmail.placeholder = "Escribe primero el nombre completo";
    return;
  }
  inputEmail.value = `${base}${DOMINIO_CORREO}`;
  inputEmail.placeholder = "";
});

function nuevaClave() {
  inputClave.value = generarClave();
}
document.getElementById("btn-regenerar").addEventListener("click", nuevaClave);
nuevaClave();

document.getElementById("form-crear-estudiante").addEventListener("submit", async (evento) => {
  evento.preventDefault();
  mostrar(errorEl, "");
  mostrar(exitoEl, "");

  const username = inputNombre.value.trim();
  if (!username) return mostrar(errorEl, "Escribe el nombre completo del estudiante.");
  if (!curso) return mostrar(errorEl, "No tienes un curso asignado.");

  const boton = document.getElementById("btn-crear-estudiante");
  boton.disabled = true;

  try {
    const creado = await crearCuenta({
      username,
      rol: "estudiante",
      clave: inputClave.value,
      perfil: { curso: curso.codigo, creadoPorUid: cuenta.uid, creadoPorNombre: cuenta.username }
    });

    mostrar(exitoEl, `${username} puede entrar con ${creado.email} y la contraseña ${creado.clave}. Guárdala: aquí no se vuelve a mostrar y tú no puedes verla otra vez; si se pierde, la recupera el administrador desde Claves.`);
    credenciales.agregar({ rol: "estudiante", nombre: username, email: creado.email, clave: creado.clave, detalle: `Curso ${curso.codigo}` });
    renderizarCredenciales(cajaCredenciales, credenciales.todos());

    document.getElementById("form-crear-estudiante").reset();
    inputEmail.value = "";
    nuevaClave();
    await cargarEstudiantes();
  } catch (error) {
    console.error(error);
    mostrar(errorEl, traducirError(error));
  } finally {
    boton.disabled = false;
  }
});

/* ---------------------- Credenciales ---------------------- */

document.getElementById("btn-descargar").addEventListener("click", () => {
  if (!credenciales.todos().length) return;
  const fecha = new Date().toISOString().slice(0, 10);
  descargarTexto(`skillhouse-${curso?.codigo || "curso"}-credenciales-${fecha}.csv`, credenciales.comoCsv());
});

document.getElementById("btn-copiar").addEventListener("click", (e) => {
  copiarAlPortapapeles(credenciales.comoTexto(), e.currentTarget);
});

/* ---------------------- Código del curso (plan b) ---------------------- */
// El mismo código que ve el administrador en Cursos. El director lo reparte y un
// estudiante lo usa en Mi Perfil para reenganchar su curso si se quedó sin él.
const cajaCodigo = document.getElementById("caja-codigo-curso");
const vistoCodigo = document.getElementById("codigo-curso");

document.getElementById("btn-copiar-curso").addEventListener("click", (e) => {
  copiarAlPortapapeles(vistoCodigo.textContent, e.currentTarget);
});

/* ---------------------- Listas ---------------------- */

let estudiantes = [];
let gruposDelCurso = [];

async function cargarEstudiantes() {
  if (!curso) return;
  listaEstudiantes.innerHTML = `<p class="estado-vacio">Cargando...</p>`;

  try {
    const snap = await getDocs(
      query(collection(db, "estudiantes"), where("creadoPorUid", "==", cuenta.uid))
    );
    estudiantes = snap.docs
      .map((d) => ({ id: d.id, ...d.data() }))
      .filter((e) => e.curso === curso.codigo)
      .sort((a, b) => String(a.username).localeCompare(String(b.username), "es"));
  } catch (err) {
    console.error(err);
    listaEstudiantes.innerHTML = `<p class="estado-vacio">No se pudieron cargar tus estudiantes.</p>`;
    return;
  }

  document.getElementById("titulo-estudiantes").textContent = `Mis estudiantes (${estudiantes.length})`;

  if (!estudiantes.length) {
    listaEstudiantes.innerHTML = `<p class="estado-vacio">Todavía no has creado cuentas para ${curso.codigo}.</p>`;
    return;
  }

  listaEstudiantes.innerHTML = `
    <table class="tabla-resultados">
      <thead><tr><th>Nombre</th><th>Correo</th><th>Curso</th><th>Creado</th></tr></thead>
      <tbody>
        ${estudiantes
          .map(
            (e) => `
            <tr>
              <td>${escapar(e.username || "—")}</td>
              <td><code>${escapar(e.email || "—")}</code></td>
              <td>${escapar(e.curso || "—")}</td>
              <td>${formatearFecha(e.creadoEn)}</td>
            </tr>`
          )
          .join("")}
      </tbody>
    </table>`;
}

async function cargarClases() {
  if (!curso) return;
  listaClases.innerHTML = `<p class="estado-vacio">Cargando...</p>`;

  let grupos = [];
  try {
    grupos = await obtenerGruposDelCurso(curso.codigo);
  } catch (err) {
    listaClases.innerHTML = `<p class="estado-vacio">No se pudieron cargar las clases del curso.</p>`;
    return;
  }
  gruposDelCurso = grupos;

  document.getElementById("titulo-clases").textContent = `Clases de ${curso.codigo} (${grupos.length})`;

  if (!grupos.length) {
    listaClases.innerHTML = `<p class="estado-vacio">Nadie ha abierto clases para este curso todavía.</p>`;
    return;
  }

  listaClases.innerHTML = `
    <table class="tabla-resultados">
      <thead><tr><th>Clase</th><th>Código</th><th>Materia</th><th>Profesor</th><th>Estudiantes</th><th>Estado</th></tr></thead>
      <tbody>
        ${grupos
          .map(
            (g) => `
            <tr>
              <td>${escapar(g.nombre)}</td>
              <td><code>${escapar(g.codigo)}</code></td>
              <td>${escapar(obtenerMateria(g.materia)?.nombre || "—")}</td>
              <td>${escapar(g.profesorNombre || "—")}</td>
              <td>${(g.miembrosUids || []).length}</td>
              <td>${g.activo ? "Activa" : "Inactiva"}</td>
            </tr>`
          )
          .join("")}
      </tbody>
    </table>`;
}

/* ---------------------- Arranque ---------------------- */

suscribirSesion("profesor", async (c) => {
  if (!c) return; // guard.js redirige
  cuenta = c;

  if (c.datos.tipoProfesor !== "director" || !c.datos.curso) {
    document.getElementById("caja-sin-curso").style.display = "block";
    document.getElementById("caja-alta").style.display = "none";
    listaEstudiantes.innerHTML = `<p class="estado-vacio">Solo un director de curso puede crear estudiantes.</p>`;
    listaClases.innerHTML = "";
    return;
  }

  curso = await obtenerCurso(c.datos.curso).catch(() => null);
  const codigo = c.datos.curso;

  vistoCodigo.textContent = codigo;
  cajaCodigo.style.display = "block";

  document.getElementById("etiqueta-curso").textContent = `el curso ${codigo}`;
  document.getElementById("titulo-curso").textContent = `Curso ${codigo}`;
  const nombreCurso = curso?.nombre || `Grado ${codigo}`;
  document.getElementById("subtitulo-curso").textContent =
    `${nombreCurso} · ${plural(c.datos.materias?.length || 0, "materia")} a tu cargo`;
  document.title = `Curso ${codigo} · SkillHouse`;

  await Promise.all([cargarEstudiantes(), cargarClases()]);

  // "Con alguna clase" se cuenta SOLO sobre los estudiantes que aparecen en
  // la tabla de arriba: en una clase del curso puede haber estudiantes que el
  // administrador matriculó, y si no estaban en "Mis estudiantes" el número
  // podía salir mayor que el de matriculados.
  const matriculados = new Set(estudiantes.map((e) => e.uid || e.id));
  const conAlgunaClase = new Set(
    gruposDelCurso.flatMap((g) => g.miembrosUids || []).filter((uid) => matriculados.has(uid))
  );

  document.getElementById("stats-curso").innerHTML = `
    <div class="stat-card"><div class="stat-valor">${estudiantes.length}</div><div class="stat-label">Estudiantes matriculados</div></div>
    <div class="stat-card"><div class="stat-valor">${gruposDelCurso.length}</div><div class="stat-label">Clases del curso</div></div>
    <div class="stat-card"><div class="stat-valor">${conAlgunaClase.size}</div><div class="stat-label">Con alguna clase</div></div>`;
});
