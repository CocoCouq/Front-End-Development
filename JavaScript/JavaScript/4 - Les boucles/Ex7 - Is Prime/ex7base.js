// Juste pour comparer la vitesse d'execution
function  isPrime(nb)
{
  var x = 3;

  if (nb <= 1)
    return false;
  else if(nb === 2)
    return true;
  else if(nb % 2 === 0)
    return false;
  else
  {
    while(x < (nb / 2))
    {
      if(nb % x === 0)
        return false;
      x += 2;
    }
    return true;
  }
}

var nb = parseInt(prompt("Entrez un nombre"))
var prime = isPrime(nb);

if (prime)
  alert("Premier");
else
  alert("Pas premier");
