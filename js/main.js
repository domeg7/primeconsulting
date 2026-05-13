/* ============================================================
   Prime Consulting GmbH — main.js
   Vanilla JS. Sticky-Header-State, Mobile-Nav, Smooth-Scroll,
   Toast-Handler für [data-not-implemented].
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Sticky header shadow on scroll ---------- */
  const header = document.querySelector(".header");
  let lastScroll = 0;
  const onScroll = () => {
    const y = window.scrollY;
    if (header) {
      header.classList.toggle("is-scrolled", y > 8);
    }
    lastScroll = y;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const navPanel = document.querySelector(".nav-panel");
  const body = document.body;

  const closeNav = () => {
    if (!navToggle || !navPanel) return;
    navToggle.setAttribute("aria-expanded", "false");
    navPanel.classList.remove("is-open");
    body.style.overflow = "";
  };

  if (navToggle && navPanel) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navPanel.classList.toggle("is-open", !isOpen);
      body.style.overflow = !isOpen ? "hidden" : "";
    });

    // Close on link click inside panel
    navPanel.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => closeNav());
    });

    // Close on resize to desktop
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth >= 768) closeNav();
      }, 100);
    });

    // Escape closes nav
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
        closeNav();
        navToggle.focus();
      }
    });
  }

  /* ---------- Toast handler for not-implemented links ---------- */
  let activeToast = null;
  let toastTimer = null;

  function showToast(msg) {
    if (activeToast) {
      activeToast.classList.remove("show");
      const old = activeToast;
      setTimeout(() => old.remove(), 300);
      clearTimeout(toastTimer);
    }
    const t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("role", "status");
    t.setAttribute("aria-live", "polite");
    t.textContent = msg;
    document.body.appendChild(t);
    activeToast = t;
    requestAnimationFrame(() => t.classList.add("show"));
    toastTimer = setTimeout(() => {
      t.classList.remove("show");
      setTimeout(() => {
        if (t.parentNode) t.remove();
        if (activeToast === t) activeToast = null;
      }, 300);
    }, 4000);
  }

  document.querySelectorAll("[data-not-implemented]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const msg = el.dataset.notImplemented || "Diese Funktion ist noch nicht verfügbar.";
      showToast(msg);
    });
  });

  /* ---------- Smooth-scroll for anchor links (closes mobile nav) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href === "#" || href.length < 2) return;
    link.addEventListener("click", (e) => {
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      closeNav();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // Update URL without jump
      history.replaceState(null, "", href);
    });
  });

  /* ---------- Year in footer ---------- */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
