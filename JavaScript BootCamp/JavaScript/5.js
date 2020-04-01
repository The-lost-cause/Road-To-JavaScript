// Closure Challenge

function countdown (startingNumber, step) {
    let countFromNum = startingNumber;
    return function decrease () {
        countFromNum -= step;
        return countFromNum;

    }

}

const countingDown = countdown(11,1);
console.log(countingDown());
console.log(countingDown());
console.log(countingDown());
