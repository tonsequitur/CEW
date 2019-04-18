// nested loops
let circlesize = 40;
function setup() {
  createCanvas(windowWidth,windowHeight);
  noFill();
}

function draw() {
background(255);
let count = 0;

  for (let x=50; x<=width - 50; x+=50) {
    for (let y=50; y<=height - 50; y+=50) {
      for (let d = 0; d <= circlesize; d = d+10){
      ellipse(x,y,d);
    }
    line (x-20, y-20, x+20, y+20);
    }
  }
}
