var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:idOffres', function(req, res, next) {


    models.Offre.findOne({
        where:{id: req.params.idOffres},
        include:[
            {model: models.Recruteur},
            {model: models.Departement},
            {model: models.Contrat_type},
            {model: models.Niveau_etude},
            {model: models.Mission_offre},
            {model: models.Competence_offre}
        ]
    }).then(function(offre){
        console.log(JSON.stringify(offre));

        //Liste des mois
        var mois = ["Janvier","F�vrier","Mars","Avril","Mai","Juin","Juillet","Ao�t","Septembre","Octobre","Novembre","D�cembre"];
        res.render('offre', { title: 'offre', offre: offre, mois: mois});
    });


});

module.exports = router;
/**
 * Created by Achraf on 19/02/2016.
 */
