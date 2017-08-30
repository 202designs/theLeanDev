var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/taskBoard', function(req, res, next) {
  res.send('/taskBoard');
});

module.exports = router;
