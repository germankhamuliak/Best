const currencyBtn = document.querySelector('.header__currency')
const currencyList = document.querySelector('.currency-list')
const currency = document.querySelector('.currency')
const currencyItem = document.querySelectorAll('.currency-item')

currencyBtn.addEventListener('click', ()=>{
    currencyList.classList.toggle('active')
})


currencyItem.forEach((el)=>{
    el.addEventListener('click',()=>{
        currency.innerHTML = el.innerHTML;
        
    })
})