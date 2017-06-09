var express = require('express');
var router = express.Router();
var Exercise = require('../db/schema.js');


//backend route to get all the exercise posts from db
router.get('/', function(request, response) {
  console.log('backend router');
  Exercise.find(function(error, exercises) {
    if(error) {
      response.json({message: error});
      return;
    }
    // console.log(exercises);
    response.json({exercises: exercises});
    console.log({exercises : exercises});
  })
})


module.exports = router;
