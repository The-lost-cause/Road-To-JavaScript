//Dynamic Objects Understanding

const color = 'green';
const hexColor = '#0f0';

const colors = {
    'yellow Color' : '#ff0',
    blue : '#f00',
    orange : '#f60',
    [color]: hexColor
};

//colors[color] = hexColor;
console.log(colors);


// function : getColor

function getColor(key) {
    return colors[key];   // colors.key won't work
}

console.log(getColor('orange'));

// How to delete a property

delete colors['yellow Color'];
console.log(colors);

delete colors.orange;
console.log(colors);

// Destructuring

const user = {
    name : 'Karan',
    userName : 'Karan Negi',
    email : 'nkaran1995@gmail.com',
    details: {
        title : 'Developer'
    }
};

// Here we are destructuring user object

const {userName, email} = user; 

function displayUser () {
    console.log(`username: ${userName}, email : ${email}`);
}

displayUser();


// Another Example 

const {name} = user ;

//Partial dot notation
const { title } = user.details;

//Best way 

// const { name , details : {title} } = user;


function displayUserBio () {
    console.log(name,title);
}

displayUserBio();

//Destructuring in a function 

/* function displayUserBio ({ name , details : {title} }) {
    console.log(`${name} is a ${title}`);
}


displayUserBio(user) 

*/