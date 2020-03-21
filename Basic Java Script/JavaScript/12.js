/* Arrays */

/*One way of Declaring an Array in Js */
var names = ['Karan', 'Leenu', 'Navum'];

/*Another way of Declaring an Array in Js */
var years = new Array(1990,1995,1969);

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

/* Since ther is no 3 element in an array */
console.log(names[3]);   // Will result in undefined


/* Taking all the values at once */
console.log(names);

/* Printign the size of an array */
console.log(names.length);

/*Printing the length of the first element in an array */
console.log(names[0].length);


// Mutations 
/* We can also mutate the data in an array as well */

names[1] = 'Hanuman';
console.log(names);

/* Suppose you want to put an element at last */
names[names.length] = 'Kunal Tyagi';
console.log(names);

console.log(years);

//METHODS For Array : Push,Unshift,Pop,Shift,indexof
//Different data-types in an array

var karan = ['karan','singh','negi',1995,true];

//Push()the element at the end of an array
karan.push('black');
console.log(karan);


//Unshift() will put at the beginning of an array
karan.unshift('Mr. ');
console.log(karan);

//Pop()will remove at the end

karan.pop();                 //last element will get removed
console.log(karan);

//Shift()will remove the first element
karan.shift()               // will remove the first element
console.log(karan);


//To know the index of an element : indexOf

console.log(karan.indexOf('negi'));

//If you try to access the index of some value that is not in the array it will return -1 value

console.log(karan.indexOf(1));  // Since there is no element with 1 --> It will return -1


//Using Operator for better understanding 

console.log(karan.indexOf('developer') == -1 ? 'Karan is not a developer' : 'Karan is a Developer');



























