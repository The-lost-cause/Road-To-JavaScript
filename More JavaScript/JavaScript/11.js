// Built-in Eval Understanding

let result = 'alert("Hello")';
eval(result);

// Example:2

let code = 'function sayHi() { alert("No");}';
eval('alert(code)');

// Example: 3

function Hello() {
    alert('Whatsup');
}

eval('Hello()')