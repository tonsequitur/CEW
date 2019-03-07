function setup() {
    // make a canvas that's 800x600 pixels
    createCanvas(800, 600);

    // grabbed a nice color scheme from color.adobe.com
    // https://color.adobe.com/Firenze-color-theme-24198/
    background(248, 177, 149);
}

function draw() {
    // set an initial fill color for our shapes
    // this color will fill all shapes that follow unless altered in following lines
    fill(255, 176, 55);

    // set the stroke color and weight for the shapes that follow
    stroke(53, 92, 125);
    strokeWeight(5);

    ellipse(200, 300, 150, 150);

    // a rectangle draws from its upper left...but you can change that default - see rectMode()
    rectMode(CENTER);
    rect(200, 300, 50, 50);

    // a line draws from (x1, y1) to (x2, y2)
    line(300, 400, 400, 300);
    line(300, 300, 400, 400);

    // a quad() takes four (x,y) points as input
    quad(50, 50, 97, 82, 130, 130, 47, 120);

    // p5 executes code from top to bottom
    // changing fill() or stroke() affects shapes that follow
    // fill commands take an optional fourth argument (for "alpha", i.e. transparency)
    fill(108,91,123,200);

    // Objects drawn later in sketch will overlap previous shapes
    ellipse(50, 50, 40, 140);

    // the arc and vertex shape will fill in light green
    fill(192, 108, 132);

    // an arc can be drawn in many ways - see reference!
    // arc(x position, y position, width, height, start angle {in radians}, stop angle, and optionally a mode);
    arc(150, 50, 80, 80, 0, PI + QUARTER_PI, PIE);
    arc(450, 50, 80, 80, 0, radians(135), PIE);

    // stroke and fill can be eliminated via noStroke() or noFill()
    //noStroke();
    // noFill();

    // more complex shapes can be built with
    // beginShape(), vertex(), and endShape()
    // lots of options here - see reference!
    beginShape();
        vertex(630, 480);
        vertex(685, 480);
        vertex(720, 525);
        vertex(685, 580);
        vertex(655, 500);
        vertex(630, 525);
    endShape(CLOSE);

    // mouseX + mouseY system variables!
    noStroke();
    fill(108,91,123,50)
    ellipse(mouseX, mouseY, 50);

}
