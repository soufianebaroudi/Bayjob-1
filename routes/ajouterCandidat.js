var models = require('../models');
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('ajouterCandidat', { title: 'Inscription' });
});
router.post('/', function(req, res, next) {
    var candidat = models.Candidat.build({
        nomCandidat : req.body.nomCandidat,
        prenomCandidat : req.body.prenomCandidat,
        mailCandidat : req.body.mailCandidat,
        telFixeCandidat : req.body.telFixeCandidat,
        telMobileCandidat : req.body.telMobileCandidat,
        mdpCandidat : req.body.mdpCandidat,
        adresseCandidat : req.body.adresseCandidat,
        cpCandidat : req.body.cpCandidat,
        villeCandidat : req.body.villeCandidat,
        paysCandidat : req.body.paysCandidat,
        mobiliteCandidat : req.body.mobiliteCandidat,
        dateNaissanceCandidat : req.body.dateNaissanceCandidat
    });
    console.log(req.body.nomCandidat);
    console.log(candidat.nomCandidat);
    candidat.save().then(function() {
        res.send('ok added : ' + candidat.nomCandidat);
    })
});
module.exports = router;
