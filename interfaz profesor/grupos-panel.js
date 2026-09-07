import { auth, db } from "../js/firebase.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

import {
  MATERIAS,
  obtenerMateria,
  obtenerTema
} from "../js/catalogo.js";

import {
  crearGrupo,
  obtenerGruposDelProfesor,
  alternarEstadoGrupo,
  eliminarGrupo,
  obtenerResultadosDelGrupo
} from "../js/grupos.js";

const JUEGOS = {
  quiz: {
    icono: "🎮",
    nombre: "Quiz de Lógica"
  },
  puzzle: {
    icono: "🧩",
    nombre: "Puzzle de Código"
  },
  carrera: {
    icono: "🚀",
    nombre: "Carrera Espacial"
  }
};

let usuarioActual = null;
let usuarioNombre = "";

const form = document.getElementById("form-crear-grupo");
const listaGrupos = document.getElementById("lista-grupos");

const errorEl = document.getElementById("crear-grupo-error");
const exitoEl = document.getElementById("crear-grupo-exito");

const selectMateria = document.getElementById("select-materia");
const selectTema = document.getElementById("select-tema");
const selectDificultad = document.getElementById(
  "select-dificultad"
);

const panelResultados = document.getElementById(
  "panel-resultados"
);

const resultadosTitulo = document.getElementById(
  "resultados-titulo"
);

const resultadosSub = document.getElementById(
  "resultados-sub"
);

const resultadosContenido = document.getElementById(
  "resultados-contenido"
);

function mostrarMensaje(elemento, texto) {
  elemento.textContent = texto;
  elemento.style.display = texto ? "block" : "none";
}

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto ?? "";
  return div.innerHTML;
}

function cargarTemas() {
  const materia = MATERIAS.find(
    (item) => item.id === selectMateria.value
  );

  selectTema.innerHTML = "";

  if (!materia) {
    selectTema.disabled = true;

    selectTema.innerHTML = `
      <option value="">
        Selecciona primero una materia
      </option>
    `;

    return;
  }

  selectTema.disabled = false;

  selectTema.innerHTML = `
    <option value="">Selecciona un tema</option>

    ${materia.temas
      .map(
        (tema) => `
          <option value="${escapeHtml(tema.id)}">
            ${escapeHtml(tema.nombre)}
          </option>
        `
      )
      .join("")}
  `;
}

if (selectMateria) {
  selectMateria.innerHTML = `
    <option value="">Selecciona una materia</option>
    ${MATERIAS.map(
      (materia) => `
        <option value="${escapeHtml(materia.id)}">
          ${escapeHtml(materia.nombre)}
        </option>
      `
    ).join("")}
  `;
}

selectMateria?.addEventListener("change", cargarTemas);

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "../index.html";
    return;
  }

  usuarioActual = user;

  try {
    const usuarioSnap = await getDoc(
      doc(db, "usuarios", user.uid)
    );

    usuarioNombre = usuarioSnap.exists()
      ? usuarioSnap.data().username || user.email
      : user.email;
  } catch (error) {
    usuarioNombre = user.email;
  }

  const juegoPreseleccionado = new URLSearchParams(
    window.location.search
  ).get("juego");

  const selectJuego = document.getElementById("select-juego");

  if (
    juegoPreseleccionado &&
    selectJuego &&
    selectJuego.querySelector(
      `option[value="${juegoPreseleccionado}"]`
    )
  ) {
    selectJuego.value = juegoPreseleccionado;
  }

  await cargarGrupos();
});

form?.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  mostrarMensaje(errorEl, "");
  mostrarMensaje(exitoEl, "");

  const nombre = document
    .getElementById("input-nombre")
    .value.trim();

  const juego = document.getElementById("select-juego").value;
  const materia = selectMateria?.value || "";
  const tema = selectTema?.value || "";
  const dificultad = Number(selectDificultad?.value);

  if (!nombre) {
    mostrarMensaje(
      errorEl,
      "Escribe un nombre para el grupo."
    );
    return;
  }

  if (!materia) {
    mostrarMensaje(
      errorEl,
      "Selecciona una materia."
    );
    return;
  }

  if (!tema) {
    mostrarMensaje(
      errorEl,
      "Selecciona un tema."
    );
    return;
  }

  if (![1, 2, 3].includes(dificultad)) {
    mostrarMensaje(
      errorEl,
      "Selecciona una dificultad válida."
    );
    return;
  }

  const boton = document.getElementById(
    "btn-crear-grupo"
  );

  boton.disabled = true;

  try {
    const resultado = await crearGrupo({
      profesorId: usuarioActual.uid,
      profesorNombre: usuarioNombre,
      nombre,
      juego,
      materia,
      tema,
      dificultad
    });

    mostrarMensaje(
      exitoEl,
      `¡Grupo creado! Código para tus estudiantes: ${resultado.codigo}`
    );

    form.reset();

    if (selectTema) {
      selectTema.innerHTML = `
        <option value="">
          Selecciona primero una materia
        </option>
      `;
      selectTema.disabled = true;
    }

    await cargarGrupos();
  } catch (error) {
    mostrarMensaje(
      errorEl,
      error.message || "No se pudo crear el grupo."
    );
  } finally {
    boton.disabled = false;
  }
});

