// Program to change the digaonal cells color of a Table

let tr = table.rows;
console.log(tr);

for (let i = 0 ; i < tr.length; ++i){
    table.rows[i].cells[i].style.background = 'red';
}

// Another Method 

for (let i = 0 ; i < table.firstElementChild.children.length; ++i){
    table.children[0].children[i].children[i].style.backgroundColor = 'red';
}