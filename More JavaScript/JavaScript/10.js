// Async Iterators: To iterate over data that comes asynchronously

let range = {
    from: 1,
    to: 5,

    [Symbol.asyncIterator]() {
        return {
            current: this.from,
            last: this.to,

            async next() {
                // can use await inside, do async stuff

                await new Promise(resolve => setTimeout(resolve, 1000));

                if (this.current <= this.last) {
                    return  { done:false, value: this.current++ };
                } else {
                    return { done: true}
                }
            }
        };
    }
};


(async () => {
    for await (let value of range) {
        console.log(value);
    }
})()

// Async Generators

async function* generateSequence(start, end) {

    for (let i = start; i <= end; i++) {
  
      // yay, can use await!
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      yield i;
    }
  
  }
  
  (async () => {
  
    let generator = generateSequence(1, 5);
    for await (let value of generator) {
      alert(value); // 1, then 2, then 3, then 4, then 5
    }
  
  })();