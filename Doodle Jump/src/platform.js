
let platformArray = []
let platformWidth = 80 //60
let platformHeight = 18

let score = 0;
let maxScore = 0;
let gameOver = false;

const platformImg = new Image()
platformImg.src = './platform.png'

function placePlatform(){
    let platform = {
        img: platformImg,
        x: canvas.width / 2,
        y: canvas.height - 50,
        width: platformWidth,
        height: platformHeight,
      }
      
      platformArray.push(platform)
      
      for (let i = 0; i < 6; i++) {
        let randomX = Math.floor((Math.random() * canvas.width * 3) / 4)
        let platform = {
          img: platformImg,
          x: randomX,
          y: canvas.height - 75* i - 150,
          width: platformWidth,
          height: platformHeight,
        }
      
        platformArray.push(platform)
      }
}
placePlatform()



function generateNewPlatform() {
    let platform = {
      img: platformImg,
      x: Math.floor((Math.random() * canvas.width * 3) / 4),
      y: -platformHeight,
      width: platformWidth,
      height: platformHeight,
    };
    platformArray.push(platform);
  }
  
  function collision(doodler, platform) {
      if (
      doodler.position.x < platform.x + platform.width &&
      doodler.position.x + PLAYERSIZE > platform.x &&
      doodler.position.y < platform.y + platform.height &&
      doodler.position.y + PLAYERSIZE > platform.y
      ) {
          return true;
      }else{
      return false;
    }
  }


function updateScore(player) {
    let points = Math.floor(50*Math.random()); //(0-1) *50 --> (0-50)
    if (player.velocity.y < 0) { 
        maxScore += points;
        if (score < maxScore) {
            score = maxScore;
        }
    }
    else if (player.velocity.y >= 0) {
        maxScore -= points;
    }
    if(player.position.y + PLAYERSIZE + player.velocity.y >= canvas.height){
        // player.velocity.y=0
        gameOver=true
    } 
} 

function generatePlatform(ctx, player) {
  for (let i = 0; i < platformArray.length; i++) {
    let platform = platformArray[i]

    //remove old platforms if doodler in 3/4 of canvas height
    if (player.velocity.y < 0 && player.position.y < (canvas.height * 3/4)) {
    	platform.y -= -8;
    }
    //collision detection
    if (collision(player, platform) && player.velocity.y >= 0) {
      player.velocity.y = -8
    }
    ctx.drawImage(
      platform.img,
      platform.x,
      platform.y,
      platform.width,
      platform.height
    )
  }

  //remove old platforms
  while(platformArray.length >0 && platformArray[0].y > canvas.height){
    platformArray.shift();//removes first element from array
    generateNewPlatform();
  }
  updateScore(player);
  ctx.fillStyle = "black";
  ctx.font = "18px sans-serif";
  ctx.fillText(score, 5, 20);


  if (gameOver) {
      ctx.fillText(`Score:${score}`, canvas.width/2.5, canvas.height*6.5/8);
      ctx.fillText("Game Over: Press 'SPACE' to Restart", canvas.width/10, canvas.height*7/8);

  }
}


