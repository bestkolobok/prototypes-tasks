(function() {
  var student1 = {
    name: 'Oleg',
    sex: 'mail',
  };

  var student2 = student1;

  console.log('Case 0: object reference', student2);

  student2.isMarried = false;

// console.log('Case 1: adding property', student1);

  var student3 = student2;

  student3.isMarried = true;

// console.log('Case 2: changing property', student1);

  var student4 = student3;

  student1 = {
    name: 'Ania',
    sex: 'female',
  };

// console.log('Case 3: changing link -- first object', student1);
// console.log('Case 4: changing link -- last object', student4);

  changeGender(student4);

// console.log('Case 5: mutating object by link ', student4);

  function changeGender(student) {
    student.sex = 'female';
  }

})();