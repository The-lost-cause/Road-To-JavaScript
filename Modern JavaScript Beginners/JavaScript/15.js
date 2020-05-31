// Loops : for .. of

let fruits = ['apple',
              'orange',
              'banana',
              'Water-Melon',
             ];

// Iterates over fruits

for ( let fruit of fruits){
    console.log(fruit);      // Gives the values
}

// Method:2

let user = new Array('Karan','Bong','Leenu');

for(let users of user){
    console.log(users);
}

// EXAMPLE

let arr = new Array(2);
console.log(arr[0]);    //undefined

console.log(arr.length);

let arr1 = [1,2,3,4,5];
console.log(arr1);

console.log(String(arr1));

