// Class Understanding

class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log('Hello World');
    }

}

// class is a function
console.log(typeof User);

console.log(User == User.prototype.constructor);

console.log(User.prototype.sayHi);

// Class Fields

class Customer {

    name = 'Karan';         // This will be the regular property on Object 

    constructor(age){
        this.age = age;
    }

};

let customer = new Customer(25);
console.log(customer);


// Class Inheritance Concept

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log('Whatssup');
    }

    stop(){
        this.speed = 0;
        console.log('Stop Please')
    }
}

class Rabbit extends Animal{
    hide() {
        console.log('Rabbit Hides');
    }
}


let rabbit = new Rabbit('White Rabbit');

rabbit.run(5);
rabbit.hide()
console.log(rabbit);


// Over-Riding a Method

class Forest {
   // Empty
}

class Jungle extends Forest {
    constructor(animal, lenght){
        super();
        this.animal = animal;
        this.lenght = lenght
    }
}

let jungle = new Jungle('Lion', 300);
console.log(jungle);


// More Understanding about Constructor

class A { 
    name = 'Karan';      // class field
}

class B extends A {
    constructor(age){
        super()
        this.age = age;
    }
}

let b = new B(25);
console.log(b)
