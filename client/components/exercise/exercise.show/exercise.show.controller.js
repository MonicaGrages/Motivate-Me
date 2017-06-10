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
        console.log(vm.editedExercise);
      })
  }

}

module.exports = ExerciseShowController;
