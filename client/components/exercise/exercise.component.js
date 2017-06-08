const controller = require('./exercise.controller.js');
const template = require('./exercise.html');
//require the files containing the controller and view for this component

const component = {
  controller: controller,
  template: template
};

//tell the app about this component
angular
  .module('MotivateMeApp')
  .component('exercise', component);
