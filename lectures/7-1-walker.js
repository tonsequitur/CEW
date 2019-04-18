// functions

function Walker(_x,_y) {
  //attributes of walker object
  this.x = _x; //or hard code teh x value here instead of parsing
  this.y = _y;
  this.circleSize = 30;
  this.circleSpeed = 1;

  //methods of walker Object
  this.move = function() {
    //each frame, randomly move object around x/y
    // anywhere between - and + circlespeeds
    this.x += round(random(-this.circleSpeed, this.circleSpeed));
    this.y += round(random(-this.circleSpeed, this.circleSpeed));

    // constrain limits range of the variable
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }, //comma between methods

  this.display = function() {
    // draw circles
    ellipse(this.x, this.y, this.circleSize, this.circleSize);
  }
}
