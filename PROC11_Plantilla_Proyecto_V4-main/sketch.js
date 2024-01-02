var sea, sea_move;
var ship, ship_anima;


function preload(){
  sea_move = loadImage ("sea.png");
  ship_anima = loadAnimation ("ship-1.png", "ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  
  //Crear mar
  sea = createSprite (400, 400, 400, 400);
  sea.addImage("sea", sea_move);

  //Crear nave
  ship = createSprite (200, 200, 50, 50);
  ship.addAnimation("ship", ship_anima);
  ship.scale=0.3;

  if(sea.x <0){
    sea.x = sea.width/2;
  }

}

function draw() {
  background("blue");
 
  drawSprites();
}