// Program : 1

function sumTo(n) {

    if ( n == 1) {
        return n;
    }else {

        return n + sumTo( n - 1 );
    }

}

console.log(sumTo(100))

// Program : 2

function factorial(n) {

    if( n == 1 ){

        return n;

    }else {

        return n * factorial( n - 1);

    }
}

console.log(factorial(5))

// Program : 3 

function fib(n) {

    let startIndex = 0;
    let secondIndex = 1;

    if ( n <= 1){

        return n;

    } else {

        return fib( n - 1 ) + fib ( n - 2 );
    }

}

console.log(fib(3));

// Program : 4 

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function printList(list) {

    if (list.next == null){
        
        return console.log( list.value);
    
    }else {

        console.log(list.value);
        printList(list.next);
    }

  }

  printList(list);

  // Program : 5

  function reversePrintList(list) {

    if ( list.next) {

        reversePrintList(list.next);

    } 

    console.log(list.value);

  }

  reversePrintList(list)
