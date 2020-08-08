// MUltiple Ways for DOM Navigation in a document

console.log(document.querySelector('h1'));  // Taken as an Element
console.dir(document.querySelector('h1'));  // Taken as an Element Object

console.log(h1);                            // Or Just directly Reference the id
console.log(document.getElementById('h1')); // Or by DOM Navigation Method


let body = document.body;
console.log(body);                      // As an Element
console.dir(body);                      // As an Object
console.log(body.constructor.name)

let object = { };
console.log(object);
console.dir(object);