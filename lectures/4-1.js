// nested loops

function setup() {
  createCanvas(400,400);
  background(50);
  fill(200);
}

function draw() {

  for (let x=0; x<=width; x+=50) {
    for (let y=0; y<=height; y+=50) {
      stroke(random(200,255));
      ellipse(x,y,50,50);
    }
  }
}
