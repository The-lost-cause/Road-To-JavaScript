// Two ways of Creating an empty Object

// Method:1

let name = new Object ();

// Method:2

let userName = {

};

// Example of Objects

let person = {
    name: 'Karan',
    age : 25,
    "Like Guitar" : true,
    isMarried : false,
};

// Acessing an object

console.log(person);
console.log(person.name,person.age);
delete person.isMarried;

console.log(person);

// Better Understanding

let user = {}; //  Empty object

// SET
user['isMarried'] =  false;
user['likes guitar'] = true;
user['age'] = 25;
user.love = true

// GET
console.log(user['likes guitar']);

// DELETE
delete  user['isMarried'];

console.log(user);

// Another Approach

let key = 'likes guitar';

user[key] = false;

console.log(user);

// Computed Properties : We can use square brackets in an object literal. That's called computed properties.

let fruit = prompt('Which fruit to buy?','apple');

let bag = {
    [fruit] : 5,
};

alert(bag[fruit]);

alert(bag.apple);

// Property Value Short-Hand

function makeUser (name, age) {
    return {
        name: name,
        age: age,
    };
}

let users = makeUser('Karan',25);
alert(users.name);
alert(users);

console.log(users);


// Special operator 'in' to check the existence of a property

let love = {
    name: 'Dang',
    age: 25,
};

// Must be in quoted property

console.log('name' in love);