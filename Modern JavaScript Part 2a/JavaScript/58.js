// Form Navigation Understanding.

/** How to Navigate in form
 * document.form[name]
 * or
 * document.form[indes]
 */

console.log(document.forms)
// Here Navigating with name property
console.log(document.forms.two)

// Here Navigating with index property
console.log(document.forms[1])

// Navigation in the form elements: form.elements or form.[name]

let form2 = document.forms.two
console.log(form2);
console.log(form2.elements)

// Navigating here in elements
console.log(form2.elements.form4);

// Or you can do just form.name
console.log(form2.form4)

// Program Solutions:

console.log(genres.selectedIndex);
console.log(genres.options[1].value);
console.log(genres.options[genres.selectedIndex].value);

let newOption = new Option('Classic', 'classic');
genres.append(newOption)

newOption.selected = true
console.log(genres.selectedIndex)


// Another Example Understanding: form.elements: As a collection

let form6 = document.forms.three;
console.log(form6);
console.log(form6.elements.form6)      // Here it will be a collection
console.log(form6.elements.form6[0])   // It will show first tag inside that form

// FieldSet in a form Understanding

console.log(form.elements.login);
console.log(form.elements)
let fiedlSet = form.elements.userFields;
console.log(fiedlSet)
console.log(fiedlSet.elements.login)  // Same as Above for getting login

 // we can get the input by name both from the form and from the fieldset
 console.log(fiedlSet.elements.login == form.elements.login); // true