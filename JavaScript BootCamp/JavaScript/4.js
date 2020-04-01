// Functions Basic Example

const greetings = 'Hi';  //Global scope

function echo (input) {
   return `${greetings} : ${input}`; // If you will return keyword , the function will return something called undefinef by default
}

const result = echo('Karan');
console.log(result);

// Challenge : 1 

function splitBill (amount,noOfPeople) {
    return `${amount} ${noOfPeople}`;
}

console.log(splitBill(10,2));

// What is Closure ?

let likeCount = 0;  //Global Scope

function handleLikePost () {
    likeCount +=1;
}

handleLikePost();   // No matter how many times we call the value doesn't get incremented to 3
handleLikePost();
handleLikePost();
console.log('like count:',likeCount);

// Understading  Closure Important 

function handleLikePost1 () {            // Function

    let likeCount1 = 0;                 // Functional Scope

    return function addLike () {       // You need not to say function here --> You can use anonymous function here ( i.e without a name)
        likeCount1 += 1;
        return likeCount1;
    }
} 

console.log(handleLikePost1());  // Will return addLike() function just as expected
const like = handleLikePost1();
console.log(like);                  // You can check returned here is a function in console which is not yet called.

console.log(like());  // We used like() as this like const like contains a function so in order to call that function we does like()
console.log(like());
console.log(like());
