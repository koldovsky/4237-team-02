// Jevlentjev Oksana
// === global.header-burger.js ===
// Скрипт керує бургер-меню та блокуванням скролу

console.log("✅ Бургер-файл підключено!");

document.body.addEventListener("htmx:afterOnLoad", () => {
  const burger = document.querySelector(".burger");
  const navbarRight = document.querySelector(".navbar__right");
  const menuLinks = document.querySelectorAll(".navbar__menu a");

  console.log("burger 👉", burger);
  console.log("navbarRight 👉", navbarRight);
  console.log("menuLinks 👉", menuLinks);

  if (!burger || !navbarRight) {
    console.warn("❌ Не знайдено .burger або .navbar__right");
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
});