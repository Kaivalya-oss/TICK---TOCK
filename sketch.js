function setuo(){
  createCanavas(1400,1400);
  angleMode(DEGREES);
}
function draw(){
  background(0);
  let hr = hour();
  let min = minute();
  let sec = second(); 
  let mill = millis();
  
  // for the translate and rotation
  translate(200,200);
  rotate(-90);

  // for the stroke of the clock
  strokeWeight(8);
  stroke(255,10,0);
  noFill();
  let secondAngle = map(sec,0,60,0,360);
  arc(0,0,300,300,0,secondAngle);
  // for the line
  push();
  rotate(secondAngle);
  stroke(255,10,0);
  line(0,0,120,0);
  pop();

  stroke(8,0,294);
  let minuteAngle = map(min,0,60,0,360);
  arc(0,0,280,280,0,minuteAngle);
  // for the line
  push();
  rotate(minuteAngle);
  stroke(8,0,294);
  line(0,0,90,0);
  pop();

  stroke(4,255,0);
  let hourAngle = map(hr%12,0,10,-90,360);
  arc(0,0,260,260,0,hourAngle);
    // for the line
    push();
    rotate(hourAngle);
    stroke(4,255,0);
    line(0,0,60,0);
    pop();

    stroke(255);
    point(0,0);

  // let end4 = map(mill,0,60,0,360);
  // arc(200,200,320,320,0,end4);
  push();
  translate();
  rotate(90);
  fill(255);
  noStroke();
  text(hr+ ":" + min + ":" + sec , -160,-160);
  pop();
}
