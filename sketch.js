var garden,rabbit;
var gardenImg,rabbitImg;

var apple,appleImg;
var leaf,leafImg;

var PLAY =1;
var END =0;
var gameState =1;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  
  
  if(gameState==PLAY){
    background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  createApples();
  createleaves();
  
  
  }

  drawSprites();
}

function createApples() {
  if (World.frameCount % 80 == 0) {
  var apple = createSprite(Math.round(random(50, 350),40, 10, 10));
  apple.addImage(appleImg);
  apple.scale=0.1;
  apple.velocityY = 3;
  apple.lifetime = 150;
  
  }
}

function createleaves() {
  if (World.frameCount % 80 == 0) {
  var leaf = createSprite(Math.round(random(50, 350),40, 10, 10));
  leaf.addImage(leafImg);
  leaf.scale=0.1;
  leaf.velocityY = 3;
  leaf.lifetime = 150;
  
  }
}
