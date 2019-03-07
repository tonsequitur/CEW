// polar coordinates moves in a circle
let radius, centerX, centerY;
let lastX, lastY;

function setup() {
  createCanvas(600,600);
  radius = 100;
  centerX = width/2;
  centerY = height/2;
  lastX = -999;
  lastY = -999;
  background(50);
  strokeWeight(4);
}

function draw() {
  fill(255);
  stroke(255);
  for (let ang = 0; ang <= 360; ang += 10) {
    let myAngle = radians(ang);
  x = centerX + (radius * cos(myAngle));
  y = centerY + (radius * sin(myAngle));

  point(x,y);
  
// draw solid circle
  // if (lastX != -999) {
  //   line(x,y,lastX,lastY);
  // }
  //   lastX = x;
  //   lastY = y;
}
}
