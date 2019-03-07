// functions

let myMoonWeight;
let cel;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(220);
  textAlign(CENTER);

  myMoonWeight = weightMoon(140);
  text("My weight on the moon is " + myMoonWeight + "lbs", width/2, height/3);

  cel = ftoc(0);
  text("The temperature is " + cel + " celcius",width/2,height/2);
}

function weightMoon(weightEarth) {
  return weightEarth * 0.165;
}

function ftoc(fah) {
  let c = (fah-32)*0.555556;
  return round(c);
}
