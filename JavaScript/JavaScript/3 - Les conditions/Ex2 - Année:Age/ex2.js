// Age et majorité
var date = prompt("Quelle est votre année de naissance ?");
var age = 2020 - date;

if(age > 17)
    alert(`Vous avez ${age} ans, vous êtes majeur.`);
else
    alert(`Vous avez ${age} ans, vous êtes mineur.`);
