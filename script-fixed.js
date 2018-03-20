(function() {

  var student1 = {
    name: 'Oleg',
    sex: 'mail'
  };

  var student2 = Object.assign({}, student1, { isMarried: true,  name: 'Alexey' });

  console.log('Case 0: adding new properties', student2);


  changeGender(student1);

  // console.log('Case 1: immutable work with object ', student1);

  function changeGender(student) {
    var newStudent = _.clone(student);
    newStudent.sex = 'female';

    // console.log('Gender was changed: ', newStudent);
  }

})();
