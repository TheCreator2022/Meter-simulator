var meter = new Decimal(0)
var mpc = new Decimal(1)

function UpdateGameArea() {
  document.getElementById("meter").innerText = meter
  document.getElementById("background").style.backgroundColor = "rgb(49, 49, 49)"
}

setInterval(UpdateGameArea, 40)
