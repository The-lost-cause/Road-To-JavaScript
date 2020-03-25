/* Objects:Unordered And Arrays:Ordered */

const karan = {
    name : 'Karan',
    city : 'chandigarh',
    state : 'Punjab',
    favoriteFood : 'whey',
    address: {
        street: 'Tower E',
        apt: '301'
    }
};

//Check this example
const propName = 'name';

console.log(karan);
console.log(karan.favoriteFood);
console.log(karan['name']);

/*Check this output */
console.log(karan[propName]);
//How to acess objects inside an object
console.log(karan.address.street);


/* Functon inside an object ---> New way */

const dog = {
    name: 'dog',
    //New way of describing function
    speak() {
        console.log("woof woof");
    },
    //Traditional way of describing function
    speak2 : function(){
        console.log('woof woof2');
    }
};

dog.speak();
dog.speak2();

/* CONTEXT */
  
const me = {
    name: {
      first: "Karan",
      last: "Negi"
    },
    location: {
      streetNumber: 500,
      street: "135",
      city: "Noida",
      state: "Uttar Pradesh",
      zipCode: 201304,
      country: "INDIA"
    },
    getAddress() {
      return `${this.name.first} ${this.name.last}
  ${this.location.streetNumber} ${this.location.street}
  ${this.location.city}, ${this.location.state} ${this.location.zipCode}
  ${this.location.country}`;
    }
  };
  
  console.log(me.getAddress());


//Global Context is always window

console.log(this === window);
console.log(this.scrollY);
console.log(window.screenX);

// Arrays : ordered list of something

const daysOfTheWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

console.log(daysOfTheWeek);
console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[6]);

console.log(daysOfTheWeek.length);
console.log(daysOfTheWeek.join(" | "));

/* Pushing the value in an array using push */

const courses = [
    {teacher: 'Kyle Simpson', course: 'JS Function Lite'},
    {teacher: 'Sara Drasner', course: 'Intro to Vue'},
    {teacher: 'Brian Holt',   course: 'Complete Intro to React'}
];

console.log(courses);
//Pushing new object in an array
courses.push({teacher:'Karan', course: 'Into to Guitar'});
console.log(courses);

courses[2] = {teacher: 'Sean Larkinn', course:'Webpack'};
console.log(courses);

/* Arrays with loops */

const cities = [
    'Noida',
    'Pondicheerry',
    'West-Bengal',
    'Chandigarh'
];

//Method 1
for ( let i = 0; i < cities.length; i++){
    console.log(cities[i]);
}

//Method 2
cities.forEach(function(city,index){
    console.log(index,city);
}); 

//Upper Case Trick : Always store it in another variable

for ( let i = 0; i < cities.length; i++){
    const city = cities[i];
    console.log(city.toUpperCase());

    //Or You can do is
   // console.log(cities[i].toUpperCase());
}

