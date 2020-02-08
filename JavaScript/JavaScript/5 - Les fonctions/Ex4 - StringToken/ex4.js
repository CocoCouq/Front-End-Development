// Mot à index séparé par un charset
function    _strtok(str1, str2, n)
{
    var strres = [];
    var i = 0;
    var len = str1.length;

    while (n > 1 && len-- != 0)
    {
        if (str1[i] == str2)
            n--;
        i++;
    }

    var j = 0;

    while (str1[i] != str2 && len-- != 0)
        strres[j++] = str1[i++];

    return strres;
}

// Appel
var str1 = prompt("Phrase");
var str2 = prompt("Séparateur");
var n = parseInt(prompt("Index"));

var result = _strtok(str1, str2, n);
alert(result);
