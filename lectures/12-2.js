// web camera input

let x=0;
let myVideo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myVideo = createCapture(VIDEO);
  background(51);
  myVideo.hide();
}

function draw() {
  myVideo.loadPixels();
  let videoColumn = myVideo.width/2;
  copy(myVideo, videoColumn, 0, 1, myVideo.height, x, 0, 1, height);
  if (x < width) {
    x++;
  } else {
    x = 0;
  }
}
