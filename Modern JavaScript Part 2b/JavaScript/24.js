// Program:1 Creating a Dynamic List 

let ul = document.createElement('ul');
document.body.append(ul);

let list = [];

function creatingList() {
    let content = prompt('Content?');

    if ( !( content == null || content == '' ) ) {
        
        let li = document.createElement('li');
        li.textContent = content;
        list.push(li);
        creatingList();
    }

}


creatingList();
ul.append(...list) 