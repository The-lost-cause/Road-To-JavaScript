// Understanding non-standard attributes

console.log(elem.getAttribute('about'));
elem.setAttribute('Test',123);

console.log(elem.outerHTML); 

// One can read all attributes using elem.attributes: a collection of objects that belong to a built-in Attr class, with name and value properties 

for(let attr of elem.attributes){
    console.log(`${attr.name} = ${attr.value}`);
}

// Accessing Non-Standard Attribute
console.log(document.body.getAttribute('something'));

let user = {
    name: 'Karan',
    age: 25,
};

for(let div of document.querySelectorAll('[show-info]')){
    let field = div.getAttribute('show-info');
    div.innerHTML = user[field];
}
