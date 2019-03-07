// setup establishes the canvas
function setup() {
	createCanvas(800,600);
	background(248, 177, 149);
}

// function plays out in 60fps
function draw() {
	background(248, 177, 149);
	
	stroke(53,92,125); //color applies to following shapes
	strokeWeight(1);

	fill(100,91,123,20); //color applies to following shapes
//why is the transparency fading to opaque?
	ellipse(200,300,150,150);

	fill(100,91,123,100);
	rectMode(CENTER);
	rect(200,300,50,50);

	line(300,400,400,300);
	line(300,300,400,400);

	fill(100,2,123,5); //color applies to following shapes
	arc(150,50,80,80,0,PI+HALF_PI,PI);

	fill(100,2,123,200); //color applies to following shapes
	arc(200,50,80,80,0,PI+QUARTER_PI,PI);

	fill(255,255,255,50);
	noStroke();
	beginShape();
		vertex(500,300);
		vertex(600,500);
		vertex(500,600);
		vertex(800,500);
		endShape(CLOSE);

	fill(233,44,23,100);
	ellipse(mouseX,mouseY,100);
}
