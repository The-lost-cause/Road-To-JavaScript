// Destructuring With Arrays

const finalMenuItems = [
    "American Cheeseburger",
    "Southern Fried Chicken",
    "Glazed Salmon"
  ];
  
  // Noramally what we do is this 

  let first = finalMenuItems[0];
  let second = finalMenuItems[1];
  let third = finalMenuItems[2];
  
  console.log(first, second, third);


  // Array Destructuring Understanding

  let [first1 , second2 , third3] = finalMenuItems;
  console.log(first1, second2, third3);

  // Shortand 
 
  console.log({first1}, {second2});

  // Swapping with destructuring

  [second2,first1] = [first1,second2];
  console.log(first1,second2)
 
  // Important Part : the rest operator 
  // loser is an array here
  const [winner, ...losers] = finalMenuItems;
  console.log(winner,losers); 
