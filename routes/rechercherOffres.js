/**
 * Created by Antoine Lecoustre on 09/02/2016.
 */
var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('rechercherOffres', { title: 'Recherche d\'offres', messageErr:null });
});

/* Action exécutée lorsque l'utilisateur lance la recherche d'une offre */
router.post('/', function (req, res) {
    console.log(req.body);

    
    if(req.body.intitulePoste){
        var intitule_poste = {titre: req.body.intitulePoste};
    }else{
        var intitule_poste = null;
    }

    if(req.body.lieu){
        var lieu_poste = {ville: req.body.lieu};
    }else{
        var lieu_poste = null;
    }

    if(req.body.nivEtude){
        var niv_etude = {intitule: req.body.nivEtude};
    }else{
        var niv_etude = null;
    }

    //Vérification s'il y a au moins un critère selectionné
    if(intitule_poste == null && lieu_poste == null && niv_etude == null){
        res.render('rechercherOffres', { title: 'Recherche d\'offres', messageErr:"Veuillez selectionner au mois un critère" });
    }else{
        var criteres_offre = {};

        criteres_offre.include = [{model: models.Contrat_type},
            {model: models.Niveau_etude, where: niv_etude},
            {model: models.Recruteur},
            {model: models.Departement}];

        if(intitule_poste != null || lieu_poste != null){
            criteres_offre.where = [intitule_poste, lieu_poste];
        }

        models.Offre.findAll(criteres_offre).then(function(offres){
            //Liste des mois
            var mois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
            res.render('resultatRechercheOffre', {title: 'Résultat de recherche d\'offres', offres: offres, mois: mois });
            console.log(JSON.stringify(offres));
        });
    }

});

module.exports = router;
