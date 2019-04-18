// JSON

let guitars;

function preload() {
  guitars = loadJSON("10-1-guitars.json");
}

function setup() {
  noCanvas();

  // get manufacturers from json
  let manufacturers = guitars.companies;

  // interate through each
  for (let i = 0; i < manufacturers.length; i++) {
    createP('<a href ="' + manufacturers[i].url + '">' + manufacturers[i].name + '</a>');

    // if there are spaces, use bracket notation without dot
    createP('Founded in ' + manufacturers[i]["country founded in"]);
  }
}

function draw() {
}
