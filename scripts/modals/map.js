import {bodyHeaderOut, modal,body,header} from "./modal.js"

const modalContent = document.querySelector('.modal__content')
const mapBtn = document.querySelector('.header__map')
const close = document.querySelector('.close')

mapBtn.addEventListener('click',()=>{
    modal.classList.add('modal-visibl');
    modalContent.classList.add('moddal__content-visibl');
    body.classList.add('body-modal')
    header.classList.add('header-modal')
})

document.addEventListener('click', ({target})=>{
    if (target == modal||target == close){
        modal.classList.remove('modal-visibl');
        modalContent.classList.remove('moddal__content-visibl');
        bodyHeaderOut()
    }
})

