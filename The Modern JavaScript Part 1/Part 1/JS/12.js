// Simple Construtor Function Example

function User(name) {
    this.name = name;
    this.age = 25;
}

let user = new User('Karan');
console.log(user.name);

// If only one complex object is to be created then

let usr = new function Usr(){   // Can't be called again. As it is just created and called
    this.name = 'Karan';
    this.age = 25;
    this.life = false;
}

console.log(usr);

// New.target Property : To check whether the function was called with new or just a normal call

function Check() {
    console.log(new.target);
}

Check();     // Normally Calling
new Check(); // With new Calling

function Calculator() {
    this.read = function () {
        this.a = +prompt('Num1');
        this.b = +prompt('Num2');
    };

    this.sum = function(){
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    }

}

let calc = new Calculator;
calc.read();
console.log(calc.sum(), calc.mul());

