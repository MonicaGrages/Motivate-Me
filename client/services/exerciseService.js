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
    self.editExercise = editExercise;

    function getAllExercises(){
      return $http.get('/exercise');
    }

    function addExercise (newExercise) {
      return $http.post('/exercise', newExercise);
    }

    function exerciseShow(id) {
      return $http.get('/exercise/'+id);
    }

    function editExercise(exerciseToEdit) {
      return $http.patch('/exercise', exerciseToEdit);
    }
  }
