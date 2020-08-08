// Changing the digonal cells of a table to a red color

let id = document.body.firstElementChild;

console.log(id);
console.log(id.rows);

for (let i = 0; i < id.rows.length; i++) {
    id.rows[i].cells[i].style.backgroundColor = 'red';
}