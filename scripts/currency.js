const currencyBtn = document.querySelector('.header__currency')
const currencyList = document.querySelector('.currency-list')
const currency = document.querySelector('.currency')
const currencyItem = document.querySelectorAll('.currency-item')




currencyBtn.addEventListener('click', ()=>{
    currencyList.classList.toggle('active')
})


document.addEventListener('DOMContentLoaded',()=>{
    if(localStorage.getItem('currency')){
        currency.innerHTML = localStorage.getItem('currency')
    }else{
    currency.innerHTML = `<img class="flag-icon header__flag" src="/RB.5f7f00e2.jpg" alt="rb" />
    <span class="currency-name">BYN</span>`;
    }
})

currencyItem.forEach((el)=>{
    el.addEventListener('click',()=>{
        currency.innerHTML = el.innerHTML;
        localStorage.setItem('currency', currency.innerHTML);
    })
})