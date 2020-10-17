var  bullet , wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(50,200,10,10);
  bullet.shapeColor=color(255,255,255);
  thickness=random(22,83);
  wall = createSprite(1500,200,thickness,400);
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  
  
}

function draw() {
  background("yellow"); 
  bullet.velocityX= speed;
  
  /*if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
        bullet.velocityX=0;
        var deformation=0.5*weight*speed*speed/22500;
        if (deformation>180) {
          bullet.shapeColor="red";
        }

        if (deformation<180 && deformation>100) {
          bullet.shapeColor="yellow";
        }
        if (deformation<100) {
          bullet.shapeColor="green";
        }
  } */
  
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
     var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness); 
     if(damage>10) 
     { 
       wall.shapeColor=color(255,0,0); 
     }
      if(damage<10) 
    { 
      wall.shapeColor=color(0,255,0); 
    } 
  } 
      

  drawSprites();
}

function hasCollided( bullet, wall)
 { 
  bulletRightEdge=bullet.x +bullet.width;
   wallLeftEdge=wall.x; 
   if (bulletRightEdge>=wallLeftEdge) 
  {
     return true 
  } 
     return false;
 }
