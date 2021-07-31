let graphics;
let rgraphics;
let bgraphiccs;
var greenWigs = [];
var blueWigs = [];

var greenWigs2 = [];
var blueWigs2 = [];
var redWigs2 = [];
var rbound;
var gbound;
var bxbound;
var gnum;
var bnum;
var rnum; 
var gnum1;
var bnum1;
var rnum1; 
var galpha = [];
var redWigs = [];
balpha = [];
var ralpha = [];
var st = [];
var jita;
var area = [];
var numWigs;


function setup() {
  colorMode(HSB);
  rbound = random(width/2);
  gbound = random(height/2);
  numWigs = 10;
  for (i=0; i<10; i++){
     area[i] = [];
    for (j=0; j<4; j++){
     area[i][j] = [random(width),random(height),random(width), random(height)];
    }
    
  }
gnum = round(random(4,7));
  rnum = round(random(4,7));
  bnum = round(random(4,7));
  
  gnum1 = round(random(4,7));
  rnum1 = round(random(4,7));
  bnum1 = round(random(4,7));
  
  createCanvas(windowWidth, windowHeight);
  graphics = createGraphics(width, height);
  rgraphics = createGraphics(width, height);
    bgraphics = createGraphics(width, height);
    x = random(5, height / 4);
  y = random(5, height / 4);
    jita = 2;

     for (i = 0; i < 3; i++) {
   // greenWigs[i] = [int(random(width)), int(random(height))];
    greenWigs[i] = [];
    for (j = 0; j < gnum; j++){
      greenWigs[j] = []
      greenWigs[j] = [int(random(width)), int(random(height))];
    
  }
  }
  
    for (i = 0; i < 3; i++) {
   // greenWigs[i] = [int(random(width)), int(random(height))];
    greenWigs2[i] = [];
    for (j = 0; j < gnum1; j++){
      greenWigs2[j] = []
      greenWigs2[j] = [int(random(width)), int(random(height))];
    
  }
  }
     for (i = 0; i < 3; i++){
    galpha[i] = random(200);    
  }
     for (i = 0; i < 6; i++){
    st[i] = random(400);    
       
    st[i] = st[i] +random(-1,1);    

     
  
  }



    for (i = 0; i < 3; i++) {
   // greenWigs[i] = [int(random(width)), int(random(height))];
    redWigs[i] = [];
    for (j = 0; j < rnum; j++){
     redWigs[j] = []
      redWigs[j] = [int(random(width)), int(random(height))];
    }
  }
   for (i = 0; i < 3; i++) {
   // greenWigs[i] = [int(random(width)), int(random(height))];
    redWigs2[i] = [];
    for (j = 0; j < rnum1; j++){
     redWigs2[j] = []
      redWigs2[j] = [int(random(width)), int(random(height))];
    }
  }
     for (i = 0; i < 3; i++){
    ralpha[i] = random(200);    
  }
  
     for (i = 0; i < 3; i++) {
   // greenWigs[i] = [int(random(width)), int(random(height))];
    blueWigs[i] = [];
    for (j = 0; j < bnum; j++){
      blueWigs[j] = []
      blueWigs[j] = [int(random(width)), int(random(height))];
    }
  }
  
   for (i = 0; i < 3; i++) {
   // greenWigs[i] = [int(random(width)), int(random(height))];
    blueWigs2[i] = [];
    for (j = 0; j < bnum1; j++){
      blueWigs2[j] = []
      blueWigs2[j] = [int(random(width)), int(random(height))];
    }
  }
  
     for (i = 0; i < 3; i++){
    balpha[i] = random(200);    
  }
  
 
}

function draw() {
 // graphics.background(0);
  
greenPlate();
  blendMode(MULTIPLY);
redplate();
  //blendMode(BLEND);
  blueplate();
  blendMode(BLEND);
  //print(galpha[2]);
  
    for (i = 0; i < 6; i++){
       
    st[i] = st[i] +random(-1,1);    
     if (st[i] <= 5 || st[i] >= 200){
       
       st[i] = round(random(150));
       
     }
     
  
  }

}


