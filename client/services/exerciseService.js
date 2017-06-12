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
    self.deleteExercise = deleteExercise;
    self.likePost = likePost;

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
      return $http.put('/exercise', exerciseToEdit);
    }

    function deleteExercise (exerciseIdToDelete) {
      return $http.delete('/exercise/' + exerciseIdToDelete);
    }

    function likePost (exerciseToLike) {
      let exerciseId = exerciseToLike._id;
      let newLikes = exerciseToLike.likes + 1;
      return $http.patch ('/exercise/'+exerciseId, {likes: newLikes});
    }
  }
