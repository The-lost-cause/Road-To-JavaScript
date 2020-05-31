// Debugger: Automatically pause the execution of the script

function hello(name) {
    let phrase = `Hello, ${name}!`;
  
    debugger;            // The execution will stop here ----> Set as a Breakpoint
    say(phrase);
  }
  
  function say(phrase) {
    alert(`** ${phrase} **`);
  }
  
  hello('Bong');