function redplate() {
  rgraphics.blendMode(BLEND);

   rgraphics.noStroke();
 rgraphics.fill(255, ralpha[0], ralpha[0]);
 rgraphics.rect(-100, -100, width * 2, height * 2);

 
 rbound = rbound + random(-2,2);
  if (rbound > width/1.25 || rbound < width/6){
    rbound = width/2;
  }
  rgraphics.noFill();

  rgraphics.strokeWeight(st[0]);

  rgraphics.stroke(255, ralpha[1], ralpha[1]);
  rgraphics.noFill();
 //rgraphics.blendMode(BLEND);
 rgraphics.beginShape();

  for (i = 0; i < redWigs.length; i++) {
    rgraphics.curveVertex(redWigs[i][0], redWigs[i][1]);
  }
  rgraphics.endShape();


  for (i = 0; i < redWigs.length; i++) {
    for (j = 0; j < redWigs[i].length; j++){
    redWigs[i][j] += random(-5, 5);
             if (redWigs[i][0] > rbound-st[0] || redWigs[i][0] < 0+st[0]) {
        redWigs[i][0] = random(rbound);
      }
      if (redWigs[i][1] > height-st[0]|| redWigs[i][1] < 0+st[0]){
        redWigs[i][1] = random(height);
      }
      }
  }
  
  rgraphics.strokeWeight(st[1]);

  rgraphics.stroke(255, ralpha[2], ralpha[2]);
  rgraphics.noFill();
 //rgraphics.blendMode(BLEND);
 rgraphics.beginShape();

  for (i = 0; i < redWigs2.length; i++) {
    rgraphics.curveVertex(redWigs2[i][0], redWigs2[i][1]);
  }
  rgraphics.endShape();


  for (i = 0; i < redWigs2.length; i++) {
    for (j = 0; j < redWigs2[i].length; j++){
    redWigs2[i][j] += random(-5, 5);
             if (redWigs2[i][0] > width-st[1] || redWigs2[i][0] < rbound+st[1]) {
        redWigs2[i][0] = random(rbound, width);
      }
      if (redWigs2[i][1] > height-st[1]|| redWigs2[i][1] < 0+st[1]){
        redWigs2[i][1] = random(height);
      }
      }
  }
  
  
    for (i = 0; i < ralpha.length; i++){
    ralpha[i] += random(-jita, jita);
      ralpha[i] = abs(ralpha[i]);
      if (ralpha[i] > 255){
        ralpha[i] = random(255);
      }
      if (ralpha[i] < 10) {
        ralpha[i] = random(255);
      }
        
  }


  
  image(rgraphics, 0,0,width,height);
  rgraphics.blendMode(MULTIPLY);
 
  
  
}

