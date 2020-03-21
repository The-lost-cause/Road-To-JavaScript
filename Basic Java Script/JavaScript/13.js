/* Do check the 14.js file , that solution is much better than mine */

var bill = [124, 48, 268];

var tripCalculator = function (bill){
	switch(true){
		case bill < 50 :
			return bill = bill * (20 / 100) ;
		case bill > 50 && bill < 220 :
			return bill = bill * (15 / 100);
		case bill > 200 :
			return bill = bill * (10 / 100);
		default:
			return bill;
	}
}

var tip1=tripCalculator(bill[0]);
console.log(tip1);
var tip2=tripCalculator(bill[1]);
console.log(tip2);
var tip3=tripCalculator(bill[2]);
console.log(tip3);

var tips = [tip1 , tip2 , tip3];
console.log(tips);

var finalAmount = [tip1+124 , tip2+48 , tip3+268];
console.log(finalAmount);