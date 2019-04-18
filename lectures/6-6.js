// arrays from book example

let x = []; //declare array

function setup() {
    createCanvas(windowWidth,windowHeight);
    noStroke();
    fill(255,200);
    for (let i = 0; i < 3000; i++) {
      x[i] = random(-1000,200);
    }
  }

function draw() {
    background(0);
    for (let i = 0; i < x.length; i++) {
      x[i] += 0.5;
      let y = i*0.4;
      arc(x[i],y,12,12,0.52,5.76);
    }
  }
