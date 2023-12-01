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