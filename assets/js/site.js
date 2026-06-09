import {
  LOCALES,
  getLocale,
  setLocale,
  applyI18n,
} from "./i18n.js";
import { loadReleaseLinks, applyReleaseLinks } from "./releases.js";

function buildLangSelect(select) {
  const locale = getLocale();
  select.innerHTML = LOCALES.map(
    (l) => `<option value="${l.code}"${l.code === locale ? " selected" : ""}>${l.label}</option>`,
  ).join("");
  select.addEventListener("change", () => {
    setLocale(select.value);
    applyI18n(document.body, select.value);
  });
}

function initReveal() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.setProperty("--reveal-delay", `${Math.min(i % 6, 5) * 70}ms`);
    io.observe(el);
  });
}

function initParallaxGlow() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const glow = document.querySelector(".hero-glow");
  if (!glow || reduce) return;

  window.addEventListener(
    "mousemove",
    (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      glow.style.transform = `translate(${x}px, ${y}px)`;
    },
    { passive: true },
  );
}

export async function initSite() {
  const locale = getLocale();
  setLocale(locale);
  applyI18n(document.body, locale);

  const langSelect = document.getElementById("lang-select");
  if (langSelect) buildLangSelect(langSelect);

  if (document.body.dataset.page === "download") {
    const loading = t(locale, "dl.loading");
    document.querySelectorAll('[data-role="version"]').forEach((el) => {
      el.textContent = loading;
    });
    const data = await loadReleaseLinks();
    applyReleaseLinks(document.body, data);
  }

  initReveal();
  initParallaxGlow();
}
