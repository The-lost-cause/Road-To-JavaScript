// Cloning an object using iterations

let user = {
    name: 'Karan',
    age: 25,
};

let clone = {};

// Note we are copying the properties of user in clone 
// Here the values are not passed by referrence

for (let key in user){
    clone[key] = user[key]
}

console.log(clone);

// Obejct.assign : The method return the cloned object

let usr = { name: 'Negi' };
let permisson = { canView: true };

console.log(Object.assign({ }, usr, permisson));

let cloner = Object.assign({}, user);
console.log(cloner);

// Nested Cloning : Should be done with loops - Deep Cloning

let customer = {
    name: 'Karan',
    sizes: {
        height: 100,
        width: 50,
    }
};

let fakeCustomer = { };


for ( let key in customer ) {

    fakeCustomer[key] = customer[key];
}

console.log(customer);
console.log(fakeCustomer);

console.log(customer.sizes.height);
console.log(fakeCustomer.sizes.height);


//fakeCustomer.sizes.height = 0;

console.log(customer.sizes.height);
console.log(fakeCustomer.sizes.height);

// The Fix : SOLUTIONn : Deep Cloning

let _fakeCustomer = { };

for (let key in customer){

    if ( typeof customer[key] === 'object' ) {

        _fakeCustomer[key] = { };
    
    for (let key2 in customer[key]) {

        _fakeCustomer[key][key2] = customer[key][key2];
    }
}else {

    _fakeCustomer[key] = customer[key];

}
}

console.log(_fakeCustomer);


_fakeCustomer.sizes.width = 0;

console.log(customer);
console.log(_fakeCustomer);