// Understanding Conversion from ViewPort To Document

// Getting first the Viewport Co-ordinates of the div Element

let div = document.querySelector('div');
console.log(div.getBoundingClientRect());

// Getting the Offset
console.log(window.pageXOffset, window.pageYOffset);

// Note If pageXOffset and pageYOffset are zero then it means widow-coordinate = document-coordinate