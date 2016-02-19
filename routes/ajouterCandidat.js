/**
 * Created by Antoine Delahaye on 08/02/2016.
 */
var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('ajouterCandidat', { title: 'Inscription d\'un Candidat '});
});

router.post('/', function(req, res, next) {

    var utilisateur = models.Utilisateur.build({
        mail: req.body.mailCandidat,
        mdp: req.body.mdpCandidat,
        type: "C"
    });

    var candidat = models.Candidat.build({
        nom: req.body.nomCandidat,
        prenom: req.body.prenomCandidat,
        dateNaissance: req.body.dateNaissanceCandidat,
        telFixe: req.body.telFixeCandidat,
        telMobile: req.body.telMobileCandidat,
        adresse: req.body.adresseCandidat,
        ville: req.body.villeCandidat,
        cp: req.body.cpCandidat,
        pays: req.body.paysCandidat,
        mobilite: req.body.mobiliteCandidat
    });

    utilisateur.save();

    candidat.save().then(function() {
        utilisateur.setCandidat(candidat);
        res.render('login', { title:'Page de connexion', email: utilisateur.mail, mdp : utilisateur.mdp});
        //res.send('ok added : ' + candidat.nom);
    })
});
module.exports = router;
