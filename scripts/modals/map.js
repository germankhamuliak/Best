import {modalEnter,modalOut, modal} from "./modal.js"

const modalContent = document.querySelector('.modal__content')
const mapBtn = document.querySelectorAll('.mapBtn')
const close = document.querySelector('.close')

mapBtn.forEach(e=>{
    e.addEventListener('click',()=>{
        modalContent.classList.add('moddal__content-visibl');
        modalEnter();
    })
})


document.addEventListener('click', ({target})=>{
    if (target == modal||target == close){
        modalContent.classList.remove('moddal__content-visibl');
        modalOut();
    }
})

