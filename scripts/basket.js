import { body, header } from "./map.js";
export { cart, currency, headCartNumber, headCartAmount, val };

const basketContainer = document.querySelector(".basket__container");
const cart = JSON.parse(localStorage.getItem("Cart")) || [];
const basketList = document.querySelector(".basket__list");
const cartHTML = document.querySelector(".header__cart");
const basketClose = document.querySelector(".basket__close");
const headCartAmount = document.querySelector(".header__cart-amount");
const headCartNumber = document.querySelector(".header__cart-number");
const basketSum = document.querySelector(".basket__sum");


const currency = () => {
  if (localStorage.getItem("currency__name")) {
    return localStorage.getItem("currency__name");
  } else {
    return "BYN";
  }
};

let val = 1;

switch (currency()){
  case "BYN":
    val = 1;
    break;
  case "RUB":
    val = 27.7809;
    break;
  case "USA":
    val = 0.34;
    break;
  default:
    val = 1;
}


const getCartItem = (el) =>
  `<div class="basket__item" id="${el.id}">
    <div class="basket__image">
      <img src="${el.image}" alt="image">
    </div>
    <div class="basket__text">
      <h3 class="basket__text-title">${el.title}</h3>
      <p class="basket__text-description">${el.description}</p>
      <p class="basket__text-price">${(Number(el.price)*val).toFixed(2)} ${currency()}</p>
      <div class="btns">
        <button class="btns__minus">-</button>
        <p class="btns__number">${el.amount}</p>
        <button class="btns__plus">+</button>
      </div>
      <button class="basket__buy">Купить</button><br>
      <button class="basket__delete">Удалить</button>
    </div>
  </div>`;

// кнопки + и -
Object.prototype.amount = 1;

basketList.addEventListener("click", ({ target }) => {
  if (target.classList.contains("btns__plus")) {
    cart.find((el) => {
      if (target.closest(".basket__item").id === el.id) {
        el.amount += 1;
        renderBasket();
        // увелич кол-ва в красном кружке (временный вариант)
        cart.length += 1;
        headCartNumber.innerHTML = cart.length;
        localStorage.setItem(
          "NumberOfGoods",
          JSON.stringify(headCartNumber.innerHTML)
        );
      }
    });
  } else if (target.classList.contains("btns__minus")) {
    cart.find((el) => {
      if (target.closest(".basket__item").id === el.id) {
        el.amount -= 1;
        renderBasket();
        // уменьш кол-ва в красном кружке
        // при -1 удаляется последний эл-т корзины (ломаная штука)
        cart.length -= 1;
        headCartNumber.innerHTML = cart.length;
        localStorage.setItem(
          "NumberOfGoods",
          JSON.stringify(headCartNumber.innerHTML)
        );
      } else if (el.amount == 0) {
        // с этого места не работает
        const elemNull = cart.find((el) => {
          if (target.closest(".basket__item").id === el.id) {
            return el;
          }
        });
        const elemNullId = cart.indexOf(elemNull);
        cart.splice(elemNullId, 1);
        localStorage.setItem("Cart", JSON.stringify(cart));
        renderBasket();
      }
    });
  }
});

//удаление элемента из корзины
basketList.addEventListener("click", ({ target }) => {
  if (target.classList.contains("basket__delete")) {
    const itemDel = cart.find((elem) => {
      if (target.closest(".basket__item").id === elem.id) {
        return elem;
      }
    });
    const itemDelId = cart.indexOf(itemDel);
    cart.splice(itemDelId, 1);
    localStorage.setItem("Cart", JSON.stringify(cart));
    renderBasket();
    headCartNumber.innerHTML = cart.length;
    localStorage.setItem(
      "NumberOfGoods",
      JSON.stringify(headCartNumber.innerHTML)
    );
    }
});

//отрисовка элемента корзины
renderBasket = () => {
  basketList.innerHTML = "";
  if (cart && cart.length > 0) {
    cart.forEach((el) => {
      basketList.innerHTML += getCartItem(el);
    });
    let sum = 0;
     cart.forEach((el) =>{
    sum +=  Number(el.price)
    basketSum.innerHTML = (sum*val).toFixed(2) + currency() ;
    })
  } ; 
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
