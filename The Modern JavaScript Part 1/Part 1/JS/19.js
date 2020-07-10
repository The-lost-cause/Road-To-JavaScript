// This is an object which doesn't work with for..of as of now

let obj = {
    from: 1,
    to: 5,
};

// In order to make it work we will add a method called [Symbol.iterator]

obj[Symbol.iterator] = function() {

    return {
        current: this.from,
        last: this.to,
    
        next () {

            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            }else {
                return { done: true };
            }
        }
    }
};

// Now lets use for..of in it

for (let num of obj ) {
    console.log(num);
}

// Maps Understanding

let map = new Map();

map.set('Karan', 'Leenu');
map.set(1, true);
map.set(true, false);
map.set({name: 'Karan'}, true);

console.log(map);

// Other way of initalizing the values of map is

let map1 = new Map([
    ['karan', 'Bong'],
    ['true', 'Darkness'],
])

console.log(map1);

// Iteration over Maps:

for ( let key of map.keys() ){
    console.log(key);
}

for ( let key of map.values() ){
    console.log(key);
}

for ( let key of map.entries() ){
    console.log(key);
}

// How to get a Map from an Object

// Object.entries()

let obj1 = {
    name: 'Karan',
    lastName : 'Negi',
    surName: 'Singh',
}

let mapFromObject = new Map(Object.entries(obj1));

console.log(mapFromObject)

console.log(mapFromObject.get('name'));


// Object.fromEntries

let mapps = new Map([
    ['karan', 'negi'],
    ['Leenu', 'Bong'],
    ['Life', 'Dark'],
])

let objectFromMap = Object.fromEntries(mapps);
console.log(objectFromMap);


// Set Understanding:


let set = new Set();

set.add('karan');
set.add(1);
set.add(true);

console.log(set);