ExerciseController.$inject = ['ExerciseService'];

//exercise controllers
function ExerciseController(ExerciseService) {
  let vm = this;
  vm.message = "hello";
  function getAllExercises() {
    ExerciseService.getAllExercises()
      .then(function (response) {
        console.log(response);
      })
    }
}

module.exports = ExerciseController;
