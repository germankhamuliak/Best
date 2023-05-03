const body = document.querySelector('.body')
const modal = document.querySelector('.modal')
const header = document.querySelector('.header')

function bodyHeaderOut(){
    setTimeout(headerOut,800)
    setTimeout(bodyOut,800)
}

function bodyOut(){
    body.classList.remove('body-modal')
}
function headerOut(){
    header.classList.remove('header-modal')
}

export {bodyHeaderOut, modal,body,header}