const angular = require('angular');
require('angular-ui-router');
require('angular-messages');

angular.module('MotivateMeApp', ['ui.router','ngMessages'])
  .config(uiRouterSetup);

//This is where we are going to define our UI Router
uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider) {
  //this is setting up each of the different states of our app
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

//default to the quotes state
  $urlRouterProvider.otherwise('/quotes');
}
