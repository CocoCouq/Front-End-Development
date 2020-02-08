// Trouver le nombre 
var magic = parseInt(Math.random()*100);
var nb = parseInt(prompt("Trouver le nombre :"));

while (nb !== magic)
{
    if (nb < magic)
        nb = parseInt(prompt("Plus grand"));
    else
        nb = parseInt(prompt("Plus petit"));
}
alert("Trouvé !!");
