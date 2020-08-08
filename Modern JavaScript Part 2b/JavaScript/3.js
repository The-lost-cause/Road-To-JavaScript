// Parent of <body> is <html>

console.log( document.body.parentNode === document.documentElement );

// after <head> goes <body>

console.log( document.head.nextElementSibling );

// before <body> goes <head>

console.log( document.body.previousElementSibling );


// Important Difference in ParentNode vs ParentElement

console.log( document.documentElement.parentNode );
console.log( document.documentElement.parentElement ); 

for (let elem of document.body.children) {
    console.log(elem);
}