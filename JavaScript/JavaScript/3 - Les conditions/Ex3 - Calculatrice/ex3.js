var nb1 = parseInt(prompt("Entrez le premier nombre"));
var oper = prompt("L'opérateur");
var nb2 = parseInt(prompt("Entrez le deuxième nombre"));

// Calculatrice Ternaire
var res = (oper === '+') ? (nb1 + nb2)
          : (oper === '-' ? (nb1 - nb2)
          : (oper === "*" ? (nb1 * nb2)
          : ((oper === "/" && nb2 != 0) ? (nb1 / nb2)
          : 'Erreur')));

alert(res);

// Calculatrice If ... Else if ...
if (oper === "+")
  alert(nb1 + nb2);
else if (oper === "-")
  alert(nb1 - nb2);
else if (oper === "*")
  alert(nb1 * nb2);
else if (oper === "/" && nb2 != 0)
  alert(nb1 / nb2);
else
  alert("Erreur");

// Egalité : Utilisation de Switch et break(sans == if ... if...)
switch (oper)
{
  case "-":
    alert(nb1 - nb2)
    break;
  case "+":
    alert(nb1 + nb2)
    break;
  case "*":
    alert(nb1 * nb2)
    break;
  case "/":
    if(nb2 !== 0)
    {
      alert(nb1 / nb2)
      break;
    }
  default:
    alert('Erreur')
    break;
}
