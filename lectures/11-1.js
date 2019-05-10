// Image Mask

let flower, imgMask;

function preload() {
  flower = loadImage("11-1.jpg");
  imgMask = loadImage("11-1.png");
}

function setup() {
  createCanvas(800,600);
  flower.mask(imgMask);
}

function draw() {
  background(100);
  // image(flower,0,0);
  // image(imgMask,0,0);
  imageMode(CENTER);
  image(flower,mouseX,mouseY);
}
