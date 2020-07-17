class Menu {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }
    save(){
        alert('Saving');
    }

    load(){
        alert('Loading');
    }

    search(){
        alert('Searching');
    }

    onClick(event){
        let action = event.target.dataset.action;
        if(action){
            this[action]();
        }
    }
}

new Menu(menu);