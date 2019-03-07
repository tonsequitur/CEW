// polar coordinates moving dot around a radius
let x,y;
let a = 0;
let r = 100;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(10);
  translate(width/2, height/2);

  x = cos(radians(a))*r;
  y = sin(radians(a))*r;

  ellipse(x,y,40);
  a += 1;
}
