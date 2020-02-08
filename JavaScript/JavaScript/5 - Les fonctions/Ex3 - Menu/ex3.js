// Premiers multiples
function    _multi()
{
    var i = 0;
    var tab = [];
    var n = parseInt(prompt("Nombre de multiples :"));
    var x = parseInt(prompt("Pour le nombre entier :"));

    while(++i <= n)
        tab[i - 1] = `| ${i} x ${x} = ${i * x} |`;
    alert(tab);
}
// Somme et moyenne
function    _somme()
{
    var tab = [];
    var som = 0;
    var i = 0;
    tab[i - 1] = 1;

    while (tab[i - 1] != 0)
        tab[i++] = prompt(`Saisissez le nombre n°${i + 1}\nSaisissez 0 pour arrêter`);

    i = -1;

    while (tab[++i] != 0)
        som = som + parseInt(tab[i]);

    alert(`Somme : ${som}\nMoyenne : ${som / i}`);
}
// Voyelles
function    _voy()
{
    var str = prompt("Entrez un mot");
    var res = (str.match(/a|e|i|o|u|y|à|é|è|ê|ë|ï|ö|ô/ig)).length;

    alert(`Il y a ${res} voyelles`);
}
// Occurences : Appel d'une fonction dans une fonction 
function    _findchar()
{
    function     to_find(str, a)
    {
        str = str.toLowerCase();
        a = a.toLowerCase();
        var strlen = str.length;
        var i = -1;
        var res = 0;

        while(++i < strlen)
        {
            if (str[i] === a)
                res++;
        }
        return res;
    }

    var str = prompt("Phrase");
    var char = prompt("Caractere");
    var res = to_find(str, char);
    alert(res);
}

// Appel du menu
var rep1;
rep1 = prompt("1- Multiples\n2- Somme et moyenne\n3- Recherche du nombre de voyelles\n4- Recherche du nombre des cractères suivants\nEntrez votre choix :")
if (rep1 == 1)
    _multi();
if (rep1 == 2)
    _somme();
if (rep1 == 3)
    _voy();
if (rep1 == 4)
    _findchar();
