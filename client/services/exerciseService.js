//this is where we are telling the app about this service
angular
  .module('MotivateMeApp')
  .service('ExerciseService', ExerciseService);

  ExerciseService.$inject = ['$http'];

   function ExerciseService ($http){
    const self = this;
    self.getAllExercises = getAllExercises;
    // self.getSavedExercise = getSavedExercise;
    self.addExercise=addExercise;
    // self.deleteExercise = deleteExercise;

    function getAllExercises(){
      return $http.get('/exercise');
    }

    function addExercise (newExercise) {
      return $http.post('/exercise', newExercise);
    }
  }
