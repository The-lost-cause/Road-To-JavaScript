// Navigating through Elements Only : Direct Children (not text nodes, comment nodes or nested nodes)

for (let elem of document.body.children) {
    console.log(elem); 
  }

// Navigating through all Nodes :--> Only Direct Children (comment nodes, text nodes and element nodes)

for (let i = 0; i < document.body.childNodes.length; i++) {
    console.log( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
  }

/**  For Navigation Properties:

For all nodes: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
For element nodes only: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.

**/