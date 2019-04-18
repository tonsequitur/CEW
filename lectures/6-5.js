// constructor functions from book example

let bug,bug2;

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(200);
    bug = new JitterBug(width/2, height/2, 20);
    bug2 = new JitterBug(200,200,100);
  }

function draw() {
    bug.move();
    bug.display();
    bug2.move();
    bug2.display();
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
