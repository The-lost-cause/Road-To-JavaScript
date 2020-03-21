/* Objects And it's Paramteres */

var karan = { 				// karan is the object literal here.
	firstName: 'Karan',     // property: value , or say key-value pair exist in objects
	lastName: 'Negi',
	birthYear: 1990,
	family: ['Kanu','Mom','Dad'],
	job: 'Front-End-Developer',
	isMarried: false
};

console.log(karan);

console.log(karan.firstName);
console.log(karan.family);

/*One Way */
console.log(karan.lastName);

/*Another way for accessing the property : Using the brackets */
console.log(karan['lastName']);

/*Third Way : U-S-E-F-U-L*/
var x = 'birthYear';
console.log(karan[x]);

// Mutation with objects

karan.job = 'Guitarist';
karan['isMarried'] = true;
console.log(karan);


// Another way for declaring objects : New Object Syntax
var kanu = new Object();
kanu.name2 = 'Kanika';
kanu.birthYear1 = 1989;
kanu['lastName2'] = 'Negi';

console.log(kanu);



















