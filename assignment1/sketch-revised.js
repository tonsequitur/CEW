//https://www.harvardartmuseums.org/tour/the-bauhaus/slide/6391
// XX at least three of the P5JS "2D primitive" functions: rect(), ellipse(), line(), quad(), point(), arc(), or triangle()
// XX at least one example of a beginShape(), vertex(), and endShape() in your composition
// XX background(), stroke(), and fill() functions as well. Instead of stroke() and/or fill()
// XX Use at least two variables to store the values of key data (perhaps position, color, size, or you decide!)
// XX At least one of your objects should possess transparency, revealing new shapes created by the overlap with other elements on screen
// XX Your sketch should be interactive and respond to at least one mouse or keyboard event
// XX Your creation should make use of at least one for() loop. This loop could be used to create a pattern, an iterative scale

let ellipseSize = 100;
let ellipseSize2 = 80;
let circle1 = 0;
let circle1speed = 10;
let squareSize = 50;
let color;

function setup() {
  let canvas = createCanvas(1024,768);
  background(237,224,208);
  angleMode(DEGREES);
  canvas.parent('sketch-holder');
}

function draw() {

//large tube bottom lines
  for (let y3 = 332; y3 <650; y3 += 10) {
      stroke(random(color));
      line(y3-320,y3,width,y3);
    }

//large tube
      stroke(0);
      fill(255);
      beginShape();
        vertex(0,230);
        vertex(0,370);
        vertex(270,640);
        vertex(330,560);
      endShape(CLOSE);

//large tube top lines
  for (let y2 = 235; y2 <550; y2 += 10) {
      stroke(random(color));
      line(y2-230,y2,width,y2);
    }
//large tube curved lines
  for (let arc1 = 0; arc1 <300; arc1 += 10) {
      noFill();
      stroke(random(color));
      arc(arc1,arc1+300,100,100,130,-40);
    }

//small tube top lines
  for (let y5 = 423; y5 <740; y5 += 10) {
      stroke(random(color));
      line(0,y5,y5-550,y5);
    }

//small tube
      stroke(0);
      fill(255);
      beginShape();
        vertex(0,440);
        vertex(0,550);
        vertex(170,725);
        vertex(230,675);
      endShape(CLOSE);

//small tube top lines
  for (let y4 = 430; y4 <670; y4 += 10) {
      stroke(random(color));
      line(0,y4,y4-443,y4);
    }

//circles
push();
  noStroke();
  translate(300,600);
  fill(55);
  ellipse(0,0,ellipseSize,ellipseSize);
  fill(100,50);
  rotate(radians(circle1));
  arc(0, 0, ellipseSize, ellipseSize, 0, 135, PIE);
pop();

push();
  noStroke();
  translate(200,700);
  fill(55);
  ellipse(0,0,ellipseSize2,ellipseSize2);
  fill(100,50);
  rotate(radians(circle1));
  arc(0, 0, ellipseSize2, ellipseSize2, 0, 135, PIE);
pop();

//square stick lines
  for (let x1 = 300; x1 <650; x1 += 10) {
      stroke(random(color));
      line(x1,0,x1,x1-300);
    }

//square stick
    fill(55);
    stroke(55);
    rect(600,300,50,50);
    fill(255);
    beginShape();
      vertex(260,0);
      vertex(300,0);
      vertex(600,300);
      vertex(600,350);
    endShape(CLOSE);
    beginShape();
      vertex(300,0);
      vertex(600,300);
      vertex(650,300);
      vertex(350,0);
    endShape(CLOSE);

//  map position of mouse for speed
  circle1speed = map(mouseX,300,width,0,5000);
  if (mouseX <= 300) {
    circle1 += circle1speed;
  }
  else {
    circle1 += circle1speed;
  }

//box on/off
  fill(200,20,39);
  rect (800,600,100,100);
  fill(255);
  textSize(18);
  text('start', 835, 655);

  fill(200,20,39);
  rect (900,600,100,100);
  fill(255);
  textSize(18);
  text('stop', 935, 655);
}

function mouseClicked() {
  if (mouseX >= 900 && mouseX <= 1000 && mouseY >= 600 && mouseY <= 700) {
    color = 100;
  }
  else if (mouseX >= 800 && mouseX <= 900 && mouseY >= 600 && mouseY <= 700) {
    color = map(mouseX,0,width,200,200);
  }
}
