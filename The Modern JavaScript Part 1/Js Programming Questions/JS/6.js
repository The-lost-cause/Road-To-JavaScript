

function getMaxSubSum(arr) {

    let value = 0;
    let max;

    if(arr[0] >= 0) {

        max = arr[0];

    } else{

         max = 0;
    }

    for( let i = 0; i < arr.length ; i++ ){

        value = arr[i];

        for ( let j = i + 1; j < arr.length ; j++){

            value += arr[j];
            
            if( value > max){
                max = value;
            }

        }

    }

    if(value > max) { 
        max = value;
        return max
     }; 

    return max;

}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]) );
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));