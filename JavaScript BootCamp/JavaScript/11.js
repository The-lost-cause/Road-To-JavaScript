// MAPS  ---> ES6

// Case 1 : Keys can be any of type : Not implicitally changed.

// Map 1
const map1 = new Map ([
    [1,1],
    [true,true],
    ['name','karan'],
    ['age',23]
]);

console.log(map1);

// Mutation on Map

map1.set ('lastName','Negi');
console.log(map1);

// Spread Operator on Map

console.log([...map1.keys()]);

// Iteration on Map

map1.forEach((value,key) => {
    console.log(key,value);
});

// Objects as key on Map

const user1 = { name : 'john'};
const user2 = { name: 'kane'};

const secretKey1 = 'bong';
const secretKey2 = 'dang';

const map2 = new Map ([
    [user1,secretKey1],
    [user2,secretKey2]
]);

console.log(map2);

// Using get

console.log(map2.get(user1));

// Weak Objects : Optimised for garbage collection
// It only accepts objects as keys

// const map2 = new WeakMap ([]);


//Knowing the length of an map using size
console.log(map2.size);


// FUNCTIONS ARROW ON MAP

// This keyword  ---> Depends upon how the function being called

const userData = {
    userName : 'Karan',
    title : 'JS',
    getBio(){
        console.log(`User ${this.userName} is a ${this.title}`);
    },
    askToFriend (){
        // let that = this;
        setTimeout(() => {
            console.log(`Would you like to friend ${this.userName} ?`);
        },2000);
    }
}

userData.askToFriend();