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


    function getAllFoods(){
      return $http.get('/food');
    }

    function addFood (newFood) {
      return $http.post('/food', newFood);
    }

    function foodShow (id) {
      return $http.get('/food/'+id);
    }
  }
