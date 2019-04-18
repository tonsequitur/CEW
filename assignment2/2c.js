// ASSIGNMENT 2, PART C
// Maureen Ton, 2019

//-----TIME UNDERWATER IN THE ARCTIC-----
// The darkness underwater is mapped by the hour of the day
// Light filters in depending on the angle of the sun in the sky
// An iceberg moves across the screen over the course of an hour
// Plankton populate once/second and all fade out by the end of a minute

let light = [];
let organism = [];
let r = 0;
let g = 0;
let b = 0;
let berg;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(r,g,b);

  // brightness underwater depends on hour of the day
  if (hour() <= 11) {
    g = map(hour(),0,11,20,40); // map dark to light
    b = map(hour(),0,11,50,120); // map dark to light
    } else {
      g = map(hour(),12,23,40,20); // map light to dark
      b = map(hour(),12,23,120,50); // map light to dark
    }

  berg = new Ice ();
  berg.display();

  for (let i = 0; i < 5; i++) {
    light.push(new Lines());
    light[i].display();
    light[i].flicker();
    }

  // new plankton populated by the second
  for (let i = 0; i <= second(); i++) {
    organism.push(new Plankton());
    organism[i].display();
    }
}

function Lines() {
    this.x1 = 0;
    this.y1 = -500;
    this.x2 = 500;
    this.y2 = height;
    lineAlpha = 5;

    this.display = function() {
      stroke(255,lineAlpha);
      strokeWeight(150);
      line(this.x1,this.y1,this.x2,this.y2);

      // angle of the light shining into the water depends on the angle of the sun in the sky
      if (hour() >=0 && hour() <=12) {
        this.x1 = map(hour(),0,12,0,width/2);
        this.x2 = map(hour(),0,12,width*3.5,width/2);
      } else if (hour() >= 13 && hour() <=23) {
        this.x1 = map(hour(),13,23,width/2,width);
        this.x2 = map(hour(),13,23,width/2,-width*2.5);
      }
    },

    this.flicker = function() {
      // defraction of light through water
      this.x1 += round(random(-20, 20));
      this.x2 += round(random(-1000, 1000));
    }
}

function Ice() {
    fill(r,g+50,b+100);
    noStroke();
    this.iceWidth = 900;
    // move iceberg across screen once/hour
    this.min = minute()+(second()/60);
    this.x = map(this.min,0,59,-this.iceWidth+5,width-45);
    this.y = 0;

    this.display = function() {
      beginShape();
        vertex(this.x,this.y);
        vertex(this.x+this.iceWidth-700,this.y+250);
        vertex(this.x+this.iceWidth-600,this.y+400);
        vertex(this.x+this.iceWidth-230,this.y+550);
        vertex(this.x+this.iceWidth-200,this.y+400);
        vertex(this.x+this.iceWidth-180,this.y+440);
        vertex(this.x+this.iceWidth,this.y);
      endShape(CLOSE);
    }
}

function Plankton() {
    this.x = random(0,width);
    this.y = random(height/2,height);
    this.diameter = random(10,15);
    this.alpha = 10;

    this.display = function() {
      fill(r+30,g-50,b-70,this.alpha);
      stroke(200,this.alpha);
      strokeWeight(1);
      ellipse(this.x,this.y,this.diameter,this.diameter);
      // plankton fade out at the end of the minute
      if (second() >= 59) {
        this.alpha = this.alpha-2;
      } else {
        this.alpha = 60;
      }
    }
}
