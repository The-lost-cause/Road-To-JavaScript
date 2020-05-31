// Important Example

alert('1' + 1 );  // 11 Numbers didn't get add
alert('1' - 1 );  // Result is 0 , String get converted to Number


// Urnary Plus operator works same as ----> Number(value)

// No effect on Numbers

let x = 1;
alert (+1); // 1

// Converts non-numbers
alert( +true); // 1
alert(+"");  // 0

// Another Example

let apples = '2';
let oranges = '3';

alert( apples + oranges ); // 23 will not perform addition

// So We did this Number(value) ----> same as ---> +(Operand)
//Both values converted to numbers before the binary plus

alert(+apples + +oranges);

// Exponential Operator

let b = 2;
let c = 3;
let a = b**c;

console.log(a);  // 8

//Type Conversion is happening here 

console.log(true + false);
console.log( 6 / '3' );

