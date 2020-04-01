// Merge Objects with Object Spread

const user = {
    name : "",
    username : "",
    phoneNumber: "",
    email: "",
    password: ""
};

const newUser = {
    username : 'Karan Negi',
    email : 'nkaran1995@gmail.com',
    password: 'Harleen@123'
};

console.log(Object.assign({},user, newUser, {verified : false})); // This works but not concise
console.log(user);

// Another way

const createdUser = { user , newUser , verified : false};  // This will created the nested objects
console.log(createdUser);

// ES2018 ---> Object Spread operator

const ES2018 = { ...user , ...newUser , verified: false};  
console.log(ES2018);
