const currency = document.querySelector('.header__currency')
const currencyList = document.querySelector('.currency-list')

currency.addEventListener('click', ()=>{
    currencyList.classList.toggle('active')
})
