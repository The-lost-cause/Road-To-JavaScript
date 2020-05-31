// Arrow Function Example

let sum = (a,b) => a + b;
alert(sum(1,2));  // Result:3


// If there's only one argument then parantheses around parameters can be omitted

let double = n => n * 2;
alert(double(3));


// If there are no arguments , paratheses will be empty but they should be present

let sayHi = () => alert('Hi Arrow Functions');
sayHi();

// More Dynamic Examples

let age = prompt('What is your age?',25);

let welcome = (age < 18) ?
() => alert('Hello') :
() => alert('Greetings');

welcome();

// Another Example With Arrow Function

let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

ask('Do you Agree?',
 () => alert('Agreed'),
 () => alert('Cancelled')
);