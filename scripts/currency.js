const currencyBtn = document.querySelector('.header__currency')
const currencyList = document.querySelector('.currency__list')
const currency = document.querySelector('.currency')
const currencyItem = document.querySelectorAll('.currency__item')
const currencyName = document.querySelectorAll('.currency__name')



currencyBtn.addEventListener('click', ()=>{
    currencyList.classList.toggle('active')
})


document.addEventListener('DOMContentLoaded',()=>{
    if(localStorage.getItem('currency')){
        currency.innerHTML = localStorage.getItem('currency')
    }else{
    currency.innerHTML = `<img class="flag-icon currency__flag" src="/RB.5f7f00e2.jpg" alt="rb" />
    <span class="currency__name val">BYN</span>`;
    }
})

currencyItem.forEach((el,id)=>{
    el.addEventListener('click',()=>{
        currency.innerHTML = el.innerHTML;
        localStorage.setItem('currency', currency.innerHTML);
        localStorage.setItem('currency__name', currencyName[id].innerHTML);
        location.reload();
    })
})