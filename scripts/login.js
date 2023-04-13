import {bodyOut,headerOut, modal,body,header} from './map.js';
const loginContent = document.querySelector('.login')
const loginBtn = document.querySelector('.header__profile')
const loginClose = document.querySelector('.login__close')


loginBtn.addEventListener('click',()=>{
    modal.classList.add('modal-visibl');
    loginContent.classList.add('login-active');
    body.classList.add('body-modal')
    header.classList.add('header-modal')
})

document.addEventListener('click', ({target})=>{
    if (target == modal||target == loginClose){
        modal.classList.remove('modal-visibl');
        loginContent.classList.remove('login-active');
        setTimeout(headerOut,800)
        setTimeout(bodyOut,800)
    }
})


