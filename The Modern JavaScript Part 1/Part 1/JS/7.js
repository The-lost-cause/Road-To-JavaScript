// Function Declaration Important Things

function sayHi() {
    console.log('Hello !');
}

console.log(sayHi); // It will show the declaration 

let Hello = sayHi;  // We can even assign the function to another variable

console.log(Hello);

Hello();  // And even call it

// Function Expression

let sayHy = function(){
    console.log('Hello from another Function !');
};             // Semi-colon is must

sayHy();

// Basic CallBack Example Understanding

function ask(question, yes, no){
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    console.log('You Agreed !');
}

function showCancel() {
    console.log('You Cancelled');
}

ask('Do you agree ?', showOk, showCancel); // These function arguments passed are called Callback functions or just Callback

// More Function Expression Example

let age = prompt('What is your age ?', 18);

// Function declared here have no name , hence called the anonyomous function

let welcome = (age < 18) ? function(){ alert('Hello')} : function() { alert('Greetings')};

welcome();