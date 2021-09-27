
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup()
{
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world
  ball = Bodies.circle(200,200,20)
  World.add(world,ball)
  console.log(ball)
  console.log(ball.position.x)
  var options = {
  isStatic:true
  }
  ground= Bodies.rectangle(200,370,400,20,options)
  World.add(world,ground)
  box = Bodies.rectangle(100,100,20,20)
 World.add(world,box)
}

function draw() 
{
  background(51);
  Engine.update(engine)
  ellipse(ball.position.x,ball.position.y,20,20)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  rectMode(CENTER)
  rect(box.position.x,box.position.y,20,20)
}

