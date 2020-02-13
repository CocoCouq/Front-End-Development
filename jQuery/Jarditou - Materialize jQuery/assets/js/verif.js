/*************** Vérification du formulaire ***************/
// AJOUTER COMPLEMENT ADRESSE
$(document).ready(function()
{
    //  Déclarartion des regex
    var filtreVide = /(^$)/;
    var filtreNom = /(^[A-Z]+[a-zA-Z]+\s{0,10})$/;
    var filtreVille = /^[\w\s\-éèêëûüîïôöàœçæ\/]+$/;
    var filtrePrenom = /(^[a-zA-Zéèêëôœîïûüàáâæç-]+\s{0,10})$/;
    var filtreMail = /(^[\w\.-]+@[\w\.-]+\.[\w]{2,4}\s{0,10})$/;
    var filtreAdr = /(^[\wéèêëûüîïôàçæœ\(\)\s\-\.\,\_\+\=\/\%€@\'\"\\`\!\?\;\[\]]{8,200}$)/i;
    var filtreDate = /(^[0-3]{1}[0-9]{1}\/[0-1]{1}[0-9]\/[1-2]{1}(0|9)[0-9]{1}[0-9]{1})$/;
    var filtreText = /(^[\wéèêëûüîïôàçæœ\(\)\s\-\.\,\_\+\=\/\%€@\'\"\\`\!\?\;\[\]]{50,500}$)/i;
    var filtreCdPost = /(^[0-9]{2}\s([0-9]{3}\s{0,10})$)|(^[0-9]{5}\s{0,10})$|(2A\s{0,10})$|(2B\s{0,10})$|(^$)/;
    // Tableau d'erreurs
    var tabError = [];
    // Zone d'erreurs
    $("<span class='chpObli' id='erNom'></span>").insertAfter("#divNom");
    $("<span class='chpObli' id='erPrenom'></span>").insertAfter("#divPrenom");
    $("<span class='chpObli' id='erDate'></span>").insertAfter("#idDate");
    $("<span class='chpObli' id='erMail'></span>").insertAfter("#divMail");
    $("<span class='chpObli' id='erAdr'></span>").insertAfter("#divAdre");
    $("<span class='chpObli col s12' id='erSexe'></span>").insertAfter("#divSex");
    $("<span class='chpObli' id='erMess'></span>").insertAfter("#divMess");
    $("<span class='chpObli' id='erCode'></span>").insertAfter("#divCode");
    $("<span class='chpObli' id='erVille'></span>").insertAfter("#divVille");
    $("<span class='chpObli col s9 offset-l2 offset-m1' id='erAccep'></span>").insertAfter("#divAccep");
    $("<span class='chpObli' id='erSubj'></span>").insertAfter("#idSujet");
    // Centrer les messages d'chpObli
    $(".chpObli").addClass('valign-wrapper');

    // Récupération des valeur dans un tableau des valeurs des inputs
    function declare()
    {
        var val = [];
        val['nom'] = $('#idNom').val();
        val['prenom'] = $('#idPrenom').val();
        val['daten'] = $('#idDate').val();
        val['homme'] = $('#idHomme').prop('checked');
        val['femme'] = $('#idFemme').prop('checked');
        val['adres'] = $('#idAdress').val();
        val['code'] = $('#idCode').val();
        val['ville'] = $('#idVille').val();
        val['mail'] = $('#idMail').val();
        val['subj'] = $('#idSujet').val();
        val['mess'] = $('#textarea1').val();
        val['accep'] = $('#idAccepte').prop('checked');
        return val;
    }
    //  FONCTION VERIFICATION FORMULAIRE
    function verif()
    {

        // Récupération des valeurs
        var val = declare();

        // Vérification des régex
// Nom - Prenom
        var send = (!filtreNom.test(val['nom']) || !filtrePrenom.test(val['prenom'])) ? false : true;
// Date - Mail
        send = (!filtreDate.test(val['daten']) || !filtreMail.test(val['mail'])) ? false : send;
// Adresse
        send = (!filtreAdr.test(val['adres']) && !filtreVide.test(val['adres'])) ? false : send;
// Sujet - Message
        send = (!filtreText.test(val['mess']) || val['subj'] == null) ? false : send;
// Code Postal
        send = !filtreCdPost.test(val['code']) ? false : send;
// Ville
        send = (!filtreVille.test(val['ville']) && !filtreVide.test(val['ville'])) ? false : send;
// Sexe - Accepte
        send = ((!val['homme'] && !val['femme']) || !val['accep']) ? false : send;

        //Soumission du formulaire
        if (send == true)
            document.forms[0].submit();
        else
            return false;
    }
    // Evenement sur le bouton d'envoi
    // On empeche l'envoi
    // On lance verif() qui qui enverra le form si tout va bien
    $('#buttonSend').click(function(event)
    {
        event.preventDefault();
        verif();

        // Récupération des valeurs
        var val = declare();

        // MESSAGE D'chpObli ON SUBMIT
// NOM
        tabError['Name'] = !filtreNom.test(val['nom'])
                         ? (filtrePrenom.test(val['nom'])
                            ? "Commencez par une majuscule"
                            : (filtreVide.test(val['nom'])
                                ? "Remplissez le champs"
                                : "Nom invalide"))
                         : "";

// PRENOM
        tabError['Fname'] = !filtrePrenom.test(val['prenom'])
                          ? (filtreVide.test(val['prenom'])
                             ? "Remplissez le champ"
                             : "Champ invalide")
                          : "";

// DATE
        tabError['Date'] = !filtreDate.test(val['daten'])
                         ? ("Renseignez la date")
                         : "";

// MAIL
        tabError['Mail'] = !filtreMail.test(val['mail'])
                         ? (filtreVide.test(val['mail'])
                            ? "Renseignez votre Email"
                            : "Format d'email non valide")
                         : "";

// ADRESSE
        tabError['Adres'] = (!filtreAdr.test(val['adres']) && !filtreVide.test(val['adres']))
                          ? "Adresse non valide"
                          : "";

// MESSAGE
        tabError['Mess'] = !filtreText.test(val['mess'])
                         ? (filtreVide.test(val['mess'])
                            ? "Renseignez votre demande"
                            : "Message non valide")
                         : "";

// SUJET
        tabError['Subj'] = val['subj'] == null
                         ? "Rensiegnez un Sujet"
                         : "";

// CODE POSTAL
        tabError['Code'] = !filtreCdPost.test(val['code'])
                         ? "Code Postal non valide"
                         : "";

// VILLE
        tabError['Ville'] = (!filtreVille.test(val['ville']) && !filtreVide.test(val['ville']))
                          ? "Format de ville non valide"
                          : "";

// SEXE
        tabError['Sexe'] = (!val['homme'] && !val['femme'])
                         ? "Renseignez votre genre"
                         : "";

//ACCEPTE
        tabError['accep'] = !val['accep']
                          ? "<i class=\"material-icons\">report</i>Accepete traitement"
                          : "";

        // Affichages des chpOblis on submit
        $('#erNom').html(tabError['Name']);
        $('#erPrenom').html(tabError['Fname']);
        $('#erDate').html(tabError['Date']);
        $('#erMail').html(tabError['Mail']);
        $('#erAdr').html(tabError['Adres']);
        $('#erSexe').html(tabError['Sexe']);
        $('#erMess').html(tabError['Mess']);
        $('#erCode').html(tabError['Code']);
        $('#erVille').html(tabError['Ville']);
        $('#erAccep').html(tabError['accep']);
        $('#erSubj').html(tabError['Subj']);
    });

    // Evenement sur les inputs obligatoires.

    // Blur : Nom - Prenom - Mail

// NOM
    $('#idNom').blur(function(event)
    {
        var val = declare();

        tabError['Name'] = !filtreNom.test(val['nom'])
                         ? (filtrePrenom.test(val['nom'])
                            ? "Commencez par une majuscule"
                            : (filtreVide.test(val['nom'])
                                ? "Remplissez le champs"
                                : "Nom invalide"))
                         : "";

        $('#erNom').html(tabError['Name']);
    });
// PRENOM
    $('#idPrenom').blur(function(event)
    {
        var val = declare();

        tabError['Fname'] = !filtrePrenom.test(val['prenom'])
                          ? (filtreVide.test(val['prenom'])
                             ? "Remplissez le champ"
                             : "Champ invalide")
                          : "";

        $('#erPrenom').html(tabError['Fname']);
    });
// MAIL
    $('#idMail').blur(function(event)
    {
        var val = declare();

        tabError['Mail'] = !filtreMail.test(val['mail'])
                         ? (filtreVide.test(val['mail'])
                            ? "Renseignez votre Email"
                            : "Format d'email non valide")
                         : "";

        $('#erMail').html(tabError['Mail']);
    });

    // Click : radios - checkbox

// SEXE
    $('#idHomme, #idFemme').click(function(event)
    {
        var val = declare();

        tabError['Sexe'] = (!val['homme'] && !val['femme'])
                         ? "Renseignez votre genre"
                         : "";

        $('#erSexe').html(tabError['Sexe']);
    });
// ACCEPTE
    $('#idAccepte').click(function(event)
    {
        var val = declare();

        tabError['accep'] = !val['accep']
                          ? "<i class=\"material-icons\">report</i>Accepete traitement"
                          : "";

        $('#erAccep').html(tabError['accep']);
    });

    // Change : Date - Sujet

// DATE
    $('#idDate').change(function(event)
    {
        var val = declare();

        tabError['Date'] = !filtreDate.test(val['daten'])
                         ? ("Renseignez la date")
                         : "";

        $('#erDate').html(tabError['Date']);
    });
// SUJET
    $('#idSujet').change(function(event)
    {
        var val = declare();

        tabError['Subj'] = val['subj'] == null
                         ? "Rensiegnez un Sujet"
                         : "";

        $('#erSubj').html(tabError['Subj']);
    });

    // Keypress : Message

// MESSAGE
    $('#textarea1').keypress(function(event)
    {
        var val = declare();
        var lenrep = val['mess'].length;

        tabError['Mess'] = !filtreText.test(val['mess'])
                         ? (filtreVide.test(val['mess'])
                            ? "Renseignez votre demande"
                            : (lenrep < 49
                                ? `${50 - lenrep} caractères minimum`
                                : (lenrep >= 500
                                    ? `${lenrep} caractères (500max)`
                                    : "")))
                         : "";

        $('#erMess').html(tabError['Mess']);
    });
});
