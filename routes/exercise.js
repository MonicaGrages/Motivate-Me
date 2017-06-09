var express = require('express');
var router = express.Router();
var Exercise = require('../db/schema.js');


//backend route to get all the exercise posts from db
router.get('/', function(request, response) {
  console.log('backend router');
  Exercise.find({}).exec(function(error, exercise) {
    if(error) {
      response.json({message: error});
      return;
    }
    console.log(exercise);
    response.json({exercises: exercise});
  })
});


module.exports = router;
