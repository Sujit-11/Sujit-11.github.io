/**
 * Return a random number between a range
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns number 
 */
function getRandomNumber(min=0,max=0){
    return min + Math.random()*(max-min+1);
}

/**
 * 
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 * @returns 
 */
function distanceBetweenCircles(x1,y1,x2,y2){
    const dx = x2-x1;
    const dy= y2-y1;
    return Math.sqrt(dx*dx+dy*dy);
}

/**
 * 
 * @returns Random RGB value
 */

function getRandomColor() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}
/**
 * 
 * @param {object} ball 
 * @param {object} otherBall 
 */
function checkBallCollision(ball,otherBall)
    {
        const xVelocityDiff = ball.moveX - otherBall.moveX;
        const yVelocityDiff = ball.moveY - otherBall.moveY;
      
        const xDist = otherBall.x - ball.x;
        const yDist = otherBall.y - ball.y;
      
        // Prevent accidental overlap of balls
        if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
          // Grab angle between the two colliding balls
          const angle = -Math.atan2(otherBall.y - ball.y, otherBall.x - ball.x);
      
          // Store mass in var for better readability in collision equation
          const m1 = 1; // mass of ball
          const m2 = 1; // mass of otherBall
      
          // Velocity before equation
          const u1 = rotate(ball.moveX, ball.moveY, angle);
          const u2 = rotate(otherBall.moveX, otherBall.moveY, angle);
      
          // Velocity after 1d collision equation
          const v1 = {
            x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
            y: u1.y,
          };
          const v2 = {
            x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
            y: u2.y,
          };
      
          // Final velocity after rotating axis back to original location
          const vFinal1 = rotate(v1.x, v1.y, -angle);
          const vFinal2 = rotate(v2.x, v2.y, -angle);
      
          // Swap ball velocities for realistic bounce effect
          ball.moveX = vFinal1.x;
          ball.moveY = vFinal1.y;
      
          otherBall.moveX = vFinal2.x;
          otherBall.moveY = vFinal2.y;
        }
    }

    function rotate(dx, dy, angle) {
        return {
          x: dx * Math.cos(angle) - dy * Math.sin(angle),
          y: dx * Math.sin(angle) + dy * Math.cos(angle),
        };
      }
      