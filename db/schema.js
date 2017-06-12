var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;



var ExerciseSchema = new Schema({
  description: String,
  duration: String,
  author: String,
  feeling: String,
  likes: Number
});

//need to fix this
ExerciseSchema.pre('save', function(next) {
    now = new Date();
    this.updatedAt = now;

    if( !this.createdAt ) {
        this.createdAt = now;
    }
    next();
});


module.exports = mongoose.model('Exercise', ExerciseSchema);
//this is referring to the collection name, which will be the lowercase plural form of what we enter as the first argument here.
