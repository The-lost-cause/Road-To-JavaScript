// Type Conversion

let age = 10;
console.log(typeof age , age);

alert(typeof(age)); // Number

// Type Conversion using String Method

alert(typeof (String(age))); // String

// Another Example

let value = true;
alert(typeof value); // Boolean

value = String(value); // Now value is a string 'true'
alert(typeof value);  // String Now 


// Numeric Conversion

// Alert Method automatically converted strings to values here , Thus resulting in answer : 3

alert ('6' / '2' ); // Note the values are strings here

// Number(value) Method --> Explicitly convert value to a number

let str = '123';  // String
alert(typeof str);  // String

let num = Number(str); // Becomes a number 123
alert(typeof num); // Number

//  If the String is not a valid number it throws NaN

let year = Number('Karan'); // 'Karan' is not a valid number string
alert(year); // NaN , Conversion Failed


// More Example Understanding of Numeric Conversion

alert(Number(undefined));   // Result ---> Nan
alert(Number(true));        // 1
alert(Number(null));        // 0
alert(Number('123'));       // 123
alert(Number(''));          // 0
alert(Number('Bong'));      // NaN

// Boolean Conversion

alert(Boolean(1));          // True
alert(Boolean("Karan"));    // True
alert(Boolean(""));         //False
alert(Boolean(" "));        // True Since It Contains Space
