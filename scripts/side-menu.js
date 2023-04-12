import {bodyOut, modal, body} from './modals.js';

const catalogBtn = document.querySelector('.header__catalog')
const catalog = document.querySelector('.side-catalog__content')


catalogBtn.addEventListener('click', ()=>{
    catalog.classList.toggle('side-catalog__content-active');
    body.classList.toggle('body-modal');
    modal.classList.toggle('modal-visibl');
    modal.classList.toggle('side-catalog-modal');
})

document.addEventListener('click', ({target})=>{
    if (target == modal){
        modal.classList.remove('modal-visibl');
        catalog.classList.remove('side-catalog__content-active');
        modal.classList.remove('side-catalog-modal')
        setTimeout(bodyOut,800)
    }
})

