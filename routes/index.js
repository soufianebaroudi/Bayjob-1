var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bayjob' });
});

router.get('/test', function(req, res) {
  models.User.create({
    username: 'test2'
  }).then(function() {
    res.redirect('/');
  });
});

module.exports = router;
