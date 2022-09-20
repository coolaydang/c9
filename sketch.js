var epikSprite
var unepikSprite

function setup() {
  createCanvas(400,400);
  epikSprite = createSprite(200,200,10,10);

  unepikSprite = createSprite(100,100,10,10);
  unepikSprite.shapeColor = 'green';
}

function draw() 
{
  background(30);

  if(keyIsDown(LEFT_ARROW)){
    epikSprite.position.x -= 10;
  }

  if(keyIsDown(RIGHT_ARROW)){
    epikSprite.position.x += 10;
  }

  if(keyIsDown(DOWN_ARROW)){
    epikSprite.position.y += 10;
  }

  if(keyIsDown(UP_ARROW)){
    epikSprite.position.y -= 10;
  }

  drawSprites();
}




