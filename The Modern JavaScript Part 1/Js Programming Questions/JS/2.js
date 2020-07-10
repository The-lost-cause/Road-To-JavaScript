// Logic for the Prime Number

let num = +prompt('Prime Numbers Till?');

nextPrime:
for (let i = 2; i <= num; i++){
    
    for (let j = 2; j < i; j++){

        if (i % j == 0) continue nextPrime;
    }

    alert(i);

}


    

