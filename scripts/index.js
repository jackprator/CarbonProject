const miles = document.querySelector("#question1");
const vehicle = document.querySelector("#question2");
const meat = document.querySelector("#question3");

document.body.addEventListener('input', getResult);

function getResult() {
  let vMiles = parseFloat(miles.value);
  let vVehicle = parseFloat(vehicle.value);
  let vMeat = parseFloat(meat.value) * 100;


  let vResult = parseFloat(vMiles) + parseFloat(vVehicle) + parseFloat(vMeat);

  var x = document.getElementById("goodDiv");
  var y = document.getElementById("badDiv");
  var z = document.getElementById("neutralDiv");
  z.style.display = "none";
  y.style.display = "none";
  x.style.display = "none";
  if (vResult <= 500) {
    x.style.display = "block";
  } else if (vResult >= 751){
    y.style.display = "block";
  } else if (vResult >= 501 && vResult <= 750){
    z.style.display = "block";
  }
}

// hide/show navbar divs
function clickMiles() {
  var x = document.getElementById("milesDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function clickVehicle() {
  var x = document.getElementById("vehicleDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function clickMeat() {
  var x = document.getElementById("meatDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
