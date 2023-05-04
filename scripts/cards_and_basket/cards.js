import { cart, currency, headCartAmount, cartNumbers, val } from "./basket.js";
import { URL, options } from "../varibles.js";
export { cardsList, renderCards };

const cards = [];
const cardsList = document.querySelector(".cards__list");

//добавление карточек на страницу
const request = new Request(URL, options);
fetch(request)
  .then((res) => res.json())
  .then((data) => {
    cards.splice(0, cards.length, ...data);
    localStorage.setItem("cards", JSON.stringify(data));
    renderCards();
  });

// const cardsIsChecked = [];

const renderCards = () => {
  cardsList.innerHTML = "";
  cards.forEach((el) => (cardsList.innerHTML += getCardHtml(el)));
  localStorage.setItem("cards", JSON.stringify(cards));
  const btnsAddToCart = document.querySelectorAll(".cards__item-addToCart");

  btnsAddToCart.forEach((el, id) => {
    // localStorage.setItem("isChecked", JSON.stringify(cardsIsChecked));
    el.isChecked = false;

    if (el.isChecked) {
      el.classList.add("not-active");
    }

    el.addEventListener("click", () => {
      cart.push(cards[id]);
      localStorage.setItem("cart", JSON.stringify(cart));
      cartNumbers();

      if (el.isChecked) {
        if (el.classList.contains("not-active")) {
          el.classList.remove("not-active");
        }
      } else if (!el.isChecked) {
        el.classList.add("not-active");
      }
    });
  });
};

window.onload = () => {
  const prevCards = JSON.parse(localStorage.getItem("cards"));
  if (prevCards && prevCards.length > 0) {
    cards.push(...prevCards);
  }
  renderCards();
  if (cart && cart.length > 0) {
    headCartAmount.classList.add("header__cart-amount_active");
  }
  cartNumbers();
};

//отрисовка карточки
const getCardHtml = (data) =>
  `<div class="cards__item">
  <div class="cards__item-img">
      <img src="${data.image}" alt="image" />
      <div class="cards__item-view">Быстрый просмотр</div>
    </div>
    <p class="cards__item-price">${(Number(data.price) * val).toFixed(
      2
    )} ${currency()}</p>
    <p class="cards__item-text">${data.title} ~ ${data.description}</p>
      <button class="cards__item-addToCart">В корзину</button>
      <button class="cards__item-inCart">Добавлено в корзину</button>   
</div>`;
