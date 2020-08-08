// Attributes More Understanding: HTML Attributes are case-insensitive

console.log(elem.getAttribute('ABOUT'));  // Though in HTML it was about
elem.setAttribute('TEST', 1122);          // NOTE: 1122 will be a STRING!
console.log(elem.outerHTML);

// Looping over Attributes

// The attributes collection is iterable and has all the attributes of the element(standard and non-standard) as OBJECTS with "name" and "value" properties

for (let attr of elem.attributes) {
    console.log(attr.name + ':' + attr.value);
}


// Property-Attribute Synchronization

let input = document.querySelector('input');

// attribure => property
input.setAttribute('id', 'ID');
console.log(input.id);

// property => attribute
input.id = 'newID';
console.log(input.getAttribute('id'));  // Updated

// But there are exclusions, for instance input.value synchronizes only from attribute → to property, but not back:

// attribute => property
input.setAttribute('value', 'text');
console.log(input.value);   // text

// NOT property => attribute

input.value = 'newValue';
console.log(input.getAttribute('value'))  // NOT UPDATED
console.log(input.value)                  // newValue
