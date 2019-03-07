// event handlers
let x = 0;
let speed = 3;

function setup() {
  createCanvas(400,400);
  fill(240,0,100);
}

function draw() {
  background(30);
  if (x >= width || x < 0) {
    speed = -speed; //same as speed*-1
  }
  ellipse(x,height/2,50,50);
  x = x+speed;

//  console.log(x);
}
