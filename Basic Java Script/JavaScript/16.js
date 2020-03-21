/* Objects And Methods */

var karan = {
	name: 'Karan',
	last: 'Negi',
	job: 'Developer',
	calcAge: function(birthYear){
		return 2020 - birthYear;
	}
};

console.log(karan.calcAge(1995));
console.log(karan);

/* Understanding this keyword */


var kanu = {
	name: 'kanu',
	last: 'Negi',
	job: 'teacher',
	birthYear: 2000,
	calcAge: function(){
		return 2020 - this.birthYear; /* Note : this here refer to kanu object literal */
	}
};
console.log(kanu.calcAge());

/* Adding new property to the object */

var age = kanu.calcAge();
kanu.age= age;
console.log(kanu);

/* Other way 

kanu.age=kanu.calcAge();

Also you can do is : this.age = 2020 - this.birthYear 

*/




