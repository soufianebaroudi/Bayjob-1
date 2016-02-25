$(document).ready(function(){

    //Evenement executé lorsqu'on clique sur le bouton accepter du cv
    $('#btnAcceptCV').click(function(){
        var utilisateurSession = $('input[name=utilisateurSession]').val();
        var CVId = $('input[name=CVId]').val();

        $.ajax({
            url : '/notification/ajouter',
            type : 'POST',
            dataType : 'html', // On désire recevoir du HTML
            data : 'utilisateurSession=' + utilisateurSession + '&CVId=' + CVId,
            success : function(code_html, statut){ // code_html contient le HTML renvoyé
                alert(code_html);
            }
        });
    });

});