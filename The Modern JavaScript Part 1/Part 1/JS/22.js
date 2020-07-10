// Date Object Understanding

let now = new Date();
console.log(now);   // Shows current date and time

// Passed with argument : Shows no of milliseconds passed after Jan 1st 1970

let Jan_01_1970 = new Date(0);
console.log(Jan_01_1970);

// lets Got to Jan_02_1970 thus :

let Jan_02_1970 = new Date( 24 * 3600 * 1000 );
console.log(Jan_02_1970)

// New Date Creation

let customDate = new Date(2020, 5, 23 );
console.log(customDate);

// We can also pass Date as a STRING

let stringDatePassed = new Date('2020-06-23');
console.log(stringDatePassed);

// Methods on Date Object

console.log(customDate.getFullYear(), customDate.getMonth(), customDate.getDate(), customDate.getHours());

let today = new Date();
console.log(today);

today.setHours(0);
console.log(today);

today.setHours(0, 0, 0);
console.log(today);

// If we need to increase the date say, for 2 days after

let date = new Date(2020, 4, 23);
console.log(date);
date.setDate(date.getDate() + 2 );
console.log(date);