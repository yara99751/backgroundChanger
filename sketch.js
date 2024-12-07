var box;

function setup() {
  createCanvas(windowWidth,windowHeight);
  box = createSprite(windowWidth/2, windowHeight/2)
}

function draw() 
{
  //background("blue");
  
  

  if(keyIsDown(RIGHT_ARROW)){
   background("red")
  }

  if(keyIsDown(UP_ARROW)){
  background("blue")
  }



  drawSprites();
}




