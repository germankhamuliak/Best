import {bodyOut,headerOut, modal,body,header} from './map.js';

const catalogBtn = document.querySelector('.header__catalog')
const catalog = document.querySelector('.side-catalog__content')
let key = false;


catalogBtn.addEventListener('click', ()=>{
    catalog.classList.toggle('side-catalog__content-active');
    body.classList.toggle('body-modal');
    modal.classList.toggle('modal-visibl');
    modal.classList.toggle('side-catalog-modal');
    header.classList.toggle('header-modal')
    
})



document.addEventListener('click', ({target})=>{
    if (target == modal ){
        modal.classList.remove('modal-visibl');
        catalog.classList.remove('side-catalog__content-active');
        modal.classList.remove('side-catalog-modal')
        setTimeout(bodyOut,800)
        setTimeout(headerOut,800)
    }
})


