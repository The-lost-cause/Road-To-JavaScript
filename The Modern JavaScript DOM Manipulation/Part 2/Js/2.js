// document.getElementById

let elem = document.getElementById('elem');
elem.style.background = 'orange';

// querySelectorAll(css)

let usr = document.querySelectorAll('ul > li:last-child');

for(let el of usr){
    console.log(el.innerHTML);
}

let arr = document.querySelector('#Karan');
arr.style.background = 'yellow';
