var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, b1, b2, b3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	
	b1=createSprite(width/2, 640, 300,20);
	b1.shapeColor=("red");
	b1 = Bodies.circle(width/2 , 640, 5 , {restitution:0.3, isStatic:true});
	b1.shapeColor=color(225);
	World.add(world, b1);

	b2=createSprite(560, 500, 20,300);
	b2.shapeColor=("red");
	b2 = Bodies.circle(560 , 500, 5 , {restitution:0.3, isStatic:true});
	World.add(world, b2);

	b3=createSprite(250, 500, 20,300);
	b3.shapeColor=("red");
	b3 = Bodies.circle(250 , 500, 5 , {restitution:0.3, isStatic:true});
	b3.shapeColor=color("255,0,0");
	World.add(world, b3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  drawSprites();
keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);

  }
}