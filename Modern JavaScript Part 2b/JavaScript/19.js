// Creating Dynamic Elements on the fly

let div = document.createElement('div');
div.className = 'alert';
div.innerHTML = "<strong>Hi There!</strong> You have read an important message";

// Now Inserting in the DOM

document.body.append(div);

// Understanding node.append, prepend, before, after, replaceWith

ol.before('Before');        // Insert string "before" before <ol>
ol.after('After');          // Insert string "after" after <ol?

let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst);        // Insert liFirst at the beginning of <ol>

let liLast = document.createElement('li');
liLast.innerHTML = 'append';
ol.append(liLast);          // Insert liLast at the end of <ol>

// Inserting Multiple Elements

div.before('<p>Bong</p>', document.createElement('hr'));