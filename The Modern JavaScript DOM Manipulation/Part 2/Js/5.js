// nodeType Property and tagName, nodeName

let elem = document.body;

console.log(elem.nodeType);
console.log(elem.firstChild.nodeType);
console.log(document.nodeType);

// tagName and nodeName

console.log(document.body.firstChild.tagName);
console.log(document.body.firstChild.nodeName);

// But there's a difference in nodeName and tagName
console.log( document.body.nodeName );
console.log( document.body.tagName );

// innerHTML
console.log(document.body.innerHTML);
document.body.innerHTML = 'Road to JavaSCript'; // It replaced the all content previously mentioned

document.body.innerHTML = '<b>Bong</b>'

