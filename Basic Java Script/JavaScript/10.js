/* Functions in Js */

function calculateAge(birthYear){
	return 2020 - birthYear;
}

//Calling a Function with a passing argument in it.
//ageJohn will store the return value from above function.

var ageJohn = calculateAge(1990);
console.log(ageJohn);   

var ageKaran = calculateAge(1995);
console.log(ageKaran);   

console.log(ageKaran,ageJohn);  

function yearsUntilRetirement(year, firstName){

var age = calculateAge(year);	
var retirement = 65 - age;
console.log(firstName + ' retires in ' + retirement + ' years.');
}

yearsUntilRetirement(1990,'Karan');
yearsUntilRetirement(1995,'Leenu');
yearsUntilRetirement(1997,'Navum');
