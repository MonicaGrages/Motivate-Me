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
        vm.addingNew = false;
      })
  }

  //redirect to the show page state for activity posts
  vm.exerciseShow = function (exerciseId) {
    $state.go('exerciseShow/:exerciseId', { exerciseId: exerciseId });
  }

  vm.likePost = function (exerciseToLike) {
    ExerciseService.likePost(exerciseToLike)
      .then(function success (response) {
        exerciseToLike.likes +=1;
      })
  }

  vm.sortByPicker = function (thingToSortBy) {
    console.log('hello');
    if (thingToSortBy === 'likes') {
      vm.sort = '-likes';
    } else if (thingToSortBy === 'postedAt') {
      vm.sort = '-postedAt';
    }
  }

}

module.exports = ExerciseController;
