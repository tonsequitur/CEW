

function setup() {
  let canvas = createCanvas(windowWidth,windowHeight);

  canvas.position(0,0); //puts at window xy
  canvas.style("z-index", "-1"); //puts canvas back

  background(70,137,161);
  fill(255,240,165,30);
  noStroke();

}

function draw() {
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(70,137,161);
}
function mouseMoved() {
  ellipse(mouseX, mouseY, 100, 100);
}

function keyPressed() {
  background(70,137,161);
}
