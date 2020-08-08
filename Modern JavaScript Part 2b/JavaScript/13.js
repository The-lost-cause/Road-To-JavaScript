// Understanding Difference in innerHTML and textContent

console.log(news.innerHTML);  // This will shows the tags too

console.log(news.textContent); // Just Content. No Tags

// Another Better Example for Understanding

let name = prompt('What\'s your Name ?', "<b>Karan Singh Negi</b>");

elem1.innerHTML = name;
elem2.textContent = name;

// Hidden Property Understanding : In CSS We do  style='display:none'

// Blinking Effect Shown here

setInterval(() => h2.hidden = !h2.hidden, 1000)


// Another Hidden Property Example

setTimeout(()=> h3.hidden = 'true', 5000);