 // Concat Method

 const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];
 const allMenuIdeas = lunchMenuIdeas.concat('Club Sandwich');

 console.log(lunchMenuIdeas);
 console.log(allMenuIdeas);

 // ANOTHER APPROACH with spread operator
 

 const lunchMenuIdeas1 = ['Harvest Salad', 'Southern Fried Chicken'];
 const allMenuIdeas1 = [...lunchMenuIdeas1];
 allMenuIdeas1.push('Club Sandwich');

 console.log(lunchMenuIdeas1);
 console.log(allMenuIdeas1);


 // Mold Arrays With The Spread Operator

 const breakfastMenuIdeas = ["Buckwheat Pancakes"];
 const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

 const allMenuIdeas3 = ["Harvest Salad", "Southern Fried Chicken"];

 const otherMenuIdeas = [...breakfastMenuIdeas,...allMenuIdeas3];

 console.log(otherMenuIdeas);

 // Methods : Slice

 //console.log(otherMenuIdeas.slice(1,3)); 


// New Example of FindIndex Method

const breakfastMenuIdeas0 = ["Buckwheat Pancakes"];
const dinnerMenuIdeas0 = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas0 = [
    ...breakfastMenuIdeas0, 
    "Harvest Salad", 
    "Southern Fried Chicken",
    ...dinnerMenuIdeas0
];

const saladIndex = allMenuIdeas0.findIndex(idea => idea === 'Harvest Salad');

const finalMenuideas0 = [
    ...allMenuIdeas0.slice(0,saladIndex),
    'Garden Salad',
    ...allMenuIdeas0.slice(saladIndex + 1 )
];

console.log(finalMenuideas0);
