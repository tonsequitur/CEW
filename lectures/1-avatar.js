function setup() {
    createCanvas(800,800);
}

function draw() {
background(220);

//hair
fill(0);
noStroke();
quad(180,150,400,150,400,800,80,800);
rect(401,150,220,650);

//face
fill(153,50,8,100);
  noStroke();
    beginShape();
        vertex(400,200);
        vertex(200,250);
        vertex(250,600);
        vertex(300,650);
        vertex(400,700);
    endShape(CLOSE);

fill(153,50,8);
    beginShape();
        vertex(401,200);
        vertex(600,250);
        vertex(550,600);
        vertex(500,650);
        vertex(401,700);
    endShape(CLOSE);

//eyes
fill(0);
    ellipse(325,380,30,30);
    ellipse(475,380,30,30);

//nose
    beginShape();
      vertex(400,400);
      vertex(350,505);
      vertex(400,520);
      endShape(CLOSE);

//mouth
  beginShape();
    vertex(400,550);
    vertex(310,600);
    vertex(400,605);
    endShape(CLOSE);

    beginShape();
      vertex(401,550);
      vertex(490,560);
      vertex(401,605);
      endShape(CLOSE);

//glasses
noFill();
stroke(255);
strokeWeight(7);
    beginShape();
      vertex(200,320);
      vertex(380,340);
      vertex(380,450);
      vertex(220,450);
      endShape(CLOSE);

  stroke(255);
  strokeWeight(7);
      beginShape();
        vertex(420,340);
        vertex(600,320);
        vertex(580,450);
        vertex(420,450);
        endShape(CLOSE);
}
