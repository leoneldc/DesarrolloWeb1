var contenedor = document.querySelector(".contenedor");
function setup() {
  createCanvas(650, 605);
}
function draw() {
  var displayw = 550;
  var displayh = 100;
  var botonesw = 90;
  var botonesh = 90;
  var letraw = 50 + 45;
  var distanciaw = 50 + botonesw + 25;
  var distanciah = 150 + botonesh + 25;
  var distanciah2 = distanciah + botonesh + 25;
  var distanciah3 = distanciah2 + botonesh + 25;

  textSize(100);
  textAlign(CENTER, CENTER);
  background(225);
  noSmooth();
  rect(50, 25, displayw, displayh);

  rect(50, 150, botonesw, botonesh);
  text("7", letraw, 203);
  rect(50, distanciah, botonesw, botonesh);
  text("4", letraw, distanciah + 55);
  rect(50, distanciah2, botonesw, botonesh);
  text("1", letraw, distanciah2 + 55);

  letraw = distanciaw + 45;
  rect(distanciaw, 150, botonesw, botonesh);
  text("8", letraw, 203);
  rect(distanciaw, distanciah, botonesw, botonesh);
  text("5", letraw, distanciah + 55);
  rect(distanciaw, distanciah2, botonesw, botonesh);
  text("2", letraw, distanciah2 + 55);
  rect(distanciaw, distanciah3, botonesw, botonesh);
  text("0", letraw, distanciah3 + 55);

  distanciaw = distanciaw + botonesw + 25;
  letraw = distanciaw + 45;
  rect(distanciaw, 150, botonesw, botonesh);
  text("9", letraw, 203);
  rect(distanciaw, distanciah, botonesw, botonesh);
  text("6", letraw, distanciah + 55);
  rect(distanciaw, distanciah2, botonesw, botonesh);
  text("3", letraw, distanciah2 + 55);

  distanciaw = distanciaw + botonesw + 25;
  letraw = distanciaw + 45;
  textSize(40);
  rect(distanciaw, 150, botonesw, botonesh);
  text("DEL", letraw, 203);
  rect(distanciaw, distanciah, botonesw, botonesh);
  textSize(100);
  text("+", letraw, distanciah + 55);
  rect(distanciaw, distanciah2, botonesw, botonesh);
  text("*", letraw, distanciah2 + 75);
  rect(distanciaw, distanciah3, botonesw, botonesh);
  text(",", letraw, distanciah3 + 25);

  distanciaw = distanciaw + botonesw + 25;
  letraw = distanciaw + 45;
  textSize(40);
  rect(distanciaw, 150, botonesw, botonesh);
  text("AC", letraw, 200);
  rect(distanciaw, distanciah, botonesw, botonesh);
  textSize(100);
  text("-", letraw, distanciah + 50);
  rect(distanciaw, distanciah2, botonesw, botonesh);
  text("/", letraw, distanciah2 + 55);
  rect(distanciaw, distanciah3, botonesw, botonesh);
  text("=", letraw, distanciah3 + 55);
}

