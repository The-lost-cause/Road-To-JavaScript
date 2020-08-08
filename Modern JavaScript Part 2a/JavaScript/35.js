// Understanding getElementBoundingRect() Method

let d1 = document.getElementsByTagName('div')[0];
let d2 = document.getElementsByTagName('div')[1];

console.log(d1);
console.log(d2);

console.log(d1.getBoundingClientRect());
console.log(d2.getBoundingClientRect());


// elementFromPoint():

console.log(document.elementFromPoint(0,0));
console.log(document.elementFromPoint(120,120))