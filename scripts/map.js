const body = document.querySelector('.body')
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal__content')
const mapBtn = document.querySelector('.header__map')
const close = document.querySelector('.close')
const header = document.querySelector('.header')

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
        setTimeout(headerOut,800)
        setTimeout(bodyOut,800)
    }
})

function bodyOut(){
    body.classList.remove('body-modal')
}
function headerOut(){
    header.classList.remove('header-modal')
}


export {bodyOut,headerOut, modal,body,header}