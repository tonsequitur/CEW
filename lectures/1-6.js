//declare a new variable to be used for the x position of the ellipse
let xPos = 200;

function setup() {
  createCanvas(800,600);
  background(150);
}

function draw() {
  fill(255,255,255,5);
  ellipse(xPos,300,150,150);
  //move the x position 1 pixel each time the sketch loop
  xPos = xPos + 1;
}
