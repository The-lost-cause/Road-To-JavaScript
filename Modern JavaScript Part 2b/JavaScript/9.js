// Let's find by name Attribute

// document.getElementsByName(name) : returns elements with the given attribute, document-wide. Very rarely used !

let form = document.getElementsByName('my-form');
console.log(form);

// Understand the Difference 
let forms = document.getElementsByName('my-form')[0];
console.log(forms);


let articles = forms.getElementsByClassName('article');
console.log(articles);
console.log(articles.length)