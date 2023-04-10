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
        <p class="btns__number">13</p>
        <button class="btns__plus">+</button>
      </div>
    </div>
</div>`;

//корзина и карточки

const cart = JSON.parse(localStorage.getItem("Cart")) || [];

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

const divCartHTML = () => `<div class="basket">
  <div class="basket__list">
  </div>
</div>
`;
const basketList = document.querySelector(".basket__list");

const getCartItem = (el) => `<div class="basket__item">
    <div class="basket__image">
    <img src="${el.image}" alt="image">
    </div>
    <div class="basket__text">
    // <h3 class="basket__text-title"></h3>
    <p class="basket__text-description">${el.description}</p>
    <p class="basket__text-price">${el.price} ${currency.innerHTML}</p>
    </div>
    </div>`;

const cartHTML = document.querySelector(".header__cart");
cartHTML.addEventListener("click", () => {
  divCartHTML();
  basketList.innerHTML = "";
  JSON.parse(localStorage.getItem("Cart"));
  if (cart && cart.length > 0) {
    cart.forEach((el) => {
      basketList.innerHTML += getCartItem(el);
    });
  }
});

// const getBasketHTML = (data) =>
//   `<div class="basket">
//     <div class="basket__list">
//         <div class="basket__item">
//             <div class="basket__image">
//               <img src="${data.image}" alt="image">
//             </div>
//             <div class="basket__text">
//                 // <h3 class="basket__text-title"></h3>
//                 <p class="basket__text-description">${data.description}</p>
//                 <p class="basket__text-price">${data.price} ${currency.innerHTML}</p>
//             </div>
//         </div>
//     </div>
// </div>`;
