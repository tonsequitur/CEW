// declaring random variables
// questions: can the x= and y= be set in the global area?
let x,y;
let circlesize = 20;
let circlespeed = 80;

function setup() {
createCanvas(windowWidth,windowHeight);
x = width/2;
y = height/2;
background(220);
}

function draw() {

//ellipse(random(0,width),random(0,height),50);

//draw the circle, at the center of the screen
ellipse(x,y,circlesize);

//make xy coordinates random
x += round(random(-circlespeed,circlespeed));
y += round(random(-circlespeed,circlespeed));

//constrain boundaries for random xy variable
x = constrain(x,0,width);
y = constrain(y,0,height);
}
