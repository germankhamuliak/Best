import { cart,currency,headCartNumber,headCartAmount } from "./basket.js";

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
    });
  });
};

const minus = document.querySelectorAll(".btns__minus");
const numberGoods = document.querySelectorAll(".btns__number");
const plus = document.querySelectorAll(".btns__plus");

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
      <a href="#" class="cards__item-view">Быстрый просмотр</a>
    </div>
    <p class="cards__item-price">${data.price} ${currency()}</p>
    <p class="cards__item-text">${data.title} ~ ${data.description}</p>
      <button class="cards__item-addToCart">В корзину</button>   
</div>`;

// numberGoods.forEach((el) => {
//   // el.innerHTML = Number(el.innerHTML);
//   el.innerHTML = 0;
//   el.innerHTML >= 0;
// });

// minus.forEach((el) => {
//   el.addEventListener("click", () => {
//     numberGoods.forEach((elem, id) => {
//       elem.innerHTML -= 1;

//       console.log(id);
//     });
//     // headCartAmount.innerHTML -= 1;
//   });
// });

// plus.forEach((el) => {
//   el.addEventListener("click", () => {
//     numberGoods.forEach((elem, id) => {
//       elem.innerHTML += 1;

//       console.log(id);
//     });
//     // headCartAmount.innerHTML += 1;
//   });
// });

//корзина и отображение карточек

// const basket = document.querySelector(".basket");
// const basketContainer = document.querySelector(".basket__container");
// const cart = JSON.parse(localStorage.getItem("Cart")) || [];
// const basketList = document.querySelector(".basket__list");

// const getCartItem = (el) => `<div class="basket__item" id="${el.id}">
//     <div class="basket__image">
//       <img src="${el.image}" alt="image">
//     </div>
//     <div class="basket__text">
//       <h3 class="basket__text-title">${el.title}</h3>
//       <p class="basket__text-description">${el.description}</p>
//       <p class="basket__text-price">${el.price} ${currency()}</p>
//       <div class="btns">
//         <button class="btns__minus">-</button>
//         <p class="btns__number">0</p>
//         <button class="btns__plus">+</button>
//       </div>
//       <button class="basket__buy">Купить</button><br>
//       <button class="basket__delete" id="${el.id}">Удалить</button>
//     </div>
//   </div>`;

// basketList.addEventListener("click", (e) => {
//   if (e.target.classList.contains("basket__delete")) {
//     const itemDel = cart.find((elem) => {
//       elem.id == e.target.id;
//     });
//     itemDelId = cart.indexOf(itemDel);
//     console.log(itemDel);
//     cart.splice(itemDelId, 1);
//     localStorage.setItem("Cart", JSON.stringify(cart));
//     renderBasket(); //отрисовка элемента корзины
//     headCartNumber.innerHTML = cart.length;
//     localStorage.setItem(
//       "NumberOfGoods",
//       JSON.stringify(headCartNumber.innerHTML)
//     );
//   }
// });

// renderBasket = () => {
//   basketList.innerHTML = "";
//   if (cart && cart.length > 0) {
//     cart.forEach((el) => {
//       basketList.innerHTML += getCartItem(el);
//     });
//   }
// };

// const bodyCart = document.querySelector(".body");
// const cartHTML = document.querySelector(".header__cart");
// cartHTML.addEventListener("click", () => {
//   renderBasket();
//   basketContainer.classList.add("basket__active");
//   bodyCart.classList.add("body-modal");
//   // header.classList.add("header-modal");
// });

// const basketClose = document.querySelector(".basket__close");
// basketClose.addEventListener("click", () => {
//   basketContainer.classList.remove("basket__active");
//   bodyCart.classList.remove("body-modal");
//   // header.classList.remove("header-modal");
// });
