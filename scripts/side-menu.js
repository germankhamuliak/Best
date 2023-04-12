import {bodyOut,headerOut, modal,body,header} from './map.js';

const catalogBtn = document.querySelector('.header__catalog')
const catalog = document.querySelector('.side-catalog__content')
let key = false;


catalogBtn.addEventListener('click', ()=>{
    catalog.classList.add('side-catalog__content-active');
    body.classList.add('body-modal');
    modal.classList.add('modal-visibl');
    modal.classList.add('side-catalog-modal');
    header.classList.add('header-modal')
    
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


