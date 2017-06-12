
var mongoose = require('mongoose');
//require the schema for our resources
var Exercise = require('./schema.js');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/project_3');

//creating some seeds for our exercise posts
var exercises = [
  {
    description: "I just walked 3 miles!!",
    duration: "1 hour",
    author: "Yeni",
    feeling: "Energized",
    likes: 1
  },
  {
    description: "Cycled the beltline",
    duration: "20 minutes",
    author: "Monica",
    feeling: "Fast",
    likes: 3
  },
  {
    description: "Climbed Stone Mountain",
    duration: "90 minutes",
    author: "William",
    feeling: "On top of the world",
    likes: 2
  }
];


//first empty any existing db data
Exercise.remove({})
  .then(function(){
    //then create new exercises based on the Exercise schema
    return Exercise.create(exercises);
  })
  //console.log what we created
  .then(function(exercises){
    console.log(exercises);
  })
  .then(function(){
    mongoose.connection.close(function () {
      console.log('Mongoose connection disconnected');
    });
  });


