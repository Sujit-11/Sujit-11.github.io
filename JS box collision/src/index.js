const viewport = document.getElementById('viewport');

const ballArray = [];
viewport.style.height=`${VIEW_PORT_HEIGHT}px`;
viewport.style.width=`${VIEW_PORT_WIDTH}px`;

for (i=0; i < BALL_COUNT; i++){
    const radius = BALL_RADIUS;
    let ballWidth =radius * 2;
    const posX = getRandomNumber(0, VIEW_PORT_WIDTH - ballWidth);
    const posY = getRandomNumber(0, VIEW_PORT_HEIGHT - ballWidth);

    // Creating new instance of Ball
 
    let ball = new Ball(posX,posY,radius);
    
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
                ball.checkBallCollision();
                otherBall.checkBallCollision();
            }
        })
        ball.checkWallCollision();
    })
    requestAnimationFrame(render);
}
// requestAnimationFrame(render);

render();

