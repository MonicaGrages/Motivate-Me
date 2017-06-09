FoodController.$inject = ['FoodService'];


//food controllers
function FoodController(FoodService) {
  let vm = this;
  vm.message = "food";
  vm.savedFoods = [];

  vm.getAllFoods = function () {
    FoodService.getAllFoods()
      .then(function (response) {
        console.log(response);
        vm.savedFoods = response.data.food;
      })
    }
  vm.getAllFoods();

  vm.addFood = function() {
    FoodService.addFood(vm.newFood)
      .then(function(response) {
        console.log(vm.newFood);
        console.log(response.data)
        vm.savedFoods.push(response.data);
        vm.newFood = {};
      })
  }


}

module.exports = FoodController;
