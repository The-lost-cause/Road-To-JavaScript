input.oninput = function(){
    result.innerHTML = input.value;
};

window.onbeforeunload = function() {
    return false;
  };

  // current state
console.log(document.readyState);

// print state changes
document.addEventListener('readystatechange', () => console.log(document.readyState)