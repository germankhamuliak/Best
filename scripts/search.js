import {
  cards,
  renderCards,
  getCardDefHtml,
  cardsList,
} from "./cards_and_basket/cards.js";

const search = document.querySelector("#search");
const searchList = document.querySelector(".search__list");
const searchIcon = document.querySelector(".search-icon");
const searchList2 = document.querySelector(".search__list_2");

const buildLi = (el) => `<li class="search__link_2">${el.title}</li>`;

const arrTitles = []; ///////

const searchTitles = () => {
  if (searchList2.innerHTML == 0) {
    cards.forEach((el) => {
      if (el.title) {
        searchList2.innerHTML += buildLi(el);
        arrTitles.push(el.title);  //////
      }
    });
    searchList2.classList.add("search__list-active");
  } else {
    searchList2.classList.add("search__list-active");
  }
};

const lettersFunc = () => {   ///////////
  let suitableTitles = arrTitles.filter(el => {
    el.substr(0) == search.value.substr(0);
  });

}

search.addEventListener("click", () => {
  searchList.classList.add("search__list-active");
});

document.addEventListener("click", ({ target }) => {
  if (target != search) {
    searchList.classList.remove("search__list-active");
    searchIcon.classList.remove("search-icon-active");
    searchList2.classList.remove("search__list-active");
  }
});

search.oninput = () => {
  if (!search.value) {
    searchList2.classList.remove("search__list-active");
    searchList.classList.add("search__list-active");
    searchIcon.classList.add("search-icon-active");
  } else if (search.value) {
    searchList.classList.remove("search__list-active");
    searchTitles();

    lettersFunc();   /////
  }
};
