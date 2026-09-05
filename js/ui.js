// js/ui.js
// Capa puramente COSMÉTICA y AUTÓNOMA: animaciones de entrada al hacer scroll,
// contador animado de estadísticas y resaltado del ítem activo en los menús
// laterales. No importa ni toca firebase.js / auth.js / guard.js, así que no
// interfiere en ningún flujo de autenticación ni de datos.
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    try {
      initScrollReveal();
      initCounters();
      initSidebarActiveState();
      initModalOpenAnimationReset();
    } catch (err) {
      // Cualquier fallo aquí es puramente estético: nunca debe romper
      // el resto del sitio, así que solo lo dejamos registrado.
      console.warn("SkillHouse UI (cosmético):", err);
    }
  });

  function initScrollReveal() {
    const targets = document.querySelectorAll(".sh-reveal, .sh-reveal-stagger");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
  }

  function initCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;

    const animate = (el) => {
      const end = parseInt(el.getAttribute("data-count"), 10);
      const suffix = el.getAttribute("data-suffix") || "";
      if (Number.isNaN(end)) return;
      const duration = 900;
      const start = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(end * eased) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
      counters.forEach(animate);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => observer.observe(el));
  }

  function initSidebarActiveState() {
    const links = document.querySelectorAll(".menu a:not(#logout-link)");
    if (!links.length) return;
    links.forEach((link) => {
      link.addEventListener("click", () => {
        links.forEach((l) => l.classList.remove("is-active"));
        link.classList.add("is-active");
      });
    });
  }

  // Reinicia la animación de entrada del modal cada vez que se abre,
  // sin tocar las funciones abrirModal/cerrarModal existentes.
  function initModalOpenAnimationReset() {
    const modals = document.querySelectorAll(".modal");
    if (!modals.length) return;
    modals.forEach((modal) => {
      const content = modal.querySelector(".modal-content");
      if (!content) return;
      const mo = new MutationObserver(() => {
        if (modal.style.display === "flex") {
          content.style.animation = "none";
          // eslint-disable-next-line no-unused-expressions
          content.offsetHeight; // reflow para reiniciar la animación
          content.style.animation = "";
        }
      });
      mo.observe(modal, { attributes: true, attributeFilter: ["style"] });
    });
  }
})();


// AVATAR
// =====================================================
// 1. VARIABLES DEFINITIVAS
// =====================================================

// Lo que está guardado actualmente en tu perfil real
let avatarActual = "";
let colorFondoActual = "";


// =====================================================
// 2. VARIABLES TEMPORALES
// =====================================================

// Lo que pruebas dentro del modal sin aplicarlo aún
let avatarTemporal = "";
let colorFondoTemporal = "";


// =====================================================
// 3. REFERENCIAS DEL DOM
// =====================================================

const perfilAvatar = document.getElementById("perfil-avatar");
const modalAvatar = document.getElementById("modal-avatar");
const btnCerrarX = document.getElementById("btn-cerrar-x");
const opcionesAvatares = document.querySelectorAll(".opcion-avatar");
const selectorColor = document.getElementById("selector-color");
const btnGuardar = document.getElementById("btn-guardar");
const previewAvatarGrande = document.getElementById("preview-avatar-grande");


// =====================================================
// 4. FUNCIÓN PARA ACTUALIZAR LA VISTA PREVIA
// =====================================================

function actualizarVistaPrevia() {

    // Limpiamos solamente el contenido de la imagen.
    // NO eliminamos el color de fondo.
    previewAvatarGrande.innerHTML = "";


    // -----------------------------------------------
    // COLOR DE FONDO
    // -----------------------------------------------

    if (colorFondoTemporal) {

        previewAvatarGrande.style.background =
            colorFondoTemporal;

    } else {

        // Si no existe color, vuelve al fondo definido
        // originalmente por tu CSS.
        previewAvatarGrande.style.background = "";
    }


    // -----------------------------------------------
    // AVATAR
    // -----------------------------------------------

    if (avatarTemporal) {

        // La imagen queda ENCIMA del color
        previewAvatarGrande.innerHTML = `
            <img
                src="${avatarTemporal}"
                alt="Avatar"
            >
        `;

    } else {

        // Si no hay imagen, mostramos ?
        previewAvatarGrande.innerHTML = "?";
    }
}


// =====================================================
// 5. FUNCIÓN PARA ACTUALIZAR EL AVATAR PRINCIPAL
// =====================================================

function actualizarAvatarPrincipal() {

    // Limpiamos el contenido anterior
    perfilAvatar.innerHTML = "";


    // -----------------------------------------------
    // COLOR DE FONDO
    // -----------------------------------------------

    if (colorFondoActual) {

        perfilAvatar.style.background =
            colorFondoActual;

    } else {

        // Si no hay color, utiliza el CSS original
        perfilAvatar.style.background = "";
    }


    // -----------------------------------------------
    // AVATAR ENCIMA DEL COLOR
    // -----------------------------------------------

    if (avatarActual) {

        perfilAvatar.innerHTML = `
            <img
                src="${avatarActual}"
                alt="Avatar"
            >
        `;

    } else {

        // Si no hay avatar mostramos ?
        perfilAvatar.innerHTML = "?";
    }
}


