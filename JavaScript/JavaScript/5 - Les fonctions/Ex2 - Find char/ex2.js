// Fonction le nombre d'occurence
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

// Appel
var str = prompt("Phrase");
var char = prompt("Caractere");
var res = to_find(str, char);
alert(res);
