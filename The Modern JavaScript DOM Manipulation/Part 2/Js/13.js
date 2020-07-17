// Events Understanding

function countRabbits(){
    for(let i=1; i<=3; i++){
        console.log('Rabbit Number ' + i);
    }
}

// To remove a handler - elem.onclick = null can be used

// Mutilple Handlers with addEventListener

function handler1(){
    console.log('I am Handler ONE');
}

function handler2(){
    console.log('I\'m Handler TWO');
}
elem.onclick = (event) => console.log(event.type + ' at ' + event.currentTarget);
elem.addEventListener('click', handler1);
elem.addEventListener('click', handler2);

// Event Object : When an event happens, the browser creates an event object, puts details into it and passes it as an argument to the handler.

let obj = {
    handleEvent(event){
        console.log(event.type + ' at ' + event.currentTarget);
    }
};

// We are passing object as a handler hence : ObjectHandler

id.addEventListener('click', obj);

// Program 1 : Hide a Tag when a Button is Clicked

function hidden () {
    text.hidden = 'true';
}

function hideMySelf(){
    this.hidden = 'true';
}

hide.addEventListener('click',hidden);
hide.addEventListener('click', hideMySelf);

// Program 2

list.style.display = 'none';

function Sweeties () {
    list.style.display = 'block';
}

button.addEventListener('click', Sweeties);
