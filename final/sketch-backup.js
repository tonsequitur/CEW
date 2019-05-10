// Maureen Ton, 2019
// Final: Viz a Vis: A Fermi Visualizer
// calculations based on 5.5" iphone as analyized here: https://www.leozqin.me/how-many-miles-will-you-scroll/?unapproved=1683&moderation-hash=6ac3794571f794f126531a68bff5ea72#comment-1683


let title, slider;
let phoneTime, phoneDist, barHeight;
let gridHeight, numLines;
let sliderMax = 240;
let sliderMin = 0;
let everestW;
let circleDiam = 400;

function preload() {
  logo = loadImage('images/logo.png');
  tower = loadImage('images/tradetower.png');
  everest = loadImage('images/everest.png');
}

function setup() {
  let canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0); //puts at window xy
  canvas.style("z-index", "-1"); //puts canvas back

  //header text
  // title = createP('VIZ &#224; vis: A Fermi Visualizer');
  // title.position(20,20);
  // title.style('color', '#c2e0f9');
  // title.style('font-family', 'helvetica');
  // title.style('font-size', '20px');
  // title.style('line-height', '90px');


  slider = createSlider(sliderMin,sliderMax,sliderMin);
  slider.parent("#sliderHolder");
}

function draw() {

  background(55);
  fill(255);

  phoneTime = slider.value();
  phoneDist = round(phoneTime*400/12.75*1.5/30*4.42/12*365);
  //feet per year calculated as minutes x skimming speed words per minute divided by words per line x 1.5 for graphics divided by lines per screen x screeb size in inches converted into feet x 365 days
  barHeight = map(phoneDist,0,50000,0,gridHeight);
  gridHeight = windowHeight;
  numLines = 10;
  everestW = windowWidth*1.5;

  fill(30);
  noStroke();
  rect(0,windowHeight-barHeight,windowWidth,barHeight);

  // LOGO ABOVE THE BARGRAPH
  image(logo, 40, 30, 200 ,80);

  stroke(0);
  line(0,windowHeight-gridHeight/numLines, windowWidth, windowHeight-gridHeight/numLines);
  line(0,windowHeight-gridHeight/numLines*2, windowWidth, windowHeight-gridHeight/numLines*2);
  line(0,windowHeight-gridHeight/numLines*3, windowWidth, windowHeight-gridHeight/numLines*3);
  line(0,windowHeight-gridHeight/numLines*4, windowWidth, windowHeight-gridHeight/numLines*4);
  line(0,windowHeight-gridHeight/numLines*5, windowWidth, windowHeight-gridHeight/numLines*5);
  line(0,windowHeight-gridHeight/numLines*6, windowWidth, windowHeight-gridHeight/numLines*6);
  line(0,windowHeight-gridHeight/numLines*7, windowWidth, windowHeight-gridHeight/numLines*7);

  fill(100);
  textSize(13);
  textAlign(LEFT, BOTTOM);
  text('5000 feet',20,windowHeight-gridHeight/numLines);
  text('10000 feet',20,windowHeight-gridHeight/numLines*2);
  text('15000 feet',20,windowHeight-gridHeight/numLines*3);
  text('20000 feet',20,windowHeight-gridHeight/numLines*4);
  text('25000 feet',20,windowHeight-gridHeight/numLines*5);
  text('30000 feet',20,windowHeight-gridHeight/numLines*6);
  text('35000 feet',20,windowHeight-gridHeight/numLines*7);

  mouseClicked();

  // NUMBER FOR SLIDER
  fill(255);
  textSize(16);
  textAlign(LEFT, BOTTOM);
  text(slider.value()+' min/day',180,300);

  //NUMBER IN FEET
  fill(100);
  noStroke();
  ellipse(windowWidth-circleDiam/4,circleDiam/4,circleDiam);
  fill(255);
  textSize(30);
  textAlign(CENTER, CENTER);
  text(phoneDist + "'",windowWidth-circleDiam/3,circleDiam/3);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {


  if (phoneDist >= 1776) {
    image(tower, windowWidth/2, windowHeight-gridHeight/numLines+65, 15, gridHeight/numLines-65);
    textAlign(RIGHT, BOTTOM);
    text("One World Trade Tower", windowWidth-20, windowHeight-20);
  }

  if (phoneDist >= 29000) {
    image(everest, windowWidth/10, windowHeight-gridHeight/numLines*6+20, everestW, gridHeight/numLines*6-20);
    textAlign(RIGHT, BOTTOM);
    text("Mount Everest", windowWidth-20, windowHeight-20);
  }
}
