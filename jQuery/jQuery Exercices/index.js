// On initialise le jQuery : on selectionne document du DOM
// et on met l'événement ready
$(document).ready(function()
{
    // exemple de selections
    // By Class
    $('.divClass');
    // By Id
    $('#divID');
    // By Type
    $('p');

    // Selection multiple
    $('.divClass, #divID, p');

    // 1er ul
    // Sélectionne les li dans ul #liste et met leur texte en rouge)
    $("#liste li").css("color", "red");

    // 2eme ul
    // Selectionne les id commençant par liste
    $("[id^='liste']");
    // Selectionne les id se terminant par liste
    $("[id$='liste']");

    // Aller chercher un attribut
    var valeur = $("#monLien").attr("href"); // == index.html

    // Element du DOM
    $("#p1").mouseover(function()
    {
        // this correspond a l'élément selectionné
        // On passe dans a le text de l'élément selectionné
        var a = $(this).text();
        alert(a);
    });

    // Applique la couleur rouge au texte de l'élément #div1
    $("#p1").mouseover(function()
    {
        $(this).css("color", "red");
    });

    // CSS APPLICATION
    $("#p1").mouseover(function()
    {
        $(this).css({
            "border" : "1px solid red",
            "font-weight" : "bold",
            "cursor" : "help"
        });
    });

    // VALEUR CSS
    $("#p1").mouseover(function()
    {
        // Valeur css du background-color : rgba(0, 0, 0, 0)
        var a = $(this).css("background-color");
        alert(a);
    });

    $("#divID").click(function()
    {
        // Hauteur element en px (52 puis 500)
        var h = $(this).height();
        // 500 : VALEUR EN PIXEL
        $(this).height(500);
        alert(h);
    });

    // TEXT
    $(".divClass").click(function()
    {
    // On récupère le texte
    var letexte = $("#p1").text();

    // On applique le texte dans para
    $("p").text(letexte);
    });

    // Modifier HTML
    $('#pID').html("coucou<br>c'est moi");
    $("#divID").wrapInner("<span></span>");
    $("#pID").insertBefore(".divClass");
    $("<span>Span ajouté avec insertAfter()</span>").insertAfter("#pID");
});
