// This keyword understanding

var workshop = {
    teacher : 'Karan',
    ask(question) {
        console.log(this.teacher,question);
    }
};

workshop.ask("What is implicit binding ?");

// Explicit Binding

function ask2(question) {
    console.log(this.teacher1,question);
}

function otherClass() {
    var myContext = {
        teacher1: 'Kanu',
    };
    ask2.call(myContext,'Why?');
}

otherClass();
