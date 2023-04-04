var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// const indikatoren = document.getElementsByClassName("indikator");
// indikatoren[0].classList.add("aktiv");

// const slides = document.getElementsByClassName("slide");
// slides[0].classList.add("aktiv");

// var aktuellerIndex = 0;

// function umschalten(anzahl) {
//     var neuerIndex = aktuellerIndex + anzahl;

//     if(neuerIndex < 0) {
//         neuerIndex = slides.length -1;
//     }

//     if(neuerIndex > slides.length -1) {
//         neuerIndex = 0;
//     }

//     springeZuEintrag(neuerIndex);
// }

// function springeZuEintrag(neuerIndex) {
//     indikatoren[aktuellerIndex].classList.remove("aktiv");
//     slides[aktuellerIndex].classList.remove("aktiv");

//     indikatoren[neuerIndex].classList.add("aktiv");
//     slides[neuerIndex].classList.add("aktiv");

//     aktuellerIndex = neuerIndex;
// }