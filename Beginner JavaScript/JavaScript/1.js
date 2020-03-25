/* Basic Java Script Learning */

const age = 10;
const bigAge = age * 10

//Underscore with number can be written 

var number = 1_3

/* Note Semi-Colon doesn't matter in Js */

console.log(bigAge)
console.log(age)
console.log(number)

/* Js has a thing called ASI : Automatic Semi-colon Insertion */

/* Strings and Booleans and Numbers */

// Single quotes
var firstName = 'Karan'

//Double quotes
var lastName = "Negi"

//Back ticks quotes
var middleName = `Singh`

console.log(firstName,lastName,middleName)

/* String Concatinations */

console.log('Hello ' + firstName + ' ' + lastName + ' !How are you ?')

/* Template Strings with back ticks*/

console.log(`Hello ${firstName} ${lastName}! How are you?`)

/* Combination of all */

console.log("Hello" + ` ${firstName}` + ' ' + `${lastName}` + ` !How are you`)