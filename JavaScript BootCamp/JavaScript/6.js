// Function Part 2

//Default values in a function

function convertTemp (celsius, decimalPlaces = 1) { // Here we are giving default value as 1 , if decimalPlaces is not defined
    const fahrenhite = celsius * 1.8 + 32;
    return Number(fahrenhite.toFixed(decimalPlaces));
}

console.log(convertTemp(21));

// Arrow Functions Understanding

const username = 'karan'

const capitalize = name =>  `${name.charAt(0).toUpperCase()}${name.slice(1)}`;

console.log(capitalize(username));

function greetUser (name,callback) {
    return callback(capitalize(name));
}

const result = greetUser(username, name => `Hi there , ${name}`);
console.log(result);

// Coding Challenge of Arrow function =>

const splitBill = (amount,numPeople) => `Each person needs to pay ${amount / numPeople}`

console.log(splitBill(10,2));
console.log(splitBill(10,4));
console.log(splitBill(10,5));

// Part 2

const countdown = (startingNumber, step) => {
    let countFromNum = startingNumber + step;
    return () =>  countFromNum -=step;
}

const countingDown = countdown(20,3);
console.log(countingDown());
console.log(countingDown());
console.log(countingDown());