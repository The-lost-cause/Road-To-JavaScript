// Width/Height of the WINDOW

alert(document.documentElement.clientWidth);
alert(document.documentElement.clientHeight);

console.log(document.documentElement.clientWidth, document.documentElement.clientHeight);
console.log(window.innerWidth, window.innerHeight);


// Width/Height of the DOCUMENT

let documentHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

alert('Full DOCUMENT Height, with Scrolled out Part' + documentHeight)