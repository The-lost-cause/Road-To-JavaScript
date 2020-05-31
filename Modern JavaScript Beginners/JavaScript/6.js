// Function in JavaScript

// Case 1 : If a function does not return a value, it is the same as if it returns undefined.

function doNothing () {
    //Nothing here
}

doNothing();

alert ( doNothing () === undefined ); // True

// Case 2 : An empty return is also the same as return undefined

function doNothing2 () {
    return;      // An empty return
}

alert (doNothing2 () === undefined ); // True


// Function Expression


let sayHi = function () {
    alert('I\'m a function expression');
};

alert (sayHi);  // Shows the function code

let func = sayHi; // Copies the source code of sayHi to func variable.

alert(func);  // It will does the same thing as line 29

sayHi();  

func(); // Same result as above calling sayHi();


// Understanding with Function Declaration

function add () {
    alert('Add two Numbers');
}

let fun1 = add;

alert(add); // Shows the code only
alert(fun1); // Same as above

add();  // Runs it
fun1(); // Same as above

// Call Back Functions exanple

function ask (question, yes, no) {

    if (confirm(question)){
        yes();
    }
    else {
        no();
    }
}

// showOK defination

function showOk () {
    alert ('You agreed.');
}

// showCancel defination

function showCancel () {
    alert ('You canceled the execution.');
}

// Calling the function
ask('Do you agree?', showOk, showCancel);

showCancel(); // We can acess this function outside the ask function.


// Function Expression with CallBack Functions

function ask1 (question1, yes1, no1) {
    if (confirm(question1)) {
        yes1();
    }
    else {
        no1();
    }
}

ask1 (
    'Do You Agree Asshole?',
    function() { alert ('You AGREED!');},  // ANONYMOUS FUNCTIONS
    function() { alert ('You CANCELLED');}
)