import { body, header } from "../modals/modal.js";
import { byn, rub, usd } from "../varibles.js";
import { cards, addCards } from "./cards.js";
export { cart, currency, cartNumbers, val };

const basketContainer = document.querySelector(".basket__container");
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const basketList = document.querySelector(".basket__list");
const cartHTML = document.querySelectorAll(".cartBtn");
const basketClose = document.querySelector(".basket__close");
const headCartAmount = document.querySelectorAll(".header__cart-amount");
const headCartNumber = document.querySelectorAll(".header__cart-number");
const basketSum = document.querySelector(".basket__sum");
const totalSum = document.querySelector(".basket__total");

//отрисовка валюты
const currency = () => {
  if (localStorage.getItem("currency__name")) {
    return localStorage.getItem("currency__name");
  } else {
    return byn;
  }
};

let val = 0;

switch (currency()) {
  case byn:
    val = 1;
    break;
  case rub:
    val = 27.7809;
    break;
  case usd:
    val = 0.34;
    break;
  default:
    val = 1;
}

//отрисовка карточек добавленных в корзину
const getCartItem = (el) =>
  `<div class="basket__item" id="${el.id}">
    <div class="basket__image">
      <img src="${el.image}" alt="image">
    </div>
    <div class="basket__text">
      <h3 class="basket__text-title">${el.title}</h3>
      <p class="basket__text-description">${el.description}</p>
      <p class="basket__text-price">${(Number(el.price) * val).toFixed(2)} ${currency()}</p>
      <div class="btns">
        <button class="btns__minus">-</button>
        <p class="btns__number">${el.amount}</p>
        <button class="btns__plus">+</button>
      </div>
      <button class="basket__buy">Купить</button><br>
      <button class="basket__delete">Удалить</button>
    </div>
  </div>`;


//отрисовка корзины
renderBasket = () => {
  cartNumbers();
  sumPrice();
  basketList.innerHTML = "";
  if (cart && cart.length > 0) {
    cart.forEach((el) => {
      basketList.innerHTML += getCartItem(el);
    });
    sumPrice();
  }
  if (cart.length == 0) {
    totalSum.classList.add("not-active");
    basketList.innerHTML = "<h2 class='basket__clear-text'>Упс, Вы пока ничего не выбрали(((</h2>"
  }
};

// кнопки + и -
basketList.addEventListener("click", ({ target }) => {
  if (target.classList.contains("btns__plus")) {
    cart.forEach((el) => {
      if (target.closest(".basket__item").id == el.id) {
        el.amount += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderBasket();
      }
    });
  } else if (target.classList.contains("btns__minus")) {
    cart.forEach((el) => {
      if (target.closest(".basket__item").id == el.id) {
        el.amount -= 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderBasket();
      }
      if (el.amount === 0) {
          const elemNull = el;
          const elemNullId = cart.indexOf(elemNull);
          cart.splice(elemNullId, 1);
          el.amount = 1;
          localStorage.setItem("cart", JSON.stringify(cart));
          cardsConnection(el)
          renderBasket();
          addCards(cards);
      }
    });
  }
});



// удаление элемента из корзины
basketList.addEventListener("click", ({ target }) => {
  if (target.classList.contains("basket__delete")) {
    const itemDel = cart.find((elem) => {
      if (target.closest(".basket__item").id === elem.id) {
        return elem;
      }
    });
    cardsConnection(itemDel)
    const itemDelId = cart.indexOf(itemDel);
    cart.splice(itemDelId, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderBasket();
    addCards(cards);
  }
});

// количество товаров в корзине
const cartNumbers = () => {
  headCartNumber.forEach((e=>{
    e.innerHTML = cart.length;
  }))
  localStorage.setItem(
    "NumberOfGoods",
    JSON.stringify(headCartNumber.innerHTML)
  );
  if (totalSum.classList.contains("not-active")) {
    totalSum.classList.remove("not-active");
  }
  if (cart && cart.length > 0) {
    headCartAmount.forEach(e=>{
      e.classList.add("header__cart-amount_active");
    })
  }
  if (cart.length === 0) {
    headCartAmount.forEach(e=>{
    e.classList.remove("header__cart-amount_active");
    totalSum.classList.add("not-active");
  })}
};

// очистка корзины
const basketClear = document.querySelector(".basket__clear");
basketClear.addEventListener("click", () => {
  cart.forEach(e=>{
    cardsConnection(e);
  })
  cart.length = 0;
  localStorage.removeItem("cart");
  renderBasket();
  addCards(cards);
});

// отображение суммы
sumPrice = () => {
  let sum = 0;
  cart.forEach((el) => {
    sum += Number(el.price * el.amount);
  });
  basketSum.innerHTML = (sum * val).toFixed(2) +" "+ currency();
};

//открытие и закрытие корзины
cartHTML.forEach((e)=>{
  e.addEventListener("click", () => {
  renderBasket();
  basketContainer.classList.add("basket__active");
  body.classList.add("body-modal");
  header.classList.add("header-modal");
});
})
  

basketClose.addEventListener("click", () => {
  basketContainer.classList.remove("basket__active");
  body.classList.remove("body-modal");
  header.classList.remove("header-modal");
});

//связь карточек при удалении из корзины
const cardsConnection = (el) =>{
    const cartElementsId = el.id;
    cards.find((e)=>{
      if(e.id==cartElementsId){
        e.inBasket = false
        return ;
      }
    localStorage.setItem("cards", JSON.stringify(cards));  
    })
}
    