async function cargarGrupos() {
  listaGrupos.innerHTML = `
    <p class="estado-vacio">
      Cargando tus grupos...
    </p>
  `;

  let grupos = [];

  try {
    grupos = await obtenerGruposDelProfesor(
      usuarioActual.uid
    );
  } catch (error) {
    listaGrupos.innerHTML = `
      <p class="estado-vacio">
        No se pudieron cargar tus grupos.
      </p>
    `;

    return;
  }

  if (!grupos.length) {
    listaGrupos.innerHTML = `
      <p class="estado-vacio">
        Aún no has creado ninguna clase.
        Crea la primera arriba.
      </p>
    `;

    return;
  }

  listaGrupos.innerHTML = grupos
    .map((grupo) => {
      const juego = JUEGOS[grupo.juego] || {
        icono: "🎲",
        nombre: grupo.juego || "Juego"
      };

      const materia = obtenerMateria(grupo.materia);
      const tema = obtenerTema(
        grupo.materia,
        grupo.tema
      );

      return `
        <div class="grupo-card grupo-card--${escapeHtml(
          grupo.juego
        )}">
          <div class="grupo-header">
            <h3>
              ${escapeHtml(grupo.nombre)}
            </h3>

            <span class="grupo-estado ${
              grupo.activo
                ? "grupo-estado--activo"
                : "grupo-estado--inactivo"
            }">
              <span class="dot"></span>
              ${grupo.activo ? "Activa" : "Inactiva"}
            </span>
          </div>

          <span class="grupo-juego-label">
            <span class="grupo-juego-icono">
              ${juego.icono}
            </span>
            ${escapeHtml(juego.nombre)}
          </span>

          <p class="grupo-meta">
            Materia:
            ${escapeHtml(
              materia?.nombre || "Sin materia"
            )}
          </p>

          <p class="grupo-meta">
            Tema:
            ${escapeHtml(tema?.nombre || "Sin tema")}
            |
            Dificultad:
            ${escapeHtml(String(grupo.dificultad || "—"))}
          </p>

          <div class="grupo-codigo">
            ${escapeHtml(grupo.codigo)}
          </div>

          <p class="grupo-meta">
            ${(grupo.miembrosUids || []).length}
            estudiante(s) unido(s)
          </p>

          <div class="grupo-acciones">
            <button
              class="btn-secundario"
              data-accion="resultados"
              data-id="${escapeHtml(grupo.id)}"
              data-nombre="${escapeHtml(grupo.nombre)}"
            >
              Ver resultados
            </button>

            <button
              class="btn-secundario"
              data-accion="alternar"
              data-id="${escapeHtml(grupo.id)}"
              data-activo="${grupo.activo}"
            >
              ${grupo.activo ? "Desactivar" : "Activar"}
            </button>

            <button
              class="btn-secundario"
              data-accion="eliminar"
              data-id="${escapeHtml(grupo.id)}"
            >
              Eliminar
            </button>
          </div>
        </div>
      `;
    })
    .join("");

  listaGrupos
    .querySelectorAll("[data-accion]")
    .forEach((boton) => {
      boton.addEventListener("click", () => {
        manejarAccion(boton);
      });
    });
}

async function manejarAccion(boton) {
  const accion = boton.dataset.accion;
  const grupoId = boton.dataset.id;

  if (accion === "resultados") {
    await mostrarResultados(
      grupoId,
      boton.dataset.nombre
    );

    return;
  }

  if (accion === "alternar") {
    const activoActual =
      boton.dataset.activo === "true";

    boton.disabled = true;

    try {
      await alternarEstadoGrupo(
        grupoId,
        !activoActual
      );

      await cargarGrupos();
    } catch (error) {
      alert("No se pudo actualizar el grupo.");
      boton.disabled = false;
    }

    return;
  }

  if (accion === "eliminar") {
    const confirmar = confirm(
      "¿Eliminar este grupo? Esta acción no se puede deshacer."
    );

    if (!confirmar) {
      return;
    }

    boton.disabled = true;

    try {
      await eliminarGrupo(grupoId);
      await cargarGrupos();
    } catch (error) {
      alert("No se pudo eliminar el grupo.");
      boton.disabled = false;
    }
  }
}

async function mostrarResultados(
  grupoId,
  nombreGrupo
) {
  resultadosTitulo.textContent =
    `Resultados — ${nombreGrupo}`;

  resultadosSub.textContent = "";

  resultadosContenido.innerHTML = `
    <p class="estado-vacio">
      Cargando resultados...
    </p>
  `;

  panelResultados.style.display = "block";

  panelResultados.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  try {
    const resultados =
      await obtenerResultadosDelGrupo(grupoId);

    if (!resultados.length) {
      resultadosContenido.innerHTML = `
        <p class="estado-vacio">
          Todavía nadie ha jugado en este grupo.
        </p>
      `;

      return;
    }

    resultadosContenido.innerHTML = `
      <table class="tabla-resultados">
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Puntaje</th>
            <th>Porcentaje</th>
          </tr>
        </thead>

        <tbody>
          ${resultados
            .map(
              (resultado) => `
                <tr>
                  <td>
                    ${escapeHtml(
                      resultado.username ||
                        "Estudiante"
                    )}
                  </td>

                  <td>
                    ${resultado.puntaje}
                    /
                    ${resultado.total}
                  </td>

                  <td>
                    ${resultado.porcentaje}%
                  </td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `;
  } catch (error) {
    resultadosContenido.innerHTML = `
      <p class="estado-vacio">
        No se pudieron cargar los resultados.
      </p>
    `;
  }
}

document
  .getElementById("btn-cerrar-resultados")
  ?.addEventListener("click", () => {
    panelResultados.style.display = "none";
  });
