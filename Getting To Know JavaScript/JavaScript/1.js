//typeof urnary operator example

console.log(typeof 43);
console.log(typeof 'Karan');
console.log(typeof {age:25});

//Using var

var name = 'Karan Singh Negi';
var age = 25;
var friends = ['Kanu','Bhopali'];

console.log(name,age);
console.log(friends.length);
console.log(friends[1]);


//Loop Statements

var students = [ 2,5,6];
for (let i = 0 ; i < students.length; i++){
    console.log(students[i]);
}

console.log('Another way of using for-loop');

//Another Way : Iterator
for (let i of students){
    console.log(i);
}

//Programming Primer Exercise And Solutions

//Filtering out using includes method 
function addFavoriteBook(bookName) { 
    if(!bookName.includes('Great')){
        console.log(bookName);
        //Using push method to add the things
        favoriteBooks.push(bookName);

    }
}

function printFavoriteBooks(){
    console.log(` Favorite Books is ${favoriteBooks.length}`);
    console.log('Books are:');
    for (let i of favoriteBooks){
        console.log(i);
    }

}

//Creating an Empty Array and then using push method to push items in it.

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know Js")

printFavoriteBooks();