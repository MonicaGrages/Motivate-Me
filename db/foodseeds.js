var mongoose = require('mongoose');
//require the schema for our resources
var Food = require('./foodschema.js');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/project_3');

//creating some seeds for our food posts
var foods = [
  {
    description: "I just walked 3 miles!!",
    meal: "1 hour",
    author: "Yeni",
    feeling: "Energized"
  },
  {
    description: "Cycled the beltline",
    meal: "20 minutes",
    author: "Monica",
    feeling: "Fast"
  },
  {
    description: "Climbed Stone Mountain",
    meal: "90 minutes",
    author: "William",
    feeling: "On top of the world"
  }
];


//first empty any existing db data
Food.remove({})
  .then(function(){
    //then create new exercises based on the Exercise schema
    return Food.create(foods);
  })
  //console.log what we created
  .then(function(foods){
    console.log(foods);
  })
  .then(function(){
    mongoose.connection.close(function () {
      console.log('Mongoose connection disconnected');
    });
  });


