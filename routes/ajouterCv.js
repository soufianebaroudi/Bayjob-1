var models = require('../models');
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('ajouterCv', { title: 'AJout d\'un Cv'});
});
router.post('/', function(req, res, next) {
    console.log("test avant cv");
    var cv = models.Cv.build({ // pb a cette ligne avec Cv...
        titre: req.body.titre,
        CandidatId: parseInt("1") // to change
    });
    console.log("test apres cv");

    var formation = models.Formations.build({
        intitule_diplome: req.body.IntituleDiplome,
        etablissement: req.body.etablissement,
        annee: req.body.annee,
        mention: req.body.mention,
        ville: req.body.VilleDi,
        CVId: cv.id
    });

    var experience_pro = models.Experience_pros.build({
        entreprise: req.body.entreprise,
        poste: req.body.poste,
        duree: req.body.duree,
        ville: req.body.villeXp,
        ContratTypeId: parseInt("1"), // to change
        CVId: cv.id
    });

    var mission_CV = models.Mission_CVs.build({
        intitule: req.body.intituleMission,
        ExperienceProId: experience_pro.id
    });

    var competence_CV = models.Competence_CVs.build({
        intitule: req.body.intituleCompetence,
        niveau: req.body.niveauCompetence,
        CVId: cv.id
    });

    var langue = models.Langues.build({
        intitule: req.body.denominationLangue,
        niveau: req.body.niveauLangue,
        CVId: cv.id
    });

    var centre_interet = models.Centre_interets.build({
        intitule: req.body.intituleInteret,
        CVId: cv.id
    });


    cv.save().then(function(){
        res.send('ok added : ' );
    });
    formation.save().then(function(){
        res.send('ok added : ' );
    });
    experience_pro.save().then(function(){
        res.send('ok added : ' );
    });
    mission_CV.save().then(function(){
        res.send('ok added : ' );
    });
    competence_CV.save().then(function(){
        res.send('ok added : ' );
    });
    langue.save().then(function(){
        res.send('ok added : ' );
    });
    centre_interet.save().then(function(){
        res.send('ok added : ' );
    });

});
module.exports = router;
