FoodController.$inject = ['$state', 'FoodService'];


//food controllers
function FoodController($state, FoodService) {
  let vm = this;
  vm.message = "food";
  vm.savedFoods = [];

  vm.getAllFoods = function () {
    FoodService.getAllFoods()
      .then(function (response) {
        vm.savedFoods = response.data.food;
      })
    }
  vm.getAllFoods();

  vm.addFood = function() {
    FoodService.addFood(vm.newFood)
      .then(function(response) {
        console.log(vm.newFood);
        console.log(response.data.food);
        vm.savedFoods.push(response.data.food);
        vm.newFood = {};
      })
  }

  vm.foodShow = function (foodId) {
    $state.go('foodShow/:foodId', { foodId: foodId });
  }
}

module.exports = FoodController;
