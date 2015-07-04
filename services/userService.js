var User = require('../models/user').User;

exports.addUser = function(user,next)
{
 var newuser = new User({
  firstName : user.firstName,
  lastName  : user.lastName
 });


 newuser.save(function(err){
    if(err)
    {
        return next(err);
    }
    next(null);
 });


}
