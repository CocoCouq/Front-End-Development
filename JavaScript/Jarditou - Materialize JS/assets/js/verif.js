/*************** Vérification du formulaire ***************/

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



//              FONCTION VERIFICATION FORMULAIRE

//  Recupération du bouton Envoyer
var element = document.getElementById('buttonSend');
//  Ajout d'un événement au click sur element contenant 'Envoyer'
//  'event' sera rappelé avec 'event.preventDefault()'
element.addEventListener("click", function verif(event)
{
//  Nom
    var nom = document.getElementById("idNom").value;    // .value permet de récupérer la valeur du Inuput
    if (!filtreNom.test(nom))
    {
        if (filtrePrenom.test(nom))
            document.getElementById("errNom").textContent = "Doit commencer par une Majuscule";
        else if (!filtreVide.test(nom))
            document.getElementById("errNom").textContent = "Entrez un nom valide (ex : Jean)";
        else
            document.getElementById("errNom").textContent = "Renseignez ce champs";
        event.preventDefault();
    }
    else
        document.getElementById("errNom").innerHTML= "<h6 class=\"green-text\">OK</h6>";

 // Même opération pour les autres champs
 // Prénom
    var prenom = document.getElementById("idPrenom").value;
    if (!filtrePrenom.test(prenom))
    {
        if (filtreVide.test(prenom))
            document.getElementById("errPrenom").textContent = "Renseignez le champ";
        else
            document.getElementById("errPrenom").textContent = "Entrez un prénom valide (ex : Jean)";
        event.preventDefault();
    }
    else
        document.getElementById("errPrenom").innerHTML= "<h6 class=\"green-text\">OK</h6>";

//  Email
    var mail = document.getElementById("idMail").value;
    if (!filtreMail.test(mail))
    {
        if (!filtreVide.test(mail))
            document.getElementById("errMail").textContent = "Entrez un email valide (exemple@mail.com)";
        else
            document.getElementById("errMail").textContent = "Renseignez ce champ";
        event.preventDefault();
    }
    else
            document.getElementById("errMail").innerHTML= "<h6 class=\"green-text\">OK</h6>";

//  Sujet
//  '0' est la valeur de la première option du select
    if (document.getElementById("idSujet").value == "0")
    {
        document.getElementById("errSuj").textContent = "Choisissez le sujet de votre requête";
        event.preventDefault();
    }
    else
        document.getElementById("errSuj").textContent = "";

//  Question
var quest = document.getElementById("textarea1").value;
    if (!filtreText.test(quest))
    {
        if (filtreVide.test(quest))
        {
            document.getElementById("errQuest").textContent = "Détailler votre demande";
            event.preventDefault();
        }
        else
        {
            document.getElementById("errQuest").textContent = "Votre message n'est pas valide";
            event.preventDefault();
        }
    }
    else
        document.getElementById("errQuest").textContent = "";

 // Date de naissance
 // Le input de type date formate le retour
 // Je verifie donc simplement qu'il n'est pas vide
var date = document.getElementById("idDate").value;
    if (!filtreDate.test(date))
    {
        document.getElementById("errDate").textContent = "Renseignez une date de naissance";
        event.preventDefault();
    }
    else
    document.getElementById("errDate").innerHTML= "<h6 class=\"green-text\">OK</h6>";

//  Acceptation formulaire
//  Grace à l'option '.checked' on sait si checkbox et radio sont cochés
    if (!(document.getElementById('idAccepte').checked))
    {
        document.getElementById("errChckBox").innerHTML = "<i class=\"material-icons\">report</i>Veuillez accepter l'envoie du formulaire";
        event.preventDefault();
    }
    else
      document.getElementById("errChckBox").textContent = "";

  //  Sexe
      if (!(document.getElementById('idHomme').checked) && !(document.getElementById('idFemme').checked))
      {
          document.getElementById("errSexe").textContent = "Renseignez votre genre";
          event.preventDefault();
      }
      else
        document.getElementById("errSexe").innerHTML= "<h6 class=\"green-text\">OK</h6>";

//  Code Postal
//  Le champs n'est pas obligatoire
//  J'autorise une réponse vide dans mon regex
    var cdPost = document.getElementById("idCode").value;
    if(!filtreCdPost.test(cdPost))
    {
        document.getElementById("errCode").textContent = "Code Postal invalide";
        event.preventDefault();
    }
    else
        document.getElementById("errCode").textContent= "";

// Adresse
    var adres = document.getElementById('idAdress').value;
    if (!filtreAdr.test(adres))
    {
        if (filtreVide.test(adres))
        {
            document.getElementById("errAdress").textContent= "";
        }
        else
        {
            document.getElementById("errAdress").textContent= "Votre adresse n'est pas valide";
            event.preventDefault();
        }
    }
    else
        document.getElementById("errAdress").textContent= "";

// Complement Adresse
    var compAdres = document.getElementById('idCompAdress').value;
    if (!filtreAdr.test(compAdres))
    {
        if (filtreVide.test(compAdres))
            document.getElementById("errCompAdress").textContent= "";
        else
        {
            document.getElementById("errCompAdress").textContent= "Le complement d'adresse n'est pas valide";
            event.preventDefault();
        }
    }
    else
        document.getElementById("errCompAdress").textContent= "";

// Ville
    var city = document.getElementById('idVille').value;
    if (!filtreVille.test(city))
    {
        if (filtreVide.test(city))
            document.getElementById("errVille").textContent= "";
        else
        {
            document.getElementById("errVille").textContent= "Votre ville n'est pas valide";
            event.preventDefault();
        }
    }
    else
        document.getElementById("errVille").textContent= "";

});


