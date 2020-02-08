// Somme d'un interval
var n1 = parseInt(prompt("Nombre 1 :"));
var n2 = parseInt(prompt("Nombre 2 :"));
var res = 0;

if (n1 < n2)
{
  while(n1 <= n2)
    res = res + n1++;
}
else
{
  while(n2 <= n1)
    res = res + n2++;
}
alert(`Resulat : ${res}`);


// Exemple : 2 - 7
// 2 + 3 + 4 + 5 + 6 + 7 = 27
