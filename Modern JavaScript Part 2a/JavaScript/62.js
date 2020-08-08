/**  DOMContentLoaded: event happens on the document object, we muse use addEventListener to catch it.
     The browser fully loaded HTML, and the DOM tree is built.
    But external resources like pictures <img> and stylesheets may be not yet loaded.
**/

function ready() {
    alert('DOM is Ready');
    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);

}

document.addEventListener('DOMContentLoaded', ready);