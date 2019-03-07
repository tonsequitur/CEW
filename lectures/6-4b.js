// arrays

let diameters = [34,27,81,93,11,72,110];

function setup() {
    createCanvas(windowWidth,windowHeight);
  }

function draw() {
    background(200);

    for (let i = 0; i < diameters.length; i++) {
      let x = i*100+100; //spaces them out for max length of array, 6 times
      let y = height/2;
      ellipse(x,y,diameters[i]);
    }
  }
