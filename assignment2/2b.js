// ASSIGNMENT 2, PART B
// Maureen Ton, 2019

let angle = 0;
let radianHour = 0;
let radianMinute = 0;
let radianSecond = 0;
let clockDiameter = 0;
let numHour = 0;
let numMin = 0;
let numSec = 0;
let meridian;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
background(50);
fill(255);
clockDiameter = width/3;
ellipse(width/2, height/2, clockDiameter, clockDiameter);
numHour = hour();
numMin = minute();
numSec = second();

//map radians with 0-24 hours
if (hour() <=12 && minute() <=59) {
  radianHour = map(hour(),1,12,210,540);
} else {
  radianHour = map(hour(),13,24,210,540);
}
radianMinute = map(minute(),0,60,180,540);
radianSecond = map(second(),0,60,180,540);

//map 1-12 hour display
if (hour() >=13) {
  numHour = map(hour(),13,23,1,11);
  meridian = ' PM';
} else {
  meridian = ' AM';
}
if (hour() == 0) {
  numHour = 12;
  meridian = ' AM';
} else if (hour() == 12) {
  numHour = 12;
  meridian = ' PM';
}

// text display
textAlign(CENTER);
textSize(45);
text(nf(numHour,2)+':'+nf(numMin,2)+':'+nf(numSec,2)+meridian, width/2, height/2+clockDiameter/2+50); //incorporate nf
// text('Hour in degrees: '+round(radianHour), width/2, height-50);
// text('Minute in degrees: '+round(radianMinute), width/2, height-30);

push(); //SECONDS hand
  translate(width/2,height/2);
  //move minute
  rotate(radianSecond);
  noStroke();
  fill(255,0,0,20);
  rect(-2.5,-5,5,clockDiameter/2);
pop();

push(); //MINUTE hand
  translate(width/2,height/2);
  //move minute
  rotate(radianMinute);
  noStroke();
  fill(33,100,50,99);
  rect(-5,-5,10,clockDiameter/2.1);
pop();

push(); //HOUR hand
  translate(width/2,height/2);
  //move hour
  rotate(radianHour);
  noStroke();
  fill(33,100,34);
  rect(-10,-5,20,clockDiameter/4);
  fill(0);
  ellipse(0,0,23,23);
pop();
}
