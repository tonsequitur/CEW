// Constructor Functions

function Walker() {
  //properties of the object
  this.x = width/2;
  this.y = height/2;

  //holder color default
  this.myColor = color(255);

  //divide circleSize in half for radius
  this.circleSize = 20;
  this.radius = this.circleSize/2;
  this.circleSpeed = 1;

  //methods of the object
  this.display = function() {
    fill(this.myColor);
    ellipse(this.x, this.y, this.circleSize);
  }
  this.move = function() {
    this.x += round(random(-this.circleSpeed, this.circleSpeed));
    this.y += round(random(-this.circleSpeed, this.circleSpeed));
    this.x = constrain(this.x,0,width);
    this.y = constrain(this.y,0,height);
  }
  //randomly change color of object
  this.changeColor = function() {
    this.myColor = color(random(255),random(255),random(255));
  }
  //make object aware of it's relative position
  this.touching = function(_other) {
    let d = dist(this.x,this.y,_other.x,_other.y);
    //if distance is less than the two radii combined, then they're touching
    if (d < this.radius + _other.radius) {
      return true;
    } else {
      return false;
    }
  }
}
