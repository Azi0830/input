function transfer() {
  var input = document.getElementById("input").value;
  var sum = 1500;
  var bushDiv = document.getElementById("bushDiv");

  var natija = sum * input;

  bushDiv.innerHTML = `siznish ${input}$ pulingiz ${natija} sumni tashkil qiladi `;
}
