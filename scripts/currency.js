const currencyBtn = document.querySelector('.header__currency')
const currencyList = document.querySelector('.currency-list')

currencyBtn.addEventListener('click', ()=>{
    currencyList.classList.toggle('active')
})
