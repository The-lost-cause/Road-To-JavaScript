// An Object : A plain Object

let user = {
    'name': 'Karan',
    age: 25,
    1 : 'Billionare',

    'likes guitar': true,   // For a multi-word property
}

console.log(user);
console.log(user['name']);
console.log(user[1]);


// To delete a property

delete user.age;

console.log(user);

// Computed Properties Example

let fruit = prompt('Which fruit', 'apple');

let usr = {
    [fruit] : true,
};

console .log(usr['apple']);

// Property Value Shorthand

function makeUser(name, age){
    return {
        name,
        age,
    }
}

let result = makeUser('Karan', 25);
console.log(result);

// The in operator : checks the given property in an object

console.log('name' in user);

// For in loop construct for objects 

for (let key in user){
    console.log(key);  // Print all keys
}

for(let key in user){
    console.log(user[key]); // print all values
}

// Program for checking an Emptiness

let obj = { /*Empty Object */};
let obj2 = { name: 'Karan' }

function isEmpty(obj) {

    for (key in obj){
        return false;
    }
    return true;
}

console.log(isEmpty(obj));
console.log(isEmpty(obj2));

// Program To Calculate the Salaries

let salaries = {
    John: 100,
    Ann : 160,
    Pete : 130,
};

let sum = 0;

for (key in salaries){
    sum += salaries[key];
}

console.log(sum);

// Multiply Numeric Properties by 2

let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
};


function Multiply(menu) {

    for (key in menu){

        if (typeof (menu[key]) == 'number') {

            menu[key] *= 2;

        }
    }
}

Multiply(menu);
console.log(menu);
