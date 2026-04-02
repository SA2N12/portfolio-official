import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// Mobile navbar toggle
const navToggle = document.querySelector(".site-nav__toggle");
const navLinks = document.querySelector(".site-nav__links");
const siteNav = document.querySelector(".site-nav");
if (navToggle && navLinks && siteNav) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("site-nav--open");
  });
}

// Close mobile nav on link click
document.querySelectorAll(".site-nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    if (siteNav) siteNav.classList.remove("site-nav--open");
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
