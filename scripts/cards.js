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

window.onload = () => {
  const prevCards = JSON.parse(localStorage.getItem("cards"));
  if (prevCards && prevCards.length > 0) {
    cards.push(...prevCards);
  }
  renderCards();
};

const cardsList = document.querySelector(".cards__list");
const currency = document.querySelector(".currency-name");

const getCardHtml = (data) =>
  `<div class="cards__item">
  <div class="cards__item-img">
      <img src="${data.image}" alt="image" />
      <a href="#" class="cards__item-view">Быстрый просмотр</a>
    </div>
    <p class="cards__item-price">${data.price} ${currency.innerHTML}</p>
    <p class="cards__item-text">${data.title} ~ ${data.description}</p>
    <div class="cards__item-group">
      <button class="cards__item-addToCart">В корзину</button>
      <div class="cards__item-btns btns">
        <button class="btns__minus">-</button>
        <p class="btns__number"></p>
        <button class="btns__plus">+</button>
      </div>
    </div>
</div>`;

// + / -

const minus = document.querySelectorAll(".btns__minus");
const numberGoods = document.querySelectorAll(".btns__number");
const plus = document.querySelectorAll(".btns__plus");
const headCartNumber = document.querySelector(".header__cart-number");
// headCartNumber.innerHTML = Number(headCartNumber.innerHTML);
headCartNumber.innerHTML = 0;
numberGoods.innerHTML = 0;

minus.forEach((el) => {
  el.addEventListener("click", () => {
    numberGoods.innerHTML -= 1;
    // headCartNumber.innerHTML -= 1;
  });
});

plus.forEach((el) => {
  el.addEventListener("click", () => {
    numberGoods.innerHTML += 1;
    // headCartNumber.innerHTML += 1;
  });
});

const renderCards = () => {
  cardsList.innerHTML = "";
  cards.forEach((el) => (cardsList.innerHTML += getCardHtml(el)));
  localStorage.setItem("cards", JSON.stringify(cards));
  const btnsAddToCart = document.querySelectorAll(".cards__item-addToCart");
  btnsAddToCart.forEach((el, id) => {
    el.addEventListener("click", () => {
      cart.push(cards[id]);
      localStorage.setItem("Cart", JSON.stringify(cart));
    });
  });
};

//корзина и карточки
const basket = document.querySelector(".basket");
const cart = JSON.parse(localStorage.getItem("Cart")) || [];
const basketList = document.querySelector(".basket__list");

const getCartItem = (el) => `<div class="basket__item">
    <div class="basket__image">
    <img src="${el.image}" alt="image">
    </div>
    <div class="basket__text">
    <h3 class="basket__text-title">${el.title}</h3>
    <p class="basket__text-description">${el.description}</p>
    <p class="basket__text-price">${el.price} ${currency.innerHTML}</p>
    </div>
    </div>`;

const bodyCart = document.querySelector(".body");
const cartHTML = document.querySelector(".header__cart");
cartHTML.addEventListener("click", () => {
  basketList.innerHTML = "";
  if (cart && cart.length > 0) {
    cart.forEach((el) => {
      basketList.innerHTML += getCartItem(el);
    });
  }
  basket.classList.add("basket__active");
  bodyCart.classList.add("body-modal");
});

const basketClose = document.querySelector(".basket__close");
basketClose.addEventListener("click", () => {
  basket.classList.remove("basket__active");
  bodyCart.classList.remove("body-modal");
});
