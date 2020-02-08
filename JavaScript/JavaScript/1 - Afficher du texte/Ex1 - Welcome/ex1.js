// Déclaration des variables
var nom = prompt("Entrez votre nom");
var prenom = prompt("Entrez votre prénom");

// Si confirm == true
if (confirm("Etes vous un homme ?"))
    var sexe = "Monsieur";
else
    var sexe  = "Madame";
    
// Affichage du resultat
alert(`Bonjour ${sexe} ${nom} ${prenom}\nBienvenue sur notre site`);
