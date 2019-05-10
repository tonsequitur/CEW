// Maureen Ton, 2019
// Final: Viz a Vis: A Fermi Visualizer
// calculations based on 5.5" iphone as analyized here: https://www.leozqin.me/how-many-miles-will-you-scroll/?unapproved=1683&moderation-hash=6ac3794571f794f126531a68bff5ea72#comment-1683
// some comparisons from https://www.bluebulbprojects.com/measureofthings/

let title, slider;
let phoneTime, phoneHr, phoneMin, phoneDist, barHeight;
let gridHeight, numLines;
let sliderMax = 420;
let sliderMin = 0;
let circleDiam = 400;
let sliderText;

function preload() {
  hand = loadImage('images/hand.png');
  logo = loadImage('images/logo.png');
  tower = loadImage('images/tradetower.png');
  runner = loadImage('images/runner.png');
  eiffel = loadImage('images/eiffel.png');
  everest = loadImage('images/everest.png');
  marianas = loadImage('images/marianas.png');
  airplane = loadImage('images/airplane.png');
  nile = loadImage('images/nile2.png');
  maunaloa = loadImage('images/maunaloa.png');
  manhattan = loadImage('images/manhattan.png');
  neon = loadImage('images/neon2.png');
  olympusmons = loadImage('images/olympus.png');
}

function setup() {
  let canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0); //puts at window xy
  canvas.style("z-index", "-1"); //puts canvas back

  //DOM slider and text
  slider = createSlider(sliderMin,sliderMax,sliderMin);
  slider.parent("#sliderHolder");
  sliderText = createP('');
  sliderText.style('color',255);
  sliderText.parent("#sliderHolderText");

}

