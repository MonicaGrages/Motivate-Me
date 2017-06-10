//this is where we are telling the app about this service
angular
  .module('MotivateMeApp')
  .service('ExerciseService', ExerciseService);

  ExerciseService.$inject = ['$http'];

   function ExerciseService ($http){
    const self = this;
    self.getAllExercises = getAllExercises;
    self.addExercise = addExercise;
    self.exerciseShow = exerciseShow;

    function getAllExercises(){
      return $http.get('/exercise');
    }

    function addExercise (newExercise) {
      return $http.post('/exercise', newExercise);
    }

    function exerciseShow(id) {
      console.log('hello');
      return $http.get('/exercise/'+id);
    }
  }
