// Currying Function: Translate a function from callable as f(a, b, c) into callabe as f(a)(b)(c)

function currry(callback) {   // Does the curry Transformation
    return function(a) {
        return function(b) {
            return callback(a, b);
        }
    }
}

// usage

function sums(a, b) {
    return a + b;
}

let curriedSums = currry(sums);

console.log(curriedSums(3)(4))



// Advance Curry Implementation

function curry(func) {

    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  
  }

  function sum(a, b, c) {
    return a + b + c;
  }
  
  let curriedSum = curry(sum);
  
  alert( curriedSum(1, 2, 3) ); 
  alert( curriedSum(1)(2,3) ); 
  alert( curriedSum(1)(2)(3) );