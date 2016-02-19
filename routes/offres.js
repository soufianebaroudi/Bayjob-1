var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:idOffres', function(req, res, next) {


    models.Offres.findOne({
        where:{id: req.params.idOffres},
        include:[
            {model: models.Recruteur},
            {model: models.Departement},
            {model: models.Contrat_type},
            {model: models.Niveau_etude},
            {model: models.Mission},
            {model: models.Competence}
        ]
    }).then(function(cv){
        console.log(JSON.stringify(offre));

        //Liste des mois
        var mois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
        res.render('offre', { title: 'offre', offre: offre, mois: mois});
    });




    /*models.CV.findById(req.params.idCv).then(function(cv){
     models.CV.findById(cv.CandidatId).then(function(candidat){
     nom =candidat.nom;
     res.render('cv', { title: 'CV' });
     });

     });*/


});

module.exports = router;
/**
 * Created by Achraf on 19/02/2016.
 */
