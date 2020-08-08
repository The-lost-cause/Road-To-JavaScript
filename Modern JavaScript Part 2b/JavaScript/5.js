// document.getElementById : THis method can be called only on document Object

let elem = document.getElementById('elem');
console.log(elem);

// Just using unique reference here directly with id

elems.style.backgroundColor = 'yellow';
setTimeout(() => elems.style.backgroundColor = '', 2000);

// For Hypen-id we should use window[''] Syntax for Manipulation
window['elem-content'].style.color = 'red';

