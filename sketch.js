let button;
let hours;
let minutes;
let seconds;

function setup() {
  createCanvas(500, 750);
  textAlign(CENTER, CENTER);

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
  background(250, 248, 252);

  fill(80);
  noStroke();
  textSize(28);
  text('⏰ 알람 시계', width/2, 50);

  fill(100);
  textSize(13);
  text('시간을 입력하고 알람을 추가하세요', width/2, 85);
}

function setTime() {
  console.log(hours.value(), minutes.value(), seconds.value());
}