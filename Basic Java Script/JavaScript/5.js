var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark,BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;


// How to write 's
console.log('Is Mark\'s BMI is higher than John\'s ' + markHigherBMI);