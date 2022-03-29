document.getElementById("calculate").onclick = function () {
  var vize = document.getElementById("vize").value;
  var final = document.getElementById("final").value;
  var not = vize * 0.4 + final * 0.6;
  document.getElementById("not").innerHTML = not;

  if (not < 30) {
    document.getElementById("result").innerHTML = "Kaldiniz";
  } else if (not >= 30 && not <= 49) {
    document.getElementById("result").innerHTML = "Gectiniz. Eh iste";
  } else if (not >= 50 && not <= 79) {
    document.getElementById("result").innerHTML = "Gectiniz. Iyi";
  } else if (not >= 80 && not <= 100) {
    document.getElementById("result").innerHTML = "Bravo";
  }
};
