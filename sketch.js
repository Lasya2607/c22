const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,object,ball,ground;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var object_options = {
    isStatic:true
  }

var ball_options = {
  restitution:2.0
}

var ground_options = {
  isStatic:true
}
  object = Bodies.rectangle(200,200,50,50,object_options);

  ball = Bodies.rectangle(200,300,50,40,ball_options);

ground = Bodies.rectangle(200,380,400,30,ground_options);
 World.add(world,object) 
 World.add(world,ball);
 World.add(world,ground);
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
   rect(object.position.x,object.position.y,50,50);
   rect(ball.position.x,ball.position.y,50,40);
   rect(ground.position.x,ground.position.y,400,10);
  drawSprites();
  
}