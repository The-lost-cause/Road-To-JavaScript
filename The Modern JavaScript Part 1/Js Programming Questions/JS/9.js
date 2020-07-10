// Program : 1

let date = new Date(2012, 1, 20, 3, 12);
console.log(date);

// Program : 2

function getWeekDay(date) {

    switch(date.getDay()){

        case 0  : return ('SU');
        case 1  : return ('MO');
        case 2  : return ('TU');
        case 3  : return ('WE');
        case 4  : return ('TH');
        case 5  : return ('FR');
        case 6  : return ('SA');
    }

}

let passedDate = new Date(2012, 0, 3);
console.log( getWeekDay(passedDate));

// Program : 3

function getLocalDay(date) {

    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR','SA']
    return days[date.getDay()];

}


let europeanDate = new Date(2012, 0, 3);
console.log(getLocalDay(europeanDate));

// Program 4

function getDateAgo(date, days) {

    let timeStamp = days * 24 * 1000 * 3600;

    return new Date(date - timeStamp)

}

let daysAgo = new Date(2015, 0, 2)

console.log(getDateAgo(daysAgo, 1));
console.log(getDateAgo(daysAgo, 2));
console.log(getDateAgo(daysAgo, 365));

// Program : 5

function getLastDayOfMonth(year, month) {

    let date = new Date(year, month + 1, 0);
    return date.getDate();

}

console.log(getLastDayOfMonth(2012, 1));

// Program : 6

