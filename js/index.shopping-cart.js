document.addEventListener("click", function (event) {
  const btn = event.target.closest(".craft-wines-container__button");
  if (!btn) return;

  const idProduct = btn.getAttribute("data-idProduct");
  const nameProduct = btn.getAttribute("data-nameProduct");
  const price = btn.getAttribute("data-price");
  const image = btn.getAttribute("data-image");
  const quantity = 1;

  // Отримуємо поточні дані з localStorage
  let cartItems = JSON.parse(localStorage.getItem("shoppingCart")) || [];

  // Перевіряємо, чи товар з таким id вже є
  const existingItem = cartItems.find((item) => item.idProduct === idProduct);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ idProduct, nameProduct, price, image, quantity });
  }

  // Оновлюємо localStorage
  localStorage.setItem("shoppingCart", JSON.stringify(cartItems));
});

/*loadCartFromLocalStorage()
        Завантажує товари з localStorage у DOM. Якщо кошик порожній, вставляє мок-дані.
        Зчитує масив товарів із localStorage за ключем "shoppingCart".
        Якщо даних немає, створює масив з 3 мок-продуктів.
        Очищає DOM-вміст у <ul id="cart-items">.
        Для кожного товару створює <li>, вставляє розмітку з даними, додає у DOM.
        Додає слухачі події input на поля кількості — для перерахунку суми при зміні кількості.
        Визиває updateCartTotal() для оновлення загальної суми.
        */
function loadCartFromLocalStorage(cartItems) {
  // Отримуємо дані з localStorage
  cartItems = JSON.parse(localStorage.getItem("shoppingCart")) || [];

  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = ""; // Очистити попередній список товарів

  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.className = "product-item product";
    li.setAttribute("data-id", item.idProduct);
    // Формування HTML розмітки кожного товару
    li.innerHTML = `
           <div class="product__id" value="${item.idProduct}"></div>
           <div class="product-item__inner">
              <div class="product-img">
                 <img
                    class="craft-wines-container__image"
                    src="${item.image}"
                    alt="..." />
              </div>
              <div class="product-content">
                 <div class="product-title">
                    <a href="#" class="product-name">${item.nameProduct}</a>
                 </div>
                 <div class="product-amount">
                    <p class="product-price">${item.price}</p>
                 </div>
                 <div class="input-quantity">
                    <input
                       type="number"
                       class="product-quantity"
                       value="${item.quantity}"
                       min="1"
                       step="1" />
                 </div>
              </div>
              <div class="product-remove">
                 <svg width="14" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                       fill-rule="evenodd"
                       clip-rule="evenodd"
                       d="M10 2h3.6c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H.4C.2 4 0 3.9 0 3.6V2.4c0-.2.2-.4.4-.3h3.7V2L4.9.3c.1-.2.2-.3.4-.3h3.5c.1 0 .3.1.4.2l.8 1.7V2zM1.8 16.1c.1 1 1 1.9 2 1.9h6.3c1.1 0 1.9-.8 2-1.9l1-11.1H1l.8 11.1zM12 6l-.8 10.1c0 .5-.5.9-1 .9H3.8c-.5 0-1-.4-1-.9L2 6h10zM5 8.1h1v6H5v-6zm4 0H8v6h1v-6z"
                       fill="#9199AB"></path>
                 </svg>
              </div>
           </div>
        `;

    cartList.appendChild(li);
    const quantityInput = li.querySelector(".product-quantity");

    quantityInput.addEventListener("input", function () {
      // Додатково очищаємо значення, якщо вставлено щось нечислове
      if (quantityInput.value < 1) {
        quantityInput.value = 1;
      }
    });

    // Обновлення total при зміні кількості
    quantityInput.addEventListener("input", updateCartTotal);
  });
  updateCartTotal();
}

