const body = document.querySelector('.body')
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal__content')
const mapBtn = document.querySelector('.header__map')
const close = document.querySelector('.close')

mapBtn.addEventListener('click',()=>{
    modal.classList.add('modal-visibl');
    modalContent.classList.add('moddal__content-visibl');
    body.classList.add('body-modal')
})

document.addEventListener('click', ({target})=>{
    if (target == modal||target == close){
        modal.classList.remove('modal-visibl');
        modalContent.classList.remove('moddal__content-visibl');
        setTimeout(bodyOut,800)
    }
})

function bodyOut(){
    body.classList.remove('body-modal')
}