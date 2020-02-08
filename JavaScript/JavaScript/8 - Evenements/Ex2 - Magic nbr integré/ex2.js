var magic = parseInt(Math.random()*100);
function    verif()
{
  var res;
  var nb = parseInt(document.getElementById("textBox1").value);
  while (nb != magic)
  {
      if (nb < magic)
      {
          document.getElementById("label1").textContent = "Plus grand";
          getElementById("label1").reload();
          nb = parseInt(document.getElementById("textBox1").value);
      }
      else
      {
          document.getElementById("label1").textContent = "Plus petit";
          getElementById("label1").reload();
          nb = parseInt(document.getElementById("textBox1").value);
      }
  }
  alert("Trouvé !!");
}
