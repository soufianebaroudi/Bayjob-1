$(document).ready(function(){

    var competenceIncrement = 0;
    var missionIncrement = 0;


    $('.modal-trigger').leanModal();

    $('#btn_ajout_competence').click(function(){

        var intitule = $('input[name=intituleCompetence]').val();
        var niveauCompetence = $('select[name=niveauCompetence] option:selected').val();

        $('#elements_Offre').append('<input type="hidden" name="competence[' + competenceIncrement + '][intitule]" value="' + intitule + '">');
        $('#elements_Offre').append('<input type="hidden" name="competence[' + competenceIncrement + '][niveau]" value="' + niveauCompetence + '">');
         competenceIncrement=competenceIncrement+1;
    });

    /**
     * Action du Bouton de la fenêtre modale mission
     */

    $('#btn_ajout_mission').click(function(){
        var intitule = $('input[name=intituleMission]').val();
        $('#elements_Offre').append('<input type="hidden" name="mission[' + missionIncrement + '][intitule]" value="' + intitule + '">');
        missionIncrement=missionIncrement+1;

    });

});