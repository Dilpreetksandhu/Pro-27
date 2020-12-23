
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	fill("blue")
	stroke("white")
	ball1= new Ball(200,350)
roof= new Roof(400,100)
rope1= new Rope(ball1.body,roof.roof,-180)
ball2= new Ball(260,350)
rope2= new Rope(ball2.body,roof.roof,-130)
ball3= new Ball(320,350)
rope3= new Rope(ball3.body,roof.roof,-80)
ball4= new Ball(380,350)
rope4= new Rope(ball4.body,roof.roof,-30)
ball5= new Ball(440,350)
rope5= new Rope(ball5.body,roof.roof,30)
ball6= new Ball(500,350)
rope6= new Rope(ball6.body,roof.roof,80)
ball7= new Ball(560,350)
rope7= new Rope(ball7.body,roof.roof,130)
ball8= new Ball(620,350)
rope8= new Rope(ball8.body,roof.roof,180)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display()
roof.display()
rope1.display()
ball2.display()
rope2.display()
ball3.display()
rope3.display()
ball4.display()
rope4.display()
ball5.display()
rope5.display()
ball6.display()
rope6.display()
ball7.display()
rope7.display()
ball8.display()
rope8.display()
  drawSprites();
 
}



