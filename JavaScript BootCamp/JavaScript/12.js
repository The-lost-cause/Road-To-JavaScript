// Arrays : A data structure. --> Special type of object

// Order is always preserved in an array

const todos = [];

const todo1 = {
    text : 'Wash the dishes',
    complete : false
};

const todo2 = {
    text : 'Work Hard',
    complete : false
};

// Push operation on array and pop for deleting

todos.push(todo1,todo2);
console.log(todos);

// Check Elements Existence in Arrays

const temp = [{ degree :69, isRecordTemp : false},
     82,
     73];

console.log(temp.indexOf(82));

console.log(temp.indexOf(743)); // There is no element as such , hence it will give -1

// Checking the existence
console.log(temp.indexOf(742) > -1);

// Other method is Includes
console.log(temp.includes(743));

// More Powerful METHOD -- some / Every
const result = temp.some(temp => temp.isRecordTemp );
console.log(result);

