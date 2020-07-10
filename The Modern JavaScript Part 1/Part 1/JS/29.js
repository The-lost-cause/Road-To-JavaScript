// [[PROTOTYPE]] : Hidden Property of an Object

let obj = { } 
console.log(obj);
console.log(obj.__proto__)
console.dir(obj);


// Using __proto__ used as Getter/setter for [[Prototype]]

let animal = { eats  : true , sayHi() { alert('Hi')} };
let rabbit = { jumps : true };

rabbit.__proto__ = animal; 

console.log(animal);
console.log(rabbit);
console.log(rabbit.eats); 
console.log(rabbit.__proto__)
console.log(rabbit.__proto__.__proto__)

// Getter/Setter in a __proto__

let user = {
    name: 'Karan',
    surname: 'Negi',

    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }

};

let admin = {
    sex : 'Male',
    isAdmin : true,
    __proto__ : user,
}

console.log(admin);

console.log(admin.fullName);
admin.fullName = 'Leenu Dang';

console.log(admin);

// Part : 2 F.Prototype

function Lion(name) {  // Constructor Function
    this.name = name;
}

let forest = { eats : true };

Lion.prototype = forest;

let lion = new Lion('The King');

console.log(lion);
console.log(lion.eats)

// Default F.prototype

// Every function has a default prototype property attached to it

function Billonaire() { };

let million = function Millonaire() {}

console.log(Billonaire)
console.log(Billonaire.prototype);
console.log(Billonaire.__proto__);

console.dir(million);


// Understanding Default Prototype

function Animal(name) {
    this.name = name;
}

let hamster = new Animal('White Rabbit');

console.log(hamster);

let hamster_2 = new hamster.constructor('Black');

console.log(hamster_2);

// Understanding Prototype property of Objects in more Details


function Proto() {

    // empty functions
};

Proto.prototype = { name : 'Karan'};

let proto = new Proto();

console.log(proto);

// Prototype Methods , Objects without __proto__

console.log(Object.getPrototypeOf(forest))



for(let i = 0; i <=5; i++){
  
    setTimeout(() => alert('Hi'), 5000)

}