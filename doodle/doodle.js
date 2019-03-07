//DNA Doodler! by Maureen Ton, 2019

let x = 0;
let y = 0;
let px = 0;
let py = 0;
let easing = .05;


function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
}

function draw() {
  fill(150);
  noStroke();
  textSize (30);
	text('DNA Doodler!',20,height-100);
	textSize (15);
  text('A DNA-style drawing tool. Click and drag to draw. (MAUREEN TON, 2019).',20,height-70);

  r = map(mouseX,0,width,0,255);
	g = map(mouseY,0,height,0,255);
	b = map(mouseX,0,width,255,0);

	let targetX = mouseX;
  x += (targetX - x) * easing;
	let targetY = mouseY;
  y += (targetY - y) * easing;
	let weight = dist(x, y, px, py);

  if (mouseIsPressed) {
    stroke(r,g,b,80);
  	strokeWeight(weight);
  	line(x, y, px, py);
    line(x+55, y+25, px, py);
    line(x+55, y+25, px+55, py+25);
  } else {
    noStroke();
  }

	py = y;
  px = x;
}
