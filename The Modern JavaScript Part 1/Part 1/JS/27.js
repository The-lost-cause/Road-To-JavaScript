// Object.getOwnPropertyDescriptor

let obj = {
    name: 'Karan',
    age: 25,
};

let objDescriptor = Object.getOwnPropertyDescriptor(obj, 'age');

console.log(objDescriptor);

// To change the Flag : Object.defineProperty

let user = { };

Object.defineProperty(user, 'name', {
    value: 'Leenu'
});

console.log(user);
console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// Making the property Non-Writable

let customer = {
    name: 'Bong',
};

Object.defineProperty(customer, 'name', {
    writable: false
});

customer.name = 'Karan'     // Will give error now
console.log(customer.name); // name remains same Bong

// More Examples

let currentUser = { };

Object.defineProperty(currentUser, 'name', {
    value: 'Negi',
    enumerable: false,
    configurable: true,
});

console.log(currentUser.name);


// Object.defineProperties : Setting many properties at once

let object = { };

Object.defineProperties(object, { 
    name: { value :'Karan', writable: false},
    age:  { value :25, enumerable: false },
})


console.log(object);

// Object.getOwnProperyDescriptors

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj))

// Property Getters and Setters Understanding


let users = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  // set fullName is executed with the given value.
  users.fullName = "Alice Cooper";
  
  console.log(users.name); // Alice
  console.log(users.surname); // Cooper
