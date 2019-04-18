// DOM with array and variables

let characters = ['yoshi', 'toad', 'mario', 'luigi', 'peach'];

function setup() {
// not needed
}

function draw() {
// grab random index
let index = floor(random(characters.length)); //floor rounds down

// create a new paragraph using name from the array
let newPara = createP('Hi there, ' + characters[index] + '!');

// pepper screen with names
let col = color(random(255),random(255),random(255));
newPara.style('color',col);
newPara.position(random(windowWidth), random(windowHeight));
}
