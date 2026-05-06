// =====================
// ЗАДАНИЕ 1 — Имя
// =====================
const nameInput = document.getElementById("nameInput");
const saveNameBtn = document.getElementById("saveNameBtn");
const greeting = document.getElementById("greeting");

saveNameBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name) {
    localStorage.setItem("userName", name);
    greeting.textContent = `Привет, ${name}!`;
  }
});

const savedName = localStorage.getItem("userName");
if (savedName) {
  greeting.textContent = `Привет, ${savedName}!`;
}

// =====================
// ЗАДАНИЕ 2 — Посещения
// =====================
let visits = localStorage.getItem("visits");
if (!visits) visits = 0;

visits++;
localStorage.setItem("visits", visits);

document.getElementById("visitsText").textContent =
  `Вы посетили эту страницу ${visits} раз`;

// =====================
// ЗАДАНИЕ 3 — Тема
// =====================
const lightBtn = document.getElementById("lightThemeBtn");
const darkBtn = document.getElementById("darkThemeBtn");

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "#f5f5f5";
    document.body.style.color = "black";
  }
}

lightBtn.addEventListener("click", () => {
  localStorage.setItem("theme", "light");
  applyTheme("light");
});

darkBtn.addEventListener("click", () => {
  localStorage.setItem("theme", "dark");
  applyTheme("dark");
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
}

// =====================
// ЗАДАНИЕ 4 — Любимый цвет
// =====================
const colorButtons = document.querySelectorAll(".color-btn");
const resetBtn = document.getElementById("resetColorBtn");

colorButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const color = btn.dataset.color;
    localStorage.setItem("favoriteColor", color);
    document.body.style.backgroundColor = color;
  });
});

const savedColor = localStorage.getItem("favoriteColor");
if (savedColor) {
  document.body.style.backgroundColor = savedColor;
}

resetBtn.addEventListener("click", () => {
  localStorage.removeItem("favoriteColor");
  document.body.style.backgroundColor = "#f5f5f5";
});
