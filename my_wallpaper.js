//your parameter variables go here!
//Eyes
let LeftEyeX = 50;
let LeftEyeY = 70;
let RightEyeX = 150;
let RightEyeY = 70;
let EyeSize = 60;

//Mouth
//Arc/Circle Mouth
let MouthX = 100;
let MouthY = 150;
let MouthSize = 80;
//Line Mouth
let MouthStrokeWeight = 7.0;
let MouthX1 = 50;
let MouthY1 = 130;

//Eyebrow
let LeftEyebrowX2 = 80;
let LeftEyebrowY2 = 20;
let RightEyebrowX2 = 120;
let RightEyebrowY2 = 20;
let EyebrowStrokeWeight = 5.0;

// Arc Bits N Bobs
let TopMouthY = 150;
let BotMouthY = 100;
let MouthSizeA = 100;
let EyeSizeA = 80;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}
// Random number gen for background colours
//let Curtain = [1,2,3,4,5,6,7];
//let randomcurtain = random(Curtain);
colorArray = [
  colour1(255,51,51),
  colour2(153,0,153),
  colour3(0,153,0)
]
function wallpaper_background() {
  background(178,102,178);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  // Face Coordinates
  // Random Number Generator for masks and drape backgrounds
let Mask = [1,2,3,4,5,6,7,8,9];
let randommask = random(Mask);

  // Designs :) NO FILL ALL THE MOUTHS
  angleMode(DEGREES);
  
  //Sad Face
  if (randommask == 1){
  arc(LeftEyeX,LeftEyeY,EyeSizeA,EyeSizeA,320,180,PIE,); // Left Eye // Syntax: arc(x, y, w, h, start, stop, [mode], [detail])
  arc(RightEyeX,RightEyeY,EyeSizeA,EyeSizeA,1,220,PIE,); //Right Eye
  arc(MouthX,TopMouthY,MouthSizeA,MouthSizeA,180,360,CHORD,noFill()); // Mouth 
  }

  // Happy Face.
  if (randommask == 2){
  arc(LeftEyeX,LeftEyeY,EyeSizeA,EyeSizeA,180,30, PIE);
  arc(RightEyeX,RightEyeY,EyeSizeA,EyeSizeA,150,360, PIE);
  arc(MouthX,BotMouthY,MouthSizeA,MouthSizeA,360,180, CHORD,noFill());
  }

  //Suprised or shocked face
  if (randommask == 3){
  circle(LeftEyeX,LeftEyeY,EyeSize) //circle(x, y, d)
  circle(RightEyeX,RightEyeY,EyeSize)
  circle(MouthX,MouthY,MouthSize, noFill())
//Eyebrow
  strokeWeight(EyebrowStrokeWeight)
  strokeCap(ROUND)
  line(190,10,RightEyebrowX2,5); //line(x1, y1, x2, y2)
  line(10,10,LeftEyebrowX2,5);
  }

  //Indifferent/Neutral Face
  if (randommask == 4){
//Eyes
  circle(LeftEyeX,LeftEyeY,EyeSize);
  circle(RightEyeX,RightEyeY,EyeSize);
//mouth
  line(MouthX1,MouthY1,150,130);
//Eyebrows
  strokeWeight(EyebrowStrokeWeight)
  strokeCap(ROUND)
  line(190,20,RightEyebrowX2,RightEyebrowY2);
  line(10,20,LeftEyebrowX2,LeftEyebrowY2)
  }

  //Quizzical/Doubtful Face
  if (randommask == 5){
  arc(LeftEyeX,LeftEyeY,EyeSizeA,EyeSizeA,10, 170,CHORD);
  circle(RightEyeX,RightEyeY,EyeSize);
  strokeWeight(MouthStrokeWeight)
  line(MouthX1,MouthY1,150,110); //Mouth
  strokeWeight(EyebrowStrokeWeight)
  strokeCap(ROUND)
  line(10,20,LeftEyebrowX2,50);
  line(190,20,RightEyebrowX2,RightEyebrowY2);
  }

  // Pain Face
  else if (randommask ==6){
//Eye #1
  line(20,70,80,70)
  line(30,70,10,60) //Top left wrinkle
  line(30,70,10,80) //Bottom Left Wrinkle
//Eye #2
  line(120,70,180,70)
  line(170,70,190,60)
  line(170,70,190,80)
//Mouth
  arc(MouthX,TopMouthY,MouthSizeA,MouthSizeA,180,360,CHORD,noFill());
//Eyebrows
  strokeWeight(EyebrowStrokeWeight)
  strokeCap(ROUND)
  line(20,20,LeftEyebrowX2,50)
  line(180,20,RightEyebrowX2,50)
  }

  //Disgusted Face
  if (randommask ==7){
//Eyes
  arc(LeftEyeX,80,EyeSizeA,EyeSizeA,180,360, PIE)
  circle(RightEyeX,RightEyeY,EyeSize)
//Mouth
  arc(MouthX,TopMouthY,MouthSizeA,MouthSizeA,180,360,CHORD,noFill());
//Eyebrows
  strokeWeight(EyebrowStrokeWeight)
  strokeCap(ROUND)
  line(20,20,LeftEyebrowX2,50)
  line(180,20,RightEyebrowX2,50)
  }

  //Fearful face
  if (randommask ==8){
//Eyes
  circle(LeftEyeX,LeftEyeY,EyeSize)
  circle(RightEyeX,RightEyeY,EyeSize)
//Mouth
  arc(MouthX,TopMouthY,MouthSizeA,MouthSizeA,180,360,CHORD,noFill());
//Eyebrow
  strokeWeight(EyebrowStrokeWeight)
  strokeCap(ROUND)
  line(190,30,RightEyebrowX2,5); //line(x1, y1, x2, y2)
  line(10,30,LeftEyebrowX2,5);
  }

  //angry Face
  if (randommask ==9){
//Eyes
  circle(LeftEyeX,LeftEyeY,EyeSize)
  circle(RightEyeX,RightEyeY,EyeSize)
//Mouth
  arc(MouthX,TopMouthY,MouthSizeA,MouthSizeA,180,360,CHORD,noFill());
//Eyebrows
  strokeWeight(EyebrowStrokeWeight)
  strokeCap(ROUND)
  line(20,20,LeftEyebrowX2,50)
  line(180,20,RightEyebrowX2,50)
  }


  //Mask
//Top of Mask
  //line()
  //line()
  //line()
//Left Side
  //line()
  //line()
//Right Side
  //line()
  //line()
//Chin
  //line()

//Theatre Curtain
  strokeWeight(3)
  strokeCap(ROUND)
  arc(20,180,40,40,180,360, noFill(0,0,0))
  arc(60,180,40,40,360,180, noFill())
  arc(100,180,40,40,180,360, noFill(0,0,0))
  arc(140,180,40,40,360,180, noFill())
  arc(180,180,40,40,180,360, noFill(0,0,0))
  line(200,200,200,0)
  line(0,0,0,200)
  line(0,0,200,0)

}
