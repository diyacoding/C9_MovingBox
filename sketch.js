var box;
function setup() {
  createCanvas(400,400);
box = createSprite(200, 200, 10, 10)
  box.shapeColor = "white"
}

function draw() 
{
  background(30);
  text("Use arrow keys to move the box.", 50, 50)
if (keyIsDown(RIGHT_ARROW)){
  box.x += 5;
}
if (keyIsDown(LEFT_ARROW)){
  box.x += -5;
}
if (keyIsDown(DOWN_ARROW)){
  box.y += 5;
}
if (keyIsDown(UP_ARROW)){
  box.y += -5;
}
drawSprites(); 
}




