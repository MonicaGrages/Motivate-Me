var express = require('express');
var router = express.Router();
var Food = require('../db/foodschema.js');


//backend route to get all the exercise posts from db
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
  console.log('backend post');
  var food = new Food(request.body);
  food.save(function(error) {
    if(error) {
      console.log(error);
      return;
    }
    response.json({food: food});
  })
});

router.get('/:foodId', function (request, response) {
  const foodIdToShow = request.params.foodId;

  Food.findById(foodIdToShow, function (error, foodCredit) {
    if (error) {
      console.log('Error finding Food with Id of ' + foodIdToShow);
      return;
    }
    response.send(foodCredit);
  });
});


module.exports = router;
