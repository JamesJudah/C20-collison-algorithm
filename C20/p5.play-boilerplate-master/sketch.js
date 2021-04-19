var movingRectangle , fixedRectangle;
var gameObject1 , gameObject2 , gameObject3 , gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRectangle = createSprite(600, 200, 50, 80);
  fixedRectangle.shapeColor = "green";
  fixedRectangle.velocityY = 5;

  movingRectangle = createSprite(600, 700, 80, 30);
  movingRectangle.shapeColor = "green";
  movingRectangle.velocityY = -5;
  
 /* gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";


  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";*/

}

function draw() {
  background(255,255,255);  
  
bounceOff(movingRectangle , fixedRectangle);





  /*movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;

  console.log(movingRectangle.x - fixedRectangle.x);

  if(isTouching(movingRectangle , gameObject1))  {

  

    movingRectangle.shapeColor = "red";
    gameObject1.shapeColor = "red";

 } else {

     movingRectangle.shapeColor = "green";
     gameObject1.shapeColor     = "green";


 }*/
  

 




  drawSprites();

  
}






