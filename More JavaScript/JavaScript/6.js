/** Finally in Promise : A good handler for performing cleanup 
 *  A finally handler has no arguments.
 *  A finally handler passes through results and errors to the next handler
 * */ 

new Promise((resolve, reject) => {
    setTimeout(() => resolve('result'), 2000)
})
.finally(() => alert('Promise ready'))
.then(result => alert(result));


// Prevoius 5.Call-back Example with Promise

function loadScript(src) {
    return new Promise(function(resolve, reject){
        let script = document.createElement('script');
        script.src = src;

        script.onload  = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));

        document.head.append(script);
    })
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
    script => alert(`${script.src} is loaded`),
    error  => alert(`Error: ${error.message}`)
);

promise.then(script => alert('Another Handler..'))