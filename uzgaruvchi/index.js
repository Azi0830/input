// function transfer() {
//   var input = document.getElementById("input1").value;
//   var input2 = document.getElementById("input2").value;

//   bushDiv.innerHTML = `birinchi uzgaruvchi ${input} === ikkinchi uzgaruvchi ${input2} `;
// }

function transfer() {
  var input = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;

  // input1 ning qiymatini input2ga, va input2 ning qiymatini input1ga joyini almashtiramiz
  document.getElementById("input1").value = input2;
  document.getElementById("input2").value = input;
}
