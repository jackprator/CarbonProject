const miles = document.querySelector("#question1");
const vehicle = document.querySelector("#question2");
const meat = document.querySelector("#question3");
const result =  document.querySelector("#results");

document.body.addEventListener('input', getResult);

function getResult() {
  let vMiles = parseFloat(miles.value);
  let vVehicle = parseFloat(vehicle.value);
  let vMeat = parseFloat(meat.value);

  let vResult = parseFloat(vMiles) + parseFloat(vVehicle) + parseFloat(vMeat);
  result.value = vResult;
}
