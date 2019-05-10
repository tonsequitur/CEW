// web camera input

let videocam;

function setup() {
  createCanvas(400,300);
  background(200);
  videocam = createCapture(VIDEO);
  videocam.size(400,300);
}

function draw() {
  tint(255,0,100);
  image(videocam,0,0,400,300);
  ellipse(mouseX,mouseY,30);
}
