// constructor functions from book example

let bugs = [];

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(200);
    for (let i = 0; i < 33; i++) {
      let x = random(width);
      let y = random(height);
      let r = i+2;
      bugs[i] = new JitterBug(x,y,r);
    }
  }

function draw() {
    for (let i=0; i < bugs.length; i++) {
      bugs[i].move();
      bugs[i].display();
    }
  }

function JitterBug(tempX,tempY,tempDiam) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiam;
  this.speed = 0.5;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x,this.y,this.diameter,this.diamter);
  }; // use semicolon after ea method
}
