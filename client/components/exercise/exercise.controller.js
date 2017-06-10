ExerciseController.$inject = ['ExerciseService'];


//exercise controllers
function ExerciseController(ExerciseService) {
  let vm = this;
  vm.savedExercises = [];

  vm.getAllExercises = function () {
    ExerciseService.getAllExercises()
      .then(function (response) {
        vm.savedExercises = response.data.exercises;
      })
    }
  vm.getAllExercises();

  vm.addExercise = function() {
    ExerciseService.addExercise(vm.newExercise)
      .then(function(response) {
        vm.savedExercises.push(response.data.exercise);
        vm.newExercise = {};
      })
  }

  vm.getOneExercise = function () {
    ExerciseService.getOneExercise()
      .then(function (response) {
        vm.exerciseToShow =
      })
  }


}

module.exports = ExerciseController;
