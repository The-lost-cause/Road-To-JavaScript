// Subsets of an array using filter

const restaurants = [
    {name : 'Cap City Diner' , milesAway: 2.2},
    {name : 'Chop Shop', milesAway: 4.2},
    {name : 'Northstar Cafe', milesAway: 0.9},
    {name : 'City Travern', milesAway: 0.5},
    {name : 'Shake Shack' , milesAway: 5.3}
];

//Original Array
console.log(restaurants);

//Using filter method
//It too return a new array

const result = restaurants.filter(restaurants => restaurants.name.startsWith('C'));
console.log(result);

//Advance Filtering

const result1 = restaurants.filter(restaurants => 
    restaurants.name.startsWith('C') && restaurants.milesAway < 3 
    );

console.log(result1);

// Find method looking for just one
// Inculdes is case sensitive

const result2 = restaurants.find(restaurants => 
    restaurants.name.toLowerCase().includes('north') && restaurants.milesAway < 2
    );

console.log(result2);

// Reduce Method on Map

const menuItems = [
    { item: "Blue Cheese Salad", price: 8 },
    { item: "Spicy Chicken Rigatoni", price: 18 },
    { item: "Ponzu Glazed Salmon", price: 23 },
    { item: "Philly Cheese Steak", price: 13 },
    { item: "Baked Italian Chicken Sub", price: 12 },
    { item: "Pan Seared Ribeye", price: 31 }
  ];
  
  const total = menuItems.reduce((accumulator, menuItem) => {
    console.log(` accumulator: ${accumulator}, menu item price: ${menuItem.price}   `);
    return accumulator + menuItem.price;  
  }, 0);
  console.log(total);

  // CHALLENGE ON REDUCE 

  const cars = [
    { name: "Toyota", isElectric: false, weight: 1320 },
    { name: "Ford", isElectric: false, weight: 1400 },
    { name: "Volkswagen", isElectric: false, weight: 1370 },
    { name: "Honda", isElectric: false, weight: 1375 },
    { name: "Tesla", isElectric: true, weight: 1750 },
    { name: "BMW", isElectric: true, weight: 1350 },  
  ];

  const resultCars = cars.reduce((accumulator,car)=> {
    return accumulator + car.weight;
  },0);

  console.log(resultCars);

// Power of Reduce method

const number = [1,2,3,4,5,6];

const doubleNumbers = number.reduce((accumulator,item)=>{
    accumulator.push(item*2);
    return accumulator;
},[]);
console.log(number);
console.log(doubleNumbers);

// Another Example

const greterNumbers = number.reduce( (acc, num) => {
    if (num > 3) {
        acc.push(num);
    }
    return acc;
},[]);

console.log(greterNumbers);