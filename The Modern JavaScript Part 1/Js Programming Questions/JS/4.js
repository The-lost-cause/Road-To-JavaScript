// Program 

function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
       let a = +prompt('New Value?');
       return this.value += a;
    }
}

let result = new Accumulator(1);
result.read();
result.read();

console.log(result.value);