// Reflect: Simplifies Creation of Proxy

let users = {};
Reflect.set(users, 'name', 'Karan');
console.log(users.name);

// We can use Reflect to forward an operation to the original product.

let customer = {
    name: 'Leenu',
};

customer = new Proxy(customer, {
    get(target, prop, receiver) {
        console.log(`GET ${prop}`)
        return Reflect.get(target, prop, receiver);
    },

    set(target, prop, val, receiver) {
        console.log(`SET ${prop}=${val}`);
        return Reflect.set(target, prop, val, receiver);
    }
});

let name = customer.name;
console.log(name);

customer.name = 'Bong'

// Proxying a Getter : Using Reflect to forward an operation to the Orginal Obejct

let user = {
    _name: "Guest",
    get name() {
      return this._name;
    }
  };
  
  let userProxy = new Proxy(user, {
    get(target, prop, receiver) { // receiver = admin
      return Reflect.get(target, prop, receiver); // (*)
    }
  });
  
  
  let admin = {
    __proto__: userProxy,
    _name: "Admin"
  };
  
  console.log(admin.name); // Admin

  // Revocable Proxies


  let object = {
    data: 'Valuable Data',
  };

  let {proxy, revoke} = Proxy.revocable(object, {});

  console.log(proxy);
  console.log(proxy.data);

  // Later in our Code

  revoke();

 //  console.log(proxy.data); Error

  // Program : 1 

  let User = {
    name: 'Karan',
  }

  function wrap(target)  {
    return new Proxy(target, {
        get(target, prop) {
          if (prop in target) {
            return target[prop];
          } else {
            throw new Error('Reference Error')
          }
        }
    })
  }


  User = wrap(User);
  alert(User.name);
  alert(User.age);

  // Program : 2 

  let array = [1, 2, 3];

  array = new Proxy(array, {
    get(target, prop) {
      if ( prop < 0 ) {
        return target[target.length + Number(prop)]
      } else {
        return target[prop];
      }
    }
  })

  alert(array[-1]);
  alert(array[-2])
  alert(array[0])