var len = parseInt(prompt("Quelle est la taille du tableau ?"));
var tab = Array(len);
var i = -1;

while (++i != len)
    tab[i] = prompt(`Quelle valeurs voulez vous mettre dans la ${i + 1} case du tableau :`);
i = -1;

alert(tab);
