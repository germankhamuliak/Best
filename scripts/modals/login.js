import {modalEnter,modalOut, modal} from './modal.js';

const loginContent = document.querySelector('.login')
const loginBtn = document.querySelector('.header__profile')
const loginClose = document.querySelector('.login__close')


loginBtn.addEventListener('click',()=>{
    loginContent.classList.add('login-active');
    modalEnter();
})

document.addEventListener('click', ({target})=>{
    if (target == modal||target == loginClose){
        loginContent.classList.remove('login-active');
        modalOut();
    }
})


