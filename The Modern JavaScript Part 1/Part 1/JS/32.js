// A Mixin Example

let sayHiMixin = {

    sayHi() {
        console.log('Hi');
    },

    sayBye() {
        console.log('Bie');
    }

}

// usage

class User {
    constructor(name) {
        this.name = name;
    }

}

Object.assign(User.prototype, sayHiMixin);

let user = new User('Dude');
console.log(user.sayHi())