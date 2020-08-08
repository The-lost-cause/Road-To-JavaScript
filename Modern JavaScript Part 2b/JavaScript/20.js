// Understanding insertAdjacentHTML/Text/Element
// beforebegin, afterbegin, beforeend, afterend

div.insertAdjacentHTML('beforebegin', '<h2>Before-Begin</h2>');
div.insertAdjacentHTML('afterend', '<h3>After-End</h3>');

div.insertAdjacentHTML('afterbegin', '<p>After-Begin</p>')
div.insertAdjacentHTML('beforeend', '<p>Before-End</p>');

// New Two Methods

let elem = document.createElement('p')

divs.insertAdjacentText('beforebegin', 'Yooooo');
divs.insertAdjacentElement('afterend', elem);

// Similar Example Done in Previous Code with New Way

document.body.insertAdjacentHTML("afterbegin", `<div class="alert"><strong>Hi there!</strong> You've read an important message.</div>`);

// Node Removal Method

setInterval(() => div.remove(), 2000)