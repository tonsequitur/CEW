// DOM

let canvas, myPara;
let x = [-20, 20];

function setup() {
  canvas = createCanvas(240, 120);
  canvas.position(500,500);
  myPara = createP('This text is created in the p5.js file. ');
  createElement('h3','This is header 3 text from p5');
  noStroke();

}

function draw() {
  background(0);
  x[0] += 0.5;  // Increase the first element
  x[1] += 0.75;  // Increase the second element
  arc(x[0], 30, 40, 40, 0.52, 5.76);
  arc(x[1], 90, 40, 40, 0.52, 5.76);
}

function mousePressed() {
  myPara.html('The mouse has been pressed. ', true); //adding true adds this text rather than replaces
  myPara.style('color', '#ff0000');
}
