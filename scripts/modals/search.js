const searchBtn = document.querySelector('.new-header__group .search-icon')
const searchWindow = document.querySelector('.search')
const searchClose = document.querySelector('.search__close')

searchBtn.addEventListener("click",()=>{
    searchWindow.classList.add("search-active")
})

searchClose.addEventListener("click",()=>{
    searchWindow.classList.remove("search-active")
})