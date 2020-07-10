// Program : 1

function unique(arr) {

    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));

// Program : 2

function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // split the word by letters, sort them and join back
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];;

console.log(aclean(arr));

// Program : 3

let map = new Map();

map.set('name', 'john');

let keys = Array.from(map.keys());

console.log(keys);
keys.push('more');
console.log(keys)