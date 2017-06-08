//this is where we are telling the app about this service
angular
  .module('MotivateMeApp')
  .service('ExerciseService', ExerciseService);

  ExerciseService.$inject = ['$http'];

   function ExerciseService ($http){
    const self = this;
    self.getAllExercises = getAllExercises;
    // self.getSavedExercise = getSavedExercise;
    // self.savedExercise = saveExercise;
    // self.deleteExercise = deleteExercise;

    function getAllExercises(){
      console.log('Get all exercises!');
    }
  }
