// Understanding Promise when value is resolved

let promised = new Promise( function (resolve, reject) { 
            resolve('Hello');});  


// .then Understanding in Promise

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('Done !'), 1000);
})

promise.then(
    result => console.log(result),
    error  => console.log(error) 
)


// Task : Delay with Promise

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Done Delay'), ms)
    })
}

delay(3000).then(() => alert('Runs after 3 seconds'))

// Thenable Object In PROMISES

class Thenable {
    constructor(num) {
      this.num = num;
    }
    then(resolve, reject) {
      alert(resolve); // function() { native code }
      // resolve with this.num*2 after the 1 second
      setTimeout(() => resolve(this.num * 2), 1000); // (**)
    }
  }
  
  new Promise(resolve => resolve(1))
    .then(result => {
      return new Thenable(result); // (*)
    })
    .then(alert); // shows 2 after 1000ms