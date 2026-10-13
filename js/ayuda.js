// js/ayuda.js
// Esta página es pública (cualquiera puede abrirla, con o sin sesión), así
// que aquí se maneja todo de forma defensiva:
//  - El botón "Volver" apunta al panel correspondiente si hay sesión
//    iniciada, o al inicio si no la hay.
//  - El buscador filtra las preguntas frecuentes en el propio navegador.
//  - Las sugerencias se guardan de verdad en Firestore (colección
//    "sugerencias"), para que el administrador las vea en su dashboard.

import { auth, db } from "./firebase.js";
import { RUTAS_POR_ROL } from "./sesion.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import {
  doc,
  getDoc,
  addDoc,
  collection,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

/* ---------------------- "Volver" según la sesión ---------------------- */
onAuthStateChanged(auth, async (user) => {
  const linkVolver = document.getElementById("link-volver");
  if (!user || !linkVolver) return; // sin sesión: se queda apuntando a index.html

  try {
    const snap = await getDoc(doc(db, "usuarios", user.uid));
    const rol = snap.exists() ? snap.data().rol : null;
    if (rol && RUTAS_POR_ROL[rol]) {
      linkVolver.href = RUTAS_POR_ROL[rol];
    }
  } catch (err) {
    // Si falla, se queda el href por defecto (index.html) — no es grave.
  }
});

/* ---------------------- Buscador de preguntas frecuentes ---------------------- */
const buscador = document.getElementById("buscador-ayuda");
const preguntas = Array.from(document.querySelectorAll("#lista-preguntas > details"));
const sinResultados = document.getElementById("sin-resultados-busqueda");

if (buscador) {
  buscador.addEventListener("input", () => {
    const texto = buscador.value.trim().toLowerCase();
    let algunaVisible = false;

    preguntas.forEach((detalle) => {
      const coincide = detalle.textContent.toLowerCase().includes(texto);
      detalle.style.display = coincide ? "" : "none";
      if (coincide) algunaVisible = true;
    });

    if (sinResultados) {
      sinResultados.style.display = texto && !algunaVisible ? "block" : "none";
    }
  });
}

/* ---------------------- Enviar sugerencia ---------------------- */
const btnEnviar = document.getElementById("btn-enviar-sugerencia");
const textoSugerencia = document.getElementById("texto-sugerencia");
const mensajeEl = document.getElementById("sugerencia-mensaje");

function mostrarMensaje(texto, esError) {
  if (!mensajeEl) return;
  mensajeEl.textContent = texto;
  mensajeEl.style.display = texto ? "block" : "none";
  mensajeEl.style.color = esError ? "#c0392b" : "#0E8F5E";
}

btnEnviar?.addEventListener("click", async () => {
  const mensaje = textoSugerencia.value.trim();
  mostrarMensaje("", false);

  if (!mensaje) {
    mostrarMensaje("Escribe tu sugerencia antes de enviarla.", true);
    return;
  }

  btnEnviar.disabled = true;

  try {
    const user = auth.currentUser;
    let nombre = "Invitado";

    if (user) {
      try {
        const snap = await getDoc(doc(db, "usuarios", user.uid));
        nombre = snap.exists() ? snap.data().username || user.email : user.email;
      } catch (err) {
        nombre = user.email || "Usuario";
      }
    }

    await addDoc(collection(db, "sugerencias"), {
      mensaje,
      nombre,
      atendida: false,
      fecha: serverTimestamp()
    });

    mostrarMensaje("¡Gracias! Tu sugerencia fue enviada.", false);
    textoSugerencia.value = "";
  } catch (error) {
    console.error(error);
    mostrarMensaje("No se pudo enviar tu sugerencia. Intenta de nuevo.", true);
  } finally {
    btnEnviar.disabled = false;
  }
});
