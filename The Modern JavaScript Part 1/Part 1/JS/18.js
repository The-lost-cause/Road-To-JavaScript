// Array-Like Object 

let arr = [1];


let arrayLike = {

    // Must be in format like array to work like an array
    0: 'something',
    1: 'else',
    [Symbol.isConcatSpreadable]: true,
    length: 2
}

console.log(arr.concat(arrayLike));

// Splice Method Understanding

let arrSplice = [1, 2, 3, 4, 5];

arrSplice.splice(0,2);  // deleting two elements
console.log(arrSplice);

// Slice Method Understanding

let arrSlice = ['I', 'am', 'Karan', 'Negi'];

let newArray = arrSlice.slice(0, 3); // returns an array

console.log(arrSlice);
console.log(newArray);

// Concat Method 

console.log(arr.concat(arrSlice, arrSplice, 1, 'Bong'));

// forEach Method

arr.forEach((item) => console.log(item));

// Searching in an ARRAY:

let searching = [1, 0, false];

console.log(searching.indexOf(1, 0));
console.log(searching.indexOf(false));
console.log(searching.includes(null));

// Find Method Understanding // Objects as an element exists here

let users = [
    {id: 1, name: 'Karan'},
    {id: 2, name: 'Negi'},
    {id: 3, name: 'Singh'},
]

let user = users.find(item => item.id == 1);
console.log(user);

let someUser = users.filter(item => item.id < 3);
console.log(someUser);

// Transform an Array

let result = ['Karan', 'Singh', 'Negi'].map(item => item.length);
console.log(result);

// Split and Join Method:

let names = 'Karan, Bong, Leenu, Bhopali';
let asw = names.split(',');
console.log(asw);

// Join Understanding

let joint = ['Karan', 'Bong', 'Leenu'];
let aswer = joint.join('-');
console.log(aswer);

// Reduce and Reduce Right

let redce = [1, 2, 3, 4, 5];
let red = redce.reduce((sum, current) => sum + current , 0);
console.log(red);


