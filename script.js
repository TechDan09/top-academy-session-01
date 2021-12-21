const menuBtn = document.querySelector('.mobile_menu');
const nav = document.querySelector('.nav_links');
const navLinks = nav.childNodes;
const minusBtn = document.getElementById('minus_btn');
const plusBtn = document.getElementById('plus_btn');
const cartInput = document.getElementById('cart_input');
const addToCartBtn = document.querySelector('.add_to_cart_btn');
const productPrice = 125;

let totalQuantity = Number(cartInput.textContent);
let totalPrice = totalQuantity * 125;

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

const closeNav = () => {
  nav.classList.remove('open');
};

navLinks.forEach((link) => {
  link.addEventListener('click', closeNav);
});

minusBtn.addEventListener('click', () => {
  // prevent negatiave cart value
  if (totalQuantity > 0) {
    totalQuantity--;
    cartInput.textContent = totalQuantity;
    totalPrice = totalQuantity * 125;
  }
});

plusBtn.addEventListener('click', () => {
  // prevent negatiave cart value
  totalQuantity++;
  cartInput.textContent = totalQuantity;
  totalPrice = totalQuantity * 125;
});

addToCartBtn.addEventListener('click', () => {
  console.log(`Quantity in cart: ${totalQuantity} | Total Price: ${totalPrice}`);
});
