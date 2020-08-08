// Cloning nodes: cloneNode

let div2 = div.cloneNode(true)  // Deep-Cloning
div2.querySelector('strong').innerHTML = 'Bye There!';
div.after(div2);