// =====================================================
// 6. ABRIR EL MODAL AL HACER CLIC EN EL AVATAR
// =====================================================

if (perfilAvatar) {

    perfilAvatar.addEventListener("click", () => {

        // -------------------------------------------
        // CARGAR VALORES ACTUALES
        // -------------------------------------------

        avatarTemporal = avatarActual;
        colorFondoTemporal = colorFondoActual;


        // -------------------------------------------
        // CARGAR COLOR EN EL SELECTOR
        // -------------------------------------------

        if (selectorColor) {

            if (colorFondoTemporal) {

                selectorColor.value =
                    colorFondoTemporal;

            } else {

                selectorColor.value = "#ffffff";
            }
        }


        // -------------------------------------------
        // ACTUALIZAR VISTA PREVIA
        // -------------------------------------------

        actualizarVistaPrevia();


        // -------------------------------------------
        // MOSTRAR MODAL
        // -------------------------------------------

        modalAvatar.style.display = "flex";
    });
}


// =====================================================
// 7. FUNCIÓN PARA CERRAR EL MODAL
// =====================================================

function cerrarModal() {

    modalAvatar.style.display = "none";
}


// =====================================================
// 8. BOTÓN X PARA CERRAR
// =====================================================

if (btnCerrarX) {

    btnCerrarX.addEventListener("click", cerrarModal);
}


// =====================================================
// 9. CERRAR HACIENDO CLIC FUERA DEL MODAL
// =====================================================

if (modalAvatar) {

    modalAvatar.addEventListener("click", (e) => {

        // Solo cierra si se hace clic en el fondo oscuro,
        // no dentro de la caja blanca.

        if (e.target === modalAvatar) {

            cerrarModal();
        }
    });
}


// =====================================================
// 10. SELECCIONAR UN AVATAR
// =====================================================

opcionesAvatares.forEach(img => {

    img.addEventListener("click", (e) => {

        // -------------------------------------------
        // GUARDAR AVATAR TEMPORAL
        // -------------------------------------------

        avatarTemporal = e.target.src;


        // IMPORTANTE:
        // NO hacemos esto:
        //
        // colorFondoTemporal = "";
        //
        // porque queremos conservar el color.


        // -------------------------------------------
        // ACTUALIZAR VISTA PREVIA
        // -------------------------------------------

        actualizarVistaPrevia();
    });
});


// =====================================================
// 11. SELECCIONAR COLOR DE FONDO
// =====================================================

if (selectorColor) {

    selectorColor.addEventListener("input", (e) => {

        // -------------------------------------------
        // GUARDAR COLOR TEMPORAL
        // -------------------------------------------

        colorFondoTemporal = e.target.value;


        // IMPORTANTE:
        // NO hacemos esto:
        //
        // avatarTemporal = "";
        //
        // porque queremos conservar el avatar.


        // -------------------------------------------
        // ACTUALIZAR VISTA PREVIA
        // -------------------------------------------

        actualizarVistaPrevia();
    });
}


// =====================================================
// 12. BOTÓN GUARDAR CAMBIOS
// =====================================================

if (btnGuardar) {

    btnGuardar.addEventListener("click", async () => {


        // -------------------------------------------
        // A. PASAR TEMPORAL → DEFINITIVO
        // -------------------------------------------

        avatarActual = avatarTemporal;
        colorFondoActual = colorFondoTemporal;


        // -------------------------------------------
        // B. ACTUALIZAR AVATAR PRINCIPAL
        // -------------------------------------------

        actualizarAvatarPrincipal();


        // -------------------------------------------
        // C. OBTENER ID DEL USUARIO
        // -------------------------------------------

        const USUARIO_ID =
            typeof idUsuarioActual !== "undefined"
                ? idUsuarioActual
                : null;


        // -------------------------------------------
        // D. GUARDAR EN FIREBASE FIRESTORE
        // -------------------------------------------

        try {

            if (
                USUARIO_ID &&
                typeof db !== "undefined" &&
                typeof updateDoc !== "undefined"
            ) {

                /*
                // DESCOMENTA ESTO SI UTILIZAS FIRESTORE MODULAR:

                await updateDoc(
                    doc(db, "usuarios", USUARIO_ID),
                    {
                        avatar: avatarActual,
                        colorFondo: colorFondoActual
                    }
                );
                */
            }


            // ---------------------------------------
            // E. CERRAR MODAL
            // ---------------------------------------

            modalAvatar.style.display = "none";


        } catch (error) {

            console.error(
                "Error al guardar el avatar en la base de datos: ",
                error
            );
        }
    });
}


