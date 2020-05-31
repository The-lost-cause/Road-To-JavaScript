// Splice Method in an Array

let arr = ['I','study','JavaScript'];
//from index 1 remove 1 element
arr.splice(1,1); 
console.log(arr);

// With 3 arguments

let arr1 = ['Karan','Bong','Leenu','Aproov'];
arr1.splice(0,3,'Kanu','Navum','Shiva');
console.log(arr1);

// Elements removed

let arr2 = [1,2,3,4,5];
let removed = arr2.splice(0,2);
console.log(removed);

// Splice Method for Inserting

let arr3 = ['I','study','JavaScript'];
arr3.splice(2,0,'Complex','language');
console.log(arr3);


// SLICE METHOD : Similar to splice

let arr4 = ['t','e','s','q'];
console.log(arr4.slice(1,3));
console.log(arr4.slice(-2));

// Concat Method

let arr5 = [1,2,3];

// Creating an array from arr5 and [4,5,6,7]

console.log(arr5.concat([4,5,6,7]));

// Iterator : forEach

let user = ['Karan','Bong','Leenu','Bhopali','Navum'];

// console.log(user.forEach(alert));

// SHORT- HAND USED HERE WITH ARROW FUNCTIONS

// With one argument passed in arrow function
user.forEach(item => console.log(item));

// Two arguments passed
user.forEach((item,index) => console.log(index,item));

// Three arguments passed
user.forEach((item,index,array) => console.log(index,item,array));

// Basic Syntax

user.forEach(function (item,index,array) {
    console.log(`${item} is at index ${index} in ${array}`);
});

// Searching In an Array

// arr.indexOf

let name = [1,0,false,true,34,'Karan'];

console.log(name.indexOf(false));           // Gives out 2
console.log(name.lastIndexOf('Karan',2));   // Gives out -1
console.log(name.includes(1));              // True

// Find Method

let users = [
    {id:1 , name:'Karan' },
    {id:2 , name:'Bong'  },
    {id:3 , name:'Leenu' },
];

// Find method returns the item
let result = users.find(item => item.id == 1 );

// Note the result now contains an object with the condition given above
console.log(result);

console.log(result.id);
console.log(result.name);

// FindIndex Method Understanding

let result2 = users.findIndex(item => item.id == 3 );  // Note this will return the index of the item not the value
console.log(result2);

// FILTER METHOD :

let result3 = users.filter(item => item.id < 3 );
console.log(result3);    // returns an array of objects 