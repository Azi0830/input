function transfer() {
  var input = parseFloat(document.getElementById("input1").value);
  var input2 = parseFloat(document.getElementById("input2").value);

  var qiymat = (input + input2) / 2;

  var bushDiv = document.getElementById("bushDiv");

  bushDiv.innerHTML = qiymat;
}
