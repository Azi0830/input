function transfer() {
  var min = document.getElementById("min").value;
  var km = document.getElementById("km").value;

  var bushDiv = document.getElementById("bushDiv");

  var natija = km / min;

  bushDiv.innerHTML = `sizning masofangiz ${km}km  vaqtingiz ${min}min tezligingiz${natija} m/s`;
}
