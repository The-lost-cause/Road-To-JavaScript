 /* Note using const means value  won't change ever */
 
 const name = 'Karan Singh negi'


 /* Using let means value may vary */

 let friendsAtYourParty = 0;
 friendsAtYourParty = friendsAtYourParty + 1;
 friendsAtYourParty = friendsAtYourParty + 1;
 friendsAtYourParty = friendsAtYourParty + 1;
 friendsAtYourParty = friendsAtYourParty + 1;
console.log(friendsAtYourParty);

/* Alternatively var is outdated should use let*/

var number = 1
number = number + 1
number = number + 1
number = number + 1
number = number + 1
console.log(number)


/* While loop */

friendsAtYourParty = 0;
while(friendsAtYourParty < 10){
    friendsAtYourParty = friendsAtYourParty +1
}
console.log(friendsAtYourParty)


/* For loop */

let x = 0;
for (let i = 0 ; i <= 10 ; i++){
    x++;
}
console.log(x);

// Code Exercise

const character = 'a'
const timesToRepeat = 50
let answer = ''
for ( let i = 0; i <= timesToRepeat; i++){
    answer += character
}
console.log(answer)
