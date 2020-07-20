// Basic try and catch construct

try {
    console.log('Try and Catch ');
    hello;
} catch(err) {
    console.log(typeof (err));
    console.log(`Error name : ${err.name}`);
    console.log(`Error Mesage : ${err.message}`)
    console.log(err.stack);
    console.log(err);

}

// Throw Keyword Understanding

let json = '{ "age": 25 }';

try {

    let user = JSON.parse(json);

    if(!user.name) {
        throw new SyntaxError('Inccomplete data: no name')
    }

    console.log(user.name)
} catch(err) {
    console.log('JSON Error: '+ err.message)
}

// Rethrowing Keyword

let jsons = '{ "age": 25 }';

try {
 
    let user = JSON.parse(json);

    if(!user.name) {
        throw new SyntaxError('Incomplete data: no name key')
    }

    hello(); // unexpected error

    alert( user.name );
} catch(e) {

    if (e instanceof SyntaxError) {
        console.log('JSON Error: ' + e.message );
    } else {
        throw e; // rethrow
    }
}