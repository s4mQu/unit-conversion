// Elements
const inputBox = document.getElementById("in-box");
const lengthOutput = document.getElementById("meter-feet");
const volumeOutput = document.getElementById("liter-gallon");
const massOutput = document.getElementById("kilo-pounds");
const convBtn = document.getElementById("conv-btn");

const value2 = {
  foot: 3.281,
  gallon: 0.264,
  pound: 2.204,
};

let value1 = inputBox.value;
// BUTTON CLICK
convBtn.addEventListener("click", function () {
  value1 = inputBox.value;
  calculate();
});

// maths functions
function times(a, b) {
  return Number(a * b).toFixed(2);
}
function divide(a, b) {
  return Number(a / b).toFixed(2);
}

function calculate() {
  lengthOutput.innerHTML = `<p class="meter-feet" id="meter-feet">${value1} meters = ${times(
    value1,
    value2.foot
  )} feet | ${value1} feet = ${divide(value1, value2.foot)} meters
  </p>`;
  volumeOutput.innerHTML = `<p class="liter-gallon" id="liter-gallon">${value1} liters = ${times(
    value1,
    value2.gallon
  )} gallons | ${value1} gallons = ${divide(value1, value2.gallon)} liters
</p>`;
  massOutput.innerHTML = `<p class="kilo-pounds" id="kilo-pounds">${value1} kilos = ${times(
    value1,
    value2.pound
  )} | ${value1} pounds = ${divide(value1, value2.pound)} kilos
</p>`;
}
