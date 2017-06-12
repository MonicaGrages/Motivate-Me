var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;



var FoodSchema = new Schema({
  description: String,
  meal: String,
  author: String,
  feeling: String,
  likes: Number
});

FoodSchema.pre('save', function(next) {
    now = new Date();
    this.updatedAt = now;

    if( !this.createdAt ) {
        this.createdAt = now;
    }
    next();
});


module.exports = mongoose.model('Food', FoodSchema);
//this is referring to the col
