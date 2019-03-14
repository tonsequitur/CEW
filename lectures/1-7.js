//notes for chapters 1-3 in the book

function setup() {
  createCanvas(800,800);
}

function draw() {
  stroke(0);
  background(200);
  strokeWeight(10);
  strokeCap(ROUND);
  line(600,200,700,300);

  //starting on the right side, radians starts, radians stops
  arc(500, 500, 300, 300, radians(135), radians(45));

noStroke();
  fill(255,0,0,160);
  ellipse(132,82,200,200)
  fill(0,255,0,160);
  ellipse(228,-16,200,200);
  fill(0,0,255,160);
  ellipse(268,118,200,200);

}
