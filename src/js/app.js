
/* Animation Enter Button */

const circle = document.querySelector(".button-circle");
const body = document.querySelector(".body-after");

circle.addEventListener("click",animatedpass);

function animatedpass(){
  circle.classList.toggle("activateCircle");
  body.classList.toggle("activateBody");
  setTimeout(function(){
    window.location = "/src/pages/inicio.html"
  },700)
}
  
