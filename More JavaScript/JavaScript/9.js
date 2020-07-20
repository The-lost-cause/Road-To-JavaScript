// Generators Understanding

function* generatorSequence() {
    yield  1;
    yield  2;
    yield  3;
    yield  4;
    return 3;
}

let generator = generatorSequence(); // It will return the generator object
console.log(generator);    

let one = generator.next();
console.log(one)

// Generators are iterable thus :

for(let value of generator) {
    console.log(value);
}

// More Generator Example

function* generatorSequences(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

let value = generatorSequences(1, 5);
console.log([...value]);

// Generator Compisiton using yield* syntax to embed(compose) one generator into another

function* genSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

/**
 * The yield* directive delegates the execution to another generator. 
 * This term means that yield* gen iterates over the generator gen and transparently forwards  its yields outside.
 *  As if the values were yielded by the outer generator.
 */

function* generatePasswordCodes() {

    yield* genSequence(48, 57);
    yield* genSequence(65, 90);
    yield* genSequence(97, 122);
}

let str = '';

for(let code of generatePasswordCodes()){
    str += String.fromCharCode(code);
}

console.log(str);

/** Yield is a two-way street: It not only returns the result to the outside.
 *  But also can pass the values inside the generator
 * */ 


 function* gen() {
     
    let result = yield '2 + 2 = ?'

    alert(result)
 }

 let gen1 = gen();

 let question = gen1.next().value;
 console.log(question);

 gen1.next(4);

// Generator.throw

function* generatorError() {
    try {
        let result = yield '2 + 2 = ?';

        alert('The execution deosn\'t reached here because the expection is thrown ')
    } catch(e) {
      alert(e);
    }
}

let err  = generatorError();
let answ = err.next().value;

err.throw(new Error('The answer is not found in my database'))