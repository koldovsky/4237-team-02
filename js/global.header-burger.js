// Jevlentjev Oksana
// === global.header-burger.js ===
// Ініціалізація бургер-меню після HTMX або звичайного DOM завантаження


// Знаходимо потрібні елементи
const burger = document.querySelector(".burger");
const navbarRight = document.querySelector(".navbar__right");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");
const menuLinks = document.querySelectorAll(".navbar__menu a");

// Функція для відкриття/закриття меню по кліку на бургер
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navbarRight.classList.toggle("is-open");
  menu.classList.toggle("is-open");
  icons.classList.toggle("is-open");
  document.body.classList.toggle("no-scroll"); // Заборона прокрутки
});

// Функція для закриття меню по кліку на пункт меню
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    burger.classList.remove("active"); // Забрати активність бургеру
    navbarRight.classList.remove("is-open"); // Закрити фон
    menu.classList.remove("is-open"); // Закрити меню
    icons.classList.remove("is-open"); // Закрити іконки
    document.body.classList.remove("no-scroll"); // Дозволити прокрутку
  });
});