/*updateCartTotal()
        Обчислює загальну вартість товарів у кошику.
        Викликається при зміні кількості товару або при завантаженні кошика.
        Витягує ціну та кількість товару, обчислює загальну суму і виводить її в cart-total.
        Збирає всі .product з DOM.
        Проходиться по всіх елементах з класом .product.
        Зчитує ціну (.product-price) та кількість (.product-quantity) для кожного товару.
        Перетворює ціну з 10,00USD у число 10.00.
        Підсумовує значення price * quantity у змінну total.
        Виводить загальну суму в елемент з id="cart-total".
        */

function updateCartTotal() {
  const products = document.querySelectorAll(".product");
  let total = 0;

  products.forEach((product) => {
    const priceText =
      product.querySelector(".product-price")?.textContent.trim() || "0";
    const quantity = Number(
      product.querySelector(".product-quantity")?.value || 1
    );

    // Перетворення ціни з рядка на число (видаляє USD, коми тощо)
    const numericPrice =
      parseFloat(priceText.replace(/[^\d.,]/g, "").replace(",", ".")) || 0;

    total += numericPrice * quantity;
  });

  const totalElement = document.getElementById("cart-total");
  if (totalElement) {
    totalElement.textContent = `Total: ${total.toFixed(2)}USD`;
  }
}

/*saveCartToLocalStorage()
        Зберігає поточний стан кошика в localStorage. 
        Збирає всі .product з DOM.
        Витягує з кожного id, name, price, quantity. 
        Створює масив об’єктів товарів.
        Зберігає цей масив у localStorage під ключем "shoppingCart".
        */

function saveCartToLocalStorage() {
  const products = document.querySelectorAll(".product");
  const cartItems = [];
  products.forEach((product) => {
    const idProduct = product.getAttribute("data-id");
    const nameProduct =
      product.querySelector(".product-name")?.textContent.trim() || "";
    const price =
      product.querySelector(".product-price")?.textContent.trim() || "";
    const imgElement = product.querySelector(".craft-wines-container__image");
    const image = imgElement.getAttribute("src") || "";
    const quantity =
      product.querySelector(".input-quantity .product-quantity")?.value || 1;

    cartItems.push({
      idProduct,
      nameProduct,
      price,
      image,
      quantity: Number(quantity),
    });
  });
  localStorage.setItem("shoppingCart", JSON.stringify(cartItems));
}

/*
        document.getElementById('cart-items').addEventListener('click', ...)
        Призначення: Обробка видалення товару з кошика при кліку на іконку смітника. 
        Витягує товар з DOM, видаляє його, оновлює localStorage і перераховує загальну суму.
        Використовує метод closest() для знаходження найближчого батьківського елемента з класом product.
        Використовує метод remove() для видалення елемента з DOM.
        Викликає saveCartToLocalStorage() для оновлення localStorage.
        Викликає updateCartTotal() для перерахунку загальної суми.
        Оновлює localStorage і перераховує загальну суму.
        */
document
  .getElementById("cart-items")
  .addEventListener("click", function (event) {
    const removeBtn = event.target.closest(".product-remove");
    if (removeBtn) {
      const productItem = removeBtn.closest(".product");
      if (productItem) {
        productItem.remove(); // видаляємо з DOM
        saveCartToLocalStorage(); // оновлюємо localStorage
        updateCartTotal(); // оновлюємо total
      }
    }
  });

const promoInput = document.getElementById("promo-code");
const promoBtn = document.getElementById("promo-apply-btn");
let isPromoApplied = false; // щоб не накладати знижку повторно
/*
        promoBtn.addEventListener('click', ...) та applyPromoDiscount()
        Застосування промокоду, якщо ще не застосований.
        applyPromoDiscount() деталі:
        Витягує число з cart-total.
        Зменшує його на 10%.
        Вставляє нове значення назад у cart-total.
        */
