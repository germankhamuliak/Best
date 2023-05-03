import { defaultCurrency } from "./varibles.js";

const currencyBtn = document.querySelector('.header__currency')
const currencyList = document.querySelector('.currency__list')
const currency = document.querySelector('.currency')
const currencyItem = document.querySelectorAll('.currency__item')
const currencyName = document.querySelectorAll('.currency__name')



currencyBtn.addEventListener('click', ()=>{
    currencyList.classList.toggle('active')
})


document.addEventListener('DOMContentLoaded',()=>
localStorage.getItem('currency') ? (currency.innerHTML = localStorage.getItem('currency')) : (currency.innerHTML = defaultCurrency))

currencyItem.forEach((el,id)=>{
    el.addEventListener('click',()=>{
        currency.innerHTML = el.innerHTML;
        localStorage.setItem('currency', currency.innerHTML);
        localStorage.setItem('currency__name', currencyName[id].innerHTML);
        location.reload();
    })
})