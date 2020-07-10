// About Nullish Coalescing Operator.
// Note : || returns the first truthy value.
// ?? : returns the first defined value.

let height = 0;
console.log(height || 100);
console.log(height ?? 100);

// Label Understanding : For getting out from multiple nested loops

outer: for (let i = 0; i < 3; ++i){

    for(let j = 0; j < 3; ++j){

        let input = prompt(`Value at co-ords ${i},${j}`);

        if (!input) break outer;
    }
}
console.log(`Done out from the Outer Loop`);

// Prime Number Logic for a Single Number

let num = +prompt('Prime Numbers or Not ?');

for (let i = 2; i <= num; ++i){

    if (num == i ){
        if (num % i == 0){
            console.log(num);
        }
    }else if(num % i == 0){
        break;
    }
}

// Program : Repeat until the input is correct

let num1 = +prompt('Number must be greater than 100');

while(num1 <= 100){
    if ((num1 == null) || (num1 == '')){
        break;
    }else {
    num1 = +prompt('Number must be greater than 100');
    }
}

// Better Way :

let num2;

do {
  num2 = prompt("Enter a number greater than 100?", 0);
} while (num2 <= 100 && num2);
