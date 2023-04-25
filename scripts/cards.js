import { cart, currency, headCartNumber, headCartAmount } from "./basket.js";
export { cardsList };

const URL = "https://6428388446fd35eb7c4e2663.mockapi.io/wild/pr/card";

const options = {
  method: "GET",
};

const cards = [];
const request = new Request(URL, options);
fetch(request)
  .then((res) => res.json())
  .then((data) => {
    cards.splice(0, cards.length, ...data);
    localStorage.setItem("cards", JSON.stringify(data));
    renderCards();
  });

const cardsList = document.querySelector(".cards__list");

const renderCards = () => {
  cardsList.innerHTML = "";
  cards.forEach((el) => (cardsList.innerHTML += getCardHtml(el)));
  localStorage.setItem("cards", JSON.stringify(cards));
  const btnsAddToCart = document.querySelectorAll(".cards__item-addToCart");
  btnsAddToCart.forEach((el, id) => {
    el.addEventListener("click", () => {
      cart.push(cards[id]);
      localStorage.setItem("Cart", JSON.stringify(cart));
      headCartNumber.innerHTML = cart.length;
      localStorage.setItem(
        "NumberOfGoods",
        JSON.stringify(headCartNumber.innerHTML)
      );
      if (cart && cart.length > 0) {
        headCartAmount.classList.add("header__cart-amount_active");
      }
      alert("Товар добавлен в корзину");
      el.classList.add("not-active");
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
  headCartNumber.innerHTML = JSON.parse(localStorage.getItem("NumberOfGoods"));
};

const getCardHtml = (data) =>
  `<div class="cards__item">
  <div class="cards__item-img">
      <img src="${data.image}" alt="image" />
      <div class="cards__item-view">Быстрый просмотр</div>
    </div>
    <p class="cards__item-price">${data.price} ${currency()}</p>
    <p class="cards__item-text">${data.title} ~ ${data.description}</p>
      <button class="cards__item-addToCart">В корзину</button>
      <button class="cards__item-inCart">Добавлено в корзину</button>   
</div>`;
