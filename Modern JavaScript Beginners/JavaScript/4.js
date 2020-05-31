// Alert Method

alert('You are the Best'); // The mini-window is called modal window.

// Prompt 

let age = prompt('How old are you',25);
alert(`Your age is ${age}`);


// Confirm

let isBoss = confirm("Are You in Love ?");
alert(isBoss);

// Logical OR Understanding

let year = 0 || 45 || 1;
alert(year);  // This will return 45 i.e first truthy value


// !!NOT

alert(!!`Whatsp Guys`);  // Results - false
alert(Boolean(`Whatsp Guys`));

// NOTE : The call to alert doesn't return any value , it returns undefined --falsy value

alert( alert(1) || 2 || alert(3) );


