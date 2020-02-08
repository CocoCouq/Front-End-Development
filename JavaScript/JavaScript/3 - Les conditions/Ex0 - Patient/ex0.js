// N'est pas un patient
if (!confirm("Etes vous avec un patient ?"))
    alert("Reconduire l'olibrius");
else
{
    var Temp = prompt("Quelle est la température ?");
    var Tens = prompt("Quelle est la tension ?");
    var Pouls = prompt("Quel est le pouls ?");

    if(Temp > 38)
        alert("Le patient a de la fièvre.");
    if(Temp > 41 && Tens > 25)
        alert("Le patient va perdre patience.");
    if(Temp > 42 || (Tens < 25 && Pouls > 180))
        alert("Prévenir la famille");
    if(Temp > 40 || Tens >= 25)
        alert("Hospitaliser le patient.");
    if(Pouls == 0)
        alert("Appeler le Curé !!");
}
