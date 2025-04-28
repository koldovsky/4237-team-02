const slides = [
  `<li class="best-deals-carousel__slide">
    <a class="best-deals-carousel__link" href="#">
        <img
            class="best-deals-carousel__image"
            src="./img/index/wine-bootle-green.jpg"
            alt="Cabernet wine bottle"
        />
        <h4 class="best-deals-carousel__name">Cabernet</h4>
    </a>
    <p class="best-deals-carousel__price">17,00 USD</p>
    <button
        class="best-deals-carousel__add-to-cart orange_button"
        data-bs-toggle="modal"
        data-bs-target="#shopping-cart"
    >
        Add to cart
    </button>
    </li>`,
  `<li class="best-deals-carousel__slide">
    <a class="best-deals-carousel__link" href="#">
        <img
            class="best-deals-carousel__image"
            src="./img/index/wine-bootle-white.jpg"
            alt="Sauvignon Blanc wine bottle"
        />
        <h4 class="best-deals-carousel__name">Sauvignon Blanc</h4>
    </a>
    <p class="best-deals-carousel__price">12,00 USD</p>
    <button
        class="best-deals-carousel__add-to-cart orange_button"
        data-bs-toggle="modal"
        data-bs-target="#shopping-cart"
    >
        Add to cart
    </button>
    </li>`,
  `<li class="best-deals-carousel__slide">
    <a class="best-deals-carousel__link" href="#">
        <img
            class="best-deals-carousel__image"
            src="./img/index/wine-bootle-green.jpg"
            alt="Syrah wine bottle"
        />
        <h4 class="best-deals-carousel__name">Syrah</h4>
    </a>
    <p class="best-deals-carousel__price">13,00 USD</p>
    <button
        class="best-deals-carousel__add-to-cart orange_button"
        data-bs-toggle="modal"
        data-bs-target="#shopping-cart"
    >
        Add to cart
    </button>
    </li>`,
  `<li class="best-deals-carousel__slide">
    <a class="best-deals-carousel__link" href="#">
        <img
            class="best-deals-carousel__image"
            src="./img/index/wine-bootle-white.jpg"
            alt="Pinot Grigio wine bottle"
        />
        <h4 class="best-deals-carousel__name">Pinot Grigio</h4>
    </a>
    <p class="best-deals-carousel__price">10,00 USD</p>
    <button
        class="best-deals-carousel__add-to-cart orange_button"
        data-bs-toggle="modal"
        data-bs-target="#shopping-cart"
    >
        Add to cart
    </button>
    </li>`,
];

let currentSlide = 0;

function renderCarousel() {
  const slideContainer = document.querySelector(".best-deals-carousel__track");
  slideContainer.innerHTML = slides[currentSlide];
  if (window.matchMedia("(min-width: 480px)").matches) {
    const secondSlide = (currentSlide + 1) % slides.length;
    slideContainer.innerHTML += slides[secondSlide];
    if (window.matchMedia("(min-width: 992px)").matches) {
      const thirdSlide = (currentSlide + 2) % slides.length;
      slideContainer.innerHTML += slides[thirdSlide];
    }
  }

  updateIndicators();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  renderCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  renderCarousel();
}

function updateIndicators() {
  const indicators = document.querySelectorAll(
    ".best-deals-carousel__indicator"
  );
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add("best-deals-carousel__indicator--active");
    } else {
      indicator.classList.remove("best-deals-carousel__indicator--active");
    }

    indicator.addEventListener("click", () => {
      currentSlide = index;
      renderCarousel();
    });
  });
}

const nextButton = document.querySelector(".best-deals-carousel__button--next");
nextButton.addEventListener("click", nextSlide);

const prevButton = document.querySelector(".best-deals-carousel__button--prev");
prevButton.addEventListener("click", prevSlide);

window.addEventListener("resize", renderCarousel);

renderCarousel();
