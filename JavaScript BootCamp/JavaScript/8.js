
// Objects Understanding

//Object : 1

const obj = {
    sayHi () { // Declaring function in an object
        console.log('Hi!');
    }
}
obj.sayHi();


//Object Property Shorthand

const blue = '#00f';
const orange = '#f60';

const colors2 = {
    yellow: '#ff0',
    blue,
    orange,
}
console.log(colors2);
console.log(colors2.blue);

// Challenge  on Objects

const bar = 'Bar Boca';
const cafe = 'Aku Aku';
const restaurant = 'Colonel Mustard';

//Using Shorthand

const favouritePlaces = {
    bar,
    cafe,
    restaurant,
    greetings () {
        console.log('Hello There');
    }
}

console.log(favouritePlaces);
favouritePlaces.greetings();

console.log(favouritePlaces.restaurant);

/* Primitives : undefined , null , boolean , number 
   string and symbol (new).

   Total : 5

   Primitives values ----> passed by value
   Obejcts ----> Passed by refereence

*/

// Important to understand

const obj1 = {};
const obj2 = obj1;   // Here the refrence is given

obj2.a = 1;

console.log(obj1);      // Same as obj2
console.log(obj2);


// More Examples

const colors = {
    yellow: '#ff0',
    blue:   '#00f',
    orange: '#f60',
    'black Color' : '#000'      // If you want space in key  
}
console.log(colors);
console.log(colors.yellow);

colors.red = '#foo';       //Adding new value == mutating
console.log(colors);

colors['green Color'] = 'green';  // How to assign spaced key and use them 
console.log(colors);
