// Conditional Operator Example 

let a = +prompt('Assign a value !');
let b = +prompt('Assign b value !');

let result = (a + b < 4) ? 'Below': 'Over';
console.log(result);

// Example:2

let login = prompt('Who is the Messanger ? ');

let message = (login == 'Employee') ? 'Hello': (login == 'Director') ? 'Greetings': (login == '') ? 'No Login': '';

console.log(message);

// Logical Operations : &&, ! and ||

let str = 'I\'m Karan';
console.log(!!str);

// OR Logical Operator : Converts the operand to Boolean value first and the result is returned in it's original form

console.log( 1 || 0 );
console.log( null || 0 || 1);

// Getting the first truthy value from a list of variables or expression

let firstName = '';
let lastName  = '';
let nickName  = 'Negi';

console.log( firstName || lastName || nickName);

false || alert('Hi Mr. Billionaire');

// && Operator Understanding

console.log( null && 5 );

// Sometimes used in place of if like this

let x = 1;
(x > 0 ) && alert ('Greater than Zero')

// Good Quiz Guess the Output

alert( alert(1) || 2 || alert(3));