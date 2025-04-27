// Jevlentjev Oksana
// === global.header-burger.js ===
// Ініціалізація бургер-меню після HTMX або звичайного DOM завантаження

const burger = document.querySelector(".burger");
const navbarRight = document.querySelector(".navbar__right");
const menuLinks = document.querySelectorAll(".navbar__menu a");

if (burger && navbarRight) {
  if (burger.dataset.listenerAttached !== "true") {
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
  } else {
    console.log("⏭️ Бургер уже ініціалізовано");
  }
}
