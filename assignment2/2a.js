// ASSIGNMENT 2, PART A
// Maureen Ton, 2019

let xStart = 25;
let x = xStart;
let yStart = 30;
let y = yStart;
let hashcount = 0;
let color = 220;
let tally = 0;

function setup() {
  createCanvas(500, 500);
  background(color);
}

function draw() {
  noStroke();
  fill(color);
  rect(300,385,100,20)
  fill(0);
  text("The tally is " + tally, 310,400);
}

function mouseClicked() {
    stroke(0);
    strokeWeight(4);
    tally++;
  if (x >= width-15) {
    	y += 100;
      x = xStart;
  }
  if (hashcount ==4) {
    	line(x-10,y,x-90,y+40);
    	x += 45;
    	hashcount = 0;
  } else {
    line(x,y,x,y+40);
  	x += 20;
    hashcount++;
  }
}

function keyPressed() {
  clear();
  background(color);
  x = xStart;
  y = yStart;
  hashcount=0;
  tally=0;
}


// ----------- BASIC ROW SOLUTION -----------
// let x = 10;
// let y = 10;
// let hashcount = 0;

// function setup() {
//   createCanvas(500, 500);
//   background(220);
// }

// function draw() {
//   strokeWeight(1);
//   text("The hash count is " + hashcount, 30,400);
// }

// function mouseClicked() {
//     x += 30;
//     strokeWeight(4);
//     line(x,y,x,y+20);
//     hashcount++; // HOW TO HAVE IT NOT OVERLAP?
//   if (x >= width-20) {
//     	y += 60;
//       x = 10;
//   }
// }

// function keyPressed() {
//   clear();
//   background(220);
//   x=0;
//   hashcount=0;
// }
