// All these methods are HISTORY: We rarely use them because of the advent of QuerySelector

// IMPORTANT: It returns a collection, not an element !

let inputs = table.getElementsByTagName('input');

console.log(inputs);

for (let input of inputs) {
    console.log(input.value + ':' + input.checked);
}