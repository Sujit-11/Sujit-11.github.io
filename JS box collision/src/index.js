const viewport = document.getElementById('viewport');

const ballArray = [];
viewport.style.height=`${VIEW_PORT_HEIGHT}px`;
viewport.style.width=`${VIEW_PORT_WIDTH}px`;

for (i=0; i < BALL_COUNT; i++){
    const radius = getRandomNumber(4,10);
    let ballWidth =radius * 2;
    const posX = getRandomNumber(0, VIEW_PORT_WIDTH - ballWidth);
    const posY = getRandomNumber(0, VIEW_PORT_HEIGHT - ballWidth);
    const randomColor = getRandomColor();
    const dx = getRandomNumber(-1,1);
    const dy = getRandomNumber(-1,1);
    // Creating new instance of Ball
    let ball = new Ball(posX,posY,radius,dx,dy,randomColor);
    
    ballArray.push(ball);
    viewport.appendChild(ball.getElement());
}

function render(){
    ballArray.forEach((ball)=>{
        ball.draw();
        ball.move();

        ballArray.forEach((otherBall) => {
            if (ball === otherBall) {
                return;
            }
            if (distanceBetweenCircles(ball.x, ball.y, otherBall.x, otherBall.y) < ball.radius + otherBall.radius) {
                checkBallCollision(ball,otherBall);
            }
        })
        ball.checkWallCollision();
    })
    requestAnimationFrame(render);
}
// requestAnimationFrame(render);

render();

