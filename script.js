const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const year = document.querySelector("#year");
const revealTargets = document.querySelectorAll(".hero, .section, .site-footer");
const storageKey = "wesley-portfolio-theme";
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

if (year) {
  year.textContent = new Date().getFullYear();
}

revealTargets.forEach((element) => {
  element.setAttribute("data-reveal", "");
});

const applyTheme = (theme) => {
  if (!theme) {
    root.removeAttribute("data-theme");
    return;
  }

  root.setAttribute("data-theme", theme);
};

const getEffectiveTheme = () => root.getAttribute("data-theme") || (prefersDark.matches ? "dark" : "light");

const storedTheme = localStorage.getItem(storageKey);
applyTheme(storedTheme);

if (themeToggle) {
  const syncToggle = () => {
    const activeTheme = getEffectiveTheme();
    themeToggle.setAttribute("aria-pressed", String(activeTheme === "dark"));
    themeToggle.textContent = activeTheme === "dark" ? "Light" : "Dark";
  };

  syncToggle();

  themeToggle.addEventListener("click", () => {
    const currentTheme = getEffectiveTheme();
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
    syncToggle();
  });

  prefersDark.addEventListener("change", () => {
    if (!localStorage.getItem(storageKey)) {
      syncToggle();
    }
  });
}

const motionSafe = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (motionSafe && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -4% 0px",
    }
  );

  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}
