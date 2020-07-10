// Program 

let login = prompt('Enter Something!');

if (login == 'Admin') {

    let answer = prompt('Write Password ');

    if ( answer == 'TheMaster' ) {
        alert('Welcome');
    }else if ( (answer == '') || (answer == null )){
        alert('Canceled');
    }else {
        alert('Wrong Password')
    }
}else{
    if ( ( login == '' ) || ( login == null ) ){
        alert('Cancelled');
    }else {
        alert('I don\'t know you');
    }

}