function greenPlate() {
  
graphics.blendMode(BLEND);
   graphics.noStroke();
 graphics.fill(galpha[0], 255, galpha[0]);
 graphics.rect(-100, -100, width * 2, height * 2);

  gbound = gbound + random(-2,2);
  if (gbound > height/1.25 || gbound < height/6){
    gbound = height/2;
  }
 
  graphics.noFill();

  graphics.strokeWeight(st[2]);

  graphics.stroke(galpha[1], 255, galpha[1]);
  graphics.noFill();
 graphics.blendMode(BLEND);
 graphics.beginShape();

  for (i = 0; i < greenWigs.length; i++) {
    graphics.curveVertex(greenWigs[i][0], greenWigs[i][1]);
  }
  graphics.endShape();

  for (i = 0; i < greenWigs.length; i++) {
    for (j = 0; j < greenWigs[i].length; j++){
    greenWigs[i][j] += random(-5, 5);
             if (greenWigs[i][0] > width-st[2] || greenWigs[i][0] < 0+st[2]) {
        greenWigs[i][0] = random(width);
      }
      if (greenWigs[i][1] > gbound-st[2]|| greenWigs[i][1] < 0+st[2]){
        greenWigs[i][1] = random(gbound);
      }
      }
  }
   graphics.strokeWeight(st[3]);
  graphics.stroke(galpha[2], 255, galpha[2]);
  graphics.beginShape();

  for (i = 0; i < greenWigs2.length; i++) {
    graphics.curveVertex(greenWigs2[i][0], greenWigs2[i][1]);
  }
  graphics.endShape();

  for (i = 0; i < greenWigs2.length; i++) {
    for (j = 0; j < greenWigs2[i].length; j++){
    greenWigs2[i][j] += random(-5, 5);
             if (greenWigs2[i][0] > width-st[3] || greenWigs2[i][0] < 0+st[3]) {
        greenWigs2[i][0] = random(width);
      }
      if (greenWigs2[i][1] > height-st[3]|| greenWigs2[i][1] < gbound+st[3]){
        greenWigs2[i][1] = random(gbound,height);
      }
      }
  }
  
  
    for (i = 0; i < galpha.length; i++){
    galpha[i] += random(-jita, jita);
      galpha[i] = round(galpha[i]);
      if (galpha[i] > 255){
        galpha[i] = random(255);
      }
      if (galpha[i] < 10)
        galpha[i] = random(255);
  }


  
  image(graphics, 0,0,width,height);
  graphics.blendMode(MULTIPLY);
  

}

function blueplate() {
  bgraphics.blendMode(BLEND);

   bgraphics.noStroke();
 bgraphics.fill(balpha[0], balpha[0], 255);
 bgraphics.rect(-100, -100, width * 2, height * 2);

 
 
  bgraphics.noFill();

  bgraphics.strokeWeight(st[4]);

  bgraphics.stroke(balpha[1], balpha[1], 255);
  bgraphics.noFill();
 //rgraphics.blendMode(BLEND);
 bgraphics.beginShape();

  for (i = 0; i < blueWigs.length; i++) {
    bgraphics.curveVertex(blueWigs[i][0], blueWigs[i][1]);
  }
  bgraphics.endShape();

  for (i = 0; i < blueWigs.length; i++) {
    for (j = 0; j < blueWigs[i].length; j++){
    blueWigs[i][j] += random(-5, 5);
             if (blueWigs[i][0] > width-st[4] || blueWigs[i][0] < 0+st[4]) {
        blueWigs[i][0] = random(width);
      }
      if (blueWigs[i][1] > height-st[4]|| blueWigs[i][1] < 0+st[4]){
        blueWigs[i][1] = random(height);
      }
      }
  }
  
  bgraphics.strokeWeight(st[5]);

  bgraphics.stroke(balpha[2], balpha[2], 255);
  bgraphics.noFill();
 //rgraphics.blendMode(BLEND);
 bgraphics.beginShape();

  for (i = 0; i < blueWigs2.length; i++) {
    bgraphics.curveVertex(blueWigs2[i][0], blueWigs2[i][1]);
  }
  bgraphics.endShape();

  for (i = 0; i < blueWigs2.length; i++) {
    for (j = 0; j < blueWigs2[i].length; j++){
    blueWigs2[i][j] += random(-5, 5);
             if (blueWigs2[i][0] > width-st[5] || blueWigs2[i][0] < 0+st[5]) {
        blueWigs2[i][0] = random(width);
      }
      if (blueWigs2[i][1] > height-st[5]|| blueWigs2[i][1] < 0+st[5]){
        blueWigs2[i][1] = random(height);
      }
      }
  }
  print(rbound)
  
  
    for (i = 0; i < balpha.length; i++){
    balpha[i] += random(-jita, jita);
      balpha[i] = abs(balpha[i]);
      if (balpha[i] > 255){
        balpha[i] = random(255);
      }
  }


  
  image(bgraphics, 0,0,width,height);
  bgraphics.blendMode(MULTIPLY);
  

}


function touchStarted() {
  let fs = fullscreen;

  fullscreen(fs);
  noCursor();
  setup();
}
