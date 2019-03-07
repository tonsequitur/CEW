// object methods with parameters

let circle = { //open object
  //Method Attributes
  x: 0,
  y: 300,
  d: 50, //needs comma

  //Method Functions
  move:function(){
    this.x++;
  }, //needs comma

  display:function(c1,l1){
    let color = c1;
    let line = l1
    fill (color);
    stroke (line)
    ellipse(this.x, this.y, this.d);
  }
} //close object

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(100,0,20);
  circle.move(); //object with its methods
  circle.display(0,255);
}
