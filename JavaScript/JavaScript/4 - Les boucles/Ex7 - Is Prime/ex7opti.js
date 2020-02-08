// Is prime Optimisé
function  isPrime(nb)
{
    var i = 3;

    if (nb <= 1)
        return false;
    else if (nb === 2)
        return true;
    else if (nb % 2 === 0)
        return false;
    else
    {
        while(i <= Math.sqrt(nb))
        {
            if (nb % i === 0)
                return false;
            i += 2;
        }
        return true;
    }
}

var nb = parseInt(prompt("Entrez un nombre"));
var result = isPrime(nb);

if (result)
    alert(`Premier`);
else
    alert(`Pas Premier`);

// 13
// 49
// 101
// 1741
// 5023
// 49999
// 2147483647
// 214803626941
// 1000000000177
