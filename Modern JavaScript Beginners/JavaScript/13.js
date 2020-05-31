// Example : 1

function User(name) {
    this.name = name;
    this.isAdmin = false;    
}

let user = new User('Karan');
alert(user.name);
alert(user.isAdmin);

// Another way : If we have many lines of code

let user1 = new function() {
    this.name = 'Bong';
    this.isAdmin = false;
};

/* Note here constructor can't be called again, because it is not saved anywhere,just created and called */

