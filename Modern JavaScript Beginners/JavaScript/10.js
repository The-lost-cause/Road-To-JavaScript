// For in loop for Objects

let user = {
    name: 'Karan',
    age: 25,
    isAdmin: true,
};

for (let key in user) {
    //Keys
    console.log(key);

    //Values
    console.log(user[key]);
}

// Always Remember Objects are passed by referrence

let karan = { name: 'Karan' };

let admin = karan;

admin.name = 'Bong';

console.log(admin.name);  // Changed by the admin reference

console.log(user.name); // Bong instead of Karan

// Creating an independent copy of an object

// Method : 1

let original = {
    name: 'Karan',
    age: 25,
    love: "hate",
};

let clone = {};

// lets copy all user properties into it

for (let key in original) {
    clone[key] = original[key];
}

// Now clone is a fully independent clone

console.log(clone);

clone.name = 'Leenu';

console.log(clone);
console.log(original);

// Method 2

let final = { name: 'Karan' };

let permission1 = { canView: true };
let permission2 = { canEdit: true };

// copies all the properties 

Object.assign(final, permission1, permission2);

console.log(final);

// Method 2 in short with loop

// It copies the  properties of original to empty object and returns it 

let clone2 = Object.assign( {}, original );

console.log(clone2);