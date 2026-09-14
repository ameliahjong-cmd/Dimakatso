let cart = JSON.parse(localStorage.getItem('farmasi_cart')) || [];

function saveCart() {
  localStorage.setItem('farmasi_cart', JSON.stringify(cart));
  updateCartCount();
}

function addToCart(name, price) {
  let existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: name, price: price, quantity: 1 });
  }
  saveCart();
  alert(name + " has been added to your cart!");
}

function updateCartCount() {
  let count = cart.reduce((sum, item) => sum + item.quantity, 0);
  let badge = document.getElementById('cart-count');
  if (badge) {
    badge.innerText = count;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
});
