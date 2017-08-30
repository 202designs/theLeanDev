var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/projectBoard', function(req, res, next) {
  res.send('/projectBoard');
});

module.exports = router;
