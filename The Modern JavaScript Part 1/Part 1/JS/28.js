// Example of Prototype Inheritance

let animal = {
    eats: true
}

let rabbit = {
    jumps: true
}

rabbit.__proto__ = animal;

console.log(rabbit.eats);

// More About Prototypes

let animals = {
    eats: true,
}

let rabbits = Object.create(animals, {
    jumps: {
        value: true,
    }
});

console.log(rabbits);


// Class Understanding

class User {

    constructor(name){
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }

}

let user = new User('Karan');
console.log(user);
console.log(user.sayHi());