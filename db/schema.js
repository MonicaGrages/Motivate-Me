var mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

var ExerciseSchema = mongoose.Schema({
  description: String,
  duration: String,
  author: String,
  feeling: String
});

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
