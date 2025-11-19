let alarms = [];
let alarmSound;
let addButton;
let inputHour, inputMinute, inputSecond;
let labelHour, labelMinute, labelSecond;
let deleteButtons = [];

function preload() {
  alarmSound = loadSound('Long Time (Intro).mp3');
}

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
  inputHour.style('background-color', '#EDE7F6');
  inputHour.style('border', '1px solid #d8d0e8');
  inputHour.style('border-radius', '6px');
  inputHour.style('padding', '8px');
  inputHour.style('text-align', 'center');
  inputHour.style('color', '#666');

  inputMinute = createInput('');
  inputMinute.position(centerX - 60, 230);
  inputMinute.size(60);
  inputMinute.attribute('placeholder', '00');
  inputMinute.style('background-color', '#D1C4E9');
  inputMinute.style('border', '1px solid #d0e0f0');
  inputMinute.style('border-radius', '6px');
  inputMinute.style('padding', '8px');
  inputMinute.style('text-align', 'center');
  inputMinute.style('color', '#666');

  inputSecond = createInput('');
  inputSecond.position(centerX + 25, 230);
  inputSecond.size(60);
  inputSecond.attribute('placeholder', '00');
  inputSecond.style('background-color', '#B39DDB');
  inputSecond.style('border', '1px solid #f0e0d8');
  inputSecond.style('border-radius', '6px');
  inputSecond.style('padding', '8px');
  inputSecond.style('text-align', 'center');
  inputSecond.style('color', '#666');

  addButton = createButton('+ 추가');
  addButton.position(centerX + 120, 230);
  addButton.style('background-color', '#f1f1f3');
  addButton.style('border', '1px solid #e1e1e6');
  addButton.style('border-radius', '20px');
  addButton.style('width', '60px');
  addButton.style('height', '36px');
  addButton.style('color', '#6e6e80');
  addButton.style('cursor', 'pointer');
  addButton.style('font-size', '14px');
  addButton.style('font-weight', '500');
  addButton.style('box-shadow', '0 1px 3px rgba(0,0,0,0.06)');

  addButton.mouseOver(() => {
    addButton.style('background-color', '#e9e9ed');
  });
  addButton.mouseOut(() => {
    addButton.style('background-color', '#f1f1f3');
  });

  addButton.mousePressed(addAlarm);
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

  fill(80);
  textSize(16);
  text('📋 등록된 알람', width/2, 315);

  for (let i = 0; i < alarms.length; i++) {
    let alarm = alarms[i];
    let yPos = 360 + i * 55;

    fill(245, 242, 248);
    noStroke();
    rect(50, yPos - 24, 400, 45, 8);

    fill(70);
    textSize(18);
    text(
        `${nf(alarm.h, 2)}:${nf(alarm.m, 2)}:${nf(alarm.s, 2)}`,
        width/2 - 50,
        yPos
    );

    if (hour() === alarm.h && minute() === alarm.m && second() === alarm.s) {
      if (!alarm.ringing) {
        alarm.ringing = true;
        if (!alarm.sound.isPlaying()) {
          alarm.sound.play();
        }
      }
    }
  }

  updateButtons();
}

function updateButtons() {
  for (let btn of deleteButtons) btn.remove();
  deleteButtons = [];

  for (let i = 0; i < alarms.length; i++) {
    let yPos = 360 + i * 55;

    let deleteBtn = createButton('삭제');
    deleteBtn.position(380, yPos - 15);
    deleteBtn.style('background-color', '#ffe0e0');
    deleteBtn.style('border', 'none');
    deleteBtn.style('border-radius', '6px');
    deleteBtn.style('padding', '6px 14px');
    deleteBtn.style('color', '#999');
    deleteBtn.style('cursor', 'pointer');
    deleteBtn.style('font-size', '12px');
    deleteBtn.mousePressed(() => deleteAlarm(i));
    deleteButtons.push(deleteBtn);

    if (alarms[i].ringing) {
      let stopBtn = createButton('멈춤');
      stopBtn.position(310, yPos - 15);
      stopBtn.style('background-color', '#e0f0ff');
      stopBtn.style('border', 'none');
      stopBtn.style('border-radius', '6px');
      stopBtn.style('padding', '6px 14px');
      stopBtn.style('color', '#999');
      stopBtn.style('cursor', 'pointer');
      stopBtn.style('font-size', '12px');
      stopBtn.mousePressed(() => stopAlarm(i));
      deleteButtons.push(stopBtn);
    }
  }
}

function addAlarm() {
  let h = int(inputHour.value()) || 0;
  let m = int(inputMinute.value()) || 0;
  let s = int(inputSecond.value()) || 0;

  if (h >= 0 && h < 24 && m >= 0 && m < 60 && s >= 0 && s < 60) {
    let newSound = loadSound('Long Time (Intro).mp3');
    alarms.push({h: h, m: m, s: s, ringing: false, sound: newSound});
    inputHour.value('');
    inputMinute.value('');
    inputSecond.value('');
  }
}

function deleteAlarm(index) {
  if (alarms[index].ringing && alarms[index].sound.isPlaying()) {
    alarms[index].sound.stop();
  }
  alarms.splice(index, 1);
}

function stopAlarm(index) {
  if (alarms[index].sound.isPlaying()) {
    alarms[index].sound.stop();
  }
  alarms[index].ringing = false;
}