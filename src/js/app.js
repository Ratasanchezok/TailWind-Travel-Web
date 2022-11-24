
/* Animation Enter Button */

const circle = document.querySelector(".button-circle");
const body = document.querySelector(".body-after");

circle.addEventListener("click",animatekeyboard);

function animatekeyboard(){
  circle.classList.toggle("activateCircle");
  body.classList.toggle("activateBody");
  setTimeout(function(){
    window.location = "/src/pages/inicio.html"
  },700)
}


/* ---------------------------------------------------------------------------------- */

/* Display DropDown Function */
  
/* 1° Card - 1° Place */
function dropdown_function() {
  var x = document.getElementById("myDIV");
  var w = document.getElementById("myDIV2");
  var y = document.getElementById("myDIV3");
  var z = document.getElementById("myDIV4");

  if (x.style.display === "none") {

      x.style.display = "block";
      w.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
  } else {
      x.style.display = "none";
  }
}

/* 1° Card - 2° Place */
function dropdown_function2(){
  var x = document.getElementById("myDIV2");
  var w = document.getElementById("myDIV");
  var y = document.getElementById("myDIV3");
  var z = document.getElementById("myDIV4");

  if (x.style.display === "none") {

      x.style.display = "block";
      w.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
  } else {
      x.style.display = "none";
  }
}

/* 1° Card - 3° Place */
function dropdown_function3() {
  var x = document.getElementById("myDIV3");
  var w = document.getElementById("myDIV2");
  var y = document.getElementById("myDIV");
  var z = document.getElementById("myDIV4");

  if (x.style.display === "none") {

      x.style.display = "block";
      w.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
  } else {
      x.style.display = "none";
  }
}

/* 1° Card - 4° Place */
function dropdown_function4() {
  var x = document.getElementById("myDIV4");
  var w = document.getElementById("myDIV2");
  var y = document.getElementById("myDIV3");
  var z = document.getElementById("myDIV");
  if (x.style.display === "none") {

      x.style.display = "block";
      w.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";

  } else {
      x.style.display = "none";
  }
}