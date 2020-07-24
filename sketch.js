function setup() {
    createCanvas(800,400);
    
    food = createSprite(random(10, 797), random(10, 397), 20, 20);
    food.shapeColor="orange";
    snake = createSprite(200, 200, 30, 30);
    snake.shapeColor="green";
    score = 0;
    gameMode = "PLAY";
    topedge = createSprite(400, 0, 800, 20);
    bottomedge= createSprite(400, 400, 800, 20);
    leftedge= createSprite(0, 200, 20, 400);
    rightedge= createSprite(800, 200, 20, 400);
  }
  
  function draw() {
    background("teal");

    if(keyCode == 39) {
      snake.velocityX = 5;
      snake.velocityY = 0;
    }
    if(keyCode == 37) {
      snake.velocityX = -5;
      snake.velocityY = 0;
    }
    if(keyCode == 38) {
      snake.velocityY = - 5;
      snake.velocityX = 0;
    }
    if(keyCode == 40) {
      snake.velocityY = 5;
      snake.velocityX = 0;
    }
  
    
    isTouching(snake, food);
    collide(snake, topedge);
    collide(snake, bottomedge);
    collide(snake, leftedge);
    collide(snake, rightedge);
  
    if(gameMode == "PLAY") {
    text("Your Score = "+ score, 400, 100);
    }
  
    drawSprites();
  }
  
  function isTouching(obj1, obj2) {
    if (obj2.x-obj1.x < obj1.width/2 + obj2.width/2
      && obj1.x-obj2.x < obj1.width/2 + obj2.width/2 
      && obj2.y-obj1.y < obj1.height/2 + obj2.height/2 
      && obj1.y-obj2.y < obj1.height/2 + obj2.height/2 ) {
      obj2.x = random(1, 800);
      obj2.y = random(1, 400);
      score = score + 1;
      
    } 
  }
 
  function collide(obj1, obj2) {
    if (obj1.x - obj2.x < obj1.width/2 + obj2.width/2 
      && obj2.x - obj1.x < obj1.width/2 + obj2.width/2 
      && obj1.y - obj2.y < obj1.height/2 + obj2.height/2 
      && obj2.y - obj1.y < obj1.height/2 + obj2.height/2) {
      obj1.velocityX = 0;
      obj1.velocityY = 0;
      gameMode = "LOSE";
      text("YOU LOSE!!", 400, 100);
      score = 0;
    }
  }
  