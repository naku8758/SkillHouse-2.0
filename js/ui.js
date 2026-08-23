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
