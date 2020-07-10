// Program One

function ucFirst(str) {
    if(!str) return str;
    return ( str[0].toUpperCase() + str.slice(1) );
}

console.log( ucFirst('john') == 'John');

// Progam : Two

function checkSpam(str) {

    str = str.toLowerCase();

    if( (str.includes('viagra')) || (str.includes('xxx')) ){
        return true;
    }else {
        return false;
    }
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit")); 

// Program : Three

function truncate(str, maxlength) {
    return ( (str.length > maxlength) ? str.slice(0, maxlength - 1 ) + '...' : str );
}

console.log(truncate("Hi everyone!", 20));
console.log(truncate("What I'd like to tell on this topic is:", 20))

// Progam 4: Extract the MONEY

function extraCurrencyValue(str) {
    return +str.slice(1)
}

console.log(extraCurrencyValue('$120'));   //RS100

// Better Version

function betterExtraCurrencyValue(str) {
    let i = 0;
    while(str){
        let value = str[i];
        if (isFinite(value)){
            value = str.slice(i)
            return parseInt(value);
        }else {
            i++;
        }
    }
}

console.log(betterExtraCurrencyValue('Rs120'));

/* Alternatively You can Also do like this :

function betterExtraCurrencyValue(str) {
   let i = 0;
   for(let char of str){
     if(!isNaN(char)){
       return parseInt(str.slice(i));
     }else {
       i++;
     }
   }
}

*/
