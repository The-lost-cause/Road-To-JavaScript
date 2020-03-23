///////////////////////////////////////
// Lecture: Hoisting works with fucntion declaration not with function expression

//Function declaration 
calculateAge(1990);

function calculateAge(year){
    console.log(2016 - year);
}
 

// Function Expressions

//retirement(1996);

var retirement = function (year){
    console.log(65 - (2016 - year));
}

retirement(1996);


// Hositing with variable now :
console.log(age);
var age = 23;
console.log(age);

function foo () {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);

///////////////////////////////////////
// Lecture: Scoping






// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(d); 
}

///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

age1(1995);

function age1(year){
    console.log(2020 - year);
    console.log(this);
}

var john = {
    name : "Karan",
    year : 1990,
    calculateAge: function(){
        console.log(this);
        console.log(this.name);

        function inner() {
            console.log(this);
        }
        inner();
    }
}

john.calculateAge();

var mike = {
    name: 'MIKE',
    year:  1998,
};

// Method Borrowing *IMPORTANT

mike.calculateAge = john.calculateAge;
mike.calculateAge();