// String Conversions

let value = 123; // number
console.log(value);
console.log(typeof value);

// Now String(value) Applying

value = String(value);
console.log(value);
console.log(typeof value);

// Numeric Conversions

console.log('6'/'2'); // The strings are automatically converted to numbers

// Number(value) Applying

let str = '123';
console.log(typeof str); // String

let number = Number(str);
console.log(typeof number);

// More Numeric Conversion Examples

let num1 = undefined;
console.log(Number(num1));  //NaN

let num2 = null;
console.log(Number(num2));  // 0

let num3 = true;
console.log(Number(num3)); // 1

// Boolean Conversions

let value1 = "empty";
console.log(Boolean(value1));

console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean(0));
console.log(Boolean("0"));


