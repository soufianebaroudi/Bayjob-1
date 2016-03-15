/**
 * Created by Soufiane on 15/03/2016.
 */

var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    if(req.session && req.session.user){
        //R�cup�ration des offres de l'utilisateur connect�
        models.Recruteur.findOne({
            include : {model: models.Offre},
            where: {UtilisateurId: req.session.user}
        }).then(function(recruteur){
            //Liste des mois
            var mois = ["Janvier","F�vrier","Mars","Avril","Mai","Juin","Juillet","Ao�t","Septembre","Octobre","Novembre","D�cembre"];
            console.log(JSON.stringify(recruteur));
            res.render('espaceRecruteur', { title: 'Espace recruteur', recruteur: recruteur, mois : mois , session: req.session});
        });
    }else{
        res.redirect('/login');
    }
});

module.exports = router;