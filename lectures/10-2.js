// API
// install a browser extension to see parsed JSON data

let weather;
//variable to hold weather data
let api = "http://api.openweathermap.org/data/2.5/weather?zip="
// the zipcode values
let zip;

let apikey = "&appid=8fdc6387fff30bffc34fd5c1e7d6f217";

let units = "&units=imperial";

function setup() {
  createCanvas(300,300);

  let button = select('#submit');
  // select the button element on the page
  button.mousePressed(getTemp);
  // when button is pressed, run the getTemp function
  getTemp();
}

function getTemp() {
  //grab the value from the html input
  zip = select('#zipcode').value();

  // all above need to be concatenated url https://openweathermap.org/data/2.5/weather?zip=02130,us&appid=8fdc6387fff30bffc34fd5c1e7d6f217&units=imperial
  let url = api + zip + apikey + units;

  loadJSON(url, gotData);
}

function gotData(myData) {
    weather = myData;
}

function draw() {
  // draw a circle based on the temperature
  background(100);

  if (weather) {
    ellipseMode(RADIUS);

    let myTemp = weather.main.temp; // see in JSON data via browser

    if (myTemp >= 40) {
      fill('red');
    } else {
      fill('blue');
    }
    ellipse(width/2, height/2, myTemp);

    fill('white');
    textAlign(CENTER, CENTER);
    text(weather.name, width/2, height/2);
  }
}
