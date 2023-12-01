class Ball{
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} radius 
     */

    constructor(x,y,radius){
        this.x= x;
        this.y=y;
        this.radius=radius;
        this.element = document.createElement("div");
        this.element.className="ball";
        this.moveX=getRandomNumber(1,-1);
        this.moveY=getRandomNumber(1,-1)
    }

    getElement = () => {return this.element};
    
    draw() {
        this.element.style.width = `${this.radius * 2}px`;
        this.element.style.height = `${this.radius * 2}px`;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }

    move() {
        this.x += this.moveX * SPEED;
        this.y += this.moveY * SPEED;
    }
    checkWallCollision(){
        if (this.x + this.radius * 2 > VIEW_PORT_WIDTH || this.x < 0) {
            this.moveX = -this.moveX;
        }
        if (this.y  + this.radius * 2 > VIEW_PORT_HEIGHT || this.y < 0) {
            this.moveY = -this.moveY;
        }
    }
    checkBallCollision()
    {
        this.moveY = -this.moveY
        this.moveX = -this.moveX

    }

}