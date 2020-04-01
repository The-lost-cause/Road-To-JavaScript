// If - else Statements : evaluate to Boolean values

const prefersDarkMode = true;

if (prefersDarkMode) {
    console.log('Dark mode set!');
    document.body.style.background = 'limegreen';

}

console.log('light mode set !');
// document.body.style.background = 'ghostwhite';

//type of example 
let message = 'some string';
console.log(typeof message);

// Can convert one data type to another

//Number to a string.

//Using global function string : String()

let age = 25;
console.log(age);  // Number comes in colored
console.log(typeof age);  // Number

//Now Converting Explicitly

console.log(String(age)); // Converted to string
console.log(typeof String(age));  //String
console.log(Boolean(message)); // Converted String to Boolean --> true


// Implicit Type conversion : Coercion
//Example

let str1 = '1';  //string
let str2 = '2';  //string

console.log(str1 * str2); //It results in 2 even though inputs were strings ---> What JavaScript does is called Coercion

//Example 2

console.log('10' + 20 );  // ---> 1020

// Js always do Coercion in conditional

if ('karan') {
    console.log('run');   // This will run cause it's truthy value
} else {
    console.log('skipped')
}

// Truth values : all other than falsy values.
// Falsy values : false,0,null,empty string,undefined,NaN.

// 1. Avoid direct comparison

const userName = '';  //We know this is falsly as it has empty string
if (!userName){
    console.log('Falsy');
}else {
    console.log('Truthy');
}

// 2. Use triple equals === (strict equal operator)

if (null === undefined) {
    console.log('True');
} else {
    console.log('False');
}

// 3. Convert to real Boolean values when needed

if (NaN === NaN) {          // We expect to be equal but comes not-equal
    console.log('equal');
}else {
    console.log('not-equal');
}

// Now Fixing
if (Boolean(NaN) == Boolean(NaN)){
    console.log('equal');
} else {
    console.log('not-equal');
}

console.log(!!"hello"); //Using bang operator ---> true


// How To Shorten Conditions : Ternary Operator

const isAuthenticated = false;

const cartItemCount = isAuthenticated ? 1 : 0;


// Short - Circuiting  
// || OR operator returns the truthy value

const response = '';
const lastName = response || 'guest';  // Note only truthy will go 
console.log(lastName);


// && Operator 
// true && false ------> will put false --> will go for second operand.
// false && false ---> will return falsy value

const response1 = 'Reed';
const isEmailVerified = false;

const email = isEmailVerified && 'karan'; // will put value false
console.log(email);


