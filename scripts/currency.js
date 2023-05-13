import { defaultCurrency } from "./varibles.js";
import { body } from "./modals/modal.js";
const currencyBtn = document.querySelectorAll('.currencyBtn')
const currencyList = document.querySelector('.currency__list')
const currency = document.querySelectorAll('.currency')
const currencyItem = document.querySelectorAll('.currency__item')
const currencyName = document.querySelectorAll('.currency__name')
const currencyClose = document.querySelector('.currency__close')


currencyBtn.forEach((e)=>{
    e.addEventListener('click', ()=>{
    const bodyWidth = window.innerWidth;    
    if(bodyWidth<1024){
        body.classList.add("body-modal")
    }
    currencyList.classList.toggle('active')
})
})

currencyClose.addEventListener("click" , (e)=>{
    e.preventDefault();
    const bodyWidth = window.innerWidth;
    if(bodyWidth<1024){
        body.classList.remove("body-modal")
    }
    currencyList.classList.remove('active')
})




document.addEventListener('DOMContentLoaded',()=>
localStorage.getItem('currency') ? (currency.forEach((e)=>{e.innerHTML = localStorage.getItem('currency')}))  : (currency.forEach((e)=>{e.innerHTML = defaultCurrency})))

currencyItem.forEach((el,id)=>{
    el.addEventListener('click',()=>{
        currency.innerHTML = el.innerHTML;
        localStorage.setItem('currency', currency.innerHTML);
        localStorage.setItem('currency__name', currencyName[id].innerHTML);
        location.reload();
    })
})