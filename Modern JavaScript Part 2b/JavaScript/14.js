// Program:1 Count Descendants

let list = document.querySelectorAll('li');
console.log(list);

for (let value of list) {
   console.log(value.firstChild);
   let counts = 0;
   for (let count of value.querySelectorAll('li')) {
        counts++;
   }
   console.log(counts);
   
}

// Real Solution

for (let li of document.querySelectorAll('li')) {
    // get the title from the text node
    let title = li.firstChild.data;

    title = title.trim(); // remove extra spaces from ends

    // get the descendants count
    let count = li.getElementsByTagName('li').length;

    alert(title + ': ' + count);
  }