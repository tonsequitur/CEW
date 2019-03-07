// declaring variables and map function with perlin noise
let tx = 55, ty = 60;
let timeStep = 0.01;
let circleSize = 30;

function setup() {
createCanvas(windowWidth,windowHeight);
background(220,100,100);
stroke(100,100,110);
fill(200,200,220,100);
}

function draw() {
x = map(noise(tx),0,1,0,width);
y = map(noise(ty),0,1,0,height);

ellipse(x,y,circleSize,circleSize);
tx += timeStep;
ty += timeStep;
}
