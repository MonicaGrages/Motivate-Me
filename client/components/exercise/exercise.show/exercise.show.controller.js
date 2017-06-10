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

}

module.exports = ExerciseShowController;
