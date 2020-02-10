/*************** Vérification du formulaire ***************/
$(document).ready(function()
{

    //  Déclarartion des regex
    var filtreVide = /(^$)/;
    var filtreTextChar = /(^[\wéèêëûüîïôàçæœ\s\-\.\,\_\+\=\/\%€@\'\"\\`\!\?\;\[\]])/i;
    var filtreNom = /(^[A-Z]+[a-zA-Z]+\s*)$/;
    var filtreVille = /^[\w\s\-éèêëûüîïôöàœæ\/]+$/;
    var filtrePrenom = /(^[a-zA-Zéèêëôœîïûüàáâæç-]+\s*)$/;
    var filtreMail = /(^[\w\.-]+@[\w\.-]+\.[\w]{2,4}\s*)$/;
    var filtreAdr = /(^[\wéèêëûüîïôàçæœ\s\-\.\,\_\+\=\/\%€@\'\"\\`\!\?\;\[\]]{8,200}$)/i;
    var filtreDate = /(^[0-3]{1}[0-9]{1}\/[0-1]{1}[0-9]\/[1-2]{1}(0|9)[0-9]{1}[0-9]{1})$/;
    var filtreText = /(^[\wéèêëûüîïôàçæœ\s\-\.\,\_\+\=\/\%€@\'\"\\`\!\?\;\[\]]{50,500}$)/i;
    var filtreCdPost = /(^[0-9]{2}\s([0-9]{3}\s*)$)|(^[0-9]{5}\s*)$|(2A\s*)$|(2B\s*)$|(^$)/;

    //    FONCTION VERIFICATION FORMULAIRE

    function verif()
    {
        // récupération des valeurs
        var nom = $('#idNom').val();
        var prenom = $('#idPrenom').val();
        var daten = $('#idDate').val();
        // var homme = $('#idHomme').val();
        // var femme = $('#idFemme').val();
        var adres = $('#idAdress').val();
        // var code = $('#idCode').val();
        // var ville = $('#idVille').val();
        var mail = $('#idMail').val();
        var subj = $('#idSujet').val();
        var mess = $('#textarea1').val();
        // var accep = $('#idAccepte').val();



        var send = (!filtreNom.test(nom) || !filtrePrenom.test(prenom)) ? false : true;
        send = (!filtreDate.test(daten) || !filtreMail.test(mail) ) ? false : send;
        send = (!filtreAdr.test(adres) && (!filtreVide.test(adres))) ? false : send;
        send = (!filtreText.test(mess) || subj == "0") ? false : send;
        // radios
        // Accepte form


        //Soumission du formulaire
        if (send == true)
            document.forms[0].submit();
        else
            return false;
    }

    $("#buttonSend").click(function(event)
    {
    event.preventDefault();
    // Appel de la fonction verif()
    verif();
    });





});


// if(filtrePrenom.test(nom))
// {
//     $("<span>Error</span>").insertAfter("#divNom");
// }
