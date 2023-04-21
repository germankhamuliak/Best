import {body,header} from './map.js';
export { cart,currency,headCartNumber,headCartAmount};


const basketContainer = document.querySelector(".basket__container");
const cart = JSON.parse(localStorage.getItem("Cart")) || [];
const basketList = document.querySelector(".basket__list");
const cartHTML = document.querySelector(".header__cart");
const basketClose = document.querySelector(".basket__close");
const headCartAmount = document.querySelector(".header__cart-amount");
const headCartNumber = document.querySelector(".header__cart-number");

const currency = () => {
  if (localStorage.getItem("currency-name")) {
    return localStorage.getItem("currency-name");
  } else {
    return "BYN";
  }
};

const getCartItem = (el) => `<div class="basket__item">
    <div class="basket__image">
      <img src="${el.image}" alt="image">
    </div>
    <div class="basket__text">
      <h3 class="basket__text-title">${el.title}</h3>
      <p class="basket__text-description">${el.description}</p>
      <p class="basket__text-price">${el.price} ${currency()}</p>
      <div class="btns">
        <button class="btns__minus">-</button>
        <p class="btns__number">0</p>
        <button class="btns__plus">+</button>
      </div>
      <button class="basket__buy">Купить</button><br>
      <button class="basket__delete">Удалить</button>
    </div>
  </div>`;

//удаление элемента из корзины
basketList.addEventListener("click", ({target}) => {
  if (target.classList.contains("basket__delete")) {
    cart.splice(target.closest('.basket__item').id, 1);
    };
    localStorage.setItem("Cart", JSON.stringify(cart));
    renderBasket(); 
    headCartNumber.innerHTML = cart.length;
    localStorage.setItem(
      "NumberOfGoods",
      JSON.stringify(headCartNumber.innerHTML)
    );
  });

//отрисовка элемента корзины
renderBasket = () => {
  basketList.innerHTML = "";
  if (cart && cart.length > 0) {
    cart.forEach((el) => {
      basketList.innerHTML += getCartItem(el);
    });
  }
};

//открытие и закрытие корзины
cartHTML.addEventListener("click", () => {
  renderBasket();
  basketContainer.classList.add("basket__active");
  body.classList.add("body-modal");
  header.classList.add("header-modal");
});


basketClose.addEventListener("click", () => {
  basketContainer.classList.remove("basket__active");
  body.classList.remove("body-modal");
  header.classList.remove("header-modal");
});
