// String Concatication

let s = 'my' + 'Love';
console.log(s);

// Understanding in depth
// If any of the operand is a string, then the other one is converted too a string by default.

console.log('2' + 1 );  // 21
console.log(2 + '1');  // 21
  
console.log(2 + 2 + '1'); // 41

// Example Unserstanding

let apples = '2'; // string
let oranges = '5';

console.log(+apples + +oranges);
console.log(Number(apples)+ Number(oranges));

// Comma Operator

let answer = (1 + 2, 2 + 1);
console.log(answer);

// Concatinate Example

console.log('  2  ' + 2 );

// Comparison Operatos

console.log('2' > 1);

console.log(true > 1);

// Without Strict Equality

console.log( 0 == false ); // true

// With Strict Equality

console.log( 0 === false ); // false

// Diffrent Types hence Conversion Happens

console.log('2' > 12 );

// Same Type Hence No Conversions

console.log('2' > '12');