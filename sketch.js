var bunny;
var carrot;
var edges;
function setup() {
  createCanvas(600,600);
    edges=createEdgeSprites();
bunny = createSprite(40,550,30,30); 
carrot = createSprite(300,40,30,30);
obs1 = createSprite(300,120,100,20);
obs1.velocityX = 5;
obs2 = createSprite(300,320,100,20);
obs2.velocityX = -5;
  bunny.shapeColor="white";
carrot.shapeColor = "orange";
obs2.shapeColor = "red";
obs1.shapeColor = "red";
}

function draw() {
  background("green");
  
bunny.bounceOff(edges[0]);
bunny.bounceOff(edges[1]);
bunny.bounceOff(edges[2]);
bunny.bounceOff(edges[3]);
obs1.bounceOff(edges[1]);
obs1.bounceOff(edges[0]);
obs2.bounceOff(edges[1]);
obs2.bounceOff(edges[0]);
  
  if(keyDown("up")){
    bunny.y=bunny.y-3;
  }
  if(keyDown("down")){
    bunny.y=bunny.y+3;
  }
  if(keyDown("left")){
    bunny.x=bunny.x-3;
  }
  if(keyDown("right")){
    bunny.x=bunny.x+3;
  }
  if(bunny.isTouching(carrot)){
    
  text("YOU WIN",200,200);
  }
if(bunny.isTouching(obs1)){
  obs1.velocityX=0;

  text("YOU LOSE,START AGAIN",200,200);
}
if(bunny.isTouching(obs2)){
  obs2.velocityX=0
  
  text("YOU LOSE,START AGAIN",200,200);
}
  drawSprites();
   
}