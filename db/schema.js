var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var ExerciseSchema = new Schema({
  description: {type: String, required: true},
  duration: String,
  author: String,
  feeling: String,
  likes: Number,
  postedAt: Date
});

//add a date posted and number of likes to each post when created
ExerciseSchema.pre('save', function(next) {
    now = new Date();
    if( !this.postedAt ) {
        this.postedAt = now;
    }
    if ( !this.likes ) {
      this.likes = 0;
    }
    next();
});

module.exports = mongoose.model('Exercise', ExerciseSchema);
//this is referring to the collection name, which will be the lowercase plural form of what we enter as the first argument here.
