// js/ayuda.js
// Esta página es pública (cualquiera puede abrirla, con o sin sesión), así
// que aquí se maneja todo de forma defensiva:
//  - El botón "Volver" apunta al panel correspondiente si hay sesión
//    iniciada, o al inicio si no la hay.
//  - El buscador filtra las preguntas frecuentes en el propio navegador.
//  - Las sugerencias se guardan de verdad en Firestore (colección
//    "sugerencias"), para que el administrador las vea en su panel.

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

// Mismo tope que exigen las reglas de Firestore y el maxlength del HTML.
const MAX_SUGERENCIA = 1000;

const linkVolver = document.getElementById("link-volver");
const nombreEl = document.getElementById("nombre-sugerencia");
const contadorEl = document.getElementById("contador-sugerencia");
const btnEnviar = document.getElementById("btn-enviar-sugerencia");
const textoSugerencia = document.getElementById("texto-sugerencia");
const mensajeEl = document.getElementById("sugerencia-mensaje");

// Si la persona ya tocó el campo del nombre, lo que escribió ahí es lo que se
// guarda: la cuenta no le pisa lo que puso.
let nombreTocado = false;

function pintarContador() {
  if (contadorEl && textoSugerencia) {
    contadorEl.textContent = `${textoSugerencia.value.length}/${MAX_SUGERENCIA}`;
  }
}

/* -------------- "Volver" y el nombre, según la sesión -------------- */
onAuthStateChanged(auth, async (user) => {
  // Sin sesión no hay nada que rellenar: el enlace queda apuntando a
  // index.html y el campo del nombre se queda vacío, que es la vía anónima.
  if (!user) return;

  try {
    const snap = await getDoc(doc(db, "usuarios", user.uid));
    const datos = snap.exists() ? snap.data() : null;
    const rol = datos ? datos.rol : null;
    if (rol && RUTAS_POR_ROL[rol] && linkVolver) {
      linkVolver.href = RUTAS_POR_ROL[rol];
    }
    // Con sesión iniciada el nombre ya viene escrito, para no hacer teclear;
    // borrarlo es válido y deja la sugerencia sin nombre.
    if (nombreEl && !nombreTocado && !nombreEl.value) {
      nombreEl.value = (datos && datos.username) || user.email || "";
    }
  } catch (err) {
    // Si la lectura falla, la página sigue sirviendo: el enlace apunta a
    // index.html y el nombre queda en manos de quien escribe.
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
function mostrarMensaje(texto, esError) {
  if (!mensajeEl) return;
  mensajeEl.textContent = texto;
  mensajeEl.style.display = texto ? "block" : "none";
  mensajeEl.style.color = esError ? "#7C1DAB" : "#1D5FBF";
}

nombreEl?.addEventListener("input", () => {
  nombreTocado = true;
});
textoSugerencia?.addEventListener("input", pintarContador);
pintarContador();

btnEnviar?.addEventListener("click", async () => {
  const mensaje = (textoSugerencia ? textoSugerencia.value : "").trim();
  mostrarMensaje("", false);

  if (!mensaje) {
    mostrarMensaje("Escribe tu sugerencia antes de enviarla.", true);
    return;
  }
  if (mensaje.length > MAX_SUGERENCIA) {
    mostrarMensaje(`La sugerencia no puede pasar de ${MAX_SUGERENCIA} caracteres.`, true);
    return;
  }

  btnEnviar.disabled = true;

  try {
    await addDoc(collection(db, "sugerencias"), {
      mensaje,
      nombre: ((nombreEl ? nombreEl.value : "") || "").trim() || "Sin nombre",
      atendida: false,
      fecha: serverTimestamp()
    });

    mostrarMensaje("¡Gracias! Tu sugerencia fue enviada.", false);
    if (textoSugerencia) textoSugerencia.value = "";
    pintarContador();
  } catch (error) {
    console.error(error);
    mostrarMensaje("No se pudo enviar tu sugerencia. Intenta de nuevo.", true);
  } finally {
    btnEnviar.disabled = false;
  }
});
