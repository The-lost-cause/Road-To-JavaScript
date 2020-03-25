/* Functions And Scopes */

function addTwo(number){
    return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);
console.log(addTwo(100));

/* Another Good Example */


function greet(firstName, lastName, honorific, greetins) {
    return `${greetins} ${honorific} ${lastName}! I'm extremely please you could join us ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}`;
}

console.log(greet("Karan","Negi","Mr","Salutations"));

/* Lets understand this */

function add() {
    return 6 + 4;
}

// Here answer is representing the function add here
const answer = add;
//Invoking the function here
console.log(answer());



/* Understand this */
const myHomeCity = 'Chandigarh';
const myHomeState = 'Punjab';
const myHomeCountry = 'INDIA';

function logOutYourHome(city,state,country){
    console.log(`You are from ${city}, ${state} ${country}.`);
}

logOutYourHome(myHomeCity,myHomeState,myHomeCountry);
logOutYourHome("Torino","Piemonte","Italid");

/* Scopes */ 

 let globalVar = 'unchanged'; // Declared at Global scope

 function addFive(number){
     globalVar = 'changed';
     const someVariable = "You can't see me";  // Declared in this scope only
     return number + 5;
 }

 console.log(globalVar); // This will give unchanged
 addFive(10);
 console.log(globalVar); // This will give changed
