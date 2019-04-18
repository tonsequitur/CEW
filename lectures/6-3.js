// Constructor Functions

let walker1, walker2;

function setup() {
    createCanvas(windowWidth,windowHeight);
    walker1 = new Walker();
    walker2 = new Walker();
  }

function draw() {
    background(183,215,216);
    //move walker around screen
    walker1.move();
    walker1.display();
    walker2.move();
    walker2.display();

    if (walker1.touching(walker2)) {
      walker1.changeColor();
      walker2.changeColor();
    }
  }
