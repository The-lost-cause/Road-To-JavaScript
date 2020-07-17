// Global Object WINDOW Understanding

function sayHi() {
    console.log('Hello');
}

window.sayHi();

console.log(window.innerHeight);

// DOM : Document Object Model

// document: Object --> Entry point of a web page
document.body.style.background = 'pink';

// Change it back after 1 second
setTimeout(() => document.body.style.background = "",1000);

// BOM : Browser Obect Model
// Functions alert/confirm/prompt are also a part of BOM: they are directly not related to the document, but represent pure browser methods of communicating with the user.

console.log(navigator.userAgent);
console.log(navigator.platform);
console.log(location.href);

console.log(document.documentElement); // HTML Tag

// Children : childNodes, firstChild and lastChild

// Note: The childNodes collection lists all child nodes , including the text nodes

for (let i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}

console.log(document.body.parentNode === document.documentElement);
console.log(document.head.nextSibling);
console.log(document.body.previousSibling);

// Element Only Navigation

// To get only Children rather than all text nodes and comment nodes

for (let elem of document.body.children) {
    console.log(elem);
}

console.log( 'first Child is' + document.body.firstChild);
console.log(document.body.lastChild);
