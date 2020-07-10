// Array Understanding

let arr = [ ];
arr[0] = 'I\'m going to be a Billanoire';

// Here treating an array as an Object (Wrong Never Do That !)

arr.age = 25;
console.log(arr);
console.log(arr.length) // It shows only 1 

// Can store values of any types

let array = [ 'Apple', { name: 'Karan' }, true, function() { alert('Hello') } ];
console.log(array[2]);

// Push and Pop Method

let ar = [];
ar.push('Bong');
ar.unshift('Leenu');
console.log(ar);

// Program : Sum Input Numbers

let answer = [];

function sumInput() {
    let num = prompt('num');
    if((num == '') || (num == null || !isFinite(num))){
        return;
    }else {
        answer.push(+num)
        sumInput();
    }
}

sumInput();
console.log(answer);

