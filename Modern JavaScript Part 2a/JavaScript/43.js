// Program: Adding a Close Button

let panes = document.querySelectorAll('.pane');

for (let pane of panes) {
    console.log(pane)
    pane.insertAdjacentHTML('afterbegin', '<button class="remove-button">[x]</button>');
    console.log(pane.firstChild)
    pane.firstChild.onclick = () => pane.remove();
}