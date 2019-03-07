// rollover conditional

function setup() {
  createCanvas(400,400);
  background(30);
}

function draw() {
  if (mouseX > 175 && mouseX <225 && mouseY > 175 && mouseY < 225) {
    fill(240,0,100);
  } else {
    fill(240,255,100)
  }
  ellipse(width/2,height/2,50,50);
  
//console.log(mouseX);
}
