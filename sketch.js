
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var force;

function preload()
{
	
}

function setup() {
	createCanvas(1200,600);

    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj= new ground(width/2, 590, width,20)
	World.add(world,groundObj)

	leftSide= new ground (800,590,20,300)
	World.add(world,leftSide)

	rightSide= new ground (1000,590,20, 300)
	World.add(world,rightSide)

    ball= Bodies.circle(400,400,50,ball_options)
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.show()
  leftSide.show()
  rightSide.show()
  ellipse(ball.position.x, ball.position.y, 50, 50)
  drawSprites();
 }

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:370,y:-370});
	}
}