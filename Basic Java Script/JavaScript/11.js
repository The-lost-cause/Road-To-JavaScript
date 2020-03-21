// Function Declarations 
// Function whatDoYouDo(job,name){}

/* Function Expression */
var whatDoYouDo = function (job,name){
	switch(job) {
		case 'teacher':
			console.log('Teacher');
			return name + ' teaches kids';
		case 'developer':
			console.log('Developer');
			return name + ' is a Self-Taught Developer';
		case 'designer':
			console.log('Designer');
			return name + ' is a designer';
		default:
			console.log('Nothing');	
			return name + ' does Nothing';
	}
			
}

//Storing the function value directly in a console here.

console.log(whatDoYouDo('developer','Karan Negi'));

	
	
 