// Understanding: Bubbling Process IMPORTANT!

/**
 * When an event happens on an element, it first runs the handlers on it, then on it's parent, then all the way up on other ancestors
 * The most deeply nested element that caused the event is called a target element, accessible as event.target
 * this: is the 'current' element, the one that has a currently running handler on it.
 */

form.onclick = function(event) {
    event.target.style.backgroundColor = 'yellow';
  
    // chrome needs some time to paint yellow
    setTimeout(() => {
      alert("target = " + event.target.tagName + ", this=" + this.tagName);
      event.target.style.backgroundColor = ''
    }, 0);
  };