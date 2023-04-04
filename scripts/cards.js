const URL = "https://6428388446fd35eb7c4e2663.mockapi.io/wild/pr/card";

const options = {
  method: "GET",
};

let cards = [];
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

const getCardHtml = (data) => 
`<div class="cards__item">
<div class="cards__item-img">
    <img src="${data.image}" alt="image" />
    <button class="cards__item-view">Быстрый просмотр</button>
</div>
<div class="cards__item-prices">
    <p class="cards__item-currPrice"></p>
    <p class="cards__item-oldPrice"></p>
</div>
<p class="cards__item-text"></p>
<div class="cards__item-group">
    <button class="cards__item-addToCart">В корзину</button>
    <div class="cards__item-btns btns">
        <button class="btns__minus">-</button>
        <p class="btns-number"></p>
        <button class="btns__plus">+</button>
    </div>
</div>
</div>`;

const renderCards = () => {
  cardsList.innerHTML = "";
  cards.forEach((el) => (cardsList.innerHTML += getCardHtml(el)));
  localStorage.setItem("cards", JSON.stringify(cards));
};