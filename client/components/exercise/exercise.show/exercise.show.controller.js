ExerciseShowController.$inject = ['$state', '$stateParams', 'ExerciseService'];

function ExerciseShowController($state, $stateParams, ExerciseService) {
  console.log('exercise show controller');

  var vm = this;


  vm.exerciseShow = function () {
    let exerciseId = $stateParams.exerciseId;
      console.log('showexercise');
    ExerciseService.exerciseShow(exerciseId)
      .then(function (response) {
        vm.exerciseToShow = response.data.exercise;
        console.log(vm.exerciseToShow);
      });
  }
  vm.exerciseShow();

}

module.exports = ExerciseShowController;
