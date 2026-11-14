// js/landing-motion.js
// Capa de movimiento e interacción de la portada. No toca Firebase ni el
// formulario de login: solo abre/cierra el modal que ya existe y mantiene el
// foco donde debe estar. Si algo falla, la página sigue siendo legible.

(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.getElementById("site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const modal = document.getElementById("modal-login");
  const loginButton = document.querySelector(".main-nav .btn-login");

  const fondoMenu = [document.querySelector("main"), document.querySelector("footer.site-footer")].filter(Boolean);
  const fondoModal = [document.querySelector(".site-header"), ...fondoMenu].filter(Boolean);

  function inertar(regiones, activo) {
    regiones.forEach((region) => {
      if (activo) region.setAttribute("inert", "");
      else region.removeAttribute("inert");
    });
  }

  /* ------------------------------------------------------------------ */
  /* Header y año                                                        */
  /* ------------------------------------------------------------------ */
  function actualizarHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", actualizarHeader, { passive: true });
  actualizarHeader();

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ------------------------------------------------------------------ */
  /* Revelado al scroll                                                  */
  /* ------------------------------------------------------------------ */
  const reveals = Array.from(document.querySelectorAll(".reveal"));

  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));

    // Red de seguridad: si algo no llega a intersectar (pantallas muy bajas,
    // un bloque oculto, etc.), el contenido aparece igualmente.
    window.setTimeout(() => {
      reveals.forEach((el) => el.classList.add("is-visible"));
    }, 4500);
  }

  if (window.__shRevealFallback) {
    window.clearTimeout(window.__shRevealFallback);
    window.__shRevealFallback = null;
  }

  /* ------------------------------------------------------------------ */
  /* Enlace activo del menú                                              */
  /* ------------------------------------------------------------------ */
  const navLinks = Array.from(document.querySelectorAll(".main-nav .nav-link"));
  const secciones = navLinks
    .map((link) => {
      const href = link.getAttribute("href");
      return href && href.startsWith("#") ? document.querySelector(href) : null;
    })
    .filter(Boolean);

  if (secciones.length && "IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = `#${entry.target.id}`;
          navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === id);
          });
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );
    secciones.forEach((seccion) => navObserver.observe(seccion));
  }

  /* ------------------------------------------------------------------ */
  /* Menú móvil                                                          */
  /* ------------------------------------------------------------------ */
  let lastMenuFocus = null;

  function abrirMenu() {
    if (!mobileMenu || !menuToggle) return;
    lastMenuFocus = document.activeElement;
    mobileMenu.classList.add("is-open");
    mobileMenu.removeAttribute("inert");
    mobileMenu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Cerrar menú");
    document.body.classList.add("menu-open");
    inertar(fondoMenu, true);

    const primero = mobileMenu.querySelector("a, button");
    if (primero) {
      window.setTimeout(() => {
        if (mobileMenu.classList.contains("is-open")) primero.focus();
      }, 60);
    }
  }

  function cerrarMenu({ devolverFoco = true } = {}) {
    if (!mobileMenu || !menuToggle) return;
    const estabaAbierto = mobileMenu.classList.contains("is-open");
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("inert", "");
    mobileMenu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    document.body.classList.remove("menu-open");
    inertar(fondoMenu, false);

    if (estabaAbierto && devolverFoco) {
      const destino = lastMenuFocus && document.contains(lastMenuFocus) ? lastMenuFocus : menuToggle;
      destino.focus();
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      if (mobileMenu && mobileMenu.classList.contains("is-open")) {
        cerrarMenu();
      } else {
        abrirMenu();
      }
    });
  }

  if (mobileMenu) {
    mobileMenu.querySelectorAll("a:not([data-open-login])").forEach((link) => {
      link.addEventListener("click", () => cerrarMenu({ devolverFoco: false }));
    });

    // El ingreso del menú móvil cierra el menú antes de abrir el modal y deja
    // el foco en la hamburguesa, que es el punto de retorno natural al cerrar.
    mobileMenu.querySelectorAll("[data-open-login]").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        cerrarMenu({ devolverFoco: false });
        if (menuToggle) menuToggle.focus();
        if (typeof window.abrirModal === "function") {
          window.abrirModal("modal-login");
        }
      });
    });

    mobileMenu.addEventListener("keydown", (event) => {
      if (event.key !== "Tab") return;
      const focusables = Array.from(
        mobileMenu.querySelectorAll("a[href], button:not([disabled])")
      ).filter((el) => el.offsetParent !== null);
      if (!focusables.length) return;

      const primero = focusables[0];
      const ultimo = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === primero) {
        event.preventDefault();
        menuToggle.focus();
      } else if (!event.shiftKey && document.activeElement === ultimo) {
        event.preventDefault();
        menuToggle.focus();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu && mobileMenu.classList.contains("is-open")) {
      cerrarMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1000 && mobileMenu && mobileMenu.classList.contains("is-open")) {
      cerrarMenu({ devolverFoco: false });
    }
  });

  /* ------------------------------------------------------------------ */
  /* Parallax suave del hero                                             */
  /* ------------------------------------------------------------------ */
  const hero = document.getElementById("hero");
  const punteroFino = window.matchMedia("(pointer: fine)").matches;

  if (hero && punteroFino && !reduceMotion) {
    let frame = null;

    hero.addEventListener("pointermove", (event) => {
      if (frame) return;
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      frame = window.requestAnimationFrame(() => {
        hero.style.setProperty("--mx", x.toFixed(3));
        hero.style.setProperty("--my", y.toFixed(3));
        frame = null;
      });
    });

    hero.addEventListener("pointerleave", () => {
      hero.style.setProperty("--mx", "0");
      hero.style.setProperty("--my", "0");
    });
  }

  /* ------------------------------------------------------------------ */
  /* Modal de login: foco, Escape y clic fuera                           */
  /* ------------------------------------------------------------------ */
  let ultimoFocoModal = null;

  function focusablesDe(contenedor) {
    return Array.from(
      contenedor.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => el.offsetParent !== null);
  }

  function modalAbierto() {
    return modal && modal.style.display === "flex";
  }

  if (modal) {
    const observer = new MutationObserver(() => {
      const abierto = modalAbierto();
      modal.setAttribute("aria-hidden", abierto ? "false" : "true");
      document.body.classList.toggle("modal-open", abierto);

      if (abierto) {
        ultimoFocoModal = document.activeElement;
        inertar(fondoModal, true);
        const email = modal.querySelector("#login-email");
        if (email) window.requestAnimationFrame(() => email.focus());
      } else {
        inertar(fondoModal, false);
        if (ultimoFocoModal && document.contains(ultimoFocoModal)) {
          ultimoFocoModal.focus();
          ultimoFocoModal = null;
        }
      }
    });

    observer.observe(modal, { attributes: true, attributeFilter: ["style"] });

    modal.addEventListener("click", (event) => {
      if (event.target === modal && typeof window.cerrarModal === "function") {
        window.cerrarModal("modal-login");
      }
    });

    modal.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && typeof window.cerrarModal === "function") {
        event.preventDefault();
        window.cerrarModal("modal-login");
        return;
      }

      if (event.key !== "Tab") return;
      const focusables = focusablesDe(modal);
      if (!focusables.length) return;

      const primero = focusables[0];
      const ultimo = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === primero) {
        event.preventDefault();
        ultimo.focus();
      } else if (!event.shiftKey && document.activeElement === ultimo) {
        event.preventDefault();
        primero.focus();
      }
    });
  }

  // El botón de ingreso del header es el punto de retorno natural al cerrar.
  if (loginButton) {
    loginButton.addEventListener("click", () => {
      ultimoFocoModal = loginButton;
    });
  }
})();
