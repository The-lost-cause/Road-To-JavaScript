/* Understanding Type Coercion */

/* Difference B/W == AND === in JS */

var one = 1;
var one_again = 1;

//Note this one is a string
var one_string = "1";

/* == converts the variable values to the same type before performing comparison
	  This is called Type Coercion                             */

console.log(one == one_again);  // Will return true

console.log(one === one_again);  //Will return true

/* Since == will convert the string into interger */
console.log(one == one_string); // true

/* === doesn't do any type conversion and return true only if both values and types are identical */
console.log(one === one_string); // false
	