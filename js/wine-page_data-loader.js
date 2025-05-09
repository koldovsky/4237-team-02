const params = new URLSearchParams(window.location.search);
const wineName = params.get("wine");

if (wineName) {
  fetch(`wine-data/${wineName}.json`)
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("wine-details");

      const image = `
        <div class="wine-gallery-wrapper">
          <button class="gallery-arrow gallery-arrow--left">&#10094;</button>
          <div class="wine-gallery">
            <img class="wine-image" src="${data.image}" alt="${data.name}" />
          </div>
          <button class="gallery-arrow gallery-arrow--right">&#10095;</button>
        </div>
        <div class="wine-thumbnails">
          <img class="wine-thumbnail wine-thumbnail--active" src="${data.image}" alt="${data.name} thumbnail" />
        </div>
      `;

      const content = `
        <div class="wine-page__content">
          <div class="wine-info">
            <p class="stock">${data.stock}</p>
            <h2 class="wine-name">${data.name}</h2>
            <p class="product-code">${data.code}</p>
            <p class="price">${data.price}</p>
          </div>
          <div class="wine-page_divider"></div>
          <div class="wine-purchase">
            <input
              type="number"
              class="wine-quantity"
              placeholder="Quantity"
              min="1"
              max="100"
              value="1"
            />
            <button class="orange_button" id="add-to-cart-button">
              Add to cart
            </button>
          </div>
          <div class="wine-description">
            <h3 class="wine-description__title">Description</h3>
            <p class="wine-description__text">${data.description}</p>
          </div>
        </div>
      `;

      container.innerHTML = `
        <div class="wine-media">
          ${image}
        </div>
        ${content}
      `;
      const galleryWrapper = document.querySelector(".wine-gallery-wrapper");
      if (galleryWrapper) {
        galleryWrapper.querySelectorAll(".gallery-arrow").forEach((arrow) => {
          arrow.style.transition = "opacity 0.2s ease";
          arrow.style.opacity = "0";
        });

        galleryWrapper.addEventListener("mouseenter", () => {
          galleryWrapper.querySelectorAll(".gallery-arrow").forEach((arrow) => {
            arrow.style.opacity = "1";
          });
        });

        galleryWrapper.addEventListener("mouseleave", () => {
          galleryWrapper.querySelectorAll(".gallery-arrow").forEach((arrow) => {
            arrow.style.opacity = "0";
          });
        });
      }
      document
        .getElementById("add-to-cart-button")
        .addEventListener("click", () => {
          const quantity = parseInt(
            document.querySelector(".wine-quantity").value,
            10
          );

          const wineToAdd = {
            idProduct: data.code,
            nameProduct: data.name,
            price: data.price,
            image: data.image,
            quantity: quantity,
          };

          let cartItems =
            JSON.parse(localStorage.getItem("shoppingCart")) || [];

          const existingItem = cartItems.find(
            (item) => item.idProduct === wineToAdd.idProduct
          );

          if (existingItem) {
            existingItem.quantity += wineToAdd.quantity;
          } else {
            cartItems.push(wineToAdd);
          }

          localStorage.setItem("shoppingCart", JSON.stringify(cartItems));

          const wrapper = document.querySelector("#shopping-cart-wrapper");
          if (wrapper) {
            wrapper.setAttribute("hx-get", "index.shopping-cart.partial.html");
            wrapper.setAttribute("hx-trigger", "load");
            wrapper.setAttribute("hx-swap", "outerHTML");
            htmx.process(wrapper);
          }

          // openCartAfterLoad = true; // Вимкнено
        });
    })
    .catch(() => {
      document.getElementById(
        "wine-details"
      ).innerHTML = `<p>Такого вина не знайдено</p>`;
    });
}

// Видалено блок, що автоматично відкриває кошик після завантаження

document.body.addEventListener("htmx:afterSwap", (event) => {
  if (
    event.detail &&
    event.detail.target &&
    event.detail.target.id === "shopping-cart-wrapper"
  ) {
    if (typeof initCart === "function") {
      setTimeout(() => {
        initCart();
      }, 50);
    }
  }
});
