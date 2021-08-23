const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var background, groundImg;
var snow=[];

function preload(){
  groundImg = loadImage('snow1.jpg');
}

function setup() {
  engine = Engine.create();
 world = engine.world;

  createCanvas(800,400);

}

function draw() {

  Engine.update(engine);
  
  background(groundImg);  
  if(frameCount%5===0){
    snow.push(new Snow(random(0,800),0,20)); 
  }

  for(var i=0; i<snow.length; i=i+1){
    snow[i].display();
  }

  drawSprites();
}
