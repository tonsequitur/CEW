// functions
  function setup() {
    createCanvas(700,400);
  }

  function draw() {
    background(100,100,20);
    fill(100);
    rect(0,300,700,100);
    house1.show(200,200,10); //draw first house
    house2.show(200,100,10); //draw second house
    house1.move(20); //move house across screen
    house2.move(10); //move house across screen
  }

  //object literal Methods
  let house1 = { //open object
    //Method Attributes
    x: 0,
    y: 200,
    houseWidth: 100,
    houseHeight: 100,

  show:function(r1,g1,b1) {
    let r = r1;
    let g = g1;
    let b = b1;
    fill(r,g,b);
    noStroke();
    rect(this.x, this.y, this.houseWidth, this.houseHeight);
    fill(r+20,g+20,b+20);
    triangle(this.x, this.y, this.x+(this.houseWidth/2), this.y-this.houseHeight/2, this.x+this.houseWidth, this.y);
  },
  move:function(speed1) {
    let speed = speed1;
    this.x += speed;
  }
} //close object

let house2 = { //open object
  //Method Attributes
  x: 200,
  y: 200,
  houseWidth: 100,
  houseHeight: 100,

show:function(r1,g1,b1) {
  let r = r1;
  let g = g1;
  let b = b1;
  fill(r,g,b);
  noStroke();
  rect(this.x, this.y, this.houseWidth, this.houseHeight);
  fill(r+20,g+20,b+20);
  triangle(this.x, this.y, this.x+(this.houseWidth/2), this.y-this.houseHeight/2, this.x+this.houseWidth, this.y);
},
move:function(speed1) {
  let speed = speed1;
  this.x += speed;
}
} //close object
