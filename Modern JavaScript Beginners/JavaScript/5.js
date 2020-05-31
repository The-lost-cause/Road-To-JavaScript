// Labels in Loop

outer : for ( let i = 0; i < 3; i++) {
            for ( let j =0 ; j < 3; j++) {
                let input = Number(prompt(`Values at coords (${i},${j})`));
                      if (!input){
                        break outer;
                     }
             }
}
alert('Done Asshole !');


