// while loops and for loops
let x = 0;

function setup() {
  createCanvas(400,400);
  background(50);
  fill(200);
}

function draw() {
  while(x <= width) {
    ellipse(x,200,50,50);
    x = x + 50;
  }

for (let x=0; x<=width; x=x+50) {
  ellipse(x,200,50,50);
print("my x position is: " + x);
}
//bezierVertex shapes
// beginShape();
//   vertex(100,200);
//   bezierVertex(100,300,300,300,300,200);
//   bezierVertex(300,200,200,100,200,100);
//   bezierVertex(200,100,100,200,100,200);
// endShape();
}
