let angle1 = 0;
let angle2 = 0;
let angle1speed, angle2speed;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
background(40,21,32);

push();
  //set origin
  translate(width/3,height/2);
  //circle background
  fill(0);
  noStroke();
  ellipse(0,0,150,150);
  //rotate left propeller on center axis
  fill(255);
  stroke(255);
  strokeWeight(30);
  strokeJoin(ROUND);
  rotate(radians(-angle1));
  rect(-15,-100,30,200);
pop();

push();
  //set origin again
  translate(width/1.5,height/2);
  //circle background
  fill(0);
  noStroke();
  ellipse(0,0,150,150);
  //rotate right propeller on center axis
  fill(255);
  stroke(255);
  strokeWeight(30);
  strokeJoin(ROUND);
  rotate(radians(angle2));
  rect(-15,-100,30,200);
pop();

//map position of mouse for speed
angle1speed = map(mouseX,0,windowWidth,0,20);
angle2speed = map(mouseY,0,windowHeight,0,20);

//speed based on mouse x location
angle1 += angle1speed;

//speed based on mouse y location
angle2 += angle2speed;

//if (keyIsPressed) {
//    if ((keyCode == LEFT_ARROW)) {
//       angle1speed = 0;
//    }
//    if ((keyCode == RIGHT_ARROW)) {
//      angle2 = 0;
//    }
//  }

fill(100,87,100);
text('Left Propeller SLOW',width/12,height/2);
text('Left Propeller FAST',width/1.2,height/2);
text('Right Propeller SLOW',width/2.2,height/10);
text('Right Propeller FAST',width/2.2,height/1.2);
}
