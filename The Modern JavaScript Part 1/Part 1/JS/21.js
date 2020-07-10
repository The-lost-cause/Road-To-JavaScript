// Array Destructuring

let arr = ['Karan', 'Negi'];

let [firstName, lastName] = arr;

console.log(firstName, lastName);

// Fun with split 

let [love, lust] = 'Happiness Darkness'.split(' ');
console.log(love, lust);

// All iterables can be used with destructruing assignment

let [a, b, c] = 'ABC';
console.log(a, b, c); 

// Swap Variable Trick

let name = 'Karan';
let surName = 'Negi';

[name, surName] = [surName, name];
console.log(name, surName);

// Ignore elements 

let [Name , , Title ] = ['Leenu', 'Bong', 'Dang' , 'Karan'];
console.log(Name, Title);

let [sinx, cosx, ...rest] = [1,2,3,4,5,6,7,8];
console.log(sinx, cosx, rest);

// Default Values

let [Tony, Robert, Chris = 'T-H-O-R'] = ['IronMan', 'SpiderMan'];
console.log(Tony, Robert, Chris);

// Object Destructring

let optionss = {
    title: 'Menu',
    width:  100,
    height: 200,
};

let { title, width : w, height } = optionss;  // Here order doesn't matter though names must be same
console.log(title, w, height);

// Nested Destructuring

let options = {
    size: {
      widths: 100,
      heights: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };

  let { 
      size : {
      widths,
      heights,
  },
    items: [item1, item2],
    extra,
    titles = 'Menu',
} = options;


console.log(titles, widths, heights, item1, item2);

// Program :1 

let user = {
    namea: 'John',
    years: 5,
}

let { namea, years: age, isAdmin: isAdmin = confirm('True/Flase') } = user;

console.log(namea);
console.log(age);
console.log(isAdmin);

// Program : 2 The Maximal Salary

let salaries = {
    'John': 100,
    'Pete': 300,
    'Mary': 250,
};

function topSalary(salaries) {

    let max = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries) ) {

        if (max < salary) {

            max = salary;
            maxName = name;
        }

    }

    return maxName;


}

console.log(topSalary(salaries));