// functions
let x = 0;
let y = 0;

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(200);
  ball(x,100);
  ball(300,y);
  x++;
  y++;
}

function ball(xPos, yPos) {
  let x = xPos;
  let y = yPos;

  fill(0);
  ellipse(x,y,100);

}
