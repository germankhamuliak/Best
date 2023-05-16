import {
  cards,
  renderCards,
  getCardDefHtml,
  cardsList,
} from "./cards_and_basket/cards.js";

const search = document.querySelector("#search");
const searchList = document.querySelector(".search__list");
const searcIcon = document.querySelector(".search-icon");

const searchTitles = () => {
  cards.forEach((el) => {
    // searchList.append(el.title);
  });
};

search.addEventListener("click", () => {
  searchTitles();
  searcIcon.classList.add("search-icon-active");
  searchList.classList.add("search__list-active");
});

document.addEventListener("click", ({ target }) => {
  if (target != search) {
    searchList.classList.remove("search__list-active");
    searcIcon.classList.remove("search-icon-active");
  }
});

// search.oninput = () => {
//   //el.textContent ??
//   if (search.value) {
//     cards.forEach((el) => {
//       if (el.title !== search.value) {
//         const ind = indexOf(el);
//         cards.splice(ind, 1);
//         renderCards();
//       }
//     });
//   }
// };

search.oninput = () => {
  if (!search.value) {
    searchList.classList.add("search__list-active");
  } else if (search.value) {
    searchList.classList.remove("search__list-active");
    const targ = cards.filter((el) => {
      el.title == search.value;
      //el.textContent ??
    });
    targ.forEach((elem) => {
      cardsList.innerHTML += getCardDefHtml(elem);
    });
  }
};
