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

router.get('/:exerciseId', function(request, response) {
  var exerciseId = request.params.exerciseId;
  Exercise.findById(exerciseId, function (error, exerciseToShow) {
    if(error) {
      console.log('error finding exercise '+exerciseId+': '+error);
      return;
    }
    response.send(exerciseToShow);
  })
})

router.post('/', function(request, response) {
  var exercise = new Exercise(request.body);
  console.log(request.body);
  exercise.save(function(error) {
    if(error) {
      console.log(error);
      return;
    }
    response.json({exercise: exercise});
  })
})


router.patch('/', function(request, response) {
  let exerciseToEdit = request.body;
  console.log(exerciseToEdit);
  Exercise.findByIdAndUpdate(exerciseToEdit._id, exerciseToEdit, {new: true})
  .exec(function(error, updatedExercise) {
    if(error){
      console.log('error while updating exercise: '+error);
      return;
    }
    response.sendStatus(200);
    console.log(updatedExercise);
  })
})

router.delete('/:id', function (request, response) {
  const exerciseIdToDelete = request.params.id;

  Exercise.findByIdAndRemove(exerciseIdToDelete).exec (function (error) {
    if (error) {
      console.log('error while deleteing exercise: '+error);
      return;
    }
    response.sendStatus(200);
  })
});


module.exports = router;
