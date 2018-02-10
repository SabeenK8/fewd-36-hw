document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick = illuminateGreen;


//change first light to red; turn all others off
function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

//change second light to yellow; turn all others off
function illuminateYellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}

//change third light to green; turn all others off
function illuminateGreen() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
}

//revert to empty
function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}

