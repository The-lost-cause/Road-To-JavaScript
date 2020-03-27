/** Pillars of javaScript */

//Symbol : Primitive Type

 var v = Symbol();
 typeof v;
 console.log(v)

// NaN : not a Number

var greetings = 'Hello, class!';

var something = greetings / 2 ; //Nan
console.log(Number.isNaN(something));       //true

//Nan : Meaning an invalid numeric operations
console.log(Number.isNaN(greetings));    //false

//Use of New

var yesterday = new Date('March 27, 2020');
yesterday.toUTCString();
console.log(yesterday);
// Fri Mar 27 2020 00:00:00 GMT+0530 (India Standard Time)

// Converting Types

var msg1 = 'There are ';
var numStudents = 19;
var msg2 = ' students.';
console.log(msg1 + numStudents + msg2);
  
// It's(teacher) in Global scope 
var teacher = 'Kanu';

function otherClass() {
    //Thus accessible
    teacher = 'Karan';

    //Note the topic will get the global scope here 
    
    /*
    But if we define it as var topic then it will get only function scope */

    topic = 'Scopes'; //non-strict mode
    console.log("Welecome !");
}

otherClass();
console.log(teacher);
console.log(topic);


//IIFE : Immediately Invoked Function Expression

var love = 'hate';

//IIFE example

(function anotherLove(){
    var love = 'Dang';
    console.log(love);   //Dang
})();

console.log(love);   //hate


// Block Scoping let

var hobbie = 'Guitar';

//Block Level Scope 
{
    let hobbie = 'Swimming';
    console.log(hobbie);
}
console.log(hobbie);

// Closure 

function ask (question) {
    setTimeout(function waitASec(){
        console.log(question);
    },100);
}

ask ("Ask a question ?");
