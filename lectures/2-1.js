// declare global variables first
//let circlex = 0;
//let circley = 400;
//let diameter = 100
//let speed = 5;

// declare object as a variables
let circle = {
  x:0, //use commas to separate
  y:400,
  diameter:100,
  speed:5 //no need for comma after last value
}; //semicolon to end values

function setup() {
createCanvas(windowWidth,windowHeight);
}

function draw() {
background(50,50,100);
noStroke();
fill(200,200,0);

// example of global variable
//ellipse(circlex,circley,diameter,diameter);
//circlex=circlex + speed;
//circlex+=speed;
//circlex++;

// example of object variable
ellipse(circle.x, circle.y, circle.diameter);
circle.x = circle.x + circle.speed;

}
