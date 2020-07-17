let form = document.forms.my;
let elem = form.elements.one;
console.log(elem.value);

let form1 = document.forms[1];
let age = form1.elements.age;
console.log(age[0]);
console.log(age[0].value);

select.value = 'pear';

input.onblur = function(){
    if(!input.value.includes('@')){
        input.classList.add('invalid');
        error.innerHTML = 'Please enter a correct email';
    }
}

input.onfocus = function(){
    if(this.classList.contains('invalid')){
        this.classList.remove('invalid');
        error.innerHTML= "";
    }
}