// This keyword in non - strict mode

function sayHi() {
    alert(this); // Points to global object here i.e Window object
}

sayHi();

// Note Arrow function have no this

let user = {
    first: 'Karan',
    arrow : () => alert(this.first) // Undefined
};

user.arrow();

// To make it work

let name = {
    name: 'Bong',
    say() {
        let arrow = () => alert(this.name); // This will the outer function reference
        arrow();
    }
}

name.say();