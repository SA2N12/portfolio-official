import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

// --- Random color palette on each page load ---
function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
}

function applyRandomPalette() {
  const hue = Math.floor(Math.random() * 360);

  const colors = {
    "--color-primary":        { h: hue, s: 100, l: 72 },
    "--color-primary-dark":   { h: hue, s: 100, l: 56 },
    "--color-primary-medium": { h: hue, s: 80,  l: 59 },
    "--color-secondary":      { h: (hue + 20) % 360, s: 90, l: 60 },
    "--color-accent-warm":    { h: (hue + 35) % 360, s: 100, l: 66 },
  };

  const root = document.documentElement;
  for (const [prop, { h, s, l }] of Object.entries(colors)) {
    const [r, g, b] = hslToRgb(h, s, l);
    root.style.setProperty(prop, `rgb(${r}, ${g}, ${b})`);
    root.style.setProperty(`${prop}-rgb`, `${r}, ${g}, ${b}`);
  }
}

applyRandomPalette();
// --- End random palette ---

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// Mobile navbar toggle
const navToggle = document.querySelector(".site-nav__toggle");
const navLinks = document.querySelector(".site-nav__links");
const siteNav = document.querySelector(".site-nav");
if (navToggle && navLinks && siteNav) {
  navToggle.addEventListener("click", () => {
    if (siteNav.classList.contains("site-nav--open")) {
      siteNav.classList.add("site-nav--closing");
      siteNav.classList.remove("site-nav--open");
      setTimeout(() => siteNav.classList.remove("site-nav--closing"), 550);
    } else {
      siteNav.classList.remove("site-nav--closing");
      siteNav.classList.add("site-nav--open");
    }
  });
}

// Close mobile nav on link click
document.querySelectorAll(".site-nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    if (siteNav && siteNav.classList.contains("site-nav--open")) {
      siteNav.classList.add("site-nav--closing");
      siteNav.classList.remove("site-nav--open");
      setTimeout(() => siteNav.classList.remove("site-nav--closing"), 550);
    }
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinksAll = document.querySelectorAll(".site-nav__link");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + 100;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY >= top && scrollY < top + height) {
      navLinksAll.forEach((link) => {
        link.classList.remove("site-nav__link--active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("site-nav__link--active");
        }
      });
    }
  });

  // Top section
  if (scrollY < (sections[0]?.offsetTop || 200)) {
    navLinksAll.forEach((link) => {
      link.classList.remove("site-nav__link--active");
      if (link.getAttribute("href") === "#top") {
        link.classList.add("site-nav__link--active");
      }
    });
  }

  // Back to top button visibility
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    if (window.scrollY > 400) {
      backToTop.classList.add("back-to-top--visible");
    } else {
      backToTop.classList.remove("back-to-top--visible");
    }
  }
});

// Contact form AJAX submit
const contactForm = document.querySelector(".contact__form");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const status = contactForm.querySelector(".contact__form-status");
    btn.disabled = true;
    btn.textContent = "Envoi en cours...";
    status.textContent = "";
    status.className = "contact__form-status";

    try {
      const res = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        status.textContent = "Message envoyé avec succès !";
        status.classList.add("contact__form-status--success");
        contactForm.reset();
      } else {
        status.textContent = "Une erreur est survenue, réessayez.";
        status.classList.add("contact__form-status--error");
      }
    } catch {
      status.textContent = "Une erreur est survenue, réessayez.";
      status.classList.add("contact__form-status--error");
    }
    btn.disabled = false;
    btn.textContent = "Envoyer Message";
  });
}

// Marquee slow on hover (smooth via playbackRate)
document.querySelectorAll(".experience__marquee").forEach((marquee) => {
  const track = marquee.querySelector(".experience__marquee-track");
  if (!track) return;
  marquee.addEventListener("mouseenter", () => {
    track.getAnimations().forEach((a) => (a.playbackRate = 0.3));
  });
  marquee.addEventListener("mouseleave", () => {
    track.getAnimations().forEach((a) => (a.playbackRate = 1));
  });
});
