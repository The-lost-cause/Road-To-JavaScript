let id = Symbol('id');

alert(id.toString());
alert(id.description);

// Example

let user = {
    name: 'Karan',
    age: 25,
    year: 1995
};

let id1 = Symbol('id');
user[id1] = 1;

alert(user[id1]);

// Symbols Are Skipped by for in

for (let key in user) alert(key); // Symbol property won't be shown.

// Object.keys(user) also ignores them

// But Obect.assign copies both string and symbol properties

let clone = Object.assign( {}, user);
alert(clone[id1]);

// Global symbols registry

// Read from the global registry 
let a = Symbol.for('karan'); // If symbol didn't exist , it will create it

let b = Symbol.for('Bong');

// Same Symbol 
alert(a === b); // Will give true

//Symbol.keyFor()

// get symbol by name
let sym = Symbol.for("name2");
let sym2 = Symbol.for("id6");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name2
alert( Symbol.keyFor(sym2) ); // id6