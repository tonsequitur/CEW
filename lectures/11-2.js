// Pixel setting/getting

let shield1, shield2;

function preload() {
  shield1 = loadImage("11-2.png");
}

function setup() {
  createCanvas(550,550);
  // image(shield1,0,0);

  //create a new image to hold new pixels
  shield2 = createImage(550,550);

  //load the pixel array
  shield2.loadPixels();

  //go through each row and column of source image
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      //get pixel value for that location
      let myPixel = shield1.get(x,y);
      //set that as the value for the new image, upside down
      shield2.set(width-x, height-y,myPixel);
    }
  }
  //update the pixel array
  shield2.updatePixels();

  //display the new image
  image(shield2,0,0);
}

function draw() {
}
