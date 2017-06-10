const angular = require('angular');
require('angular-ui-router');

angular.module('MotivateMeApp', ['ui.router'])
  .config(uiRouterSetup);

//This is where we are going to define our UI Router
uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider) {
  //this is stating the different components
  $stateProvider
    .state('quotes', {
      url: '/quotes',
      template: '<quotes></quotes>'
    })
    .state('exercise', {
      url: '/exercise',
      template: '<exercise></exercise>'
    })
    .state('food', {
      url: '/food',
      template: '<food></food>'
    })
    .state('exerciseShow/:exerciseId', {
      url: '/exerciseShow/:exerciseId',
      params: ['exerciseId'],
      template: '<exercise-show></exercise-show>'
    })
    .state('foodShow/:foodId', {
      url: '/foodShow/:foodId',
      params: ['foodId'],
      template: '<food-show></food-show>'
    });

  // $urlRouterProvider.otherwise('/');
}
