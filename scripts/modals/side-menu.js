import {modalOut,body,header} from './modal.js';

const modalSide = document.querySelector('.modal-side')
const catalogBtn = document.querySelector('.header__catalog')
const catalog = document.querySelector('.side-catalog__content')


catalogBtn.addEventListener('click', ()=>{
    catalog.classList.toggle('side-catalog__content-active');
    modalSide.classList.toggle('modal-visibl');
    body.classList.toggle('body-modal');
    header.classList.toggle('header-modal');
})



document.addEventListener('click', ({target})=>{
    if (target == modalSide ){
        modalSide.classList.remove('modal-visibl');
        catalog.classList.remove('side-catalog__content-active');
        modalOut();
    }
})


