//var = variable
var car, wall;
var speed, weight;

function setup() {
//canvas
  createCanvas(1600,400);
  
//set random values for speed and weight  
  speed= random(55,90);
  weight= random(400,1500);

//create car and wall sprites  
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);


//assign velocity for car
  car.velocityX=speed; 
  
//debug collision
  car.debug= true;
  wall.debug= true;  
}

function draw() {
background(255,255,255);

//assign a color to the car when it collides
  if (wall.x-car.x<car.width/2+wall.width/2) {
    
    car.velocityX= 0;
    var deformation= 0.5*weight*speed*speed/22500;
    
    if (deformation<100) {
      car.shapeColor= color(0,255,0);
    }

    if (deformation<180 && deformation>100) {
      car.shapeColor= color(230,230,0);
    }

    if (deformation>180) {
      car.shapeColor= color(255,0,0);
    }
  }

//draw spprites
drawSprites();

}