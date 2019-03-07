// Constructor Functions
//DRY - don't repeat yourself
let house1, house2, house3;

function setup() {
    createCanvas(700,400);

    house1 = new House(0,200); //new instance of object
    house2 = new House(120,200);
    house3 = new House(300,200);
  }

function draw() {
    background(100,100,20);
    fill(100);
    rect(0,300,700,100);

    house1.move();
    house1.display();
    house2.move();
    house2.display();
    house3.move();
    house3.display();
  }

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
