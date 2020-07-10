// [pos] and str.charAt(pos) 

let str = 'Karan';
console.log(str[0]);

console.log(str.charAt(0));

// Iterating over a loop

for ( let char of str) {
    console.log(char);
}

// Searching a Substring : str.indexOf

console.log(str.indexOf('an'));

// Includes Method

console.log(str.includes('a'));

// Slice Method

console.log(str.slice(3));

// Difference in slice and substr

console.log(str.slice(1,3), str.substr(1,3));

let str1 = 'Karan';
let str2 = 'Negi';

console.log(str1.localeCompare(str2));