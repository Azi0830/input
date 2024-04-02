// var Delete = (index) => {
//   document.getElementById(`card${index}`).remove();
// };

// var con = document.getElementById("con");

// var url = "https://cute-jade-binturong-boot.cyclic.app/api";

// var gul = async () => {
//   var response = await fetch(
//     `${url}/flower/category/house-plants?access_token=64bebc1e2c6d3f056a8c85b7`
//   );
//   var fidata = await response.json();
//   var data = await fidata;

//   data.data.map((value, index) => {
//     console.log(value);
//     con.innerHTML += `<div class="gul" id="card${index}">
// <h1>${value.title}</h1>
// <img src="${value.main_image}"/>
// <p>${value.description}</p>
// <button onclick="Delete(${index})">Delete</button>
//     </div>`;
//   });
// };
// gul();
///////////
function shakl() {
  var shakl = document.getElementById("shakl").value;
  var color = document.getElementById("color").value;
  var width = document.getElementById("width").value;
  var height = document.getElementById("height").value;

  var bushDiv = document.getElementById("bushDiv");

  var shaklHTML = "";

  if (!shakl) {
    shakl = "kvadrat";
  }
  switch (shakl) {
    case "round":
      shaklHTML =
        "<div class='shakl' style='width:" +
        width +
        "px; height: " +
        height +
        "px; background-color: " +
        color +
        "; border-radius: 50%;' ></div>";
      break;
    default:
      shaklHTML =
        "<div class='shakl' style='width:" +
        width +
        "px; height: " +
        height +
        "px; background-color: " +
        color +
        ";'></div>";
      break;
  }
  bushDiv.innerHTML = shaklHTML;
}
