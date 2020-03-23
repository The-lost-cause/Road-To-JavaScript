/* Loops and Iteration */ 


for (var i = 0; i < 10 ; i++ ) {
    console.log(i);
} 

// An array with loop example

var karan = ['Karan','Singh','Negi'];

for ( var i = 0 ; i <= 2 ; i++ ){
    console.log(karan[i]);
} 

/* You can do this dynamically too */

for ( var i = 0 ; i < karan.length ; i++){
    console.log(karan[i]);
}

/* While loop */

var i = 0;
while ( i < karan.length ) {
    console.log(karan[i]);
    i++;
}

/* Continue and Break Understanding */

var kanu = ['kanika','negi','sister','best',1992];
for ( var i = 0; i < kanu.length; i++) {
    if (typeof kanu[i] !== 'string') continue;
    console.log(kanu[i]);

}
