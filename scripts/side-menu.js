import {bodyOut,headerOut,body,header} from './map.js';

const modalSide = document.querySelector('.modal-side')
const catalogBtn = document.querySelector('.header__catalog')
const catalog = document.querySelector('.side-catalog__content')


catalogBtn.addEventListener('click', ()=>{
    catalog.classList.toggle('side-catalog__content-active');
    body.classList.toggle('body-modal');
    modalSide.classList.toggle('modal-visibl');
    header.classList.toggle('header-modal')
})



document.addEventListener('click', ({target})=>{
    if (target == modalSide ){
        modalSide.classList.remove('modal-visibl');
        catalog.classList.remove('side-catalog__content-active');
        setTimeout(bodyOut,800)
        setTimeout(headerOut,800)
        
    }
})


