const customerDishes = [
    "Chicken Wings",
    "Fish Sandwich",
    "Beef Stroganoff",
    "Grilled Cheese",
    "Blue Cheese Salad",
    "Chicken Wings",
    "Reuben Sandwich",
    "Grilled Cheese",
    "Fish Sandwich",
    "Chicken Pot Pie",
    "Fish Sandwich",
    "Beef Stroganoff"
  ];
  
  console.log(new Set([1, 2, 3]).size);


  // Creating a set

  const numbers = new Set([[1], [2], [3]]);
  for ( const num of numbers) {
      console.log(num);
  }

  const uniqueDishes = [...new Set (customerDishes)];
  console.log(uniqueDishes);

  /* 
- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- array spread operator
*/