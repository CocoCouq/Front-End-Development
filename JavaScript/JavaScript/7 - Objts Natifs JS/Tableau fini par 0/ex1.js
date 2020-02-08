function    GetInteger(i)
{
    return parseInt(window.prompt(`Entrez le nombre ${i}`));
}

function    SaisieTab(tab)
{
    var i = -1;

    while (tab[++i - 1] != 0)
        tab[i] = GetInteger(i + 1);
}

var tab = [];
SaisieTab(tab);
var len = tab.length;

alert(`Vous avez saisi ${len - 1} valeurs"`);

var moy;
var i = -1;
var som = 0;

while (++i != len)
        som = som + tab[i];
moy = som / (len - 1);

alert(`Moyenne = ${moy}\nSomme = ${som}`);
