var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/splash', function(req, res, next) {
  res.send('/splash');
});

module.exports = router;
