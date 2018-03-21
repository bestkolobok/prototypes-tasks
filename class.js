(function() {
  class Person {
    constructor(name) {
      this.name = name;
    }
    eatFood() {
      console.log(this.name + ' is eating food');
    }

    drinkBeer() {
      console.log(this.name + ' is drinking beer');
    }
  }


  class Man extends Person{
    constructor(name, gender) {
      super(name);

      this.name = name;
      this.gender = gender;
      this.family = true;
    }

    getFamilyStatus() {
      if (!this.family) {
        return 'Free';
      }

      return 'married';
    }
  }




  var ivan = new Man('Ivan', 'male');
  var oleg = new Man('Oleg', 'male');
  console.log('New person: ', ivan);

  ivan.eatFood();
  ivan.drinkBeer();

  oleg.eatFood();
  oleg.drinkBeer();

})();