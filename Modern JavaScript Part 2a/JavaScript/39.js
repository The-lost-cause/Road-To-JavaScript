// Click Event Understanding

function countRabbits() { 

    for (let i = 1; i <= 3; i++) {
        alert('Rabbit Number' + i);
    }
}


// DOM Property Initalizing Events

elem.onclick = function() {
    alert('Thank You !')
};

// To Remove a Handler - Assign elem.onclick = null

// Accessing the ELEMENT: This

// More Examples

function sayThanks() {
    alert('Thanks');
}

button.onclick = sayThanks

// DON'T Use setAttribute for Handlers