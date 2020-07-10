// Optional Chaining Construct ?.

let users = { };
console.log(users?.name?.age); // undefined

let user = {
    name: 'Karan',
    id : 123
};

let id = Symbol();
user[id] = 'Bong';
console.log(user);

// Trying to Overwrite , But it didn't work It will create a new Symbol

user[Symbol()] = 'Sex';
console.log(user);

let id2 = Symbol.for('id2');
user[id2] = 'Whtasapp';
console.log(user);

let id2Again = Symbol.for('id2');

console.log(id2Again); 
console.log(user[id2Again]);

// Symbols are Skipped in for..in

let rollNo = Symbol('rollNo');

let customer = {
    name: 'karan',
    age: 25,
    [rollNo]: 9,
}

for (let key in customer) {
    console.log(key)
}

// Object.keys(object) also ignores them

for (let key of Object.keys(customer)) {
    console.log(key)
}

// Global symbol registry

let a = Symbol.for('a');
let b = Symbol.for('a');

console.log(a == b); // true

console.log(Symbol.keyFor(a));

// To get the symbols we use : Object.getOwnPropertySymbols(obj);

for ( let key of Object.getOwnPropertySymbols(customer)){
    console.log(key);
}

// Object.getOwnProperttySymbols(object) : returns an array of symbols only. (No normal properties are returned)

let object = { name: 'Karan', age:25 };

let a1 = Symbol('a1');
let b1 = Symbol.for('b');

object[a1] = 'Leenu';
object[b1] = 'Bong';

let objectSymbols = Object.getOwnPropertySymbols(object);

console.log(objectSymbols);

// Reflect.ownKeys() : retuns an array of own keys only (includes symbols too)

let ownKeys = Reflect.ownKeys(object);
console.log(ownKeys);