// N premiers multiples de X
var i = 0;
var n = parseInt(prompt("Nombre de multiples :"));
var x = parseInt(prompt("Pour le nombre entier :"));

while(++i <= n)
      alert(`${i} x ${x} = ${i * x}`);
