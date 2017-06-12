//this is where we are telling the app about this service
angular
  .module('MotivateMeApp')
  .service('FoodService', FoodService);

  FoodService.$inject = ['$http'];

   function FoodService ($http){
    const self = this;
    self.getAllFoods = getAllFoods;
    self.addFood = addFood;
    self.foodShow = foodShow;
    self.editFood = editFood;
    self.deleteFood = deleteFood;
    self.likePost = likePost;

    function getAllFoods(){
      return $http.get('/food');
    }

    function addFood (newFood) {
      return $http.post('/food', newFood);
    }

    function foodShow (id) {
      return $http.get('/food/'+id);
    }

    function editFood(foodToEdit) {
      return $http.put('/food', foodToEdit);
    }

    function deleteFood (foodIdToDelete) {
      return $http.delete('/food/' + foodIdToDelete);
    }

    function likePost (foodToLike) {
      let foodId = foodToLike._id;
      let newLikes = foodToLike.likes + 1;
      return $http.patch ('/food/'+foodId, {likes: newLikes});
    }
  }
