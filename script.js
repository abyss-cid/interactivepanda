/* VARIABLES */
let eyeWidth = 50;
let eyeHeight = 65;
let pupilWidth = 11;
let pupilHeight = 15;
/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 
  print(width);

  //sets the background color
  background("#D8FFB1"); 
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  //face
  stroke("#000000");
  strokeWeight(1);

  fill("#ffffff");
    ellipse(width/2,height/2,175,175);

  //ears
  //left
  fill(0);
  arc(150, 130, 50, 50,500, 325);
  //right
  fill(0);
  arc(245, 125, 50, 50, 205, 400);

  //eyes
  if(mouseIsPressed) {
    //one eye closed
    fill(0);
    if(mouseIsPressed) {
      //one eye open
      fill(0)
       rect(170,170,eyeWidth,eyeHeight/8);
      //pupil
    ellipse(170,170,pupilWidth,eyeHeight/8);
    }

    rect(230,170,eyeWidth,eyeHeight/8);
  }else{
  fill(0);
    //left eye
  rect(170,170,eyeWidth,eyeHeight);
    //righteye
  rect(230,170,eyeWidth,eyeHeight);
  }

  //pupils
  if(mouseIsPressed){
    //pupils closed
    fill(0);
    ellipse(170,170,pupilWidth,pupilHeight/8);
    ellipse(230,170,pupilWidth,pupilHeight/8);
  }else{
    fill("#ffffff");
    ellipse(170,170,pupilWidth,pupilHeight);
    ellipse(230,170,pupilWidth,pupilHeight);
  }
//nose
  fill(0);
    triangle(215, 209 ,  200, 225,   185,209);
  fill(0);
  line(200 ,250 , 200, 225,);

  //mouth
  if(mouseIsPressed){
    fill("#ffffff");
    arc(200, 230, 50, 50, 0, 180);
  }else{
    fill("#ffb3b3");
    arc(200, 230, 50, 50, 0, 180);
  }

  //text
  stroke("#000000");
  strokeWeight(0);
  fill("#000000")
  text('"If you ever wondered how\npandas cook their dinner,\nthey use a pan duhhh"', 140, 40)
  text('Click to see me close\nmy eyes and smile :)', 150, 325)
}