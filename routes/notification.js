var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/ajouter', function(req, res, next) {
  var notification = models.Notification.build({
    utilisateurSession:req.body.utilisateurSession,
    accepte:0
  });

  notification.save().then(function() {
    notification.setCV(req.body.CVId);
    res.send("ok");
  });




});

module.exports = router;