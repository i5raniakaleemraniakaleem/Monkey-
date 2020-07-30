function setup() 
{ createCanvas(1200,800); 
  fixedRect=createSprite(200,200,50,80); 
  fixedRect.shapeColor="green"; 
  movingRect=createSprite(400,200,80,30); 
  movingRect.shapeColor="green"; 
  O1=createSprite(100,100,50,50);
  O1.shapeColor="green"
  O2=createSprite(200,100,50,50);
  O2.shapeColor="green"
  O3=createSprite(300,100,50,50);
  O3.shapeColor="green"
  O4=createSprite(400,100,50,50);
  O4.shapeColor="green"
} 
  
  
  function draw() { background(0,0,0); 
  
  movingRect.x=World.mouseX; 
  movingRect.y=World.mouseY;

  if(isTouching())
  { fixedRect.shapeColor="red";
   movingRect.shapeColor="red";} 
  else
  { movingRect.shapeColor="green"; 
  fixedRect.shapeColor="green"; }

   isTouching();
     
    drawSprites(); }

      function isTouching(O1,O2) 
      { if(O1.x-O2.x<O1.width/2+O2.width/2 &&
         O2.x-O1.x<O1.width/2+O2.width/2 && 
         O1.y-O2.y<O1.height/2+O2.height/2 && 
         O2.y-O1.y<O1.height/2+O2.height/2) 
         { return true; } 
         else{ return false; } 
      }