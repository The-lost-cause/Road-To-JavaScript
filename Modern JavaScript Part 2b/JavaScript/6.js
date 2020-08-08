// elem.querySelectorAll(css): returns all elements inside elem matching the given CSS Selector

let elements = document.querySelectorAll('ul > li:last-child');
console.log(elements);

for (let elem of elements) {
    console.log(elem.innerHTML);
}

// elem.querySelector(css) : returns the first element for the given CSS Selector 

let elem = document.querySelector('h1');
console.log(elem.innerHTML);


