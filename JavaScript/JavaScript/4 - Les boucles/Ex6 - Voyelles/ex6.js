// Regex nombre de voyelles

var str = prompt("Entrez un mot");
var res = (str.match(/a|e|i|o|u|y|à|é|è|ê|ë|ï|ö|ô/ig)).length;

alert(`Il y a ${res} voyelles`);

// Nombre de voyelles
var res;
var str = prompt("Entrez un mot").toLowerCase();
var strlen = str.length;
var i = 0;
var res = 0;

while (strlen-- >= 0)
{
    if ((str[i] == "a") || (str[i] == "e") || (str[i] == "i")
        || (str[i] == "o") || (str[i] == "u") || (str[i] == "y"))
        res++;
    i++;
}
alert(`Il y a ${res} voyelles`);