function draw() {
  background(55);
  fill(255);

  // Format slider as HH:MM
  phoneTime = slider.value();

  if (phoneTime >=60) {
    phoneHr = floor(phoneTime/60);
  } else {
    phoneHr = 0;
  }
  phoneMin = round(phoneTime-(phoneHr*60));

  // Calculate distance for 5.5" screen
  //minutes x skimming speed wpm / words per line x 1.5 for graphics / lines per screen x screen size in inches converted into feet x 365 days
  phoneDist = round(phoneTime*400/12.75*1.5/30*4.42/12*365);
  barHeight = map(phoneTime,sliderMin,sliderMax,0,gridHeight);
  gridHeight = windowHeight;
  numLines = 17.7;

  // BACKGROUND BARHEIGHT
  fill(30);
  noStroke();
  rect(0,windowHeight-barHeight,windowWidth,barHeight);

  // DRAW VISUALS
  if (phoneDist > 1) {
    Graph();
    Viz();
    Distance();
  }

  // TIME TEXT FOR SLIDER
  sliderText.html(nf(phoneHr,2)+'Hr, '+nf(phoneMin,2)+'Min');

  // PROJECT LOGO
  image(logo, 40, 30, 130 ,55);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Graph() {
  // GRAPH ROWS
  for (let i = 0; i < 13; i++) {
  stroke(0);
  line(0,windowHeight-gridHeight/numLines*i, windowWidth, windowHeight-gridHeight/numLines*i);
  }

  // GRAPH ROW LABELS
  noStroke();
  fill(90);
  textSize(13);
  textAlign(LEFT, BOTTOM);
  text('5000 feet',20,windowHeight-gridHeight/numLines*1);
  text('10000 feet',20,windowHeight-gridHeight/numLines*2);
  text('15000 feet',20,windowHeight-gridHeight/numLines*3);
  text('20000 feet',20,windowHeight-gridHeight/numLines*4);
  text('25000 feet',20,windowHeight-gridHeight/numLines*5);
  text('30000 feet',20,windowHeight-gridHeight/numLines*6);
  text('35000 feet',20,windowHeight-gridHeight/numLines*7);
  text('40000 feet',20,windowHeight-gridHeight/numLines*8);
  text('45000 feet',20,windowHeight-gridHeight/numLines*9);
  text('50000 feet',20,windowHeight-gridHeight/numLines*10);
  text('55000 feet',20,windowHeight-gridHeight/numLines*11);
  text('60000 feet',20,windowHeight-gridHeight/numLines*12);
}

function Distance() {
    //HAND ICON
    image(hand,windowWidth-circleDiam/2.8+30,circleDiam/5,220,200);

    // NUMBER IN FEET
    fill(100,100,100,25);
    noStroke();
    ellipse(windowWidth-circleDiam/4,circleDiam/4,circleDiam);
    fill(255);
    textSize(28);
    textAlign(CENTER, CENTER);
    text(phoneDist + "'",windowWidth-circleDiam/3,circleDiam/3);
    textSize(18);
    text("Scrolling Distance / Year",windowWidth-circleDiam/3,circleDiam/3+30);
  }

function Viz() {
  noStroke();
  fill(255);

  // VISUALS
  textSize(33);
  if (phoneDist >= 1700 && phoneDist <= 9999) {
    image(tower, windowWidth/2, windowHeight-gridHeight/numLines+55, windowWidth/100, gridHeight/numLines-55);
    textAlign(RIGHT, BOTTOM);
    text("One World Trade Tower", windowWidth-20, windowHeight-20);
  }
  if (phoneDist >= 10000 && phoneDist <= 16399) {
    image(eiffel, windowWidth/2, windowHeight-gridHeight/numLines*2, windowWidth/90, gridHeight/numLines*2);
    textAlign(RIGHT, BOTTOM);
    text("10 Eiffel Towers", windowWidth-20, windowHeight-20);
  }
  if (phoneDist >= 16400 && phoneDist <= 28999) {
    image(runner, windowWidth-900, windowHeight-gridHeight/numLines*3-100, 900, windowHeight-gridHeight/numLines*3-100);
    textAlign(RIGHT, BOTTOM);
    text("5K Race", windowWidth-20, windowHeight-20);
  }
  if (phoneDist >= 29000 && phoneDist <= 35599) {
    image(everest, 0, windowHeight-gridHeight/numLines*6+20, windowWidth, gridHeight/numLines*6-20);
    textAlign(RIGHT, BOTTOM);
    text("Mount Everest", windowWidth-20, windowHeight-20);
  }
  if (phoneDist >= 35600 && phoneDist <= 37999) {
    image(marianas, 0, windowHeight-gridHeight/numLines*7-20, windowWidth, gridHeight/numLines*7+20);
    textAlign(RIGHT, BOTTOM);
    text("The Challenger Deep (Marianas Trench)", windowWidth-20, windowHeight-20);
  }
  if (phoneDist >= 38000 && phoneDist <= 49999) {
    image(airplane, windowWidth/1.5, windowHeight-gridHeight/numLines*8, 100, 30);
    textAlign(RIGHT, BOTTOM);
    text("Cruising Altitude", windowWidth-20, windowHeight-20);
  }
  if (phoneDist >= 50000 && phoneDist <= 59999) {
    image(nile, 0, windowHeight-gridHeight/numLines*10, windowWidth, gridHeight/numLines*10);
    textAlign(RIGHT, BOTTOM);
    text("2x Width of the Nile (at Edfu)", windowWidth-20, windowHeight-20);
  }
  if (phoneDist >= 60000 && phoneDist <= 69999) {
    image(maunaloa, 0, windowHeight-gridHeight/numLines*12, windowWidth, gridHeight/numLines*12);
    textAlign(RIGHT, BOTTOM);
    text("2x Height of Mauna Loa", windowWidth-20, windowHeight-20);
  }
  if (phoneDist >= 70000 && phoneDist <= 78999) {
    image(manhattan, windowWidth/2, windowHeight-gridHeight/numLines*14, windowHeight/4, gridHeight/numLines*14);
    textAlign(RIGHT, BOTTOM);
    text("Length of Manhattan", windowWidth-20, windowHeight-20);
  }
  if (phoneDist >= 79000 && phoneDist <= 87999) {
    image(neon, 0, windowHeight-gridHeight/numLines*17+60, windowWidth, windowHeight);
    textAlign(RIGHT, BOTTOM);
    text("1/1000th Length of Neon Tubing in Las Vegas", windowWidth-20, windowHeight-20);
  }
  if (phoneDist >= 88000) {
    image(olympusmons, 0, 0, windowWidth, windowHeight);
    textAlign(RIGHT, BOTTOM);
    text("Olympus Mons (Highest mountain in the Solar System)", windowWidth-20, windowHeight-20);
  }
}
