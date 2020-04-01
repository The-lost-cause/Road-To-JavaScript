// Block Scope MAtters 

var price = 20;
var isSale = true;

if (isSale) {
    // discount price of product
    var price = 20 - 2;
    var age = 10;        // This value is not living inside this block // Also known as variable shadowing
    // do something
    console.log('sale price',price);
}

console.log('price',price);
console.log(age);  // We were still able to access this value though it was defined in the if block

// Fix Instead of var use Let --> They are blocked scope


// Strings Concatination

let userName = 'Karan';
let message = 'Hi ' + userName;  // + --> String concatination
console.log(message);


//Template Literals with back ticks ``

console.log(`Hi ${userName}`); 

// Using Aspostrophes's And double quotes

let string = "I'm Karan";
let string2 = ' "I\'am Karan" ';
let string3 = `I'm Karan`;

console.log(string,string2,string3);


//Using \n and \r

let str1 = "I'm \n Karan Negi \r Got it?";
console.log(str1);