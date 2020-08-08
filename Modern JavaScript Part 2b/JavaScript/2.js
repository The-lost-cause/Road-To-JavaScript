// In the DOM, the null value means "doesn't exist" or "no such node"

// The childNodes collection lists all child nodes, including text nodes.

for (let i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}

// firstChild and lastChild 
console.log('First Child and last Child')
console.log(document.body.firstChild);
console.log(document.body.lastChild);


// ChildNodes looks like an array, but it's not an array but rather Collection: Special array-like iterable Object

for (let node of document.body.childNodes) {
    alert(node);
}