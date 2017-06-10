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
}

module.exports = FoodShowController;
