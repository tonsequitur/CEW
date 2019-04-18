// ASSIGNMENT 2, PART A
// Every time the user clicks the mouse, your program should add one vertical tally mark to your canvas. The length and location of these marks is arbitrary, and up to you to decide.
// Every time the user presses a key on the keyboard, the tally count should reset to zero – wipe the board and start with a clean slate.
// feature "five mark" groupings.
// These marks and groupings will move from left to right along the x axis.
// When the marking groups approach the width of the page, they’ll continue on the next row in a left-to-right, top to bottom fashion similar to English-written text.


let xStart = 20;
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
  rect(200,300,200,200)
  fill(0);
  text("The tally is " + tally, 300,400);
}

function mouseClicked() {
    stroke(0);
    strokeWeight(4);
    tally++;
  if (x >= width-20) {
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
