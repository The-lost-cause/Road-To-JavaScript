/** DocumentFragment is a special DOM node that serves as a wrapper to pass around lists of nodes
 *  We can append other nodes to it, but when we insert it somewhere, then it's CONTENT is inserted instead
 */


 function getListContent() {

    let fragment = new DocumentFragment();

    for (let i = 1; i <= 3; i++) {

        let li = document.createElement('li');
        li.append(i);
        fragment.append(li)
    }

    return fragment;

 }

 ul.append(getListContent());


 // DocumentFragment is rarely used explicitly. We append to a special kind of node, if we can return an array of nodes instead

 function getListContents() {
     let result = [];

     for (let i = 1; i <= 3; i++) {
         let ol = document.createElement('li');
         ol.append(i);
         result.push(ol);
     }

     return result;
 }

 ol.append(...getListContents());