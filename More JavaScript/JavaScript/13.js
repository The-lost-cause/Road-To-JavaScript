// Proxy Example Understanding

const user = {
    name: 'Karan',
    lastName: 'Negi',
    email: 'nkaran1995@gmail.com',
}

// Handler Object: Methods inisde it are called traps

const handler = {
    get(target, property) {
        console.log(`Property ${property} has been read.`)
        return target[property];
    }
}

// Creating a Proxy Object

const proxyUser = new Proxy(user, handler);

console.log(proxyUser);
console.log(proxyUser.name, proxyUser.lastName, proxyUser.email);

// Another Example

let target = {};
let proxy = new Proxy(target, {}); // Empty Handler

proxy.test = 5;
console.log(target.test);

console.log(proxy.test);

for(let key in proxy) console.log(key);


// More Example Understanding

let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
    get(target, prop) {
        if(prop in target) {
            return target[prop];
        } else {
            return 0;
        }
    }
})

console.log(numbers[1]);
console.log(numbers[123]);
console.log(typeof numbers)

// More Example: Dictionary

let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adios',
}

console.log(dictionary['Hello']);
console.log(dictionary['Welcome']); // Undefined

// We will wrap dictionary in a proxy that intercepts reading operation

dictionary = new Proxy(dictionary, {
    get(target, phrase) {
        if (phrase in target) {
            return target[phrase];
        } else {
            return phrase;
        }
    }
})

console.log(dictionary['Welcome']);



// The validation set Trap

let number = [];

number = new Proxy(number, {
    set(target, prop, val) {
        if (typeof val == 'number') {
            target[prop] = val;
            return true;
        } else {
            return false;
        }
    }
})


number.push(1);
number.push(2);

console.log(number);
console.log(number['0'])

console.log(`Length is : ${number.length}`);

// number.push('Hi') will give an error 

// Iteration

let users = {
    name: 'Karan',
    age: 25,
    _password: '***',
};

for( let key in users) console.log(key);

// Now Creating a proxy Wrapper

users = new Proxy(users, {
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'))
    }
})

for(let key in users) console.log(key);

// Bigger Example

let customer = {
    name: 'Negi',
    _password: '***',
}

customer = new Proxy(customer, {
    get(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error('Access Denied');
        }
        let value = target[prop];
        return (typeof value === 'function') ? value.bind(target) : value;
    },

    set(target, prop, val) {
        if (prop.startsWith('_')) {
            throw new Error('Access Denied');
        } else {
            target[prop] = val;
            return true;
        }
    },

    defineProperty(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error('Access Denied');
        } else {
            delete target[prop];
            return true;
        }
    },

    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }
})

try {
    alert(customer._password); 
  } catch(e) { alert(e.message); }
  
  try {
    customer._password = "test"; 
  } catch(e) { alert(e.message); }
  
 
  try {
    delete customer._password; 
  } catch(e) { alert(e.message); }
  
 
  for(let key in customer) alert(key); 

  // Wrapping Functions : Apply

  function delay(f, ms) {
      return new Proxy(f, {
          apply(target, thisArg, args) {
              setTimeout(() => target.apply(thisArg, args), ms);
          }
      });
  }

  function sayHi(user) {
      alert(`Hello ${user}!`);
  }

sayHi = delay(sayHi, 3000);
alert(sayHi.length);
sayHi('LEENU')