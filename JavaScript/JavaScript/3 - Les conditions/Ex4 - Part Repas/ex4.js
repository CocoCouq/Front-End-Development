// Calcule participation aux repas 
var nbenf;
var part;

if (confirm("Etes-vous célibataire ?"))
    part = 20;
else
    part = 25;
if (confirm("Avez-vous des enfants ?"))
{
    nbenf = parseInt(prompt("Combien ?"));
    part = part + (nbenf * 10);
}
if (confirm("Gagnez-vous moins de 1200 ?"))
    part = part + 10;
if (part > 50)
    part = 50;
alert(`Votre participation est de ${part}%`);
