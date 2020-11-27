
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,40);
	groundObject=new Ground(width/2,620,width,10);
	dustbin1=new Dustbin(750,557,15,100);
	dustbin1.shapeColor = color(255);
	dustbin2=new Dustbin(550,557,15,100);
	dustbin2.shapeColor = color(255);
	dustbin3=new Dustbin(650,600,215,15);
	dustbin3.shapeColor = color(255);
	//Create a Ground


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
  paperObject.display();
  groundObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:10,y:-15});

  
	}
}



