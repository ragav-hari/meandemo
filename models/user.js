var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
firstName : String,
lastName  : String
});

var User = mongoose.model('User',userSchema);

module.exports = {
    User : User
}
