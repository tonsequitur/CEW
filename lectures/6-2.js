// Constructor Functions
//DRY - don't repeat yourself
let house1, house2, house3;

function setup() {
    createCanvas(700,400);

    house1 = new House(0,200); //new instance of object
    house2 = new House(120,200);
    house3 = new House(300,200);
  }

function draw() {
    background(100,100,20);
    fill(100);
    rect(0,300,700,100);

    house1.move();
    house1.display();
    house2.move();
    house2.display();
    house3.move();
    house3.display();
  }
