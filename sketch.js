let button;
let hours;
let minutes;
let seconds;

function setup() {
  createCanvas(400, 400);

  hours = createInput();
  hours.size(20);
  hours.position(20, 65);

  minutes = createInput();
  minutes.size(20);
  minutes.position(50, 65);

  seconds = createInput();
  seconds.size(20);
  seconds.position(130, 65);

  button = createButton('submit');
  button.position(130, 65);
  button.mousePressed(setTime);
}

function draw() {
  background(220);
}

function setTime() {
  console.log(hours.value(), minutes.value(), seconds.value());
}