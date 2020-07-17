// innerHTML += Appending it

let h1 = document.body.firstElementChild;

h1.innerHTML += 'How are you'

// innerHTML : This will Replace it not Append it

let h2 = document.querySelector('h2');
h2.innerHTML = 'Modern Js'

// OuterHtml Vs InnerHTML

console.log(elem.innerHTML);
console.log(elem.outerHTML);


// Difference in outerHTML Vs innerHTML
let h3 = document.querySelector('h3');
h3.innerHTML = '<p>I love you </p>';
console.log(h3.innerHTML);
console.log(h3.outerHTML)

let h4 = document.querySelector('h4');
h4.outerHTML = '<p>A new Element</p>';
console.log(h4.outerHTML);
console.log(h4.innerHTML);

let name = prompt("What's your name?", "<b>Winnie-the-pooh!</b>");
elem1.innerHTML = name;
elem2.textContent = name;

// Blinking Element with hidden Property

setInterval(() => hide.hidden = !hide.hidden, 1000);