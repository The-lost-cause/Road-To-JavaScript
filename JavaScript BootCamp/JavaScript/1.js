// Variables name follow Camel-Case

// "use strict"; // Prevents from using undeclared variables 

var userName = 'Karan';
console.log (userName);  //Karan

//By default variables are initalized with undefined;

var lastName; // Bydefault it's value will be undefined
console.log(lastName); //undefined

// Strict Mode

 var message = "Hello world";
 message2 = "Hello world 2";  // it will throw an error if we remove 3 line comment , since we are using strict mode at the start of the script file 

 console.log(window);
 console.log(message);

 console.log(window.message2); // Our message2 was put on the global object --> window since we haven't declared it properly with var

 console.log(globalThis); //New way of accessing globsl object across all platforms/enviornment

// Hoisting  : Accesing a varibale before it was created 

console.log(age); //undefined 
var age = 26;
console.log(age);  //26


// It seems like strict mode doesn't work well with hoisting


// Understanding let Vs var Vs const : Not acceptable for hoisting.

//console.log(birthYear);    // This will throw an error , since we are using let which are not hoisted like var 
let birthYear = 1995; 

const color = 'green';   // CONST always need to get initialized .
console.log(color);


