FoodShowController.$inject = ['$state', '$stateParams', 'FoodService'];

function FoodShowController($state, $stateParams, FoodService) {

  var vm = this;

  vm.foodShow = function () {
    let foodId = $stateParams.foodId;
    FoodService.foodShow(foodId)
      .then(function (response) {
        vm.foodToShow = response.data;
      });
  }
  vm.foodShow();

  vm.editFood = function () {
    console.log('food');
    vm.foodToEdit = vm.foodToShow;
    FoodService.editFood(vm.foodToEdit)
      .then(function(response) {
        vm.editedFood = response.data;
        console.log(vm.editedFood);
      })
      vm.editingPost = false;
  }

  vm.deleteFood = function (foodIdToDelete) {
    FoodService.deleteFood(foodIdToDelete)
      .then(function (response) {
        console.log(response);
        //redirect to the index page state after deleting - not sure if this is the correct way to do this?
        $state.go('food');
      })
  }
}

module.exports = FoodShowController;
