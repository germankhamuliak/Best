import { cards } from "./cards_and_basket/cards.js";

const search = document.querySelector("#search");
const searchList = document.querySelector(".search__list");
const searchIcon = document.querySelector(".search-icon");
const searchList2 = document.querySelector(".search__list-2");

const buildLi = (el) => `<li class="search__link">${el.title}</li>`;

  document.addEventListener("click",({target})=>{
    if(target.classList.contains('search__link'))
    search.value = target.textContent;
  })



let suitableTitles = [];  
const lettersFunc = () => {   
   suitableTitles = cards.filter(el => {
    return el.title.toLowerCase().startsWith(search.value)||el.title.startsWith(search.value) 
  });
}

const searchTitles = () => {
    if(suitableTitles.length==0){
      searchList2.innerHTML = "";
      searchList2.innerHTML += `<li class="search__link">По вашему запросу ничего не найдено</li>`;
    }else{
      searchList2.innerHTML = "";
      searchList2.innerHTML += `<li class="search__link">По вашему запросу найдено</li>`;
      suitableTitles.forEach((el) => {
        searchList2.innerHTML += buildLi(el);  
    });
    searchList2.classList.add("search__list-active");
    }
  };



search.addEventListener("click", () => {
  if(!search.value){
  searchList.classList.add("search__list-active");
  searchIcon.classList.add("search-icon-active");
  }else{
  searchList2.classList.add("search__list-active");
  searchIcon.classList.add("search-icon-active");
  }

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
  }  
  if (search.value) {
    searchList.classList.remove("search__list-active");
    searchList2.classList.add("search__list-active");
    lettersFunc();
    searchTitles();
  }
};
