/**
 * Created by Soufiane on 05/02/2016.
 */
var models  = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('ajouterRecruteur', { title: 'Inscription' });
});

router.post('/', function(req, res, next) {

    var   nomRecruteur = req.body.nomRecruteur;
    var   prenomRecruteur = req.body.prenomRecruteur;
    var   nomEntreprise = req.body.nomEntreprise;
    var   adresse = req.body.adresse;
    var   ville = req.body.ville;
    var   cp = req.body.cp;
    var   pays = req.body.pays;
    var   telFixe = req.body.telFixe;
    var   telMobile = req.body.telMobile;
    var   mail = req.body.mail;
    var   mdp = req.body.mdp;

    var recruteur = models.Recruteur.build({

        nomRecruteur : nomRecruteur,
        prenomRecruteur : prenomRecruteur,
        nomEntreprise : nomEntreprise,
        adresse : adresse,
        ville : ville,
        cp : cp,
        pays : pays,
        telFixe : telFixe,
        telMobile : telMobile,
        mail : mail,
        mdp : mdp

    });

    var utilisateur = models.Utilisateur.build({

        mail: mail,
        mdp: mdp,
        type : "R"
    })

    recruteur.save().then(function() {
       // res.send('ok added : ' + recruteur.nomRecruteur);
    })

    utilisateur.save().then(function() {
        res.send('ok added : ' + recruteur.nomRecruteur + 'mail : ' + utilisateur.mail);
    })
});
module.exports = router;