function    testcode()
{
    var filtre = /[0-9]{5}/;
    var CP = document.getElementById("code").value;
    var result = filtre.test(CP);
    if(!filtre.test(CP))
        alert("Rensiegner un code postal valide (exemple : 75000)");
    filtre.lastIndex;
}
function    testmail()
{
    var filtre = /[@]{1}/;
    var mail = document.getElementById("email").value;
    var result = filtre.test(mail);
    if(!filtre.test(mail))
        alert("Email non valide, comprenant au moins '@'");
    filtre.lastIndex;
}
function    ad()
{
    var ch = document.getElementById("selection").value;

    if (ch != "choix")
        document.getElementById("arEa").innerHTML = ch;
}
