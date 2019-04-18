// DOM manipulating the js
let myCanvas;
let myCanvasHolder;

function setup() {
  myCanvas = createCanvas(600,300);
  background(50);
  fill(255);

  myCanvas.parent("#CanvasHolder"); //parent method

  // myCanvasHolder = select('#CanvasHolder'); //child method
  // myCanvasHolder.child(myCanvas);
}

function draw() {
  ellipse(width/2, height/2, 100, 100);
}
