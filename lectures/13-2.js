// audio input()

let mic;

function preload() {
  lele = loadImage('13-2.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();
  mic.amp(1);

  ellipseMode(CENTER);

}

function draw() {
  background(0);
  image (lele,windowWidth/2-280, windowHeight/2-250, 560,500);
  fill(0);
  let micLevel = mic.getLevel();
  let ellipseWidth = map(micLevel,0,0.05,0,height);
  ellipse(width/2-20, height/2+40, 60, ellipseWidth);
}
