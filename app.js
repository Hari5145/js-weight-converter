document.getElementById("output").style.visibility = 'hidden';
document.getElementById("lbsInput").addEventListener('input', function (e) {
  document.getElementById("output").style.visibility = 'visible';
  let lbs = e.target.value;
  document.getElementById("gramsOutput").innerHTML = lbs * 453.59237;
  document.getElementById("KgOutput").innerHTML = lbs / 2.205;
  document.getElementById("ozOutput").innerHTML = lbs * 16;
})