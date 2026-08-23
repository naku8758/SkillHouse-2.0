// js/guard.js
// Protege las páginas de panel (estudiante / profesor / administrador):
//  - Si no hay sesión iniciada, redirige a index.html
//  - Si el usuario SÍ inició sesión pero su rol no es el que corresponde a
//    esta página, cierra la sesión y lo devuelve a index.html
//  - Si todo está OK, muestra el nombre del usuario y activa "Cerrar Sesión"
//
// Este archivo se importa desde cada homepage con un <script type="module">
// pasando el rol esperado, ej:
//   <script type="module">
//     import { protegerPagina } from "../js/guard.js";
//     protegerPagina("estudiante");
//   </script>

import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

export function protegerPagina(rolEsperado) {
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      window.location.href = "../index.html";
      return;
    }

    try {
      const snap = await getDoc(doc(db, "usuarios", user.uid));

      if (!snap.exists() || snap.data().rol !== rolEsperado) {
        // Está logueado pero no tiene el rol correspondiente a esta página
        await signOut(auth);
        window.location.href = "../index.html";
        return;
      }

      const nombre = snap.data().username || user.email;
      const bienvenida = document.getElementById("bienvenida");
      if (bienvenida) {
        const textos = {
          estudiante: `Bienvenid@, ${nombre} 👋`,
          profesor: `Bienvenid@, profe ${nombre} 👋`,
          administrador: `Panel Administrativo — ${nombre}`
        };
        bienvenida.textContent = textos[rolEsperado] || `Bienvenid@, ${nombre} 👋`;
      }
    } catch (err) {
      console.error(err);
      window.location.href = "../index.html";
    }
  });

  const logoutLink = document.getElementById("logout-link");
  if (logoutLink) {
    logoutLink.addEventListener("click", async (e) => {
      e.preventDefault();
      await signOut(auth);
      window.location.href = "../index.html";
    });
  }
}
