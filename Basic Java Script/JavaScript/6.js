// If-Else Constructs 

var Name = 'Karan';
var Status = 'Single';

// === Means true/false 

if (Status === 'married')
	console.log(Name + ' is Married');
else
	console.log(Name + ' is Single');

var isMarried = true;

if (isMarried)
	console.log(Name + ' is Married');
else
	console.log(Name + ' is Single');


//Boolean Logic

var firstName = 'Karan';
var age = 25;

if (age < 13){
	console.log(firstName + ' is a boy.');
} else if (age >= 13 && age <= 20 ) {
		console.log(firstName + ' is a boy.');
}else {
	console.log(firstName + ' is a man.');
}

/* The Ternary Operator and Swicth Statements: Alternative to Conditional */

var lastName = 'Negi';
var newage  = 25;

newage >= 25 ? console.log(lastName + ' drinks beer'): console.log(lastName + ' drinks juice.');

var drink = age >= 25 ? 'beer' : 'juice';
console.log(drink);


/* Switch Statements Understanding */

var job = 'developer';

switch(job){
	
	// If he is a Developer or Instructor it will work
	case 'developer':
	case 'instructor':
		console.log(lastName + ' is a developer at Microsoft.');
		break;
	case 'driver':
		console.log(lastName + ' is a driver');
		break;
	case 'designer':
		console.log(lastName + ' is a designer');
		break;
	default:
		console.log('He does nothing');
}

// Trick to make switch work for If-Else
	
switch(true){
	case age < 13:
		console.log(firstName + ' is a boy.');
		break;
	case age >=13 && age < 20:
		console.log(firstName + ' is a teenager.');
	case age >=20 && age < 30:
		console.log(firstName + ' is a young man.');
		break;
	default:
		console.log('Is nothing');
}





















