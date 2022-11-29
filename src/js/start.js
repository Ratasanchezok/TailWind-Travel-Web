/* Function GOD */
const dropdownButtons = document.querySelectorAll('.dropdown-button');

dropdownButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const sibling = event.target.nextElementSibling;
    const buttons = [...dropdownButtons];
    const siblings = buttons.map((it) => it.nextElementSibling);
    toggleVisibility(sibling, siblings);
  });
});

const toggleVisibility = (element, siblings) => {
  if (element.style.display === 'none') {
    siblings.forEach((sibling) => {
      sibling.style.display = 'none';
    });

    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
};

/* Function send mesage */

const sendButton = document.getElementById('sendButton');
const cleanButton = document.getElementById('cleanButton');
const divName = document.getElementById('divName');
const divOpinion = document.getElementById('divText');
const divStars = document.getElementById('divStars');
const flyAway = document.getElementById('flyAway');

sendButton.addEventListener('click', sendFunction)

  function sendFunction(e){
    e.preventDefault()
    divName.classList.add("activeName");
    divStars.classList.add("activeStars");
    divOpinion.classList.add("activeText");
    flyAway.classList.add("activeFly");
    
    setTimeout(function(){
      divName.classList.remove("activeName");
      divStars.classList.remove("activeStars");
      divOpinion.classList.remove("activeText");
      flyAway.classList.remove("activeFly");
    },8000)
  }







  
/* Permitir mandar Formulario */