promoBtn.addEventListener("click", function () {
  if (promoInput.value.trim() && !isPromoApplied) {
    applyPromoDiscount();
    isPromoApplied = true;
  }
});
// Застосовує знижку 10%
function applyPromoDiscount() {
  const totalElement = document.getElementById("cart-total");
  const totalText = totalElement.textContent.match(/[\d.]+/); // витягує число
  if (totalText) {
    const total = parseFloat(totalText[0]);
    const discountedTotal = (total * 0.9).toFixed(2);
    totalElement.textContent = `Total: ${discountedTotal}USD`;
  }
}
/*
        saveOrderToLocalStorage()
        Зберігає замовлення (товари + дані форми) в localStorage під ключем "orders".
        Збирає ім'я, email, телефон, промокод з форми.
        Отримує усі продукти з DOM.
        Обчислює загальну суму.
        Створює об’єкт замовлення з часом (createdAt) та додає в масив orders.
        Зберігає orders у localStorage.
        Потім:
        Очищає форму.
        Очищає кошик в DOM.
        Очищає total.
        Видаляє кошик із localStorage.
        Закриває модальне вікно через Bootstrap API.
        Показує повідомлення alert з деталями замовлення.
        */
function saveOrderToLocalStorage() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const promoCode = document.getElementById("promo-code").value.trim();

  // Отримати товари прямо з DOM
  const products = document.querySelectorAll(".product");
  const cartItems = [];

  products.forEach((product) => {
    const id = product.getAttribute("data-id");
    const name =
      product.querySelector(".product-name")?.textContent.trim() || "";
    const price =
      product.querySelector(".product-price")?.textContent.trim() || "";
    const quantity = product.querySelector(".product-quantity")?.value || 1;

    cartItems.push({
      id,
      name,
      price,
      quantity: Number(quantity),
    });
  });

  const totalText = document.getElementById("cart-total")?.textContent || "";
  const totalMatch = totalText.match(/[\d.]+/);
  const total = totalMatch ? parseFloat(totalMatch[0]) : 0;

  const newOrder = {
    name,
    email,
    phone,
    promoCode: promoCode || null,
    items: cartItems,
    total,
    createdAt: new Date().toISOString(),
  };

  const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
  existingOrders.push(newOrder);
  localStorage.setItem("orders", JSON.stringify(existingOrders));

  console.log("Order saved to history:", newOrder);

  // Очищення форми
  document.querySelector(".cart__form").reset();
  document.getElementById("promo-code").value = "";

  // Очищення кошика в DOM
  document.getElementById("cart-items").innerHTML = "";

  // Очищення total
  document.getElementById("cart-total").textContent = "Total:: 0.00USD";

  // Очищення localStorage
  localStorage.removeItem("shoppingCart");

  // Закриття модального вікна (викликає Bootstrap подію)
  const modalElement = document.getElementById("shopping-cart");
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (modalInstance) {
    modalInstance.hide();
  }
  // Повідомлення про успішне замовлення
  const message = `
           Дякуємо за замовлення, ${name}!
           📧 Email: ${email}
           📱 Телефон: ${phone}
           🛒 Товарів: ${cartItems.length}
           ${cartItems
             .map(
               (item) =>
                 `- ${item.name} (${item.quantity} шт.) - ${item.price} USD`
             )
             .join("\n")}
          
           💰 Загальна сума: ${total.toFixed(2)} USD
  `;
  alert(message);
}

const submitBtn = document.querySelector(".cart__order-btn");

submitBtn.addEventListener("click", function () {
  const form = document.querySelector(".cart__form");
  const inputs = form.querySelectorAll("input");

  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add("error");
      isValid = false;
    } else {
      input.classList.remove("error");
    }
  });

  if (isValid) {
    saveOrderToLocalStorage();
    form.reset(); // очищення форми
  }
});

const modal = document.getElementById("shopping-cart");
modal.addEventListener("shown.bs.modal", loadCartFromLocalStorage);
modal.addEventListener("hidden.bs.modal", saveCartToLocalStorage);