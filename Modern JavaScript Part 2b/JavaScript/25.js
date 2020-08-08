// Program: Tree from an Object

let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
  
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
  };

  let ul = document.createElement('ul');
  body.append(ul);

  function createTree(data) {

    for (let key of Object.keys(data)) {
        
        let li = document.createElement('li');
        li.innerHTML = key;
        ul.append(li);

        for (let value of Object.keys(data[key])) {
            let ul = document.createElement('ul');
            let list = document.createElement('li')
            list.innerHTML = value;
            li.append(ul)
            ul.append(list)

            for (let values of Object.keys(data[key][value])) {
                let lia = document.createElement('ul');
                let lists = document.createElement('li');
                lists.innerHTML = values;
                ul.append(lia)
                lia.append(lists)
            }

        }
    }

  }

createTree(data);




  