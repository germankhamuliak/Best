import {cardsList} from "./cards.js" ;
import {body,header,modal} from './map.js';

const viewWindow = document.querySelector('.cards-modal');

cardsList.addEventListener("click", ({target}) => {
    if (target.classList.contains('cards__item-view')) {
      const viewImg = target.closest('.cards__item-img').querySelector('img');
      let viewImgModal = viewImg.cloneNode(true);
      viewWindow.append(viewImgModal);
      viewWindow.classList.add('cards-active');
      body.classList.toggle('body-modal');
      header.classList.toggle('header-modal');
      modal.classList.add('modal-visibl');
    }
});

document.addEventListener('click', ({target})=>{
  if (target == modal||target == close){
      viewWindow.classList.remove('cards-active');
      setTimeout(viewWindowClean,800);
  }
})

function viewWindowClean(){
  viewWindow.innerHTML="";
}
