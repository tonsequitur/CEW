// array splicing - takes out indices in the array

let walkers = [];

function setup() {
    createCanvas(windowWidth,windowHeight);
  }

function draw() {
    background(200);

    for (let i = 0; i < walkers.length; i++) {
      //move walkers round
      walkers[i].move();
      walkers[i].display();
    }
    if (walkers.length > 50) {
      walkers.splice(0,1);
    }
  }
function mouseDragged() {
  walkers.push(new Walker(mouseX,mouseY));
}
