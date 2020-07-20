// Micro Tasks Understanding

let promise = Promise.resolve();
promise.then(() => alert('Promise Done'));
alert('Code Finished');


// More Example here Promise Handlers

Promise.resolve()
  .then(() => alert("promise done!"))
  .then(() => alert("code finished"));