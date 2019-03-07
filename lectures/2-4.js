// declaring variables
let r,g,b;

function setup() {
createCanvas(windowWidth,windowHeight);

}

function draw() {
// map(value,min,max,newmin,newmax)
r = map(mouseX,0,width,0,255);
g = map(mouseY,0,height,0,255);
b = map(mouseX,0,width,255,0);

background(r,g,b);

fill(250, 110, 222);
ellipse(mouseX,mouseY,20,20);
}
