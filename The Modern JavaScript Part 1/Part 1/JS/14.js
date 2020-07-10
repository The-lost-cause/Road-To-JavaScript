
let user = {
    name: 'Karan',
    lastName: 'Negi',
    age: 25,
    money: 1000,
    [Symbol.toPrimitive](hint) {
        console.log(hint);
        return hint == 'string' ? `{name : '${this.name}'}` : this.money;
    },

    toString() {
        return this.lastName;
    },

    valueOf(){
        return this.age;
    },
};

alert(user);
alert(+user);
alert(user + 500);

let usr = { }; 

console.log(usr);

// Note by default we have toString() and valueOf Method in every plain object.

alert(usr) // by default toString method will be called
console.log(usr.valueOf()); // returns the object

console.log(usr.valueOf() == usr);

alert(+usr); // NaN result is ignored

// If we want a single catch-all to handle to all primitives conversions

let customer = {
    name: 'Negi',
    toString() {
        return this.name;
    }
};

alert(customer);
alert(customer + 500);

// Going Deeper Understanding

let current = {
    name: 'karan',
    age: 25,
    valueOf(){
        return this.age;
    }
};

alert(current); 


