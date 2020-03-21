//Falsy Values are  : undefined , null , 0 , '' , NaN

//Truthy Values are : All the values that are not Falsy.

var height;  // It will result in falsy value as it is not defined and used in if-else statement 

if (height){
	console.log('Variable is defined');
}else {
	console.log('Variabke is not defined');
}

/* Note we said 0 is also falsy so */

height = 0; //It is still a falsy value

if (height){
	console.log('Variable is defined'); // This will executed only
}else {
	console.log('Variabke is not defined');
}

/* How to Overcome above problem just use NOR Operator */

if (height || height === 0){
	console.log('Variable is defined'); 
}else {
	console.log('Variabke is not defined'); // Here This will get executed Now
}
