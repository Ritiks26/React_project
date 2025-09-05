import { products } from "./products.js";

export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productId: "001",
      quantity: 2,
    },
    {
      productId: "004",
      quantity: 1,
    },
  ];
}

export function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (productId !== cartItem.productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function showDeletePopup(productId) {
  let selectedItem;
  let selectedCartItem;

  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      selectedCartItem = cartItem;
    }
  });

  products.forEach((product) => {
    if (product.id === productId) {
      selectedItem = product;
    }
  });

  let deleteProductHTML = `
  <div class="warning-box">
    <p>Do you really want to remove this product?</p>
    <div class="confirmation-box-child">
      <button class="js-accept-button">Yes</button>
      <button class="js-decline-button">No</button>
    </div>
  </div>

  <div class="removing-product-detail">
      <img class="removing-items" src="${selectedItem.image}" alt="">
    <div class="removing-content">
      <p>
        ${selectedItem.name}
      </p>
      <p>
        Quantity: ${selectedCartItem.quantity} | ${selectedItem.color}
      </p>
      <p>
        Rs. ${selectedItem.priceRupees}
      </p>
    </div>
  </div>
  `;
  document.querySelector(".js-confirmation-box").innerHTML = deleteProductHTML;
}
