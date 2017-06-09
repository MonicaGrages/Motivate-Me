var express = require('express');
var router = express.Router();
var Exercise = require('../db/schema.js');


//backend route to get all the exercise posts from db
router.get('/', function(request, response) {
  Exercise.find({}).exec(function(error, exercise) {
    if(error) {
      response.json({message: error});
      return;
    }
    response.json({exercises: exercise});
  })
});

router.post('/', function(request, response) {
  var exercise = new Exercise(request.body);
  exercise.save(function(error) {
    if(error) {
      console.log(error);
      return;
    }
    response.json({exercise: exercise});
  })
})


module.exports = router;
