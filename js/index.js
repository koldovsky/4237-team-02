// Jevlentjev Oksana

function init() {
  import("./global.header-burger.js");
  import("./index.best-deals.partial.js");
  import("./index.shopping-cart.js"); //Lilia Pinchuk
  import("./index.slide-on-site.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});

// Jevlentjev Oksana
