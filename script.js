// UI ELEMENTS
const menuBtn = document.querySelector('.mobile_menu');
const nav = document.querySelector('.nav_links');
const navLinks = nav.childNodes;
const minusBtn = document.getElementById('minus_btn');
const plusBtn = document.getElementById('plus_btn');
const cartInput = document.getElementById('cart_input');
const addToCartBtn = document.querySelector('.add_to_cart_btn');
const cart = document.getElementById('cart');
const productPrice = 125;
const productImages = document.querySelector('.image_thumbnails').childNodes;
const mainImage = document.getElementById('main_image');

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
  let temp = Number(cartInput.textContent);
  if (temp > 0) {
    totalQuantity--;
    totalPrice = totalQuantity * productPrice;
    cartInput.textContent = temp - 1;
  }
});

plusBtn.addEventListener('click', () => {
  totalQuantity++;
  totalPrice = totalQuantity * productPrice;
  let temp = Number(cartInput.textContent);
  cartInput.textContent = temp + 1;
});

const showCart = () => {
  console.log(`Quantity in cart: ${totalQuantity} | Total Price: ${totalPrice}`);
  cartInput.textContent = 0;
};

addToCartBtn.addEventListener('click', showCart);
cart.addEventListener('click', showCart);

productImages.forEach((image) => {
  image.addEventListener('click', () => {
    //removing the "-thumbnail" from the image src name in
    //order to access high resolution version of image
    let imageSrc = image.src.replace('-thumbnail', '');
    mainImage.src = imageSrc;
  });
});
