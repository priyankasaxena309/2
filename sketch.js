
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,180,20,20);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  edges = createEdgeSprites()
 
}

function draw(){
  background("white")

  //trex - jump
  if(keyDown("SPACE")){
    trex.velocityY = -5;
  }
  //Providing gravity to the trex
  //                     -5 + 1 = -4+1= -3+1 = -2+1 =-1+1=0+1 = 1+1=2
  trex.velocityY  = trex.velocityY + 1;
  
  trex.collide(edges[3]); 

  drawSprites();

}
