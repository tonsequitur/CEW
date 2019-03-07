//conditional with random array

let testScore;

function setup() {
  createCanvas(400,400);
  background(250,240,220);

  //pick random rounded number
  testScore = round(random(50,100));
  textSize(32);
}

function draw() {
if (testScore >= 90) {
  fill(243,116,0);
  text("you scored " + testScore + ": an A! :D", 30,200);
} else if (testScore >= 80) {
  fill (255,225,26);
  text("you scored " + testScore + ": a B. :)", 30,200);
} else if (testScore >= 70) {
  fill (190,219,57);
  text("you scored " + testScore + ": a C. :|", 30,200);
} else if (testScore >= 60) {
  fill (31,128,112);
  text("you scored " + testScore + ": a D. :/", 30,200);
} else {
  fill (255,0,100);
  text("you scored " + testScore + ": an F. :(", 30,200);
}
console.log(testScore);
}
