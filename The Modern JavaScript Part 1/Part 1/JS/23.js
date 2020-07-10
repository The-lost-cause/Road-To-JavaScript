// JSON : JavaScript Object Notation

let student = {
    name: 'Karan',
    age: 25,
    isAdmin: false,
    courses: ['HTML5', 'CSS3', 'JS'],
    Gf: null,
};

// JSON OBJECT METHOD JSON.stringify will give us the JSON Object

let json = JSON.stringify(student);
console.log(json); 

console.log(typeof json); // string

// Here JSON will skip these kinds of properties

let user = {
    sayHi() {
        alert('Hi Mr. Billanoire');
    },

    [Symbol('id')] : 123,

    something: undefined,
}

console.log(JSON.stringify(user)) // Empty

// Replacer in JSON : Can be Array of properties or a Mapping Function

let room = {
    number: 23,
};

let meetup = {
    title : 'Conference',
    participants : [ { name: 'Karan' }, { name: 'Bong' } ],
    place : room,
}

room.isOccupied = meetup;

// Using Replacer here to get over Circular references

console.log(JSON.stringify(meetup, [ 'title', 'participants', 'name', 'number', 'place']));

// Instead of Replacer we can use a Mapping function

console.log( JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key == 'isOccupied') ? undefined : value;
  }));

  // JSON.parse METHOD for Decoding a JSON String

let numbers = "[1,2,3,4,5,6]";

  console.log(JSON.parse(numbers));
