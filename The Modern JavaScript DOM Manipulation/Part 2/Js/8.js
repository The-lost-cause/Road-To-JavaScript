// Creating an Element using document.createElement(element)

let div = document.createElement('div');
div.className = 'alert';
div.innerHTML = '<strong>Hi there!</strong>';

// Now inserting in a DOM

document.body.append(div);
console.log(div.outerHTML);

// Second Method
div1.insertAdjacentHTML('beforebegin','<p>Hello</p>');