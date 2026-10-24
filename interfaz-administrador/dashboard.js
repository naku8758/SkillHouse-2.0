// interfaz-administrador/dashboard.js
// Alimenta el panel de inicio del administrador: conteos reales de la base
// de datos y las sugerencias que llegan desde "Ayuda y Sugerencias".

import { db } from "../js/firebase.js";
import { suscribirSesion } from "../js/sesion.js";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  limit
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto == null ? "" : texto;
  return div.innerHTML;
}

// El motivo de un fallo tiene que verse en la pantalla: si solo se escribe en la
// consola, un botón que no hace nada parece un botón roto.
function avisarSugerencias(texto) {
  const el = document.getElementById("aviso-sugerencias");
  if (!el) return;
  el.textContent = texto;
  el.style.display = texto ? "block" : "none";
}

function formatearFecha(timestamp) {
  if (!timestamp || !timestamp.seconds) return "—";
  return new Date(timestamp.seconds * 1000).toLocaleString("es-CO", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  });
}

async function contar(coleccion, filtro) {
  const ref = filtro ? query(collection(db, coleccion), where(...filtro)) : collection(db, coleccion);
  const snap = await getDocs(ref);
  return snap.size;
}

async function cargarConteos() {
  const objetivos = {
    "conteo-estudiantes": () => contar("estudiantes"),
    "conteo-profesores": () => contar("profesores"),
    "conteo-clases-activas": () => contar("grupos", ["activo", "==", true]),
    "conteo-cursos": () => contar("cursos")
  };

  await Promise.all(
    Object.entries(objetivos).map(async ([id, leer]) => {
      const el = document.getElementById(id);
      if (!el) return;
      try {
        el.textContent = await leer();
      } catch (err) {
        console.error(`No se pudo contar ${id}:`, err);
        el.textContent = "—";
      }
    })
  );
}

async function cargarSugerencias() {
  const tabla = document.getElementById("tabla-actividad-reciente");
  if (!tabla) return;

  try {
    let snap;
    try {
      snap = await getDocs(query(collection(db, "sugerencias"), orderBy("fecha", "desc"), limit(15)));
    } catch (err) {
      // Firestore no ordena por un campo que un documento no tiene (sugieren
      // con fecha: null si serverTimestamp() aún no resuelve). Si la consulta
      // ordenada falla, se leen sin ordenar y se ordenan aquí.
      snap = await getDocs(query(collection(db, "sugerencias"), limit(15)));
    }

    const sugerencias = snap.docs
      .map((d) => ({ id: d.id, ...d.data() }))
      .sort((a, b) => (b.fecha?.seconds || 0) - (a.fecha?.seconds || 0));

    if (!sugerencias.length) {
      tabla.innerHTML = `<tr><td colspan="4">Todavía no ha llegado ninguna sugerencia.</td></tr>`;
      return;
    }

    tabla.innerHTML = sugerencias
      .map(
        (s) => `
        <tr>
          <td>${escapar(s.nombre || "Sin nombre")}</td>
          <td>${escapar(s.mensaje)}</td>
          <td>${formatearFecha(s.fecha)}</td>
          <td>
            <button class="btn-secundario" data-sugerencia="${escapar(s.id)}" data-atendida="${s.atendida ? "1" : "0"}"
                    style="${s.atendida ? "opacity:.55;" : ""}">
              ${s.atendida ? "Atendida" : "Marcar atendida"}
            </button>
            <button class="btn-borrar" data-borrar="${escapar(s.id)}" style="margin-left:6px;">Borrar</button>
          </td>
        </tr>`
      )
      .join("");

    tabla.querySelectorAll("[data-sugerencia]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const ahoraAtendida = btn.dataset.atendida !== "1";
        btn.disabled = true;
        try {
          await updateDoc(doc(db, "sugerencias", btn.dataset.sugerencia), { atendida: ahoraAtendida });
          await cargarSugerencias();
        } catch (err) {
          console.error(err);
          btn.disabled = false;
          avisarSugerencias(`No se pudo marcar la sugerencia (${err && err.code ? err.code : "error"}).`);
        }
      });
    });

    // Las confirmaciones de borrado se hacen en la propia página, nunca con
    // window.confirm: si el navegador tiene los diálogos bloqueados, o la página
    // está dentro de un iframe, el clic no muestra nada y el botón parece roto.
    // El primer clic pregunta y el segundo borra.
    tabla.querySelectorAll("[data-borrar]").forEach((btn) => {
      let preguntado = false;
      btn.addEventListener("click", async () => {
        if (!preguntado) {
          preguntado = true;
          btn.textContent = "¿Seguro?";
          setTimeout(() => {
            preguntado = false;
            btn.textContent = "Borrar";
          }, 6000);
          return;
        }

        preguntado = false;
        btn.disabled = true;
        try {
          await deleteDoc(doc(db, "sugerencias", btn.dataset.borrar));
          avisarSugerencias("");
          await cargarSugerencias();
        } catch (err) {
          console.error(err);
          btn.disabled = false;
          btn.textContent = "Borrar";
          avisarSugerencias(
            `No se pudo borrar la sugerencia (${err && err.code ? err.code : "error"}). ` +
            "Si el mensaje es permission-denied, las reglas publicadas en este proyecto " +
            "son más viejas que este botón: vuelve a publicar firestore.rules."
          );
        }
      });
    });
  } catch (err) {
    console.error(err);
    tabla.innerHTML = `<tr><td colspan="4">No se pudieron cargar las sugerencias.</td></tr>`;
  }
}

suscribirSesion("administrador", async (cuenta) => {
  if (!cuenta) return; // guard.js redirige
  await Promise.all([cargarConteos(), cargarSugerencias()]);
});
