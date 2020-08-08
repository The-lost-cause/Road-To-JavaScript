// Changing the class is one of the most often used actions in scripts

console.log(document.body.className);

// Understanding classList: A special object with methods to add/remove/toggle a single class

document.body.classList.add('article');
console.log(document.body.className);

// Resetting the Style Property
// If we set style.display to an empty string, then the browser applies CSS classes and its built-in styles normally, as if there were no such style.display property at all

h2.style.display = 'none';
setTimeout(() => h2.style.display ='', 2000);

// style.cssText: Rarely used as such assignment removes all existing styles.

h3.style.cssText= `color: red !important;
                   background-color: yellow;
                   width: 100px;
                   text-align: center;`;

// Alternatively we can use setAttribute

h4.setAttribute('style', `color: red !important;
                          background-color: yellow;
                          width: 100px;
                          text-align: center`);