///////////////////////////////////////////////////////////////////////////////


// GESTION DES HELPERS
// Nom
var elementNom = document.getElementById('idNom');

elementNom.addEventListener("change", function nom(event){
    var nom = document.getElementById("idNom").value;    // .value permet de récupérer la valeur du Inuput
    if(!filtreNom.test(nom))    // Si test du regex différent de 'true'
    {
        if (filtrePrenom.test(nom))
            document.getElementById("errNom").textContent = "Doit contenir une majuscule";
        else
            document.getElementById("errNom").textContent = "Entrez un nom valide (ex : DUPONT)";
    }
    else   // Si test regex égal 'true', j'efface le contenu
        document.getElementById("errNom").innerHTML= "<h6 class=\"green-text\">OK</h6>";
});

// Prenom
var elementPrenom = document.getElementById('idPrenom');

elementPrenom.addEventListener("change", function nom(event){
    var prenom = document.getElementById("idPrenom").value;
    if(!filtrePrenom.test(prenom))
        document.getElementById("errPrenom").textContent = "Entrez un prénom valide (ex : Jean)";
    else
        document.getElementById("errPrenom").innerHTML= "<h6 class=\"green-text\">OK</h6>";
});

// Date de Naissance
var elementDate = document.getElementById('idDate');

elementDate.addEventListener("change", function datenaiss(event){
    var date = document.getElementById("idDate").value;
    if (!filtreDate.test(date))
        document.getElementById("errDate").textContent = "Renseignez une date de naissance";
    else
        document.getElementById("errDate").innerHTML= "<h6 class=\"green-text\">OK</h6>";
});

// Sexe Homme & Femme
var elementnHomme = document.getElementById('idHomme');

elementnHomme.addEventListener("change", function homme(event){
    if (!(document.getElementById('idHomme').checked) && !(document.getElementById('idFemme').checked))
        document.getElementById("errSexe").textContent = "Renseignez votre genre";
    else
      document.getElementById("errSexe").innerHTML= "<h6 class=\"green-text\">OK</h6>";
});
var elementnFemme = document.getElementById('idFemme');

elementnFemme.addEventListener("change", function femme(event){
    if (!(document.getElementById('idHomme').checked) && !(document.getElementById('idFemme').checked))
        document.getElementById("errSexe").textContent = "Renseignez votre genre";
    else
      document.getElementById("errSexe").innerHTML= "<h6 class=\"green-text\">OK</h6>";
});

// Adresse
var elementAdress = document.getElementById('idAdress');

