// Introducing className as property/attribute

console.log(document.body.className)

let elem = document.querySelector('h1');
console.log(elem.className);
elem.className = 'Negi';  // It replaced the previous className

console.log(elem.className);
console.log(elem.outerHTML);

// classList : For adding , removing an indivual class rather than whole

document.body.classList.add('Bong');
console.log(document.body.className);

// classList is iterable
for(let name of document.body.className){
    console.log(name);
}