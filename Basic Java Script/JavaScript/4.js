/* Basic Operators */

//Math Operator

var ageKaran = 25;
var ageDang = 40;
var year = 2020;
var yearKaran = year - 25;
console.log(yearKaran);

// Logical Operators

var karanOlder = ageKaran > ageDang;
console.log(karanOlder);

// Typeof Operator : requries single operand.

// Teling the typeof the variable defined before in the code
console.log(typeof karanOlder);
console.log(typeof ageDang);
console.log(typeof 'Dang is older');

var x;
console.log(typeof x);  // Obviously undefined

// Operator Precedence

var now = 2020;
var yearKanu = 1989;
var isFullAge = 18;

var isFullAge = now - yearKanu >= isFullAge;
console.log(isFullAge);

//Multiple Assignments

var x,y;
x = y = (3+5)* 4 - 6;  //8 * 4 - 6 // 32 - 6 // 26

//Locking Two Things at once here.
console.log(x,y);

// More Operators

var x1;
x1 = x * 2 ;
x *= 2;                  //Same way like above
console.log(x1,x);









 