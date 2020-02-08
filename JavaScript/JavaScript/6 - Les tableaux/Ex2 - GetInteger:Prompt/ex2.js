// GET INTEGER
function    GetInteger(i)
{
    return parseInt(prompt(`Entrez le nombre ${i}`));
}
// INIT TAB
function    InitTab()
{
    var len = parseInt(prompt("Quelle est la taille du tableau ?"));
    var tab = Array(len);
    return tab;
}
// Entry table
function    SaisieTab()
{
    var tab = InitTab();
    var len = tab.length;
    var i = -1;

    while (++i != len)
        tab[i] = GetInteger(i + 1);
    return tab;
}
// Display
function    AfficheTab()
{
    var tab = SaisieTab();
    var len = tab.length;
    var i = -1;

    while (++i != len)
        alert(tab[i]);
    return tab;
}
// Search
function    RechercheTab()
{
    var tab = AfficheTab();
    var index = prompt("Vous souhaitez la valeur n :");

    alert(tab[index - 1]);
    return tab;
}
// Infos Tab
function    InfoTab()
{
    var tab = RechercheTab();
    var len = tab.length;
    var max = tab[0];
    var moy = 0;
    var i = -1;

    while (++i != len)
    {
        if (tab[i] > max)
            max = tab[i];
        moy = moy + tab[i];
    }
    moy = moy / len;
    alert(`Max : ${max}\nMoyenne : ${moy}`);
}

// Appel
InfoTab();
