var express = require('express');
var router = express.Router();

var userService = require('../services/userService.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register',function(req,res,next){
 res.render('register');
});


router.post('/formregister',function(req,res,next){
    userService.addUser(req.body,function(err){
       if(err)
       {

       }
       res.render('register');
    });

});
module.exports = router;
