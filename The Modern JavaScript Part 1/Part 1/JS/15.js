// Primitives behaving as a Obejcts

let str = 'Karan Singh Negi';
console.log(str.toUpperCase());

console.log(Object.is(NaN, NaN));
console.log(Object.is(0, -0));

// toFixed(n) Method

console.log((6.35).toFixed(20));

console.log(Math.round(6.35 * 10) / 10 ); 

// Repeat Until the input is Number

function readNumer() {
   
    let num = +prompt('Num');
 
    if ( (num == 'null') || ( num == '')) {
        console.log('null');
    }else if (isNaN(num)) {
        readNumer();
    }else {
        console.log(num);
    }
}

readNumer();
