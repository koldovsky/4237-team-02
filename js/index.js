// Jevlentjev Oksana

function init() {
  import("./global.header-burger.js");
  import("./index.best-deals.partial.js");
  import("./index.shopping-cart.js"); //Lilia Pinchuk
  import("./index.fakeAIButton.js");
  import("./index.testimonials.partial.js"); // Vasyl Plaksiy
  import("./index.age-gate.js"); // Pavlo Naichuk
  import("./index.history-video.js"); // Bohdan Pustovar
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
