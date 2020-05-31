// Transform an Array

let user = [
            'Karan',
            'Bong',
            'Harleen',
            'Leenu',
           ];


           // Understanding Map : Returns an new array 
           // Returns the new value instead of items
let result = user.map(item => item);
let length = user.map(item => item.length);
console.log(result);
console.log(length);


// Sort(fn) METHOD

let numbers = [23,2,6,334,78,3,1,8,5,0];

// Sort Method

numbers.sort( (a,b) => a-b );
console.log(numbers);

// Reverse Method

let reverses = [2,45,7,23,52,2344,678];
console.log(reverses.reverse());

// SPLIT METHOD

let names = 'Karan,Leenu,Bong,Param,Navum';

let arr = names.split(',');  // Created an array

for(let name of arr){
    console.log(name);
}
console.log(arr);

// Splitting into letters

let str = 'Karan';

console.log(str.split(''));            // Just pass Empty arguments

// JOIN METHOD

let arr1 = ['Karan','Singh','Negi'];
let str1 = arr1.join('|');
console.log(str1);

// REDUCE METHOD Understanding

let answer = [1,2,3,4,5,6];

let final = answer.reduce((sum,item) => sum + item, 0)
console.log(final);


// Same Problem with Map 

let sum=0;
final = answer.map(item => sum +=item); // Returns an array
console.log(final);
console.log(sum);

// Array.isArray METHOD

console.log(Array.isArray([]));


