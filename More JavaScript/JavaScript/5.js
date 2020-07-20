// CallBack Function Understanding : Callback-based style of asynchronous programming

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Cool, the script ${script.src} is loaded`);
  alert( _ );                                           // function declared in the loaded script
});

// Handling Errors: In the above examples we didn’t consider errors. What if the script loading fails? Our callback should be able to react on that

function loadScripts(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload  = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);

}

loadScripts('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', function(error, script) {
    if (error) {
        alert('Found error')
    } else {
        alert('No Error Found')
    }
});

