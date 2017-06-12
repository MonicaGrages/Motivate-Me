var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var FoodSchema = new Schema({
  description: String,
  meal: String,
  author: String,
  feeling: String,
  likes: Number,
  postedAt: Date
});

//add a date posted and number of likes to each post when created
FoodSchema.pre('save', function(next) {
    now = new Date();
    if( !this.postedAt ) {
        this.postedAt = now;
    }
    if ( !this.likes ) {
      this.likes = 0;
    }
    next();
});

module.exports = mongoose.model('Food', FoodSchema);
//this is referring to the col
