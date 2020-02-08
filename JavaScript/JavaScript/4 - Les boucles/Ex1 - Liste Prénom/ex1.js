// Affichage des noms saisis 
var tab = Array();
var i = 0;

tab[i++] = prompt("Saisissez le prenom N°1");

while (tab[i - 1] != null && tab[i - 1] != "")
    tab[i++] = prompt(`Saisissez le prenom N°${i}\nOu appuyer sur annuler pour quitter.`);
alert((i - 1) + " prénoms");
i = -1;
while (tab[++i] != null)
    alert(tab[i]);
