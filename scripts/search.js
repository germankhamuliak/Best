import { cards, renderCards } from "./cards_and_basket/cards.js";

const search = document.querySelector("#search");
const searchList = document.querySelector(".search__list");
const searcIcon = document.querySelector(".search-icon");

search.addEventListener("click", () => {
  searcIcon.classList.add("search-icon-active");
  searchList.classList.add("search__list-active");
});

document.addEventListener("click", ({ target }) => {
  if (target != search) {
    searchList.classList.remove("search__list-active");
    searcIcon.classList.remove("search-icon-active");
  }
});

const searchTitles = () => {
  const titles = cards.forEach((el) => el.title);
  searchList.push(titles);
};

search.oninput = () => {
  //el.textContent ??
  if (search.value) {
    cards.forEach((el) => {
      if (el.title !== search.value) {
        const ind = indexOf(el);
        cards.splice(ind, 1);
        renderCards();
      }
    });
  }
};
