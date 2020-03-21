// Codding Challenge 2

var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMarry =(97 + 134 + 105) / 3;
console.log(scoreJohn,scoreMike,scoreMarry);

if(scoreJohn > scoreMike && scoreJohn > scoreMarry){
	console.log('John\'s team wins with ' + scoreJohn + ' points');
}else if(scoreMike > scoreJohn && scoreMike > scoreMarry){
		console.log('Mike\'s team wins with ' + scoreMike + ' points');
}else if(scoreMarry > scoreJohn && scoreMarry > scoreMike){
		console.log('Marry\'s team wins with ' + scoreMarry + ' points');
}else {
	console.log('D-R-A-W');
}

