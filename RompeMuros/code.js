var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d7768621-7c94-4e7b-bd8f-75924c4e6ead","db7fd35d-fcce-4642-afad-90c910ab2645"],"propsByKey":{"d7768621-7c94-4e7b-bd8f-75924c4e6ead":{"name":"ball","sourceUrl":"assets/api/v1/animation-library/gamelab/NLtwV2Syoag9LPwdF8r91wCF6jRKYq07/category_retro/retro_powerup_coin.png","frameSize":{"x":352,"y":352},"frameCount":1,"looping":true,"frameDelay":2,"version":"NLtwV2Syoag9LPwdF8r91wCF6jRKYq07","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":352,"y":352},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NLtwV2Syoag9LPwdF8r91wCF6jRKYq07/category_retro/retro_powerup_coin.png"},"db7fd35d-fcce-4642-afad-90c910ab2645":{"name":"Paddle","sourceUrl":"assets/api/v1/animation-library/gamelab/g5oABvfMdI51LfKaIk8Ody01cBqBF_Gd/category_retro/retroship_08.png","frameSize":{"x":385,"y":283},"frameCount":1,"looping":true,"frameDelay":2,"version":"g5oABvfMdI51LfKaIk8Ody01cBqBF_Gd","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":385,"y":283},"rootRelativePath":"assets/api/v1/animation-library/gamelab/g5oABvfMdI51LfKaIk8Ody01cBqBF_Gd/category_retro/retroship_08.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Paleta y pelota
var paddle = createSprite(200, 375, 50, 15);
var ball = createSprite(150, 250, 20, 20);

//primer fila
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="purple";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="white";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="purple";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="white";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="purple";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="white";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="purple";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="white";

//segunda fila
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="white";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="purple";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="white";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="purple";
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="white";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="purple";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="white";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="purple";

var puntos = 0;

var estado = "inicio";

//Funcion principal
function draw() {
 
  //Fondo
  background("Black");
  
  textSize(25);
  stroke("red");
  text("puntos : " + puntos, 50, 20);
  
  
  //Pelota Skin
  ball.scale=0.1;
  ball.setAnimation("ball");
  
  //Paddle Skin
  paddle.scale=0.1;
  paddle.setAnimation("Paddle");
  
  //Destruccion de bloques y sonidos
  if (ball.bounceOff(box1)){
    box1.destroy();
    playSound("assets/category_hits/puzzle_game_button_04.mp3");
    puntos = puntos + 1;
  }
  if (ball.bounceOff(box2)){
    box2.destroy();
    playSound("assets/category_hits/puzzle_game_button_04.mp3");
     puntos = puntos + 1;
  }
  if (ball.bounceOff(box3)){
    box3.destroy();
    playSound("assets/category_hits/puzzle_game_button_04.mp3");
     puntos = puntos + 1;
  }
  if (ball.bounceOff(box4)){
    box4.destroy();
    playSound("assets/category_hits/puzzle_game_button_04.mp3");
     puntos = puntos + 1;
  }
  if (ball.bounceOff(box5)){
    box5.destroy();
    playSound("assets/category_hits/puzzle_game_button_04.mp3");
     puntos = puntos + 1;
  }
  if (ball.bounceOff(box6)){
    box6.destroy();
    playSound("assets/category_hits/puzzle_game_button_04.mp3");
     puntos = puntos + 1;
  }
  if (ball.bounceOff(box7)){
    box7.destroy();
    playSound("assets/category_hits/puzzle_game_button_04.mp3");
     puntos = puntos + 1;
  }
  if (ball.bounceOff(box8)){
    box8.destroy();
    playSound("assets/category_hits/puzzle_game_button_04.mp3");
     puntos = puntos + 1;
  }
  if (ball.bounceOff(box9)){
    box9.destroy();
    playSound("assets/category_hits/puzzle_game_button_04.mp3");
     puntos = puntos + 1;
  }
  if (ball.bounceOff(box10)){
    box10.destroy();
    playSound("assets/category_hits/puzzle_game_button_04.mp3");
     puntos = puntos + 1;
  }
  if (ball.bounceOff(box11)){
    box11.destroy();
    playSound("assets/category_hits/puzzle_game_button_04.mp3");
     puntos = puntos + 1;
  }
  if (ball.bounceOff(box12)){
    box12.destroy();
    playSound("assets/category_hits/puzzle_game_button_04.mp3");
     puntos = puntos + 1;
  }
  if (ball.bounceOff(box13)){
    box13.destroy();
    playSound("assets/category_hits/puzzle_game_button_04.mp3");
     puntos = puntos + 1;
  }
  if (ball.bounceOff(box14)){
    box14.destroy();
    playSound("assets/category_hits/puzzle_game_button_04.mp3");
     puntos = puntos + 1;
  }
  if (ball.bounceOff(box15)){
    box15.destroy();
    playSound("assets/category_hits/puzzle_game_button_04.mp3");
     puntos = puntos + 1;
  }
  if (ball.bounceOff(box16)){
    box16.destroy();
    playSound("assets/category_hits/puzzle_game_button_04.mp3");
     puntos = puntos + 1;
  }
  if(ball.bounceOff(paddle)){
  playSound("assets/category_hits/retro_game_simple_impact_3.mp3");
}

  //Inicio
  if(keyDown("space")){
    ball.velocityX = 3;
    ball.velocityY = 4;
  }
  
  //=== es comparar
  if(estado === "inicio"){
    text("Presiona Espacio para comenzar", 10, 220);
    ball.velocityX=0;
    ball.velocityY=0;
    ball.x = 200;
    ball.y = 250;
    if(keyDown("space")){
    ball.velocityX = 3;
    ball.velocityY = 4;
    estado = "jugar";
    }
  }
  if(estado === "jugar"){
     paddle.x=World.mouseX;
     if(ball.isTouching(bottomEdge)|| puntos === 16){
       estado = "fin";
     }
  }
  if(estado === "fin"){
    text("Fin del juego...", 120, 220);
    ball.velocityY=0;
    ball.velocityX=0;
  }
  
  
  //Rebotes
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);

if(ball.bounceOff(bottomEdge)){
    textSize(30);
    text("Perdiste", 5, 100);
    stroke("red");
}

  drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
