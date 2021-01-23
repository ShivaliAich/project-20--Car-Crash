
var car,wall,speed,weight,deformation,wall1; 
function setup() {
  createCanvas(1600,400);
  speed=random(45,90);
  weight=random(400,1500);
  
  car =createSprite(50, 200, 50, 50);
  car.shapeColor="pink";
  wall =createSprite(1400,200,60,200);
  wall.shapeColor=rgb(80,80,80);
  var options = {
    
    isStatic: 1.0,
    density: 0.5,
  }
  
}

function draw() {
  background(0,0,0); 
   car.velocityX =speed;
   if(car.x-wall.x>(car.width/2 + wall.width)/2){
     car.velocityX = 0;
     deformation = 0.5*weight*speed*speed/22500;
     if(deformation<100){
       car.shapeColor = rgb(0,225,0);
      }
      if(deformation>100 && deformation<180){
        car.shapeColor = rgb(230,230,0);
      }
      if(deformation>180){
        car.shapeColor = rgb(225,0,0);
      }
      }
   
  drawSprites();
}