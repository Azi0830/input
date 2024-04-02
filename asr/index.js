function transfer() {
  var yil = document.getElementById("asr").value;
  var asr = 100;
  var bushDiv = document.getElementById("bushDiv");

  var natija = Math.ceil(yil / asr);

  bushDiv.innerHTML = `bu yil ${natija}- asr`;
}
