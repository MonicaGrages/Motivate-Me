ExerciseController.$inject = ['ExerciseService'];


//exercise controllers
function ExerciseController(ExerciseService) {
  let vm = this;
  vm.message = "hello";
  vm.savedExercises = [];


  vm.getAllExercises = function () {
    ExerciseService.getAllExercises()
      .then(function (response) {
        console.log(response.data.exercises);
        vm.savedExercises = response.data.exercises;
      })
    }
  vm.getAllExercises();
}

module.exports = ExerciseController;
