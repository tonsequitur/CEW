// DOM manipulating the js

let myButton;

function setup() {
  createCanvas(400,400);
  noStroke();
  fill(128);

  myButton =  createButton("Click me to change color");
  myButton.mousePressed(
    function() {
    fill(random(255),random(255),random(255));
  }) //put function name myButton.mousePressed(changeColor);
  //OR embed anonymous function
}

function draw() {
  ellipse(width/2,height/2,200);
}

// function changeColor() {
//   fill(random(255),random(255),random(255));
// }
