const chatIcon = document.querySelector('.chat__img-conteiner')
const problem = document.querySelector('.header__massege-abote-problems')
const chatWindow = document.querySelector('.chat__window')
const chatClose = document.querySelector('.chat__close')

chatIcon.addEventListener('click', () =>{
    chatWindow.classList.add('chat-active')
})

problem.addEventListener('click', () =>{
    chatWindow.classList.toggle('chat-active')
})

chatClose.addEventListener('click', (e) =>{
    e.preventDefault()
    chatWindow.classList.remove('chat-active')
})