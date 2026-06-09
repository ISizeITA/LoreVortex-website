import {
  LOCALES,
  getLocale,
  setLocale,
  applyI18n,
  t,
} from "./i18n.js?v=7";
import { loadReleaseLinks, applyReleaseLinks } from "./releases.js?v=7";

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
    { threshold: 0.08, rootMargin: "0px 0px -20px 0px" },
  );

  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.setProperty("--reveal-delay", `${Math.min(i % 6, 5) * 70}ms`);
    io.observe(el);
    // Above-the-fold blocks (download cards, hero): show immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      el.classList.add("is-visible");
      io.unobserve(el);
    }
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

async function loadDownloadReleases(locale) {
  const loading = t(locale, "dl.loading");
  document.querySelectorAll('[data-role="version"]').forEach((el) => {
    el.textContent = loading;
  });

  const timeoutMs = 6000;
  const data = await Promise.race([
    loadReleaseLinks(),
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Release fetch timeout")), timeoutMs);
    }),
  ]);
  applyReleaseLinks(document.body, data);
}

export async function initSite() {
  document.documentElement.classList.add("js");

  const locale = getLocale();
  setLocale(locale);
  applyI18n(document.body, locale);

  const langSelect = document.getElementById("lang-select");
  if (langSelect) buildLangSelect(langSelect);

  initReveal();
  initParallaxGlow();

  if (document.body.dataset.page === "download") {
    try {
      await loadDownloadReleases(locale);
    } catch (err) {
      console.error("Release links failed:", err);
      applyReleaseLinks(document.body, await loadReleaseLinks());
    }
  }
}
