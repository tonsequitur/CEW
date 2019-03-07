// arrays

let index = 0;
birds = ["sparrow","cardinal","finch","plover","tern"];

function setup() {
    createCanvas(400,400);
  }

function draw() {
    background(200);
    textAlign(CENTER);
    textSize(30);
    text(birds[index], width/2, height/2);
  }

function mouseClicked() {
  index++;

  if (index == birds.length) {
    index = 0;
  }
}
