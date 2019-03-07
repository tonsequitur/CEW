// setting new origin of screen with translate
// pop/push creates alternate space that don't affect rest of sketch
// questions: can translate be set for canvas?
let angle = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
background(50);

push();
  //set origin
  translate(width/2,height/2);
  //move hour hand, 1/12th speed of minute
  rotate(radians(angle/12));
  rect(-15,-85,30,100);
pop();

push();
  //set origin again
  translate(width/2,height/2);
  //move minute
  rotate(radians(angle));
  rect(-10,-190,20,200);
pop();

angle += .002;
}
