// polar coordinates with sprial and noise
let radius, radiusNoise, centerX, centerY;
let lastX, lastY;

function setup() {
  createCanvas(600,600);
  radius = 10;
  centerX = width/2;
  centerY = height/2;
  lastX = -999;
  lastY = -999;
  radiusNoise = random(10);
  background(50);
}

function draw() {
  fill(255);
  stroke(255);
  for (let ang = 0; ang <= 1440; ang += 5) { //goes around 4 times
    let rad = radians(ang);

    let thisRadius = radius + (noise(radiusNoise)*200-100);

  x = centerX + (thisRadius * cos(rad));
  y = centerY + (thisRadius * sin(rad));

  if (lastX != -999) {
    line(x,y,lastX,lastY);
  }
    lastX = x;
    lastY = y;

    radius += 0.3; // creates spiral
    radiusNoise += 0.05;
}
}
