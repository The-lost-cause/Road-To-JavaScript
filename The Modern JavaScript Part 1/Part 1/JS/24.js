// Recursive Traversal : Calculate the salary

let company = {
    
    sales: [ {name: 'Karan', salary: 1000 }, { name: 'Bong' , salary: 1600 } ],

    development: { sites: [ {name: 'Leenu', salary: 2000 }, { name: 'Bhoopali', salary: 1800 } ], 

    internals: [ { name: 'Navum', salary: 1300 } ] }

};


function sumSalaries(department) {

    if(Array.isArray(department)) {

        return department.reduce((previous, current) => previous + current.salary , 0);

    }else {

        let sum = 0;
        
        for ( let subdep of Object.values(department)) {

            sum += sumSalaries(subdep);

        }

        return sum;
    }

}

console.log(sumSalaries(company));









