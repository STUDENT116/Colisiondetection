var fixed,moving;

function setup() {
  createCanvas(1200,800);
  fixed =createSprite(400, 200, 80, 50);
  fixed.shapeColor = "green";
  fixed.debug = true;
  moving= createSprite(800,200,50,80);
  moving.shapeColor= "green";
  moving.debug = true;
}

function draw() {
  background(255,255,255);
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  if(moving.x-fixed.x<fixed.width/2+moving.width/2){
    moving.shapeColor= "red";
    fixed.shapeColor= "red";
  } 
  else{
    moving.shapeColor= "green";
    fixed.shapeColor= "green";
  } 
  drawSprites();
}