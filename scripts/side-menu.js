const catalogBtn = document.querySelector('.header__catalog')
const catalog = document.querySelector('.side-catalog__content')


catalogBtn.addEventListener('click', ()=>{
    catalog.classList.toggle('side-catalog__content-active');
    body.classList.toggle('body-modal');
    modal.classList.toggle('modal-visibl');
    modal.classList.toggle('side-catalog__modal');
})
