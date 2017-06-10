ExerciseController.$inject = ['$state', 'ExerciseService'];


//exercise controllers
function ExerciseController($state, ExerciseService) {
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

  vm.exerciseShow = function (exerciseId) {
    $state.go('exerciseShow/:exerciseId', { exerciseId: exerciseId });
  }


}

module.exports = ExerciseController;
