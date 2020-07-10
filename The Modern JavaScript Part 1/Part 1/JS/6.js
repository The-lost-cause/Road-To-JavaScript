// When function return nothing : undefined

function doNothing() {
//Empty function , returning Nothing
}

console.log(doNothing() == undefined); // true

// Also when function returns just return : Undefined

function doNot() {
    return; 
}

console.log(doNot() == undefined); // true 

// Program : Using ? and OR

function checkAge(age){
  // return (age > 18) ? true : confirm('Did parents allow you?');
   return (age > 18 ) || confirm('Did your parents allow you');
}
checkAge(21);

// WAP to calculate the Pow(x,n)

let x = +prompt('Value for x');
let y = +prompt('Value for y');


function pow(x,y) {

    let value = 1;

    while(y){
        value *= x; 
        y--;
    }

    return value;
}

let result = pow(x,y);
console.log(result);