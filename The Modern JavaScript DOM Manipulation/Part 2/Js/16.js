function Leenu(){
    alert('Im leenu');
}
elem.addEventListener('bong', Leenu)


let event = new Event('bong');
elem.dispatchEvent(event);

