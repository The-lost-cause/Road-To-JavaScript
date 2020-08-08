// DOM Properties are not Always STRINGS

console.log(input.getAttribute('checked'));   // EMPTY STRING
console.log(input.checked)                    // TRUE

// Non-Standard Attribute Usage

let user = {
    name: 'NEGI',
    age: 25,
};

for (let div of document.querySelectorAll('[show-info]')) {
    let field = div.getAttribute('show-info');
    div.innerHTML = user[field];
}

// data-* Attribute, They are available in the Dataset Property

console.log(document.body.dataset.about)