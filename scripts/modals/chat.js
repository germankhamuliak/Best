const chatIcon = document.querySelector(".chat__img-conteiner");
const problem = document.querySelector(".header__massege-abote-problems");
const chatWindow = document.querySelector(".chat__window");
const chatClose = document.querySelector(".chat__close");
const chatBody = document.querySelector(".chat__body");
const chatInput = document.querySelector(".chat__input");
const chatButton = document.querySelector(".chat__button");
let question;

chatIcon.addEventListener("click", () => {
  chatWindow.classList.add("chat-active");
});

problem.addEventListener("click", () => {
  chatWindow.classList.toggle("chat-active");
});

chatClose.addEventListener("click", (e) => {
  e.preventDefault();
  chatWindow.classList.remove("chat-active");
});

const setMessege = () => {
  question = chatInput.value;
  let chatQuestion = `<div class="chat__question">
                                <span class="name">Вы</span>
                                <span class="message">${question}</span>
                            </div>`;
  chatBody.innerHTML += chatQuestion;
  chatInput.value = "";
  question = "";
  chatQuestion.innerHTML = "";
};
chatButton.addEventListener("click", () => {
  if (chatInput.value) {
    setMessege();
  }
});

chatInput.addEventListener("keydown", function (e) {
  if (chatInput.value) {
    if (e.keyCode === 13) {
      setMessege();
    }
  }
});
