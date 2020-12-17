const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup(){

engine = Engine.create();
world = engine.world;

var object_options = { isStatic:true }
  
object = Bodies.rectangle (200,100,50,50, object_options);
World.add(world,object);

var ground_options = {isStatic:true};
ground = Bodies.rectangle(200,350,400,10,ground_options);
World.add(world,ground);



var object2_options = {restitution:1};

object2 = Bodies.rectangle(200,200,70,70,object2_options);
World.add(world,object2);

// to create ball
var ball_options ={
  restitution: 1.5
}

ball = Bodies.circle(50,100,20, ball_options);
World.add(world,ball);



console.log(object);
console.log(object.position.x);
console.log(object.position.y);


 // var canvas=createCanvas(400,400);
}
function draw()
{
  background(0);

  Engine.update (engine);

  rectMode(CENTER);   
  rect(object.position.x,object.position.y, 50,50);

rect(ground.position.x, ground.position.y,400,10);
rect(object2.position.x,object2.position.y,70,70);

ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y, 20, 20);

 
   // rect(200,200,50,50);
  
}
                 