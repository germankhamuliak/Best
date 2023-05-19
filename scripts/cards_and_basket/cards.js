import { cart, currency, cartNumbers, val } from "./basket.js";
import { URL, options } from "../varibles.js";
export { cardsList, renderCards, cards, addCards };

const cards = JSON.parse(localStorage.getItem("cards")) || [];
const cardsList = document.querySelector(".cards__list");

//отрисовка дефолтной карточки
const getCardDefHtml = (data) =>
  `<div class="cards__item">
  <div class="cards__item-img">
      <img src="${data.image}" alt="image" />
      <div class="cards__item-view">Быстрый просмотр</div>
    </div>
    <p class="cards__item-price">${(Number(data.price) * val).toFixed(2)} ${currency()}</p>
    <p class="cards__item-text">${data.title} ~ ${data.description}</p>
      <button class="cards__item-addToCart">В корзину</button>
      <button class="cards__item-inCart">Добавлено в корзину</button>   
</div>`;

//отрисовка карточки которая в корзине
const getCardHtml = (data) =>
  `<div class="cards__item">
  <div class="cards__item-img">
      <img src="${data.image}" alt="image" />
      <div class="cards__item-view">Быстрый просмотр</div>
    </div>
    <p class="cards__item-price">${(Number(data.price) * val).toFixed(2)} ${currency()}</p>
    <p class="cards__item-text">${data.title} ~ ${data.description}</p>
      <button class="cards__item-addToCart not-active-btn">В корзину</button>
      <button class="cards__item-inCart">Добавлено в корзину</button>   
</div>`;

// рендеринг карточек
const renderCards = () => {
  cardsList.innerHTML = "";
  cards.forEach((el) => {
    cardsList.innerHTML += getCardDefHtml(el)
    if(!("inBasket" in el)){
      el.inBasket = false;
      el.amount = 1;
      localStorage.setItem("cards", JSON.stringify(cards));
      }
  })
  addBasket();
};

//добовление товаров в корзину
const addBasket = ()  => {
const btnsAddToCart = document.querySelectorAll(".cards__item-addToCart");
btnsAddToCart.forEach((el, id) => {
  el.addEventListener("click", () => {
    el.classList.add("not-active-btn")
    cards[id].inBasket = true;
    localStorage.setItem("cards", JSON.stringify(cards));
    cart.push(cards[id]);
    localStorage.setItem("cart", JSON.stringify(cart));
    cartNumbers();
  });
});
}

//добавление карточек на страницу
const addCards = (arr) => {
if(arr==cards){
  cardsList.classList.remove("search-style")
}
if(!arr.length){
  cardsList.classList.remove("search-style")  
cartNumbers();  
const request = new Request(URL, options);
fetch(request)
  .then((res) => res.json())
  .then((data) => {
    arr.splice(0, cards.length, ...data);
    localStorage.setItem("cards", JSON.stringify(data));
    renderCards()
  })} else{
cartNumbers();
cardsList.innerHTML = "";
arr.forEach((el) => {
  if(el.inBasket===false){
    el.amount = 1;
    cardsList.innerHTML += getCardDefHtml(el)
    localStorage.setItem("cards", JSON.stringify(cards));
    addBasket();
  }else{
    cardsList.innerHTML += getCardHtml(el)
    localStorage.setItem("cards", JSON.stringify(cards));
    addBasket();
  }});}
}
addCards(cards);



