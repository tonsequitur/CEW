let x = 10;
let y = 10;
let hashcount = 0;

  function setup() {
    createCanvas(700,400);
    strokeWeight(3);
  }

  function draw() {
    background(150);
    text("hash count is " + hashcount, 30,200)
  }

  function mouseReleased() {
        if (x <= width && hashcount <=4) {
          line(x,y,x,y+20);
          hashcount++;
        }
        else if (hashcount >=5) {
          line(x,y,x,y+20);
          hashcount++;
        }
  }
