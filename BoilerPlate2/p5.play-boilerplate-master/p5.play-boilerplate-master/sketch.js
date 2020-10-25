var ball1;

var ball2;

function setup() {
  createCanvas(800,400);

  ball1 = createSprite(400, 200, 10,10)
  ball1.velocityX = -4
  ball2 = createSprite(200, 200, 20, 20)
  ball2.velocityX = 4
}

function draw() {
  background(0);

  bounce(ball1, ball2)

  drawSprites();
}


function bounce(ob1, ob2){
  if (ob1.x - ob2.x <= ob2.width /2 + ob1.width /2 && ob2.x - ob1.x <= ob1.width /2 + ob2.width /2){
    ob1.velocityX = ob1.velocityX * (-1)
    ob2.velocityX = ob2.velocityX * (-1)
  }


  if (ob2.y - ob1.y <= ob2.height /2 + ob1.height /2 && ob1.y - ob2.y <= ob2.height /2 + ob1.height/2){
    ob1.velocityY = ob1.velocityY * (-1)
    ob2.velocityY = ob2.velocityY * (-1)
  }
}