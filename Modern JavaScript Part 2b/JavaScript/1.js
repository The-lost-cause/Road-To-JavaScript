// Global Object : Window

function sayHi() {
    console.log('Hello');
}

// Global Functions are method of the Global Object
window.sayHi();

// The document object is the main "entry point" to the page.

document.body.style.background = 'pink';
setTimeout(() => document.body.style.background = "", 5000);

// BOM : Browser Object Model

// Navigator Object, Location Object

console.log(navigator.userAgent);
console.log(navigator.platform);

console.log(location.href);
