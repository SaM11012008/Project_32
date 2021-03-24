const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;

function preload() {

    }

function setup() {
  createCanvas(1300,800);

  engine = Engine.create();
  world = engine.world;
  
  obstacle1 = new Obstacle(150,100,20,500);
  obstacle2 = new Obstacle(150,700,20,550);
  obstacle3 = new Obstacle(250,50,20,100);
  obstacle4 = new Obstacle(250,500,20,680);
  obstacle5 = new Obstacle(350,200,20,500);
  obstacle6 = new Obstacle(350,800,20,600);
  obstacle7 = new Obstacle(450,100,20,1100);
  obstacle8 = new Obstacle(450,1100,20,800);
  obstacle9 = new Obstacle(550,100,20,250);
  obstacle10 = new Obstacle(550,550,20,550);
  obstacle11 = new Obstacle(650,100,20,700);
  obstacle12 = new Obstacle(650,800,20,600);
  obstacle13 = new Obstacle(750,10,20,100);
  obstacle14 = new Obstacle(750,500,20,770);
  obstacle15 = new Obstacle(850,100,20,200);
  obstacle16 = new Obstacle(850,550,20,600);
  obstacle17 = new Obstacle(950,10,20,50);
  obstacle18 = new Obstacle(950,530,20,900);
  obstacle19 = new Obstacle(1050,200,20,800);
  obstacle20 = new Obstacle(1050,800,20,300);
  obstacle21 = new Obstacle(1150,100,20,500);
  obstacle22 = new Obstacle(1150,700,20,550);

  finishpoint = new Finishline(1250,390,100,100);

  runner = new Runner(100,390);

  Engine.run(engine);


}

function draw() {
  background("black"); 
  Engine.update(engine);
  
  

obstacle1.display()
obstacle2.display()
obstacle3.display()
obstacle4.display()
obstacle5.display()
obstacle6.display()
obstacle7.display()
obstacle8.display()
obstacle9.display()
obstacle10.display()
obstacle11.display()
obstacle12.display()
obstacle13.display()
obstacle14.display()
obstacle15.display()
obstacle16.display()
obstacle17.display()
obstacle18.display()
obstacle19.display()
obstacle20.display()
obstacle21.display()
obstacle22.display()

finishpoint.display()

runner.display()

  drawSprites();
}

function keyPressed() {

  if(keyCode === UP_ARROW) {
    Matter.Body.setStatic(runner.body,false);
    //runner.velocityY = -50;
    Matter.Body.applyForce(runner.body,runner.body.position,{x:0,y:-50});
  }

 if(keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(runner.body,false);
    //runner.velocityY = 50;
    Matter.Body.applyForce(runner.body,runner.body.position,{x:0,y:50});
  }

 if(keyCode === LEFT_ARROW) {
    Matter.Body.setStatic(runner.body,false);
    //runner.velocityX = -50;
    Matter.Body.applyForce(runner.body,runner.body.position,{x:-50,y:0});
  }

  if(keyCode === RIGHT_ARROW) {
    Matter.Body.setStatic(runner.body,false);
    //runner.veloctyX = 50;
    Matter.Body.applyForce(runner.body,runner.body.position,{x:50,y:0});
  }

}