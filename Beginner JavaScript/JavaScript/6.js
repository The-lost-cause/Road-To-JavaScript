 /* Document Object Model */


const redSquare = document.querySelector('.red-square');
redSquare.style.color = 'limegreen';

 const elementsToChange = document.querySelectorAll('.js-target');
 for (let i = 0 ; i < elementsToChange.length; i++){
     const currentElement = elementsToChange[i];
     currentElement.innerText = "Modified by Js!";
 }
 