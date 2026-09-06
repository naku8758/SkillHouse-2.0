// interfaz profesor/biblioteca-panel.js
// Muestra estadísticas generales de todas las clases del profesor. El
// catálogo de juegos en sí es contenido estático definido en biblioteca.html.

import { auth } from "../js/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { obtenerEstadisticasProfesor } from "../js/grupos.js";

onAuthStateChanged(auth, async (user) => {
  if (!user) return; // guard.js ya redirige si no hay sesión

  const contenedor = document.getElementById("stats-generales");
  try {
    const stats = await obtenerEstadisticasProfesor(user.uid);
    contenedor.innerHTML = `
      <div class="stat-card"><div class="stat-valor">${stats.totalClases}</div><div class="stat-label">Clases creadas</div></div>
      <div class="stat-card"><div class="stat-valor">${stats.totalEstudiantes}</div><div class="stat-label">Estudiantes únicos</div></div>
      <div class="stat-card"><div class="stat-valor">${stats.totalPartidas}</div><div class="stat-label">Partidas jugadas</div></div>
      <div class="stat-card"><div class="stat-valor">${stats.totalPartidas ? stats.promedioGeneral + "%" : "—"}</div><div class="stat-label">Promedio general</div></div>
    `;
  } catch (err) {
    contenedor.innerHTML = `<p class="estado-vacio">No se pudieron cargar las estadísticas.</p>`;
  }
});
