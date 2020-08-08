/** NOTE: innerHTML property is only valid for element nodes !
 * Hence,for Text Nodes and Comment Nodes we have : nodeValue and data properties
 */

 let text = document.body.firstChild;
 console.log(text)
 console.log(text.data);


 let comment = text.nextSibling;
 console.log(comment);
 console.log(comment.data);
