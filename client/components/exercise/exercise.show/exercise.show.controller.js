ExerciseShowController.$inject = ['$state', '$stateParams', 'ExerciseService'];

function ExerciseShowController($state, $stateParams, ExerciseService) {

  var vm = this;


  vm.exerciseShow = function () {
    let exerciseId = $stateParams.exerciseId;
    ExerciseService.exerciseShow(exerciseId)
      .then(function (response) {
        vm.exerciseToShow = response.data;
      });
  }
  vm.exerciseShow();

  vm.editExercise = function () {
    vm.exerciseToEdit = vm.exerciseToShow;
    ExerciseService.editExercise(vm.exerciseToEdit)
      .then(function(response) {
        vm.editedExercise = response.data;
      })
      vm.editingPost = false;
  }

vm.deleteExercise = function (exerciseIdToDelete) {
    ExerciseService.deleteExercise(exerciseIdToDelete)
      .then(function (response) {
        console.log(response);
        $state.go('exercise');
      })
  }
}

module.exports = ExerciseShowController;
