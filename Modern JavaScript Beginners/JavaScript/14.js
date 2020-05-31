// String Length

console.log('My\n'.length); // 3

// [pos] or str.charAt(pos)

let str = 'Hello World';
console.log(str[0]);         // Modern Way
console.log(str.charAt(1));

// Difference b/w [pos] and charAt

console.log(str[100]);        // returns Undefined
console.log(str.charAt(100))  // returns empty string

// We can also iterate over Characters

for (let char of str ) {
    console.log(char);
}

// str.indexOf : Searching for a substring

let str1 = 'Hello World How are you?';
console.log(str1.indexOf('How'));
console.log(str.indexOf('lo'));

// includes, startsWith and endsWith

console.log('Widget with id'.includes('id'));  // true
console.log('Hello'.includes('bye')); // false

console.log('Widget'.includes('id',3)); // false


// startsWith and endsWith

console.log('Widget'.startsWith('Wid')); //true
console.log('Widget'.endsWith('get'));   //true

// Getting a substring

// Method:1 : str.slice(start, [,end]) : Returns the part of the string from start to (but not including) end.

let str2 = 'Karan Singh Negi';
console.log(str2.slice(0,7));

// If single argument is provided then it goes till the end

console.log(str2.slice(5));

// Negative values are also applicable for start and end here

console.log(str2.slice(-4,-2));

// Method:2 : str.substring(start [,end])
// Returns the part of the string between start and end

let str3 = 'stringify';

// These are same for substring
console.log(str3.substring(2,6));
console.log(str3.substring(6,2));

console.log(str3.slice(2,6));
console.log(str3.slice(6,2));

// Method:3 str.substr(start [,length])
// Returns the part of the string from the start , witht the given length


let str4 = 'stringigy';
console.log(str4.substr(2,6));













