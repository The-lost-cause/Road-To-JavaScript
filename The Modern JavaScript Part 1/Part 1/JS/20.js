// Weak Map Understanding with example : Only object as keys are stored

let weakMap = new WeakMap();

let obj = {
    name: 'Karan',
    age: 25,
}

weakMap.set(obj, 'Hi Mr. Billanoire');

console.log(weakMap);

// WeakSet Understanding : Only objects are stored

 let weakSet = new WeakSet();

 weakSet.add(obj);

 console.log(weakSet);

 // Program Count Salaries

 let salaries = {

    'John' : 100,
    'Pete' : 300,
    'Mary' : 250,

 };

 function sumSalaries(salaries) {

    let sum = 0;

    for(let salary of Object.values(salaries)){

        sum += salary;      

    }

    return sum;

 }

console.log ( sumSalaries(salaries) );


// Program 2 : Count Properties

let user = {

    name: 'John',
    age : 30,
};

function count(obj) {

    return Object.keys(obj).reduce((a) => ++a , 0);

};


console.log(count(user));








