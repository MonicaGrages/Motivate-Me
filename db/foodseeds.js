var mongoose = require('mongoose');
//require the schema for our resources
var Food = require('./foodschema.js');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/project_3');

//creating some seeds for our food posts
var foods = [
  {
    description: "Grilled chicken with pasta and green peas!!",
    meal: "40 minutes",
    author: "Yeni",
    feeling: "Fantaboulus",
    likes: 0
  },
  {
    description: "Mahi mahi with asparagus",
    meal: "20 minutes",
    author: "Monica",
    feeling: "Strong",
    likes: 0
  },
  {
    description: "Salad with lettuce, red onion, strawberries, and mango ",
    meal: "5 minutes",
    author: "William",
    feeling: "Lively",
    likes: 0
  },
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


