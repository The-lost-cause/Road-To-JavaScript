// Program : 1

function sum(a) {

    return function(b) {
        return a + b;
    }
}

console.log(sum(1)(2));


// Program : 2

let arr = [1,2,3,4,5,6,7];

function inBetween(a, b) {

    return function(x) {
        return x >= a && x <=b;
    }
}

console.log(arr.filter(inBetween(3, 6)));

// Program : 3

function sum(a){

    let currentSum = a;

    function f(b) {

        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;

}

console.log(sum(5)(-1)(2));

// Thew new Function Syntax

let summ = new Function ('a', 'b', 'return a + b');
console.log(summ(5,4));