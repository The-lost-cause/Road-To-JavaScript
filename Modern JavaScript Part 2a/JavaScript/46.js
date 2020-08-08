// Understanding Capturing 


/** The Standard DOM Events describes 3 phases of event propagation
 *  1.Capturing Phase: the event goes down the element.
 *  2.Target Phase: the event reached the target element.
 *  3.Bubbling Phase: the event bubbles up from the element.
 */

for (let element of document.querySelectorAll('*')) {
    console.log(element);
    element.addEventListener("click", e => alert(`Capturing: ${element.tagName}`), true);
    element.addEventListener("click", e => alert(`Bubbling: ${element.tagName}`));
}