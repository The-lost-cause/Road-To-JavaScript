// CASE : 1 : Iterating over objects

const obj = {one: 1, two: 2};
for (const key in obj) {
    console.log('key',key);  // For keys
    console.log('value',obj[key]);
}

// Converting Objects into arrow 
// Three Ways 


//Way: 1 Object.keys()

const usr = {
    name: 'Karan',
    age : 25
};

// Taking keys only from object and converting them into array

// To get the keys
console.log(Object.keys(usr));

//Checking 
const ageExists = Object.keys(usr).includes('age');
console.log(ageExists);

// To get the values
const values = Object.keys(usr).map(key => usr[key] );
console.log(values);

// Second METHOD : Object.values

console.log(Object.values(usr));

const monthlyExpenses = {
    food: 400,
    rent : 1700,
    insurance: 200,
    internet : 90
};


// Object.values with reduce methods
const monthlyTotal = Object.values(monthlyExpenses).reduce((acc,expense)=> acc + expense, 0
);

console.log(monthlyTotal);

// Case 3 : Object.entries ()

console.log(Object.entries(usr));
console.log(usr);


// Use Case of Object.entries()


const users = {
    '2345234': {
      name: "John",
      age: 29
    },
    '8798129': {
      name: "Jane",
      age: 42
    },
    '1092384': {
      name: "Fred",
      age: 17 
    }
  };
  
  const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {
    if (user.age > 20) {
      acc.push({ ...user, id });
    }  
    return acc;
  }, []);
  console.log(usersOver20);