// The style property operates only on the value of the 'style' Attribute, without any CSS Cascade

console.log(h1.style.color);   // EMPTY Since Internal CSS
console.log(h2.style.color);   // Gives color: Inline Css on Tag
console.log(h3.style.color);   // Empty Since External Css

// How to get from Internal and External Styles: Using getComputedStyle(element, [pseudo])
// The result will be an Object with styles, same like elem.style

let computedStyle = getComputedStyle(h1);
let computedStyles = getComputedStyle(h3);
console.log(computedStyle.color);
console.log(computedStyles.color);

/** A COMPUTED-STYLE value is the value after all CSS rules and CSS inheritance is applied.
 *  As the result of the CSS Cascade.
 */