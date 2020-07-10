// Program-1 

function camelize(str) {
  
    let arr = str.split('-');
    
    let camelCase = arr.map((element, index) => {

        if (index != 0 ) {

           return element[0].toUpperCase() + element.slice(1);

        }else {
            return element;
        }

    });

    return camelCase.join('');
        
}

console.log(camelize('background-color'));
console.log(camelize('list-style-Image'));
console.log(camelize('-webkit-transition'));

// Program : 2 

function filterRange(arr, a, b) {

    return arr.filter((element) => {

        if ( (element => a) && (element <= b) ) {

            return element;

        }

    })

}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered );
console.log(arr);



// Program: 3let arr = [5, 3, 8, 1];


function filterRangeInPlace(arr, a, b) {

    arr.filter( (element, index) => {

        if ( ! ((element >= a) && (element <= b) )) {

            arr.splice(index, 1);

        }

    })

}

filterRangeInPlace(arr, 1, 4);
console.log(arr);

// Program 4 :

let arrSort = [5, 2, 1, -10, 8];

console.log( arrSort.sort( (a, b) => b - a ));

// Program 5 :

let arrString = ['HTML', 'JavaScript', 'CSS'];

function copySorted(arr) {

    let newArray = arr.slice();

     return newArray.sort();
     

}

let sorted = copySorted(arrString);
console.log(sorted);
console.log(arrString);


// Program 6:

function Calculator() {
  
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    }
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

let calc = new Calculator;

console.log(calc);

console.log(calc.calculate("3 + 7"));

// Map to Names :

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map( (user) => user.name );
console.log(names);

// Map to Objects

let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [ john1, pete1, mary1 ];

let usersMapped = users1.map((value) => {

    return {
        fullName : value.name + value.surname,
        id : value.id
    }

} )

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);


// Sort Users by Age

function sortByAge(arr2) {

    arr2.sort( (a, b) => a.age - b.age ) ;

}

let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr2 = [ pete2, john2, mary2 ];

sortByAge(arr2);

console.log(arr2[0].name);
console.log(arr2[1].name);
console.log(arr2[2].name);

// Program : Get an average Age

function getAverageAge(users) {

    return users.reduce((value, users) => value + users.age, 0  ) / users.length ; 

}

let john4 = { name: "John", age: 25 };
let pete4 = { name: "Pete", age: 30 };
let mary4 = { name: "Mary", age: 29 };

let arr3 = [ john4, pete4, mary4 ];

console.log(getAverageAge(arr3));


// Filter Unique Array Elements

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {

    let unique = [];

    arr.map( value => {
        if(unique.includes(value)){
            return;
        }
        else {
            unique.push(value);
        }
    })

    return unique;
}

console.log(unique(strings));

// Keyed Objects from an Array 

function groupById(arr) {


    return arr.reduce( (accumulator, value) => {
            accumulator[value.id] = value;
            return accumulator;
    }, {})
}


let users_1 = [

    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  
];

  let usersById = groupById(users_1);
  console.log(usersById)