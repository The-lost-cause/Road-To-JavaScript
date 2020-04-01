// Array Method Called MAP

const temp = [
   { degrees : 69 , isRecordTemp: false },
   { degrees : 82 , isRecordTemp: true },
   { degrees : 73 , isRecordTemp: false },
   { degrees : 64 , isRecordTemp: false },

];

console.log(temp);

//It will results into new array

const newTemp = temp.map( temp => {
    temp.isRecordTemp = true;
    return temp;
});

console.log(newTemp);

//Adding New Property using map

const newTemp1 = temp.map( temp => {
    temp.isRecordTemp = true;
    temp.isHigh = true;
    return temp;
});

console.log(newTemp1);

// .forEach Method

newTemp1.forEach (temp => {
    if (temp.isHigh){
        console.log(`Temp ${temp.degrees} was high`);
    }
});
