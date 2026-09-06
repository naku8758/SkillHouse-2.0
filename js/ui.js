// js/ui.js
// Capa unificada: Animaciones cosméticas + Lógica completa del Avatar
(function () {
  "use strict";

  // =====================================================
  // 1. INICIALIZADOR COSMÉTICO (ORIGINAL)
  // =====================================================
  document.addEventListener("DOMContentLoaded", () => {
    try {
      initScrollReveal();
      initCounters();
      initSidebarActiveState();
      initModalOpenAnimationReset();
      initAvatarSystem(); // <-- Aquí arrancamos la lógica del avatar al cargar el DOM
    } catch (err) {
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

  function initModalOpenAnimationReset() {
    const modals = document.querySelectorAll(".modal");
    if (!modals.length) return;
    modals.forEach((modal) => {
      const content = modal.querySelector(".modal-content");
      if (!content) return;
      const mo = new MutationObserver(() => {
        if (modal.style.display === "flex") {
          content.style.animation = "none";
          content.offsetHeight;
          content.style.animation = "";
        }
      });
      mo.observe(modal, { attributes: true, attributeFilter: ["style"] });
    });
  }

  // =====================================================
  // 2. SISTEMA DE AVATAR (ENCAPSULADO Y SEGURO)
  // =====================================================
  function initAvatarSystem() {
    // Variables de Estado
    let avatarActual = "";
    let colorFondoActual = "";
    let avatarTemporal = "";
    let colorFondoTemporal = "";

    // Referencias del DOM específicas del Avatar
    const perfilAvatar = document.getElementById("perfil-avatar");
    const modalAvatar = document.getElementById("modal-avatar");
    const btnCerrarX = document.getElementById("btn-cerrar-x");
    const opcionesAvatares = document.querySelectorAll(".opcion-avatar");
    const selectorColor = document.getElementById("selector-color");
    const btnGuardar = document.getElementById("btn-guardar");
    const previewAvatarGrande = document.getElementById("preview-avatar-grande");

    if (!perfilAvatar || !modalAvatar) return; // Si no está el componente en esta vista, evita errores

    function actualizarVistaPrevia() {
      if (!previewAvatarGrande) return;
      previewAvatarGrande.innerHTML = "";

      if (colorFondoTemporal) {
        previewAvatarGrande.style.background = colorFondoTemporal;
      } else {
        previewAvatarGrande.style.background = "";
      }

      if (avatarTemporal) {
        previewAvatarGrande.innerHTML = `<img src="${avatarTemporal}" alt="Avatar">`;
      } else {
        previewAvatarGrande.innerHTML = "?";
      }
    }

    function actualizarAvatarPrincipal() {
      if (!perfilAvatar) return;
      perfilAvatar.innerHTML = "";

      if (colorFondoActual) {
        perfilAvatar.style.background = colorFondoActual;
      } else {
        perfilAvatar.style.background = "";
      }

      if (avatarActual) {
        perfilAvatar.innerHTML = `<img src="${avatarActual}" alt="Avatar">`;
      } else {
        perfilAvatar.innerHTML = "?";
      }
    }

    function cerrarModalAvatar() {
      modalAvatar.style.display = "none";
    }

    // Eventos de apertura y cierre
    perfilAvatar.addEventListener("click", () => {
      avatarTemporal = avatarActual;
      colorFondoTemporal = colorFondoActual;

      if (selectorColor) {
        selectorColor.value = colorFondoTemporal || "#ffffff";
      }

      actualizarVistaPrevia();
      modalAvatar.style.display = "flex";
    });

    if (btnCerrarX) {
      btnCerrarX.addEventListener("click", cerrarModalAvatar);
    }

    modalAvatar.addEventListener("click", (e) => {
      if (e.target === modalAvatar) {
        cerrarModalAvatar();
      }
    });

    // Selección de avatares
    opcionesAvatares.forEach((img) => {
      img.addEventListener("click", (e) => {
        avatarTemporal = e.target.src;
        actualizarVistaPrevia();
      });
    });

    // Selector de color
    if (selectorColor) {
      selectorColor.addEventListener("input", (e) => {
        colorFondoTemporal = e.target.value;
        actualizarVistaPrevia();
      });
    }

    // Botón Guardar
    if (btnGuardar) {
      btnGuardar.addEventListener("click", async () => {
        avatarActual = avatarTemporal;
        colorFondoActual = colorFondoTemporal;

        actualizarAvatarPrincipal();

        const USUARIO_ID = typeof idUsuarioActual !== "undefined" ? idUsuarioActual : null;

        try {
          if (USUARIO_ID && typeof db !== "undefined" && typeof updateDoc !== "undefined") {
            // Lógica de Firebase (si aplica)
          }
          modalAvatar.style.display = "none";
        } catch (error) {
          console.error("Error al guardar el avatar en la base de datos: ", error);
        }
      });
    }
  }
})();
