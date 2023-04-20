// import {} from "./cards.js";

export { cart };

// const basket = document.querySelector(".basket");
const basketContainer = document.querySelector(".basket__container");
const cart = JSON.parse(localStorage.getItem("Cart")) || [];
const basketList = document.querySelector(".basket__list");

const getCartItem = (el) => `<div class="basket__item" id="${el.id}">
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
      <button class="basket__delete" id="${el.id}">Удалить</button>
    </div>
  </div>`;

basketList.addEventListener("click", (e) => {
  if (e.target.classList.contains("basket__delete")) {
    const itemDel = cart.find((elem) => {
      elem.id == e.target.id;
    });
    itemDelId = cart.indexOf(itemDel);
    console.log(itemDel);
    cart.splice(itemDelId, 1);
    localStorage.setItem("Cart", JSON.stringify(cart));
    renderBasket(); //отрисовка элемента корзины
    headCartNumber.innerHTML = cart.length;
    localStorage.setItem(
      "NumberOfGoods",
      JSON.stringify(headCartNumber.innerHTML)
    );
  }
});

renderBasket = () => {
  basketList.innerHTML = "";
  if (cart && cart.length > 0) {
    cart.forEach((el) => {
      basketList.innerHTML += getCartItem(el);
    });
  }
};

const bodyCart = document.querySelector(".body");
const cartHTML = document.querySelector(".header__cart");
cartHTML.addEventListener("click", () => {
  renderBasket();
  basketContainer.classList.add("basket__active");
  bodyCart.classList.add("body-modal");
  // header.classList.add("header-modal");
});

const basketClose = document.querySelector(".basket__close");
basketClose.addEventListener("click", () => {
  basketContainer.classList.remove("basket__active");
  bodyCart.classList.remove("body-modal");
  // header.classList.remove("header-modal");
});
