var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });


});

/*get contact page*/
router.get('/contact',function(req,res,next){
  res.render('contact');
});

/*get contact page*/
router.get('/services',function(req,res,next){
  res.render('services');
});

router.get('/taskBoard',function(req,res,next){
  res.render('taskBoard');
});
router.get('/projectBoard',function(req,res,next){
  res.render('projectBoard');
});
router.get('/splash',function(req,res,next){
  res.render('splash');
});
router.get('/table',function(req,res,next){
  res.render('table');
})

module.exports = router;
