
let customer = {
    name: 'Karan',
    sizes: {
        height: 100,
        width: 50,
    }
};

// Logic for Deep Cloning an Object that has Object values as it's Keys

let fakeCustomer = { };

for (let key in customer){

    if ( typeof customer[key] === 'object' ) {

        fakeCustomer[key] = { };
    
    for (let key2 in customer[key]) {

        fakeCustomer[key][key2] = customer[key][key2];
    }
}else {

    fakeCustomer[key] = customer[key];

}
}

console.log(fakeCustomer);


fakeCustomer.sizes.width = 0;

console.log(customer);
console.log(fakeCustomer)