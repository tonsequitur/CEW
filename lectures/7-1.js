// pushing objects into array

let walkers = [];
// let numWalkers = 5;

function setup() {
    createCanvas(windowWidth,windowHeight);
    //create array of many walker objects
    // for (let i = 0; i < numWalkers; i++) {
    //   // walkers[i] = new Walker();
    //   // OR alternatively say:
    //   walkers.push(new Walker());
    // }
  }

function draw() {
    background(200);

    for (let i = 0; i < walkers.length; i++) {
      //move walkers round
      walkers[i].move();
      walkers[i].display();
    }
  }

function mousePressed() {
  walkers.push(new Walker(mouseX,mouseY));
}
