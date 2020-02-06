// Nav bar -- Menu gauche

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

// Tableau popout collapsible
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });

// SELECT
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

//DATE Il faut changer les tableau des dates de la fonction materialize
Francais = {
    cancel: 'Annuler',
    clear: 'Clear',
    done:    'Ok',
    previousMonth:    '‹',
    nextMonth:    '›',
    months:    [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Decembre'
    ],
    monthsShort:    [
        'Jan',
        'Fév',
        'Mar',
        'Avr',
        'Mai',
        'Jun',
        'Jul',
        'Aut',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],

    weekdays:    [
        'Dimanche',
        'Lundi',
        'Mardi',
        'Mercredi',
        'Jeudi',
        'Vendredi',
        'Samedi'
    ],

    weekdaysShort:    [
        'Dim',
        'Lun',
        'Mar',
        'Mer',
        'Jeu',
        'Ven',
        'Sam'
    ],

    weekdaysAbbrev:    ['D', 'L', 'M', 'M', 'J', 'V', 'S']
};
// Options i18n pour changer les dates et format pour value input
var options = {
    i18n: Francais,
    format: 'dd mmmm yyyy',
};
var elem = document.querySelector('.datepicker');
var instance = M.Datepicker.init(elem, options);
