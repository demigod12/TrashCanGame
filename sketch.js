
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paperSprite; 
var groundSprite;
var trashSprite;


function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);

	engine = Engine.create();
    world = engine.world;


  //Create the Bodies Here.
  groundSprite = new Ground(600, 600, 1600, 30);
  paperSprite = new Paper(100, 500, 40);
  trashSprite = new Trashh(1000, 575);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER); 
  background(0);
  Engine.update(engine);

  groundSprite.display();
  paperSprite.display();
  trashSprite.display();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperSprite.body,paperSprite.body.position,{x:85,y:-85});
  
  }
}


