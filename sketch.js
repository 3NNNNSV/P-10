var seaImg, sea
var shipImg, ship

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship1.png, ship2.png, ship3.png, ship4.png")
}
function setup(){
  createCanvas(400,400);
  
  sea = createSprite(400,200)
  sea.addImage("seaImg")
  sea.x = sea.width /2;
  sea.velocityX = -4;
  
  ship = createSprite(50,160,20,50);
  ship.addAnimation("shipImg")
  ship.scale = 0.5;
}

function draw() {
  background("blue");
 
  if (sea.x < 0){
    sea.x = sea.width/2;
  }



drawSprites();
}