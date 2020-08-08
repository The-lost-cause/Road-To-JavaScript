// Understanding Attributes and Properties in DOM Nodes

let body = document.body;
console.log(body);              // As an Tag Representation
console.dir(body);              // As an Object Representation

// Now let's create a new property in document.body

body.myData = {
    name: 'Karan',
    age:  25,

}

// Accessing the property

console.log(body.myData.name);

// Accessing Non-Standard Attribute, Hence will give UNDEFINED

console.log(h3.type, h3.id);

// Accessing Non-Standard HTML Attributes as properties

console.log(h3.hasAttribute('type'));   // Returns True/False
console.log(h3.getAttribute('type'));  // Gives the value

// Set's an Attribute
h3.setAttribute('love', false);  

// For Reading all Attributes: Returns a Collection

let properties = h3.attributes;
console.log(properties);