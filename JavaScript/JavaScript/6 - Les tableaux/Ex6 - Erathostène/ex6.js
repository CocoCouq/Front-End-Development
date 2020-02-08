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

var max = parseInt(prompt("Chercher les nombres premiers jusqu'à :"));
var i = 0;

while (++i < max)
{
    if (isPrime(i))
        console.log(i);
}
