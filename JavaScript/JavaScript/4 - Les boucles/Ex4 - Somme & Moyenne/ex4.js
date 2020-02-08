// Somme et Moyenne
var tab = Array();
var i = 0;
var som = 0;
tab[i - 1] = 1;

while (tab[i - 1] != 0 && tab[i - 1] != null)
      tab[i++] = prompt(`Saisissez le nombre n°${i+1}\nSaisissez 0 pour arrêter`);

i = -1;

while (tab[++i] != 0)
    som = som + parseInt(tab[i]);

alert(`Somme : ${som}\nMoyenne : ${som/i}`);
