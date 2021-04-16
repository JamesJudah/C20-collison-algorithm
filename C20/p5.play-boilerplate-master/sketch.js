var movingRectangle , fixedRectangle;

function setup() {
  createCanvas(1200,400);
  fixedRectangle = createSprite(600, 400, 50, 80);
  fixedRectangle.shapeColor = "green";


  movingRectangle = createSprite(400, 200, 80, 30);
  movingRectangle.shapeColor = "green";
  
  
}

function draw() {
  background(255,255,255);  
  
  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;

  console.log(movingRectangle.x - fixedRectangle.x);

  if(movingRectangle.x - fixedRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2  && 
   fixedRectangle.x - movingRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 && 
   fixedRectangle.y - movingRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2 &&
   movingRectangle.y -  fixedRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2)  {

    movingRectangle.shapeColor = "red";
    fixedRectangle.shapeColor = "red";
  }
 else{
    movingRectangle.shapeColor = "green";
    fixedRectangle.shapeColor = "green";


 }
     

  drawSprites();

  
}