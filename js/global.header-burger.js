// Jevlentjev Oksana
// === global.header-burger.js ===
// Ініціалізація бургер-меню після HTMX або звичайного DOM завантаження

function initBurger() {
  const burger = document.querySelector(".burger");
  const navbarRight = document.querySelector(".navbar__right");
  const menuLinks = document.querySelectorAll(".navbar__menu a");

  if (!burger || !navbarRight) {
    console.warn("❌ Не знайдено .burger або .navbar__right");
    return;
  }

  if (burger.dataset.listenerAttached === "true") {
    console.log("⏭️ Бургер уже ініціалізовано");
    return;
  }

  const toggleMenu = () => {
    burger.classList.toggle("active");
    navbarRight.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll");
  };

  const closeMenu = () => {
    burger.classList.remove("active");
    navbarRight.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  };

  burger.addEventListener("click", toggleMenu);
  menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

  burger.dataset.listenerAttached = "true";
  console.log("✅ Бургер-меню готове");
}

// Запуск при першому завантаженні
document.addEventListener("DOMContentLoaded", initBurger);

// Повторний запуск після завантаження partial'а через HTMX
document.body.addEventListener("htmx:afterOnLoad", initBurger);
