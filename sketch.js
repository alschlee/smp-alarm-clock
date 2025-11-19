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

  fill(245, 240, 250);
  noStroke();
  rect(width/2 - 120, 125, 240, 65, 10);

  fill(100);
  textSize(14);
  text('🕐 현재 시각', width/2, 145);

  let currentTime = `${nf(hour(), 2)}:${nf(minute(), 2)}:${nf(second(), 2)}`;
  fill(70);
  textSize(22);
  text(currentTime, width/2, 172);
}

function setTime() {
  console.log(hours.value(), minutes.value(), seconds.value());
}