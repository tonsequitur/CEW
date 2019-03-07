//start constructor function
function House(x,y) {
    this.x = x;
    this.y = y;
    this.houseWidth = 100;
    this.houseHeight = 100;

// methods of the House object
  this.display = function() {
    let r = 100;
    let g = 20;
    let b = 50;
    fill(r,g,b);
    noStroke();
    rect(this.x, this.y, this.houseWidth, this.houseHeight);
    fill(r+20,g+20,b+20);
    triangle(this.x, this.y, this.x+(this.houseWidth/2), this.y-this.houseHeight/2, this.x+this.houseWidth, this.y);
  }

  this.move = function() {
    this.x ++;
  }
} //close object