elementAdress.addEventListener("change", function adress(event){
    var adres = document.getElementById('idAdress').value;
    if (!filtreAdr.test(adres))
    {
        if (filtreVide.test(adres))
            document.getElementById("errAdress").textContent= "";
        else
            document.getElementById("errAdress").textContent= "Votre adresse n'est pas valide";
    }
    else
        document.getElementById("errAdress").textContent= "";
});

// Code Postal
var elementCP = document.getElementById('idCode');

elementCP.addEventListener("change", function codePos(event){
    var cdPost = document.getElementById("idCode").value;
    if(!filtreCdPost.test(cdPost))
        document.getElementById("errCode").textContent = "Code Postal invalide";
    else
        document.getElementById("errCode").textContent= "";
});

// Ville
var elementVille = document.getElementById('idVille');

elementVille.addEventListener("change", function ville(event){
    var city = document.getElementById('idVille').value;
    if (!filtreVille.test(city))
    {
        if (filtreVide.test(city))
            document.getElementById("errVille").textContent= "";
        else
            document.getElementById("errVille").textContent= "Votre ville n'est pas valide";
    }
    else
        document.getElementById("errVille").textContent= "";
});

// Email
var elementMail = document.getElementById('idMail');

elementMail.addEventListener("change", function mail(event){
    var mail = document.getElementById("idMail").value;
    if (!filtreMail.test(mail))
        document.getElementById("errMail").textContent = "Entrez un email valide (exemple@mail.com)";
    else
        document.getElementById("errMail").innerHTML= "<h6 class=\"green-text\">OK</h6>";
});

// Sujet
var elementSujet = document.getElementById('idSujet');

elementSujet.addEventListener("change", function sujet(event){
    if (document.getElementById("idSujet").value == "0")
    {
        document.getElementById("errSuj").textContent = "Choisissez le sujet de votre requête";
        event.preventDefault();
    }
    else
        document.getElementById("errSuj").textContent = "";
});

// Message
var elementMess = document.getElementById('textarea1');

elementMess.addEventListener("change", function area(event){
    var quest = document.getElementById("textarea1").value;
    if (!filtreText.test(quest))
    {
        if (filtreVide.test(quest))
            document.getElementById("errQuest").textContent = "Détailler votre demande";
        else
            document.getElementById("errQuest").textContent = "Votre message n'est pas valide";
    }
    else
        document.getElementById("errQuest").textContent = "";
});

// CheckBox
var elementChkBx = document.getElementById('idAccepte');

elementChkBx.addEventListener("change", function accepte(event){
    if (!(document.getElementById('idAccepte').checked))
    {
        document.getElementById("errChckBox").innerHTML = "<i class=\"material-icons\">report</i>Veuillez accepter l'envoie du formulaire";
        event.preventDefault();
    }
    else
      document.getElementById("errChckBox").textContent = "";
});

// EVENEMENTS INPUT taille
var elementMess1 = document.getElementById('textarea1');

elementMess1.addEventListener("input", function areatest(event){
    var quest = document.getElementById("textarea1").value;
    var lenrep = quest.length;
    if (!filtreText.test(quest))
    {
        if (filtreTextChar.test(quest))
        {
            if (lenrep < 51)
                document.getElementById("errQuest").textContent = `${51 - lenrep} caractères minimum`;
            else if (lenrep >= 500)
                document.getElementById("errQuest").textContent = `${lenrep} caractères (500max)`;
        }
    }
    else
        document.getElementById("errQuest").textContent = "";
});

var elementAdr1 = document.getElementById('idAdress');

elementAdr1.addEventListener("input", function areatest(event){
    var adress = document.getElementById("idAdress").value;
    var lenrep = adress.length;
    if (!filtreText.test(adress))
    {
        if (filtreTextChar.test(adress))
        {
            if (lenrep < 8)
                document.getElementById("errAdress").textContent = `${9 - lenrep} caractères minimum`;
            else if (lenrep >= 200)
                document.getElementById("errAdress").textContent = `${lenrep} caractères (200max)`;
            else
                document.getElementById("errAdress").textContent = "";
        }
    }
    else
        document.getElementById("errQuest").textContent = "";
});
