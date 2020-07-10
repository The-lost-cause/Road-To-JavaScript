function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });

  console.log(family);
  console.log(family.father);
  

  // Arrow Function this taken from outer function

  let user = {

    firstName: "Karan",
    sayHi() {
      let arrow = () => console.log(this.firstName); // this value taken from outer function (sayHi())
      arrow();
    }
  };
  
  user.sayHi(); 

  // Program : Calculator

  let calc = {

      read (){

       this.a = +prompt('Num1');
       this.b = +prompt('Num 2');   

      },

      sum () {
          return this.a + this.b;
      },

      mul () {
          return this.a * this.b;
      },

  }

  calc.read();
  console.log(calc.sum());
  console.log(calc.mul());


  // Chaning Program

  let ladder = {
      step : 0,
      up () {
          this.step++;
          return this;
      },
      down () {
        this.step--;
        return this;
      },
      showStep () {
          alert(this.step);
          return this;
      }
  }

  ladder.up().up().down().showStep();