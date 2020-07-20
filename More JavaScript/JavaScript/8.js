// Async Functions : Alwyas return a Promise

async function f() {
    return 1;
}

f().then(alert);

// Await Keyword : Works only inside Async Function

async function ABC() {
    
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Done'), 1000)
    });

    let result = await promise;

    alert(result);
}

ABC();

// Async Accepts Thenable just like Promises

class Thenable {
    constructor(num) {
        this.num = num;
    }

    then(resolve, reject) {
        alert(resolve);

        setTimeout(() => resolve(this.num * 2), 1000)
    }
};


async function Thenables() {
    let result = await new Thenable(1);
    alert(result);
}

Thenables();

// Error Handling in Async/Await



async function XY() {
    
    try {
        let response = await fetch('https://no-such-url');
    } catch(err) {
        alert(err);
    }
}

XY();