var mongoose = require('mongoose');

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
