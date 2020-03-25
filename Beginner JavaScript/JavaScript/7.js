/* Even listener */

//Click Event

const button = document.querySelector('.event-button');
button.addEventListener('click',function(){
    alert('Hi There!');
});


//Keyup Event Understanding

const input = document.querySelector('.input-to-copy');
const paragraph = document.querySelector('.p-to-copy-to');


input.addEventListener('keyup',function(){
    paragraph.innerHTML = input.value;
});

// Blur Event : Change Event

const input1 = document.querySelector('.color-input');
const paragraph1 = document.querySelector('.color-box');

input1.addEventListener("change",function(){
    paragraph1.style.backgroundColor = input1.value;
});

// Event Delegation

document.querySelector('.button-container').addEventListener('click',function(event){
    if(event.target.tagName === 'BUTTON'){
    alert(`You clicked on button ${event.target.innerText}`);
    }
});