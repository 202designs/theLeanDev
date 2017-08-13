var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });


});

/*get contact page*/
router.get('/contact',function(req,res,next){
  res.render('contact');
})

/*get contact page*/
router.get('/services',function(req,res,next){
  res.render('services');
})

module.exports = router;
