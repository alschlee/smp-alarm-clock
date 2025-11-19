let button;
let inputHour, inputMinute, inputSecond;
let labelHour, labelMinute, labelSecond;

function setup() {
  createCanvas(500, 750);
  textAlign(CENTER, CENTER);

  const centerX = width / 2;

  labelHour = createP('시');
  labelHour.position(centerX - 135, 200)
      .style('color', '#888').style('font-size', '14px');

  labelMinute = createP('분');
  labelMinute.position(centerX - 50, 200)
      .style('color', '#888').style('font-size', '14px');

  labelSecond = createP('초');
  labelSecond.position(centerX + 35, 200)
      .style('color', '#888').style('font-size', '14px');

  inputHour = createInput('');
  inputHour.position(centerX - 145, 230);
  inputHour.size(60);
  inputHour.attribute('placeholder', '00');

  inputMinute = createInput('');
  inputMinute.position(centerX - 60, 230);
  inputMinute.size(60);
  inputMinute.attribute('placeholder', '00');

  inputSecond = createInput('');
  inputSecond.position(centerX + 25, 230);
  inputSecond.size(60);
  inputSecond.attribute('placeholder', '00');

  button = createButton('submit');
  button.position(centerX + 120, 230);
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
  console.log(inputHour.value(), inputMinute.value(), inputSecond.value());
}