// nodeType Property Understanding

let elem = document.body;
console.log(elem.nodeType);
console.log(elem.firstChild.nodeType);
console.log(document.nodeType);          // For Document Object

// Tag: nodeName and tagName
// tagName property exists only for Element Nodes

console.log(elem.nodeName, elem.tagName);
console.log(document.nodeName, document.tagName);

// innerHTML Property Understanding 

console.log(h4.innerHTML);       // Using id as a refrence here

// Changing it's content now

setTimeout(() => h4.innerHTML = 'Content Changed', 7000);

// Another Example with Tag and Content

console.log(h5.innerHTML);
setTimeout(() => h5.innerHTML = '<b>BOLDED</b>', 3000);

// innerHTML+= Understanding , It does a full overwrite , Keeping the old one , plus the new Content Updation

h6.innerHTML+= ' Yes I did Overwrite it';

// outerHTML Understanding: Gives full HTML Of the element

console.log(div.outerHTML);

setTimeout(() => div.outerHTML = '<p>New Paragraph</p>', 2000);



