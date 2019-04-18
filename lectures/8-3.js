// DOM manipulating the js

let redSlider, greenSlider, blueSlider;
let redValue, greenValue, blueValue;

function setup() {
createCanvas(400,400);
noStroke();

// create 3 slider elements
  redSlider = createSlider(0,255,128,1);
  greenSlider = createSlider(0,255,128,1);
  blueSlider = createSlider(0,255,128,1);

  redSlider.size(250);
  
// create 3 paragraph slots
  redValue = createP();
  greenValue = createP();
  blueValue = createP();
}

function draw() {
  fill(redSlider.value(),greenSlider.value(),blueSlider.value());
  ellipse(width/2,height/2,200);

  //change values of paragraphs based on slider values
  redValue.html('The red value is ' + redSlider.value());
  greenValue.html('The green value is ' + greenSlider.value());
  blueValue.html('The blue value is ' + blueSlider.value());
}
