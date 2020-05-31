'use strict'

// Alert Method in Js

alert('Welcome To JavaScript Learning');

//Using let keyword for storing information on message

let message;
message = 'Road To Web Development';
alert(message);

// Symbols $ and _

let $ = 1;
let _ = 2;
alert($ + _ );  // Result is 3


// Special Numeric Values

alert ( -1 / 0 );  // ----> Infinity
alert(Infinity);

// NaN - Not a Number -- > Represents a computational error.

alert( 'Not A Number' / 2 ); // NaN


// BigInt Type recently added in Js

const BigInt = 2130892349909284923840823048203n;
alert(BigInt);

// Null value

var age = null;
alert(age);

// Undefined --> A variable is declaraed but not assigned

var x ;
alert(x); // Undefined

// Typeof operator

console.log(typeof undefined);  // undefined
console.log(typeof 0);          // number   
console.log(typeof 10n);        // bigint
console.log(typeof true);       // boolean
console.log(typeof 'Karan');    // string
console.log(typeof Symbol('id'));   // symbol
console.log(typeof Math);           // object   
console.log(typeof null);       // object --> It's a offically recognized error in Js , It's a special value
console.log(typeof alert);      // function



