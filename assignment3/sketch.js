// Maureen Ton, 2019
// Assignment 3: DOM
// XX create an element BESIDES a canvas element using P5 – whether using an “element-specific” function such as createP(), createDiv(), createImg() or similar – or using the generic createElement() function.
// XX position() an element on the page using P5
// XX use html() to either retrieve the content of a DOM element for use in your P5 sketch or to modify the content of an element on the page
// XX use value() to either retrieve the value of an element for use in your P5 sketch or to assign a new value to an element in the DOM
// XX style() a DOM element with CSS from within P5
// XX make use of parent() or child() to reorganize elements on the page
// XX AND make use of at least one element-specific event handler and callback function: e.g, “myElement.mousePressed(myFunction);” or “myElement.mousePressed(function() {//do stuff });” (see video 8.4)
// XX AND canvas must be featured as a full-screen P5 sketch running as a background canvas behind your web page elements

let title, slider, button;
let circleScale;
let sliderMax = 60;
let sliderMin = 5;
let angle1 = 0;
let angle2 = 0;
let angle3 = 0;
let angle4 = 0;
let angle5 = 0;
let angle6 = 0;
let angle7 = 0;
let angle8 = 0;
let angle9 = 0;
let angle10 = 0;
let sun, mercury, venus, earth, mars, jupiter, saturn, neptune, uranus, pluto;

function setup() {
  let canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0); //puts at window xy
  canvas.style("z-index", "-1"); //puts canvas back

  title = createP('Our Solar System');
  title.position(20,20);
  title.style('color', '#ffffff');
  title.style('font-family', 'helvetica');
  title.style('font-size', '30px');
  title.style('line-height', '90px');

  slider = createSlider(sliderMin,sliderMax,sliderMax/2);
  slider.parent("#sliderHolder");

  button = createButton("Click to reset");
  button.parent("#buttonHolder");
  button.mousePressed(resetSlider);

  circleScale = slider.value();

  rectMode(CENTER);
  ellipseMode(CENTER);
}

function preload() {
  sun = loadImage('images/orange.png');
  mercury = loadImage('images/mercury.png');
  earth = loadImage('images/earth.png');
  venus = loadImage('images/venus.png');
  mars = loadImage('images/mars.png');
  jupiter = loadImage('images/jupiter.png');
  saturn = loadImage('images/saturn.png');
  uranus = loadImage('images/uranus.png');
  neptune = loadImage('images/neptune.png');
  pluto = loadImage('images/pluto.png');
}

function draw() {
  background(77,200,200);
  translate (windowWidth/2, windowHeight/3); //center object group
  scale(slider.value()*.05); //scale object group
  stroke(255);
  noFill();
  ellipse(0,0,2850);
  ellipse(0,0,3500);
  fill(255);
  textSize(60);
  text('Solar System', 1000,0);
  textSize(65);
  text('Galaxy', 1500,0);
  textSize(70);
  text('Universe', 1800,0);
  solar();
  planet1();
  planet2();
  planet3();
  planet4();
  planet5();
  planet6();
  planet7();
  planet8();
  dwarf();
  angle1+=5;
}

function solar() {
push();
  noStroke();
  image(sun, -50, -50, 100, 100);
  pop();
}

function planet1() {
rotate(radians(-angle2));
  push();
    translate (80, 0);
    rotate(radians(-angle1));
    image(mercury, -15, -15, 30, 30);
  pop();
  angle2+=.2;
}

function planet2() {
rotate(radians(-angle3));
  push();
    translate (-120, -50);
    rotate(radians(angle1));
    image(venus, -30, -30, 60, 60);
  pop();
  angle3+=.5;
}

function planet3() {
rotate(radians(-angle4));
  push();
    translate (0, -200);
    rotate(radians(-angle1));
    image(earth, -25, -25, 50, 50);
  pop();
  angle4+=.7;
}

function planet4() {
rotate(radians(-angle5));
  push();
    translate (0, 260);
    rotate(radians(-angle1));
    image(mars, -20, -20, 40, 40);
  pop();
  angle5+=1;
}

function planet5() {
rotate(radians(-angle6));
  push();
    translate (0, 330);
    rotate(radians(-angle1));
    image(jupiter, -40, -40, 80, 80);
  pop();
  angle6+=-1.1;
}

function planet6() {
rotate(radians(-angle7));
  push();
    translate (0, 520);
    rotate(radians(-angle1));
    image(saturn, -50, -50, 100, 100);
  pop();
  angle7+=.5;
}

function planet7() {
rotate(radians(-angle8));
  push();
    translate (0, 700);
    rotate(radians(angle1));
    image(uranus, -30, -30, 60, 60);
  pop();
  angle8+=.7;
}

function planet8() {
rotate(radians(-angle9));
  push();
    translate (0, 800);
    rotate(radians(-angle1));
    image(neptune, -15, -15, 30, 30);
  pop();
  angle9+=.01;
}

function dwarf() {
rotate(radians(angle10));
  push();
    translate (0, 950);
    rotate(radians(-angle1));
    image(pluto, -10, -10, 20, 20);
  pop();
  angle10+=.1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // background(77,200,200);
}

function resetSlider() {
  slider.value(sliderMax/2);
}
