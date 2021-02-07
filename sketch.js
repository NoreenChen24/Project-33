var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score = 0;
var particle;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <= width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("blue");

  textSize(35)
  fill("white")
  text("Score: "+score,650,40);

  //far right
  textSize(35)
  fill("white")
  text("100",730,550);

  textSize(35)
  fill("white")
  text("200",650,550);

  textSize(35)
  fill("white")
  text("300",570,550);

  textSize(35)
  fill("white")
  text("400",490,550);

  textSize(35)
  fill("white")
  text("500",410,550);

  textSize(35)
  fill("white")
  text("500",330,550);

  textSize(35)
  fill("white")
  text("400",250,550);

  textSize(35)
  fill("white")
  text("300",170,550);

  textSize(35)
  fill("white")
  text("200",90,550);

  //far right
  textSize(35)
  fill("white")
  text("100",10,550);

  Engine.update(engine);
  ground.display();
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }
  
   for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState!=="end"){
    particle = new Particle(mouseX, 10, 10, 10);
  }
}