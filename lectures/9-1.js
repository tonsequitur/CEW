// DOM manipulating the js
let mySelection;
let mySelections;
let angle = 0;

function setup() {
  noCanvas();
  // mySelection = select("p"); //selects first paragraph
  // mySelection.style("color:red; font-size:30; font-weight:bold;");

  // mySelections = selectAll("p");
  // mySelections[1].style("color:red; font-size:30; font-weight:bold;");

  mySelections = selectAll("p");
  for (let i=0; i<mySelections.length; i++) {
    mySelections[i].style("color:red; font-size:30; font-weight:bold;");
  }
}

// function draw() {
//   mySelection.style("rotate",angle);
//   angle++;
// }
