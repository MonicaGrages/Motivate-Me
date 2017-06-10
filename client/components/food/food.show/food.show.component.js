const controller = require('./food.show.controller.js');
const template = require('./food.show.html');


const component = {
  controller: controller,
  template: template
};

angular
  .module('MotivateMeApp')
  .component('foodShow', component);
