const controller = require('./exercise.show.controller.js');
const template = require('./exercise.show.html');


const component = {
  controller: controller,
  template: template
};

angular
  .module('MotivateMeApp')
  .component('exerciseShow', component);
