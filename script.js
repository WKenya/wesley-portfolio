const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const year = document.querySelector("#year");
const storageKey = "wesley-portfolio-theme";
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

if (year) {
  year.textContent = new Date().getFullYear();
}

const applyTheme = (theme) => {
  if (!theme) {
    root.removeAttribute("data-theme");
    return;
  }

  root.setAttribute("data-theme", theme);
};

const getEffectiveTheme = () =>
  root.getAttribute("data-theme") || (prefersDark.matches ? "dark" : "light");

const syncToggle = () => {
  if (!themeToggle) {
    return;
  }

  const activeTheme = getEffectiveTheme();
  themeToggle.setAttribute("aria-pressed", String(activeTheme === "dark"));
  themeToggle.textContent = activeTheme === "dark" ? "Light" : "Dark";
};

applyTheme(localStorage.getItem(storageKey));
syncToggle();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = getEffectiveTheme() === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
    syncToggle();
  });
}

prefersDark.addEventListener("change", () => {
  if (!localStorage.getItem(storageKey)) {
    syncToggle();
  }
});
