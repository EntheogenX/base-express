var express = require('express');
var router = express.Router();
var getCart = require('../api/getCart');

router.get('/', function(req, res, next) {
  res.json(getCart());
});

module.exports = router;