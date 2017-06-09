ExerciseController.$inject = ['ExerciseService'];


//exercise controllers
function ExerciseController(ExerciseService) {
  let vm = this;
  vm.message = "hello";
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
        console.log(vm.newExercise);
        console.log(response.data)
        vm.savedExercises.push(response.data.exercise);
        vm.newExercise = {};
      })
  }


}

module.exports = ExerciseController;
