
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,lever,box1,box2,box3;
var R,G,B;
function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = new Ball(200,300);
lever = createSprite(75,350,100,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  R = map(lever.y,0,300,0,255) + 25;
  G = map(lever.y,300,700,0,255);
  B = 25;
lever.shapeColor = rgb(R + 50,G + 50,B);
if(mousePressedOver(lever)){
	lever.y = mouseY;
	}
fill(255);
strokeWeight(5);
stroke(255);
line(lever.x,0,lever.x,700);	
  drawSprites();
 ball.display();
}



