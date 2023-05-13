const body = document.querySelector('.body')
const modal = document.querySelector('.modal')
const header = document.querySelector('.header')

function modalOut(){
    setTimeout(headerOut,800)
    setTimeout(bodyOut,800)
    modal.classList.remove('modal-visibl');
}

function bodyOut(){
    body.classList.remove('body-modal')
}
function headerOut(){
    header.classList.remove('header-modal')
}
 function modalEnter(){
if(!(body.classList.contains("body-modal"))){
    body.classList.add('body-modal')
    header.classList.add('header-modal')
    modal.classList.add('modal-visibl');
}
}

export {modalEnter,modalOut, modal,body,header}