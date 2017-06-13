var express = require('express');
var router = express.Router();
var Food = require('../db/foodschema.js');

//backend route to get all the food posts from db
router.get('/', function(request, response) {
  Food.find({}).exec(function(error, food) {
    if(error) {
      response.json({message: error});
      return;
    }
    response.json({food: food});
  })
});

router.post('/', function(request, response) {
  var food = new Food(request.body);
  food.save(function(error) {
    if(error) {
      console.log(error);
      return;
    }
    response.json({food: food});
  });
});

router.get('/:foodId', function (request, response) {
  const foodId = request.params.foodId;

  Food.findById(foodId, function (error, foodToShow) {
    if (error) {
      console.log('Error finding food ' +foodId+' : '+error);
      return;
    }
    response.send(foodToShow);
  });
});

router.put('/', function(request, response) {
  let foodToEdit = request.body;
  console.log(foodToEdit);
  Food.findByIdAndUpdate(foodToEdit._id, foodToEdit, {new: true})
  .exec(function(error, updatedFood) {
    if(error){
      console.log('error while updating food: '+error);
      return;
    }
    response.send(200);
    console.log(updatedFood);
  });
});

router.delete('/:id', function (request, response) {
  const foodIdToDelete = request.params.id;

  Food.findByIdAndRemove(foodIdToDelete).exec (function (error) {
    if (error) {
      console.log('error while deleteing food: '+error);
      return;
    }
    response.send(200);
  })
});

//this is for updating the post when the like button is clicked. I feel like this could have been the same function as the put, but I'm not sure how
router.patch('/:foodId', function (request, response) {
  let foodId = request.params.foodId;
  let newLikes = request.body;
  Food.findByIdAndUpdate(foodId, newLikes, {new : true})
    .exec(function(error, updatedFood) {
      if(error) {
        console.log('error while liking post: '+foodId);
        return;
      }
      response.sendStatus(200);
      console.log(updatedFood);
    })
})

module.exports = router;
