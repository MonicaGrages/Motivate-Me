ExerciseController.$inject = ['ExerciseService'];


//exercise controllers
function ExerciseController(ExerciseService) {
  let vm = this;
  vm.message = "hello";


  vm.getAllExercises = function () {
    ExerciseService.getAllExercises()
      .then(function (response) {
        console.log(response);
      })
    }
  vm.getAllExercises();
}

module.exports = ExerciseController;
