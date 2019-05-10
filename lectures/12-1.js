// web camera input

let videocam;

function setup() {
  createCanvas(640,480);
  videocam = createCapture(VIDEO);
  // videocam.size(550,300);
  // videocam.volume(0);
  ellipseMode(CENTER);
  noStroke();
}

function draw() {
  background(200);
  videocam.loadPixels();

  let stepSize = round(map(mouseX,0, windowWidth,10,80));

  for (let y = 0; y < height; y+= stepSize) {
    for (let x = 0; x < width; x+= stepSize) {
      let i = (y * width + x) *4;
      // let pixelBrightness = (videocam.pixels[i] + videocam.pixels[i+1] + videocam.pixels[i+2]);
      let darkness = (255-videocam.pixels[i]) / 255;
      let radius = stepSize * darkness;
      fill(videocam.pixels[i], videocam.pixels[i+1], videocam.pixels[i+2]);
      ellipse(x,y,radius,radius);
    }
  }
}
